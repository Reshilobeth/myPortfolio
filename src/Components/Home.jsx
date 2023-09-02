import React from 'react'
import Title from './Title'
import AboutMe from './AboutMe'
import Projects from './Projects'
import Skills from './Skills'
import Quotes from './Quotes'
import Footer from './Footer'

const Home = () => {
  return (
    <div>
        <Title />
        <AboutMe />
        <Projects />
        <Skills />
        <Quotes />
        <Footer />
    </div>
  )
}

export default Home