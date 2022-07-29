import React from 'react'

export default function Tabs(props) {
  return (
    <div className='tab:p-2 p-1'>
        <span onClick={() => {props.onClick(props.id)}} className='text-midDark font-bar tracking-navspace text-nav cursor-pointer' >{props.name}</span>
    </div>
  )
}
