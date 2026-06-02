import React from 'react'
import Hero from './Hero'
import About from './About'
import Works from './Works'
import Contact from './Contact'
import Tech from './Tech'

const Home = () => {
  return (
    <div>
      <Hero/>
      <About/>
      <Works/>
      <Tech/>
      <Contact/>
    </div>
  )
}

export default Home