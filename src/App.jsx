import React from 'react'
import { gsap } from 'gsap'
import { BGParticles } from './components/animations/Particles'
import { Cursor } from './components/animations/Cursor'
import { SiteRouter } from './Router'
import { useEffect } from 'react'


window.gsap = gsap

const App = () => {

  return (
    <>
      <Cursor />
      <BGParticles />
      <SiteRouter />
    </>
  )
}

export default App
