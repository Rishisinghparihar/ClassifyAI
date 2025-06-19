"use client";
import { NumberCardsProps } from '@/lib/types';
import React from 'react'

const NumberCard:React.FC<NumberCardsProps> = (props) => {
  return (
    <div className='flex mt-6 flex-col items-center justify-center bg-gradient-to-tl from-white/20 to-black/20 border border-cyan-300 mb-5 p-8 w-[14rem] rounded-4xl'  >
         <h1 className='text-6xl w-44 text-center text-cyan-300'>{props.value}</h1>
         <p className='text-lg text-cyan-100 w-[10rem]'>{props.title}</p>
      </div>
  )
}

export default NumberCard