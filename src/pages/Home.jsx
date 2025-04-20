import React from 'react'
import Hero from '../components/Hero'
import About from '../components/About'
import Navbar from '../components/Navbar'
import ZigzagBackground from '../components/ZigzagBackground'
import BeerScrollImage from '../components/ZoomAnimation'
import CraftCards from '../components/Cards'

const Home = () => {
  return (
    <div className="relative">
      <ZigzagBackground />
      <Navbar />
      <Hero />
      
      {/* Ajuste para evitar que About se vea apretado */}
      <div className="px-4 sm:px-6 md:px-8 lg:px-16 py-10">
        <About />
      </div>

      <BeerScrollImage />
      <CraftCards />
    </div>
  )
}

export default Home
