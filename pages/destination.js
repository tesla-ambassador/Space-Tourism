import React, {useContext, useState} from 'react'
import { GlobalContext } from '../context/GlobalState'
import Image from 'next/image';
import MainText from '../components/MainText';
import Tabs from '../components/Destination/Tabs';
import Stats from '../components/Destination/Stats';
import PageTitle from '../components/PageTitle';
import { motion } from 'framer-motion';

const destArray = ['MOON', 'MARS', 'EUROPA', 'TITAN'];

export default function Destination() {
const {destinationData} = useContext(GlobalContext);
const [data, setNewData] = useState({
  imgUrl: destinationData[0].images.png,
  dataTitle: destinationData[0].name,
  dataContent: destinationData[0].description,
  destDistance: destinationData[0].distance,
  travelTime: destinationData[0].travel
})
const [pos, setNewPos] = useState(0)

function updateDisplay(id) {
  setNewData({
    imgUrl: destinationData[id].images.png,
    dataTitle: destinationData[id].name,
    dataContent: destinationData[id].description,
    destDistance: destinationData[id].distance,
    travelTime: destinationData[id].travel
  })
  setNewPos(id)
}

  return (
    <motion.div 
    className='destBg h-fit overflow-scroll flex items-center justify-center dsk:overflow-hidden xdsk:h-screen xdsk:overflow-hidden'
    initial={{x: '-100vw'}}
    animate={{x: '0'}}
    transition={
      {
        duration: .5
      }
    }
    exit={{x: '100vw'}}
    >
      <div className='mt-24 text-center px-5 flex flex-col items-center gap-3 py-5 tab:py-12 tab:w-full tab:px-10 dsk:flex-row dsk:items-start xdsk:mt-32'>
        <div className='flex flex-col items-center gap-5 w-full dsk:mt-5 dsk:gap-10'>
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
              src={data.imgUrl}
              alt='destination'
              height={500}
              width={500}
            />
          </motion.div>
        </div>
        <div className='flex flex-col items-center w-full xdsk:mt-10 dsk:text-justify xdsk:px-20'>
          <div className='flex gap-3 p-3 tab:mt-5 dsk:self-start dsk:px-0'>
            {destArray.map((destination, index) => {
              return (
                <Tabs 
                  key={index}
                  name={destination}
                  onClick={updateDisplay}
                  id={index}
                  style={index === pos ? {color: 'white'}: {color: '#D0D6F9'}}
                  className={index === pos ? 'active destLinks' : 'non-active destLinks'}
                />
              )
            })}
          </div>
          <motion.div 
          className='py-4 dsk:w-full border-b-navDark border-b-2'
          initial={{opacity: 0}}
          animate={{opacity: 1}}
          transition={{
            delay: .5,
            duration: .5
          }}
          >
            <MainText 
              title={data.dataTitle}
              content={data.dataContent}
            />
          </motion.div>
          <div className='p-4 w-full dsk:w-mid dsk:self-start dsk:px-0 xdsk:w-3/4'>
            <Stats 
              distance={data.destDistance}
              travelTime={data.travelTime}
            />
          </div>
        </div>
      </div>
    </motion.div>
  )
}
