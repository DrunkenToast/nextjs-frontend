import type { NextPage } from 'next'
import Card from '../components/card'
import Head from 'next/head'
import styles from '../styles/Home.module.css'
import SendMessage from '../components/send-message'
import LedSwitch from '../components/led-switch'
import { DhtApi } from '../models/dht'

interface HomeData {
    dht: DhtApi
}

function Home({ dht }: HomeData) {
    return (
        <div className={styles.container}>
            <Head>
                <title>Unnamed project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className={styles.main}>
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
            </main>
        </div>
    )
}

export async function getStaticProps() {
//    const res = await fetch('http:/127.0.0.1:3000/dht')
    //const dht: DhtApi = await res.json();
    return {
        props: {
            dht: {
                time: "yeet",
                temperature: 27.2,
                humidity: 69,
            }
        }
    }
}


export default Home
