import React from 'react'
import img1 from '@/assets/image/rbanner1.png'
import img2 from '@/assets/image/rbanner2.jpg'

const RightBanner = () => {
  return (
    <div className=' hidden md:flex flex-col gap-4'>
        <div className="rounded-md overflow-hidden">
            <img src={img1} alt="" className='w-[350px] h-[194px] object-cover'/>
        </div>
        <div className="rounded-md overflow-hidden">
            <img src={img2} alt="" className='w-[350px] h-[194px] object-cover'/>
        </div>
    </div>
  )
}

export default RightBanner