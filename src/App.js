import React, { useEffect } from 'react'
import { gsap } from 'gsap'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { BGParticles } from './components/animations/Particles'
import { Cursor } from './components/animations/Cursor'
import { SiteRouter } from './Router'

window.gsap = gsap

const App = () => {

  useEffect(() => {
    window.gsap.registerPlugin(ScrollTrigger)

    // Text animation
    window.gsap.utils.toArray('.animated-text').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          element.classList.remove('hidden')
          element.classList.add('block')
        },
        onLeave() {
          element.classList.remove('block')
          element.classList.add('hidden')
        },
        onEnterBack() {
          element.classList.remove('hidden')
          element.classList.add('block')
        },
        onLeaveBack() {
          element.classList.remove('block')
          element.classList.add('hidden')
        },
      })
    })
  }, [])

  return (
    <>
      <Cursor />
      <BGParticles />
      <SiteRouter />
    </>
  )
}

export default App
