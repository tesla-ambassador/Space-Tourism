import React, {useState, useContext} from 'react'
import { GlobalContext } from '../context/GlobalState'
import PageTitle from '../components/PageTitle'
import Buttons from '../components/Technology/Buttons';
import Text from '../components/Text';
import { motion } from 'framer-motion';

export default function Technology() {
    const {techData} = useContext(GlobalContext);
    const [data, setNewData] = useState(0);

    function updateDisplay(id) {
        setNewData(id)
    }
  return (
    <div className='techBg h-fit flex items-center justify-center dsk:overflow-hidden dsk:h-screen xdsk:h-fit'>
        <div className='flex flex-col items-center w-full gap-3 mt-24 tab:mt-48 xdsk:px-40 xdsk:py-20 xdsk:pr-0'>
            <motion.div 
            initial={{opacity: 0, x: '-100vw'}}
            animate={{opacity: 1, x: '0vw'}}
            transition={{
                duration: .5,
                delay: 1
            }}
            className='tab:self-start px-10'>
                <PageTitle 
                    number='03'
                    aboutPage='SPACE LAUNCH 101'
                />
            </motion.div>
            <div className='flex flex-col items-center gap-3 mt-10 dsk:flex-row-reverse dsk:justify-between'>
                <motion.div className='w-fit dsk:w-full'
                initial={{opacity: 0, x: '100vw'}}
                animate={{opacity: 1, x: '0vw'}}
                transition={{
                    duration: .5,
                    delay: 1
                }}
                >
                    <picture>
                        <source media='(min-width: 770px)' srcSet={techData[data].images.portrait} />
                        <img src={techData[data].images.portrait} alt='device'/>
                    </picture>
                </motion.div>
                <div className='flex flex-col items-center px-10 dsk:flex-row dsk:gap-10'>
                    <div className='flex gap-4 dsk:flex-col dsk:self-start mb-5 dsk:mb-0'>
                        {techData.map((element, index) => {
                            return <Buttons key={index} number={index + 1} onClick={updateDisplay} id={index} 
                            style={index === data ? {backgroundColor: 'white', color: 'black'}: {color: 'white'}}
                            />
                        })}
                    </div>
                    <div className='flex flex-col items-center'>
                        <motion.span 
                        initial={{opacity: 0, x: '100vw'}}
                        animate={{opacity: 1, x: '0vw'}}
                        transition={{
                            duration: .5,
                            delay: 1
                        }}
                        className='self-start text-midDark tracking-navspace'>THE TERMINOLOGY...
                        </motion.span>
                        <div className='text-center py-4 dsk:text-justify'>
                            <Text 
                                title={techData[data].name}
                                content={techData[data].description}
                            />
                        </div>
                    </div>
                </div>
            </div>
        </div>
    </div>
  )
}
