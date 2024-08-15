import Hero from '@/components/home/hero/Hero'
import Recomendation from '@/components/home/hero/Recomendation'
import React from 'react'

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <Hero/>
        <Recomendation  />
    </section>
  )
}

export default Home