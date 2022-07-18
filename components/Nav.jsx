import React, {useState, useEffect} from 'react'
import Link from 'next/link'
import Image from 'next/image';
import logo from '../assets/shared/logo.svg'
import {Twirl as Hamburger} from 'hamburger-react';

export default function Nav(props) {

  return (
    <nav className='flex justify-between items-center py-5 px-3 tab:px-10 dsk:px-12 xdsk:px-20 xdsk:py-10 absolute z-10 w-full'>
        <div>
            <Image src={logo} alt='logo' />
        </div>

        <div className='hidden tab:flex dsk:hidden xdsk:hidden text-white justify-center items-center glassNav h-24 tracking-navTab'>
            <ul className='inline'>
                <li className='inline mx-5' ><Link href={'/index'}><a>Home</a></Link></li>
                <li className='inline mx-5' ><Link href={'/destination'}><a>Destination</a></Link></li>
                <li className='inline mx-5' ><Link href={'/crew'}><a>Crew</a></Link></li>
                <li className='inline mx-5' ><Link href={'/technology'}><a>Technology</a></Link></li>
            </ul> 
        </div>

        <div className='hidden dsk:flex dsk:px-8 text-white justify-center items-center line relative glassNav h-24 tracking-navTab xdsk:px-12'>
            <ul className='inline'>
                <li className='inline mx-5' ><Link href={'/index'}><a><span className='font-bold' >00</span> Home</a></Link></li>
                <li className='inline mx-5' ><Link href={'/destination'}><a><span className='font-bold' >01</span> Destination</a></Link></li>
                <li className='inline mx-5' ><Link href={'/crew'}><a><span className='font-bold' >02</span> Crew</a></Link></li>
                <li className='inline mx-5' ><Link href={'/technology'}><a><span className='font-bold' >03</span> Technology</a></Link></li>
            </ul> 
        </div>

        <div className='tab:hidden'>
            <Hamburger color='#D0D6F9' direction='left' onToggle={() => {
                props.onToggle();
            }} />
        </div>
    </nav>
  )
}