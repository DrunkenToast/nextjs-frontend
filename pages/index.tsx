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
          <Card data={dht.temperature + ' &deg;C'} description='Temperature' />
          <Card data='42%' description='Humidity' />
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
  const res = await fetch(process.env.NEXT_PUBLIC_API_HOST + '/dht')
  const dht: DhtApi = await res.json();
  return {
    props: {
      dht: dht
    }
  }
}


export default Home
