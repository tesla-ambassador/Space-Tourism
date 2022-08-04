import React from 'react'
import { motion } from 'framer-motion'

export default function PageTitle(props) {
  return (
    <>
        <div className='flex gap-2 justify-center tab:self-start dsk:self-center'>
            <span className='text-navDark'>{props.number}</span> 
            <p className='text-light tracking-navSpace dsk:tracking-h5space'>{props.aboutPage}</p>
        </div>
    </>
  )
}
