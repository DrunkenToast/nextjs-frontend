import Card from '../components/card'
import Head from 'next/head'
import SendMessage from '../components/send-message'
import LedSwitch from '../components/led-switch'
import { Dht } from '../models/dht'
import { ToastType } from '../models/toast'
import ToastContainer from '../components/toast-container'
import { useEffect, useState } from 'react'
import { useToasts } from '../components/toast-providor'
import DhtHistory from '../components/dht-history'

interface HomeData {
    dht: Dht,
    dhtHistory: Dht[],
}

function Home(staticDht: HomeData) {
    const { addToast } = useToasts();
    const [dht, setDht] = useState<Dht>(staticDht.dht);

    useEffect(() => {
        const interval = setInterval(() => {
            const fetchData = async () => {
                setDht(await getDht());
            }
            fetchData();
            console.log('Refresh :)')
        }, 120 * 1000);

        return () => clearInterval(interval);
    }, []);

    return (
        <div>
            <Head>
                <title>Unnamed project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='min-h-screen bg-primary flex'>
                <ToastContainer />
                <div className='flex-grow hidden sm:block' />

                <div className='sm:w-96 w-full mt-32'>
                    <div className='flex flex-row' onClick={() => addToast("Testers!", ToastType.error)} >
                        <Card data={dht.temperature + 'ºC'} description='Temperature' />
                        <Card data={dht.humidity + '%'} description='Humidity' />
                    </div>
                    <LedSwitch />
                    <SendMessage />
                    <DhtHistory dhtHistory={staticDht.dhtHistory} />
                </div>

                <div className='flex-grow hidden sm:block' />
            </main>
        </div>
    )
}

async function getDht(): Promise<Dht> {
    const res = await fetch('http:/127.0.0.1:3000/dht')
    return await res.json();
    // return {
    //     time: "yeet",
    //     temperature: 27.2 + Math.floor(Math.random() * 10),
    //     humidity: 69,
    // }
}

async function getDhtHistory(): Promise<Dht[]> {
    console.log(process.env.NEXT_PUBLIC_API_HOST)
    const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/dht/history', {
        method: 'GET',
        mode: 'cors',
        headers: {
            'Content-Type': 'application/json'
        },
    })
    return await res.json();
}

export async function getStaticProps() {
    return {
        props: {
            dht: await getDht(),
            dhtHistory: await getDhtHistory(),
        }
    }
}


export default Home
