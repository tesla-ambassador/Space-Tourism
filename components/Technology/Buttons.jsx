import React from 'react'

export default function Buttons(props) {
  return (
    <button className='border-white border-thin p-2 font-bel text-nav rounded-full text-light w-10 h-10 dsk:w-16 dsk:h-16 hover:text-dark hover:bg-light dsk:text-h5tab transition-all duration-200' onClick={() => { props.onClick(props.id)} }>{props.number}</button>
  )
}
