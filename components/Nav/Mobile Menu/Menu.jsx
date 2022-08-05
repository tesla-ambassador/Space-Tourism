import React from 'react'
import Link from 'next/link'

export default function Menu() {
  return (
    <>
        <ul className='leading-8'>
            <li className='text-nav tracking-navspace' ><Link href={'/'} as={'home'} ><a><span className='font-bold' >00</span> Home</a></Link></li>
            <li className='text-nav tracking-navspace' ><Link href={'/destination'} as={'destination'} ><a><span className='font-bold' >01</span> Destination</a></Link></li>
            <li className='text-nav tracking-navspace' ><Link href={'/crew'} as={'crew'} ><a><span className='font-bold' >02</span> Crew</a></Link></li>
            <li className='text-nav tracking-navspace' ><Link href={'/technology'} as={'technology'} ><a><span className='font-bold' >03</span> Technology</a></Link></li>
        </ul> 
    </>
  )
}
