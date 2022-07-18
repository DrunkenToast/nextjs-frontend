import type { NextPage } from 'next'
import Card from '../components/card'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SendMessage from '../components/send-message'
import LedSwitch from '../components/led-switch'
import { DhtApi } from '../models/dht'
import Toast, { ToastType } from '../components/toast'

interface HomeData {
    dht: DhtApi
}

function Home({ dht }: HomeData) {
    setInterval(() => {
        dht = getDht();
        console.log('Refreshing');
    }, 5 * 60 * 1000);

    return (
        <div>
            <Head>
                <title>Unnamed project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
                <div className={styles.filler}/>
                <div>
                    <Toast type={ToastType.success} text='Testers!' shown={true} />
                    <div className='container'>
                        <Card data={dht.temperature + 'ºC'} description='Temperature' />
                        <Card data={dht.humidity + '%'} description='Humidity' />
                    </div>
                    <div className='container'>
                        <LedSwitch />
                    </div>
                    <div className='container'>
                        <SendMessage />
                    </div>
                </div>
                <div className={styles.filler}/>
            </main>
        </div>
    )
}

function getDht(): DhtApi {
    //    const res = await fetch('http:/127.0.0.1:3000/dht')
    //const dht: DhtApi = await res.json();
    return {
        time: "yeet",
        temperature: 27.2,
        humidity: 69,
    }
}

export async function getStaticProps() {
    return {
        props: {
            dht: getDht()
        }
    }
}


export default Home
