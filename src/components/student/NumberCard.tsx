"use client";
import React from 'react'

const NumberCard = () => {
  return (
    <div className='flex flex-col items-center justify-center bg-gradient-to-tl from-white/20 to-black/20 border border-cyan-300 mb-5 p-8 w-[14rem] rounded-4xl'  >
         <h1 className='text-7xl text-cyan-300'>11</h1>
         <p className='text-lg text-cyan-100 w-[9rem]'>Bunk Remaining this week</p>
      </div>
  )
}

export default NumberCard