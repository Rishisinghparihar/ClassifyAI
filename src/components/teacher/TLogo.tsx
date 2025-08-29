"use client"
import Image from 'next/image'
import React from 'react'

const TLogo = () => {
  return (
    <div>
        <Image src="/logo-nobg.png" alt="Logo" width={250} height={250} className='mt-7 ml-5' />
    </div>
  )
}

export default TLogo