import Hero from '@/components/home/hero/Hero'
import Recomendation from '@/components/home/hero/Recomendation'
import FiksiList from '@/components/home/list/FiksiList'
import InternationalList from '@/components/home/list/InternationalList'
import PopulerBookList from '@/components/home/list/PopulerBookList'
import React from 'react'

const Home = () => {
  return (
    <section className='flex flex-col items-center justify-center'>
        <Hero/>
        <Recomendation  />
        <PopulerBookList/>
        <FiksiList/>
        <InternationalList/>
    </section>
  )
}

export default Home