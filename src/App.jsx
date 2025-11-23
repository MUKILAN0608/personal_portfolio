import React, { useEffect } from 'react'
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './components/About'
import Skills from './components/Skills'
import Projects from './components/Projects'
import Contact from './components/Contact'
import { observeSections } from './utils/scrollAnimation'
import './App.css'

function App() {
  useEffect(() => {
    const cleanup = observeSections()
    return cleanup
  }, [])

  return (
    <div className="app">
      <Hero />
      <Navbar />
      <About />
      <Skills />
      <Projects />
      <Contact />
    </div>
  )
}

export default App
