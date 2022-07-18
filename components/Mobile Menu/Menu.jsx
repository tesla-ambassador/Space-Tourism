import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <div className='h-screen w-3/4 absolute right-0 bg-white p-10 tab:hidden glassBg text-white flex justify-center items-center font-bar'>
        <ul className='leading-8'>
            <li className='text-nav tracking-navspace' ><Link href={'/index'}><a><span className='font-bold' >00</span> Home</a></Link></li>
            <li className='text-nav tracking-navspace' ><Link href={'/destination'}><a><span className='font-bold' >01</span> Destination</a></Link></li>
            <li className='text-nav tracking-navspace' ><Link href={'/crew'}><a><span className='font-bold' >02</span> Crew</a></Link></li>
            <li className='text-nav tracking-navspace' ><Link href={'/technology'}><a><span className='font-bold' >03</span> Technology</a></Link></li>
        </ul> 
    </div>
  )
}
