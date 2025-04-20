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
      <About />
      <BeerScrollImage />
      <CraftCards />
    </div>
  )
}

export default Home
