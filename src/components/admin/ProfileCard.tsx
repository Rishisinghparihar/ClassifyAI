import Image from 'next/image'
import React from 'react'

const ProfileCard = () => {
  return (
    <div className='border-2 rounded-full w-[12rem] px-5 py-2 items-center justify-center flex'>
      <div className="flex flex-col justify-center items-center p-4">
      <span className='font-semibold'>ClassifyAI</span>
      <span className=' ml-5 text-xs'>Admin</span>
      </div>
      <Image src="/only-logo.png" alt="App Logo" width={70} height={50} className='invert'/>
    </div>

  )
}

export default ProfileCard