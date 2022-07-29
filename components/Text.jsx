import React from 'react'

export default function Text(props) {
  return (
    <>
        <span className='text-navDark font-bel text-nav uppercase tracking-navspace tab:text-h5tab'>{props.span}</span>
        <h1 className='text-h3mob font-bel tab:text-h3tab text-light uppercase dsk:text-h3dsk xdsk:text-h3' >{props.title}</h1>
          <p className='text-midDark font-bar text-bod tab:w-mid dsk:w-3/4 dsk:text-boddsk'>{props.content}</p>
    </>
  )
}
