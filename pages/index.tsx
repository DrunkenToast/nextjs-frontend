import type { NextPage } from 'next'
import Card from '../components/card'
import Head from 'next/head'
import SendMessage from '../components/send-message'
import LedSwitch from '../components/led-switch'
import { DhtApi } from '../models/dht'
import { Toast, ToastType } from '../models/toast'
import ToastContainer from '../components/toast-container'
import { useState } from 'react'
import { useToasts } from '../components/toast-providor'

interface HomeData {
    dht: DhtApi
}

function Home({ dht }: HomeData) {
    setInterval(() => {
        dht = getDht();
        console.log('Refreshing');
    }, 5 * 60 * 1000);

    const { addToast } = useToasts();

    return (
        <div>
            <Head>
                <title>Unnamed project</title>
                <link rel="icon" href="/favicon.ico" />
            </Head>

            <main className='min-h-screen bg-primary flex'>
                <div className='flex-grow hidden sm:block' />

                <ToastContainer /> 

                <div className='sm:w-96 w-full mt-32'>
                    <div className='flex flex-row' onClick={() => addToast("Testers!", ToastType.error)} >
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
                <div className='flex-grow hidden sm:block' />
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
