import React from 'react'

export default function Dots(props) {
  return (
    <div className='bg-navDark w-3 h-3 rounded-full cursor-pointer' style={props.style} onClick={() => {props.onClick(props.id)}} ></div>
  )
}
