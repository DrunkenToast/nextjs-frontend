import '../styles/globals.css'
import type { AppProps } from 'next/app'
import { ToastProvider } from '../components/toast-providor'

function MyApp({ Component, pageProps }: AppProps) {
    return (
        <>
            <ToastProvider>
                <Component {...pageProps} />
            </ToastProvider>
        </>
    )
}

export default MyApp
