import React from 'react'
import { motion } from 'framer-motion'

export default function Buttons(props) {
  return (
    <motion.div
      initial={{opacity: 0, y: '100vw'}}
      animate={{opacity: 1, y: '0vw'}}
      transition={{
          delay: 1.3,
          duration: 1,
      }}
      >
      <motion.button
      whileHover={{scale: '1.1'}} 
      whileTap={{scale: '0.9'}}
      transition={{
        duration: 0.8
      }}
      className='border-navDark border-thin p-2 font-bel text-nav rounded-full text-light w-10 h-10 dsk:w-16 dsk:h-16 hover:text-dark hover:border-light dsk:text-h5tab transition-all duration-200' onClick={() => { props.onClick(props.id)} } style={props.style}>{props.number}</motion.button>
    </motion.div>
  )
}
