import Button from '../components/Button/Button'
import MainText from '../components/MainText'
import { motion} from 'framer-motion'

export default function Home() {
  return (
    <div className='h-screen homeBg flex justify-center items-center dsk:items-end'>
      <div className=' flex flex-col justify-center items-center gap-20 
      text-white mt-20 tab:justify-end tab:mt-32 tab:gap-14
      dsk:flex-row dsk:w-full dsk:px-24 dsk:py-24 xdsk:px-48 dsk:justify-between'>
        <div className='w-sml text-center tab:w-mid dsk:text-justify'>
          <span className='text-midDark font-bar text-bod tracking-navspace tab:h5-tab tab:tracking-h5space'>SO, YOU WANT TO TRAVEL TO</span>
          <MainText 
          title = 'SPACE'
          content = "Lets face it; if you want to go to space, you might as well genuinely go to outer space and not hover kind of on the edge of it. Well sit back, and relax because we will give you a truly out of this world experience!"
          />
        </div>
        <div>
          <Button />
        </div>
      </div>
    </div>
  )
}
