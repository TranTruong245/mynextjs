'use client'
import Image from 'next/image'
import Link from 'next/link'
import AppTable from './components/app.table'
import { useEffect } from 'react'
import { copyFileSync } from 'fs'
import { Solitreo } from 'next/font/google'
import { clearScreenDown } from 'readline'
import useSWR from 'swr'

export default function Home() {
  const fetcher = (url: string) => fetch(url).then((res) => res.json());
  const {data, error, isLoading} = useSWR("http://localhost:8000/blogs", fetcher,
  {
    revalidateIfStale: false,
    revalidateOnFocus: false,
    revalidateOnReconnect: false
  });
  //****************cách fetching bằng useEffect*********
  // useEffect(() => {
  //   const fetchDate = async() =>{
  //     const res = await fetch("http://localhost:8000/blogs");
  //     const data = await res.json(); 
  //     console.log(">> Data", data);
  //   }
  // fetchDate();
  // }, [])
  if (!data){
    return <div>Loading...</div>
  }
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
    <AppTable 
      blogs={data?.sort((a:any, b:any) => b.id - a.id)}
    />
    </>
  )
}
