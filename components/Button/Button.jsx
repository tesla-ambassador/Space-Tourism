import React from 'react'
import { motion } from 'framer-motion'

export default function Button() {
  return (
    <motion.button
    whileTap={{scale: '0.9'}}
    transition={{
      duration: 0.8
    }}
    className='font-bel radial relative tracking-navspace bg-white text-dark w-36 h-36 tab:w-40 tab:h-40 tab:text-h5-tab dsk:w-60 dsk:h-60 dsk:text-h4 font-thin rounded-full z-0'
    >EXPLORE</motion.button>
  )
}
