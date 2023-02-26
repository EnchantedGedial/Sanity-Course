import Head from 'next/head'
import Image from 'next/image'
import { Inter } from 'next/font/google'
import styles from '@/styles/Home.module.css'

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  return (
    <>
    <div className="nav bg-slate-600 text-red-600"> this is navigation menu</div>
    <div className="container">this this is my first Next.js app Which is an wonderfull  front end frame work of React.js</div>

    </>
  )
}
