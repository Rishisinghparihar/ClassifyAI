"use client";
import { NumberCardsProps } from '@/lib/types';
import React from 'react'

const NumberCard:React.FC<NumberCardsProps> = (props) => {
  return (
    <div className='flex mt-4 flex-col items-center justify-center bg-gradient-to-tl from-white/20 to-black/20 border border-cyan-300 w-[12rem] rounded-4xl'  >
         <h1 className='text-2xl text-center text-cyan-300'>{props.value}</h1>
         <p className='text-base text-center text-cyan-100 '>{props.title}</p>
      </div>
  )
}

export default NumberCard