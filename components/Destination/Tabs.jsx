import React from 'react'
import { motion } from 'framer-motion'

export default function Tabs(props) {
  return (
    <motion.div
    whileHover={{scale: '1.1'}} 
    whileTap={{scale: '0.9'}}
    transition={{
      duration: 0.8
    }}
    className='tab:p-2 p-1'>
        <span onClick={() => {props.onClick(props.id)}} className={props.className} style={props.style} >{props.name}</span>
    </motion.div>
  )
}
