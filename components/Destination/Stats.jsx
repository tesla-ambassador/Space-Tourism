import React from 'react'

export default function Stats(props) {
  return (
    <div className='flex flex-col items-center gap-6 tab:flex-row justify-center tab:pt-5 dsk:justify-between'>
        <div className='flex flex-col gap-1 items-center dsk:items-start'>
            <span className='font-bar text-sh2 tracking-sh2space text-midDark'>AVG. DISTANCE</span>
            <span className='font-bel text-sh1 text-light'>{props.distance}</span>
        </div>
        <div className='flex flex-col gap-1 items-center dsk:items-start'>
            <span className='font-bar text-sh2 tracking-sh2space text-midDark'>EST. TRAVEL TIME</span>
            <span className='font-bel text-sh1 text-light'>{props.travelTime}</span>
        </div>
    </div>
  )
}
