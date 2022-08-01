import Card from '../components/card'
import Head from 'next/head'
import SendMessage from '../components/send-message'
import LedSwitch from '../components/led-switch'
import { Dht } from '../models/dht'
import ToastContainer from '../components/toast-container'
import { useEffect, useState } from 'react'
import DhtHistory from '../components/dht-history'

interface HomeData {
    dht: Dht,
    dhtHistory: Dht[],
}

function Home(staticDht: HomeData) {
    const [dht, setDht] = useState<Dht>(staticDht.dht);
    const [dhtHistory, setDhtHistory] = useState<Dht[]>(staticDht.dhtHistory);

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchData = async () => {
                setDht(await getDht(process.env.NEXT_PUBLIC_API_HOST!));
                setDhtHistory(await getDhtHistory(process.env.NEXT_PUBLIC_API_HOST!));
            }
            fetchData();
            console.log('Refresh refreshing DHT data')
        }, 60 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Head>
                <title>Arduino Frontend</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='min-h-screen bg-primary flex'>
                <ToastContainer />
                <div className='flex-grow hidden sm:block' />

                <div className='sm:w-96 w-full mt-32'>
                    <div className='flex flex-row'>
                        <Card data={dht.temperature + 'ºC'} description='Temperature' />
                        <Card data={dht.humidity + '%'} description='Humidity' />
                    </div>
                    <LedSwitch />
                    <SendMessage />
                    <DhtHistory dhtHistory={dhtHistory} />
                </div>

                <div className='flex-grow hidden sm:block' />
            </main>
        </div>
    )
}

// To prevent failing at build (during docker compose build) dummy data is used as
// a fallback method. TODO: I would prefer to find a better method for this.
async function getDht(host: string): Promise<Dht> {
    return fetch(host + '/dht')
        .then((res) => res.json() as Promise<Dht>)
        .catch((e) => {
            return {
                time: "Dummy data",
                temperature: 0,
                humidity: 0,
            }
        })
}

async function getDhtHistory(host: string): Promise<Dht[]> {
    return fetch(host + '/dht/history', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
        .then((res) => res.json() as Promise<Dht[]>)
        .catch((e) => {
            return [];
        })
}

export async function getStaticProps() {
    return {
        props: {
            dht: await getDht(process.env.SS_API_HOST!),
            dhtHistory: await getDhtHistory(process.env.SS_API_HOST!),
        },
        revalidate: 60 * 5
    }
}

export default Home
