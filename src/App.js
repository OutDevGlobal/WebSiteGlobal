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

    // Reveal animation
    window.gsap.utils.toArray('.reveal-up').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          window.gsap.fromTo(
            element,
            {
              y: 100,
              autoAlpha: 0,
            },
            {
              duration: 1.25,
              y: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            },
          )
        },
      })
    })

    // Left rotation animation
    window.gsap.utils.toArray('.rotate-left').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          window.gsap.fromTo(
            element,
            {
              x: 100,
              autoAlpha: 0,
              rotate: 10,
            },
            {
              duration: 1.25,
              x: 0,
              autoAlpha: 1,
              rotate: 0,
              ease: 'back',
              overwrite: 'auto',
            },
          )
        },
      })
    })

    // Right rotation animation
    window.gsap.utils.toArray('.rotate-right').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          window.gsap.fromTo(
            element,
            {
              x: -100,
              autoAlpha: 0,
              rotate: -10,
            },
            {
              duration: 1.25,
              x: 0,
              autoAlpha: 1,
              rotate: 0,
              ease: 'back',
              overwrite: 'auto',
            },
          )
        },
      })
    })

    // Left linear animation
    window.gsap.utils.toArray('.slide-left').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          window.gsap.fromTo(
            element,
            {
              x: 100,
              autoAlpha: 0,
            },
            {
              duration: 3,
              x: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            },
          )
        },
      })
    })

    // Right linear animation
    window.gsap.utils.toArray('.slide-right').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          window.gsap.fromTo(
            element,
            {
              x: 100,
              autoAlpha: 0,
            },
            {
              duration: 3,
              x: 0,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            },
          )
        },
      })
    })

    // Cards animation from bottom
    window.gsap.utils.toArray('.cards-bottom').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          window.gsap.fromTo(
            element,
            {
              y: 0,
              x: 0,
              autoAlpha: 0,
            },
            {
              duration: 3,
              y: 200,
              x: 200,
              autoAlpha: 1,
              ease: 'back',
              overwrite: 'auto',
            },
          )
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
