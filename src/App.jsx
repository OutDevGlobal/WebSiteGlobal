import React from 'react'
import { gsap } from 'gsap'
import { BGParticles } from './components/animations/Particles'
import { Cursor } from './components/animations/Cursor'
import { SiteRouter } from './Router'


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
