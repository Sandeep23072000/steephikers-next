import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'
import Navbar from '../component/Navbar'
import HomePage from '@/component/HomePage'

export default function Home() {
  return (
    <>
     <Head>
        <title>Steephikers Frontend</title>
        <meta name="description" content="autoparts" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
        </Head>
      <HomePage />

    </>
  )
}
