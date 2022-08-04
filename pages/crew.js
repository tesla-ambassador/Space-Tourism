import React, {useState, useContext, useEffect} from 'react'
import PageTitle from '../components/PageTitle'
import { GlobalContext } from '../context/GlobalState'
import Dots from '../components/Crew/Dots';
import Image from 'next/image';
import Text from '../components/Text';
import { motion } from 'framer-motion';

export default function Crew() {
    const {crewData} = useContext(GlobalContext);
    const [data, setNewData] = useState(0)

    function updateDisplay(id) {
        setNewData(id)
    }

    useEffect(() => {
        const sleep = (time) => {
            return new Promise((resolve) => setTimeout(resolve, time))
        }
        
        const moveToNext = async () => {
            for (let i = 0; i < 4; i++) {
                await sleep(2000)
                setNewData(i)
            }
            moveToNext();
        }
        moveToNext();
    }, [])

  return (
    <div className='h-fit crewBg dsk:h-screen flex items-center justify-center xdsk:px-24 dsk:items-end'>
        <div className=' mt-24 py-12 dsk:py-4 flex flex-col items-center w-full gap-5 tab:px-10 dsk:px-20 xdsk:px-0'>
            <div className='tab:self-start'>
                <PageTitle 
                    number='02'
                    aboutPage='MEET YOUR CREW'
                />
            </div>
            <div className='flex flex-col tab:flex-col-reverse dsk:flex-row-reverse dsk:w-full dsk:justify-between items-center gap-3'>
                <div className='w-72 tab:w-80 border-b-navDark border-b-2 tab:border-none dsk:w-sem xdsk:w-lag'>
                    <motion.div
                    initial={{opacity: 0}}
                    animate={{opacity: 1}}
                    transition={{
                        delay: 1,
                        duration: 1
                    }}
                    >
                        <Image 
                            src={crewData[data].images.png}
                            alt='crew member'
                            height={550}
                            width={500}
                        />
                    </motion.div>
                </div>
                <div className='flex flex-col tab:flex-col-reverse items-center gap-3 dsk:items-start dsk:gap-10 dsk:self-center'>
                    <div className='flex gap-4'>
                        {crewData.map((element, index) => {
                            return <Dots 
                                key={index}
                                onClick={updateDisplay}
                                id={index}
                                className={index === data ? 'bg-light w-3 h-3 rounded-full cursor-pointer' : 'bg-navDark w-3 h-3 rounded-full cursor-pointer hover:bg-midDark'}
                            />
                        })}
                    </div>
                    <div className='py-4 px-4 tab:px-0 w-full dsk:w-sem dsk:text-justify text-center xdsk:w-lag'>
                        <Text 
                            span={crewData[data].role}
                            title={crewData[data].name}
                            content={crewData[data].bio}
                        />
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
