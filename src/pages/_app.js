import 'bootstrap/dist/css/bootstrap.min.css'
import '@/styles/globals.css'
import Navbar from '@/components/Navbar'
import Head from 'next/head'

export default function App({ Component, pageProps }) {
  return (
    <>
      <Head>
        <title>WR Service Desk</title>
        <meta name="description" content="Generated by create next app" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <Navbar />
      <div className="container">
        <Component {...pageProps} />
      </div>
    </>
  )
}