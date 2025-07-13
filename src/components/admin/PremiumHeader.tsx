"use client";
import { Tektur } from 'next/font/google';
import React from 'react'

const tektur = Tektur({
  subsets: ["latin"],
  weight: ["400", "500", "600", "700"],
});

const PremiumHeader = ({totalPremiumStudents} : {totalPremiumStudents: number}) => {
  return (
    <header className='w-full px-6 py-4 shadow flex flex-col gap-2 items-center'>
        <h1 className={`${tektur.className} text-4xl text-orange-200 text-center`}>
            Premium Management
        </h1>
        <div className="mt-2">
            <span className='absolute right-[30rem] top-9 shadow-amber-50 shadow-2xl bg-amber-600 text-orange-50 px-3 py-1 rounded-full text-xs'>
                Total Premium Students: {totalPremiumStudents}
            </span>
        </div>
    </header>
  )
}

export default PremiumHeader