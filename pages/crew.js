import React, {useState, useContext} from 'react'
import PageTitle from '../components/PageTitle'
import { GlobalContext } from '../context/GlobalState'
import Dots from '../components/Crew/Dots';
import Image from 'next/image';
import Text from '../components/Text';

export default function Crew() {
    const {crewData} = useContext(GlobalContext);
    const [data, setNewData] = useState({
        imgUrl: crewData[0].images.webp,
        name: crewData[0].name,
        role: crewData[0].role,
        bioData: crewData[0].bio
    })

    function updateDisplay(id) {
        setNewData({
            imgUrl: crewData[id].images.png,
            name: crewData[id].name,
            role: crewData[id].role,
            bioData: crewData[id].bio
        })
        console.log('I am functional')
    }

  return (
    <div className='crewBg h-fit dsk:h-screen overflow-scroll flex items-center justify-center dsk:overflow-hidden xdsk:h-screen xdsk:overflow-scroll xdsk:px-24'>
        <div className=' mt-24 py-12 flex flex-col items-center w-full gap-5 tab:px-10 dsk:tab:px-20 xdsk:px-0'>
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
                <div className='flex flex-col tab:flex-col-reverse items-center gap-3 dsk:items-start dsk:gap-20 dsk:self-end'>
                    <div className='flex gap-4'>
                        {crewData.map((data, index) => {
                            return <Dots 
                                key={index}
                                onClick={updateDisplay}
                                id={index}
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
    </div>
  )
}
