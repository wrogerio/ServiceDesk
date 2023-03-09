import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Navbar from './../components/Navbar';
import { use, useEffect } from 'react';
import { useRouter } from 'next/router';
import AbertuasEncerramentos from './../components/partials/AberturasEncerramentos';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  const router = useRouter();

  // useEffect(() => {
  //   router.push('/chamados')
  // }, [])

  return (
    <>
      <AbertuasEncerramentos />
    </>
  )
}
