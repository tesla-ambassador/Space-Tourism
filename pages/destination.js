import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import MainText from '../components/MainText';
import Tabs from '../components/Destination/Tabs';
import Stats from '../components/Destination/Stats';
import PageTitle from '../components/PageTitle';
import { motion } from 'framer-motion';
import {Image, Shimmer } from 'react-shimmer';

const destArray = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

export default function Destination() {
const {destinationData} = useContext(GlobalContext);
const [data, setNewData] = useState(0)

function updateDisplay(id) {
  setNewData(id)
}

  return (
    <div className='destBg h-fit overflow-scroll flex items-center justify-center dsk:overflow-hidden xdsk:h-screen xdsk:overflow-hidden'>
      <div className='mt-24 text-center px-5 flex flex-col items-center gap-3 py-5 tab:py-12 tab:w-full tab:px-10 dsk:flex-row dsk:items-start xdsk:mt-32'>
        <motion.div 
        initial={{opacity: 0, x: '-100vw'}}
        animate={{opacity: 1, x: '0vw'}}
        transition={{
            duration: 1,
            delay: .5
        }}
        className='flex flex-col items-center gap-5 w-full dsk:mt-5 dsk:gap-10'>
          <PageTitle 
            number='01'
            aboutPage='PICK YOUR DESTINATION'
          />
          <motion.div 
          className='w-72 tab:w-80 dsk:w-96 xdsk:w-mid'
          initial={{rotate: 0}}
          animate={{rotate: '360deg'}}
          transition={{
            delay: 1,
            duration: 90,
            repeat: Infinity
          }}
          >
            <Image
              src={destinationData[data].images.png}
              fallback={<Shimmer width={500} height={500} />}
              alt='destination'
            />
          </motion.div>
        </motion.div>
        <div className='flex flex-col items-center w-full xdsk:mt-10 dsk:text-justify xdsk:px-20'>
          <motion.div 
          initial={{opacity: 0, x: '100vw'}}
          animate={{opacity: 1, x: '0vw'}}
          transition={{
              duration: 1,
              delay: 1
          }}
          className='flex gap-3 p-3 tab:mt-5 dsk:self-start dsk:px-0'>
            {destArray.map((destination, index) => {
              return (
                <Tabs 
                  key={index}
                  name={destination}
                  onClick={updateDisplay}
                  id={index}
                  style={index === data ? {color: 'white'}: {color: '#D0D6F9'}}
                  className={index === data ? 'active destLinks' : 'non-active destLinks'}
                />
              )
            })}
          </motion.div>
          <motion.div 
          className='py-4 dsk:w-full border-b-navDark border-b-2'
          initial={{opacity: 0, x: '100vw'}}
          animate={{opacity: 1, x: '0'}}
          transition={{
            delay: .5,
            duration: 1
          }}
          >
            <MainText 
              title={destinationData[data].name}
              content={destinationData[data].description}
            />
          </motion.div>
          <motion.div 
          initial={{opacity: 0, y: '100vh'}}
          animate={{opacity: 1, y: '0vh'}}
          transition={{
              duration: 1,
              delay: 1.2
          }}
          className='p-4 w-full dsk:w-mid dsk:self-start dsk:px-0 xdsk:w-3/4'>
            <Stats 
              distance={destinationData[data].distance}
              travelTime={destinationData[data].travel}
            />
          </motion.div>
        </div>
      </div>
    </div>
  )
}
