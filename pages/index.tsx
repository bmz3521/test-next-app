import Head from 'next/head'
import Image from 'next/image'
import { Inter } from '@next/font/google'
import Layout from './component/Layout'
import { redirect } from "react-router-dom";
import { useEffect } from 'react';

const inter = Inter({ subsets: ['latin'] })

export default function Home() {
  useEffect(()=>{
    redirect('/market')
  },[])
  return <Layout />
}
