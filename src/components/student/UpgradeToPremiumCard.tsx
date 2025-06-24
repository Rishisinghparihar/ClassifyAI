"use client";
import Image from 'next/image'
import { useRouter } from 'next/navigation';
import React from 'react'

const UpgradeToPremiumCard = () => {
  const router = useRouter();
  return (
    <div className='w-[30rem] h-72 grid-cols-2 rounded-4xl to-black/20 bg-gradient-to-tl from-white/20 grid items-center justify-center border border-cyan-500' >

      <div className='text-center text-white'>
              <Image src={"/logo-nobg.png"}  alt='Logo' width={200} height={200}  />
        <h2 className='text-3xl font-bold mt-7'>Go Premium</h2>
        <p className='mt-2 text-xs'>Unlock exclusive features and perks</p>
        <button onClick={() => router.push("/dashboard/student/premium")} className='mt-4 px-6 py-2 cursor-pointer bg-cyan-700 text-white rounded-full hover:bg-cyan-600 transition duration-300'>
          Upgrade Now
        </button>
        </div>
    <Image src={"/books.png"} alt='...' width={200} height={200}/>
    </div>
  )
}

export default UpgradeToPremiumCard