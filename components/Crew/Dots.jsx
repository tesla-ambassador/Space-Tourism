import React from 'react'

export default function Dots(props) {
  return (
    <div className={props.className} onClick={() => {props.onClick(props.id)}} ></div>
  )
}
