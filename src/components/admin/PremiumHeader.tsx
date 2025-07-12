"use client";
import { Tektur } from 'next/font/google';
import React from 'react'

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PremiumHeader = ({totalPremiumUsers} : {totalPremiumUsers: number}) => {
  return (
    <header className='w-full px-6 py-4  bg-orange-50/5 rounded-2xl border border-orange-400 shadow flex flex-col gap-2 items-center'>
        <h1 className={`${tektur.className} text-4xl text-orange-200 text-center`}>
            Premium Management
        </h1>
        <p className='text-sm text-orange-100 text-center'> 
            View and manage premium subscription (Pro & Ultimate)
        </p>
        <div className="mt-2">
            <span className='inline-block bg-amber-600 text-orange-50 px-3 py-1 rounded-full text-xs shadow'>
                Total Premium Users: {totalPremiumUsers}
            </span>
        </div>
    </header>
  )
}

export default PremiumHeader