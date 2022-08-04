import React from 'react'
import { motion } from 'framer-motion'

export default function MainText(props) {
  return (
    <>
        <h1 className='text-h1mob font-bel tab:text-h1 text-light' >{props.title}</h1>
          <p className='text-midDark font-bar text-bod tab:w-mid dsk:w-full'>{props.content}</p>
    </>
  )
}