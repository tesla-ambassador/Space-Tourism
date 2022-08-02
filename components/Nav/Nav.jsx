import React from 'react'
import Link from 'next/link'
import {useRouter} from 'next/router'
import Image from 'next/image';
import logo from '/public/assets/shared/logo.svg'
import {Twirl as Hamburger} from 'hamburger-react';

export default function Nav(props) {
    const router = useRouter();
    const currentRoute = router.pathname;
    
  return (
    <nav className='flex justify-between items-center py-5 px-3 tab:px-10 dsk:px-12 xdsk:px-20 xdsk:py-10 absolute z-30 w-full'>
        <div>
            <Link href={'/'}>
                <a aria-label = 'link to home page'>
                    <Image src={logo} alt='logo' />
                </a>
            </Link>
        </div>

        <div className='hidden tab:flex dsk:hidden xdsk:hidden justify-center items-center glassNav h-24 tracking-navTab'>
            <ul className='inline'>
                <li className='inline mx-5' ><Link href={'/'}><a className={currentRoute === '/' ? 'active text-white' : 'non-active text-midDark'} >Home</a></Link></li>
                <li className='inline mx-5' ><Link href={'/destination'}><a className={currentRoute === '/destination' ? 'active text-white' : 'non-active text-midDark'} >Destination</a></Link></li>
                <li className='inline mx-5' ><Link href={'/crew'}><a className={currentRoute === '/crew' ? 'active text-white' : 'non-active text-midDark'} >Crew</a></Link></li>
                <li className='inline mx-5' ><Link href={'/technology'}><a className={currentRoute === '/technology' ? 'active text-white' : 'non-active text-midDark'} >Technology</a></Link></li>
            </ul> 
        </div>

        <div className='hidden dsk:flex dsk:px-8 justify-center items-center line relative glassNav h-24 tracking-navTab xdsk:px-12'>
            <ul className='inline'>
                <li className='inline mx-5' ><Link href={'/'}><a className={currentRoute === '/' ? 'active text-white' : 'non-active text-midDark'} ><span className='font-bold' >00</span> Home</a></Link></li>
                <li className='inline mx-5' ><Link href={'/destination'}><a className={currentRoute === '/destination' ? 'active text-white' : 'non-active text-midDark'} ><span className='font-bold' >01</span> Destination</a></Link></li>
                <li className='inline mx-5' ><Link href={'/crew'}><a className={currentRoute === '/crew' ? 'active text-white' : 'non-active text-midDark'} ><span className='font-bold' >02</span> Crew</a></Link></li>
                <li className='inline mx-5' ><Link href={'/technology'}><a className={currentRoute === '/technology' ? 'active text-white' : 'non-active text-midDark'} ><span className='font-bold' >03</span> Technology</a></Link></li>
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