"use client";
import React from 'react'

const HorizontalBar = (props: {content:string, linkRef: string, title: string }) => {
  return (
    <div>
        <p>{props.title}</p>
        <div className='flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md'>
            <span className='text-gray-700'>{props.content}</span>
        </div>
        <a href={props.linkRef} className='text-blue-500 hover:underline mt-2 block'/>
    </div>
  )
}

export default HorizontalBar