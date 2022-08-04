import React from 'react'
import { motion } from 'framer-motion'

export default function Text(props) {
  return (
    <>
        <motion.span 
        initial={{opacity: 0, x: '-100vw'}}
        animate={{opacity: 1, x: '0vw'}}
        transition={{
            delay: .5,
            duration: 1,
        }}
        className='text-navDark font-bel text-nav uppercase tracking-navspace tab:text-h5tab'>{props.span}
        </motion.span>
        <motion.h1 
        initial={{opacity: 0, x: '-100vw'}}
        animate={{opacity: 1, x: '0vw'}}
        transition={{
            delay: .5,
            duration: 1,
        }}
        className='text-h3mob font-bel tab:text-h3tab text-light uppercase dsk:text-h3dsk xdsk:text-h3' >{props.title}</motion.h1>
          <motion.p 
          initial={{opacity: 0, x: '-100vw'}}
          animate={{opacity: 1, x: '0vw'}}
          transition={{
              delay: 1,
              duration: 1,
          }}
          className='text-midDark font-bar text-bod tab:w-mid dsk:w-3/4 dsk:text-boddsk'>{props.content}
          </motion.p>
    </>
  )
}
