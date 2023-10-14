'use client'
import Image from 'next/image'
import Link from 'next/link'
import AppTable from './components/app.table'

export default function Home() {
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
