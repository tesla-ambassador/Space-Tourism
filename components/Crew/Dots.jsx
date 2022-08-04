import React from 'react'
import { motion } from 'framer-motion'

export default function Dots(props) {
  return (
    <motion.div 
    whileHover={{scale: '1.2'}}
    className={props.className} onClick={() => {props.onClick(props.id)}}>
    </motion.div>
  )
}
