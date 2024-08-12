import React from 'react'
import Banner from './Banner'
import RightBanner from './RightBanner'

const Hero = () => {
  return (
    <div className='flex'>
        <Banner/>
        <RightBanner/>
    </div>
  )
}

export default Hero