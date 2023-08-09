"use client"
import Image from 'next/image'
import ConnectWallet from '@components/ConnectWallet'

export default function Home() {
  return (
    <main className="main">
      <div className="wrapper">
        <Image
          src="/assets/images/next.svg"
          alt="Next.js Logo"
          width={180}
          height={37}
          priority
        />
        <ConnectWallet />
      </div>

    </main>
  )
}
