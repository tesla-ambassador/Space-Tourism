import Button from '../components/Button/Button'
import MainText from '../components/MainText'
import { motion} from 'framer-motion'

export default function Home() {
  return (
    <div className='homeBg dsk:h-screen flex justify-center items-center dsk:items-end'>
      <div className='h-screen dsk:h-fit flex flex-col justify-center items-center gap-20 
      text-white mt-20 tab:justify-end tab:mt-32 tab:gap-10 tab:py-3
      dsk:flex-row dsk:w-full dsk:px-24 dsk:py-24 xdsk:px-48 dsk:justify-between'>
        <div className='w-sml text-center tab:w-mid dsk:text-justify'>
          <motion.span 
          initial={{opacity: 0, x: '-100vw'}}
          animate={{opacity: 1, x: '0vw'}}
          transition={{
              delay: 0.3,
              duration: 1,
          }}
          className='text-midDark font-bar text-bod tracking-navspace tab:h5-tab tab:tracking-h5space'
          >SO, YOU WANT TO TRAVEL TO</motion.span>
          <motion.div
          initial={{opacity: 0, x: '-100vw'}}
          animate={{opacity: 1, x: '0vw'}}
          transition={{
              delay: 0.5,
              duration: 1,
          }}
          >
            <MainText 
            title = 'SPACE'
            content = "Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!"
            />
          </motion.div>
        </div>
        <motion.div
        initial={{opacity: 0}}
        animate={{opacity: 1}}
        transition={{
            delay: 0.7,
            duration: 1,
        }}
        >
          <Button />
        </motion.div>
      </div>
    </div>
)}