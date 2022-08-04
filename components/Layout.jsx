import React, { useState } from 'react'
import Nav from './Nav/Nav'
import Menu from './Nav/Mobile Menu/Menu'
import { motion, AnimatePresence } from 'framer-motion';
import Head from 'next/head';

export default function Layout({children}) {
    const [isOpen, setIsOpen] = useState(false);
  return (
    <>
      <Head>
        <meta charSet='UTF-8' />
        <title>Space Tourism || Frontend Mentor</title>
        <link rel='icon' type='image/x-icon' href='/assets/favicon-32x32.png' />
      </Head>
      <header>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
            duration: 1,
            delay: .9
        }}
        >
          <Nav onToggle={() => {
              setIsOpen(!isOpen);
          }} />
        </motion.div>
      </header>
      <main>
        <AnimatePresence>
            {isOpen && 
              <motion.div
              initial={{x: '-100vw'}}
              animate={{x: '0vw'}}
              transition={{
                  duration: 1,
                  delay: .2
              }}
              exit={{x: '-100vw', transition:{duration: 1}}}
              className='h-screen w-3/4 absolute right-0 bg-white p-10 tab:hidden glassBg text-white flex justify-center items-center font-bar z-20' 
              >
                <Menu />
              </motion.div>
            }
          </AnimatePresence>
        {children}
      </main>
    </>
  )
}
