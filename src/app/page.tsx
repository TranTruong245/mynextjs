'use client'
import Image from 'next/image'
import Link from 'next/link'
import AppTable from './components/app.table'
import { useEffect } from 'react'
import { copyFileSync } from 'fs'
import { Solitreo } from 'next/font/google'
import { clearScreenDown } from 'readline'

export default function Home() {
  useEffect(() => {
    const fetchDate = async() =>{
      const res = await fetch("http://localhost:8000/blogs");
      const data = await res.json(); 
      console.log(">> Data", data);
    }
  fetchDate();
  }, [])
  return (
    <>
    <ul >
      <li style={{margin: "5px 0"}}>
        <Link href="/facebook">
          Facebook
        </Link>
      </li>
      <li>
        <Link href="/youtube">
          Youtube
        </Link>
      </li>
      <li style={{margin: "5px"}}>
        <Link href="/tiktok">
          Tiktok
        </Link>
      </li>
    </ul>
    <AppTable/>
    </>
  )
}
