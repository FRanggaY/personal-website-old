import React, {  useEffect } from 'react'
import { NavigationBar } from '../components/NavigationBar'
import '../assets/css/Custom.css'
import Intro from '../components/Intro'
import About from '../components/About'
import Skill from '../components/Skill'
import Portfolio from '../components/Portfolio'
import Footer from '../components/Footer'

function Landing() {
  useEffect(() => {
    window.history.scrollRestoration = 'manual'
  }, []);

  return (
    <div className="customBG">
        <NavigationBar />
        <Intro />
        <About />
        <Skill />
        <Portfolio />
        <Footer />
    </div>
  )
}

export default Landing