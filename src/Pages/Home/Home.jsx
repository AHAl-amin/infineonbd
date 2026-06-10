import React from 'react'


import Banner from './Banner'
import HomeSection from './HomeSection'
import Infineon from './Infineon'
import ProductService from './ProductService'
import NewsEvents from './NewsEvents'
import Contact from './Contact'
import Careers from './Careers'
import { Car } from 'lucide-react'



const Home = () => {
  return (
    <div >
      <Banner />
      <HomeSection />
      <Infineon />
      <ProductService />
      <NewsEvents />
      <Careers />
      <Contact />


    </div>
  )
}

export default Home
