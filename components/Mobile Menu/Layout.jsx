import React, { useState } from 'react'
import Nav from '../Nav'
import Menu from './Menu'

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
        <Nav onToggle={() => {
            setIsOpen(!isOpen);
            console.log(isOpen)
        }} />
        {isOpen && <Menu /> }
        <main>{children}</main>
    </>
  )
}
