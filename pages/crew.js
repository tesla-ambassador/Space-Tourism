import React, {useState, useContext} from 'react'
import PageTitle from '../components/PageTitle'
import { GlobalContext } from '../context/GlobalState'
import Dots from '../components/Crew/Dots';
import Image from 'next/image';
import Text from '../components/Text';
import { motion } from 'framer-motion';

export default function Crew() {
    const {crewData} = useContext(GlobalContext);
    const [data, setNewData] = useState({
        imgUrl: crewData[0].images.webp,
        name: crewData[0].name,
        role: crewData[0].role,
        bioData: crewData[0].bio
    })
    const [pos, setNewPos] = useState(0)

    function updateDisplay(id) {
        setNewData({
            imgUrl: crewData[id].images.png,
            name: crewData[id].name,
            role: crewData[id].role,
            bioData: crewData[id].bio
        })
        setNewPos(id)
    }

  return (
    <motion.div 
    className='h-fit crewBg dsk:h-screen flex items-center justify-center xdsk:px-24 dsk:items-end'
    initial={{x: '-100vw'}}
    animate={{x: '0'}}
    transition={
      {
        duration: .5
      }
    }
    exit={{x: '100vw'}}
    >
        <div className=' mt-24 py-12 dsk:py-4 flex flex-col items-center w-full gap-5 tab:px-10 dsk:px-20 xdsk:px-0'>
            <div className='tab:self-start'>
                <PageTitle 
                    number='02'
                    aboutPage='MEET YOUR CREW'
                />
            </div>
            <div className='flex flex-col tab:flex-col-reverse dsk:flex-row-reverse dsk:w-full dsk:justify-between items-center gap-3'>
                <div className='w-72 tab:w-80 border-b-navDark border-b-2 tab:border-none dsk:w-sem xdsk:w-lag'>
                    <Image 
                        src={data.imgUrl}
                        alt='crew member'
                        height={550}
                        width={500}
                    />
                </div>
                <div className='flex flex-col tab:flex-col-reverse items-center gap-3 dsk:items-start dsk:gap-10 dsk:self-end'>
                    <div className='flex gap-4'>
                        {crewData.map((data, index) => {
                            return <Dots 
                                key={index}
                                onClick={updateDisplay}
                                id={index}
                                className={index === pos ? 'bg-light w-3 h-3 rounded-full cursor-pointer' : 'bg-navDark w-3 h-3 rounded-full cursor-pointer hover:bg-midDark'}
                            />
                        })}
                    </div>
                    <div className='py-4 px-4 tab:px-0 w-full dsk:w-sem dsk:text-justify text-center xdsk:w-lag'>
                        <Text 
                            span={data.role}
                            title={data.name}
                            content={data.bioData}
                        />
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
