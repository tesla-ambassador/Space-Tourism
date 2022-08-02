import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import PageTitle from '../components/PageTitle'
import Buttons from '../components/Technology/Buttons';
import Text from '../components/Text';
import { motion } from 'framer-motion';

export default function Technology() {
    const {techData} = useContext(GlobalContext);
    const [data, setNewData] = useState({
        imgUrlDsk: techData[0].images.portrait,
        imgUrlMob: techData[0].images.landscape,
        name: techData[0].name,
        desc: techData[0].description
    })
    const [pos, setNewPos] = useState(0)

    function updateDisplay(id) {
        setNewData({
            imgUrlDsk: techData[id].images.portrait,
            imgUrlMob: techData[id].images.landscape,
            name: techData[id].name,
            desc: techData[id].description
        })
        setNewPos(id)

    }
  return (
    <motion.div 
    className='techBg h-screen tab:h-fit flex items-center justify-center dsk:overflow-hidden dsk:h-screen xdsk:h-fit px-10 xdsk:px-40 xdsk:py-20 xdsk:pr-0'
    initial={{x: '-100vw'}}
    animate={{x: '0'}}
    transition={
      {
        duration: .5
      }
    }
    exit={{x: '100vw'}}
    >
        <div className='flex flex-col items-center w-full gap-3 mt-24 tab:mt-48'>
            <div className='tab:self-start'>
                <PageTitle 
                    number='03'
                    aboutPage='SPACE LAUNCH 101'
                />
            </div>
            <div className='flex flex-col items-center gap-3 mt-10 dsk:flex-row-reverse dsk:justify-between'>
                <div className='w-full'>
                    <picture>
                        <source media='(min-width: 770px)' srcSet={data.imgUrlDsk} />
                        <img src={data.imgUrlMob} alt='device'/>
                    </picture>
                </div>
                <div className='flex flex-col items-center dsk:flex-row dsk:gap-10'>
                    <div className='flex gap-4 dsk:flex-col dsk:self-start'>
                        {techData.map((data, index) => {
                            return <Buttons key={index} number={index + 1} onClick={updateDisplay} id={index} 
                            style={index === pos ? {backgroundColor: 'white', color: 'black'}: {color: 'white'}}
                            />
                        })}
                    </div>
                    <div className='flex flex-col items-center'>
                        <span className='self-start text-midDark tracking-navspace'>THE TERMINOLOGY...</span>
                        <div className='text-center py-4 dsk:text-justify'>
                            <Text 
                                title={data.name}
                                content={data.desc}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </motion.div>
  )
}
