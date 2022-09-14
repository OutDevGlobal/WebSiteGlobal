import React, { useEffect } from 'react'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, ZoomIn
} from "react-scroll-motion"

export const AppDevelopment = () => {

  useEffect( () => {
    if (location.pathname !== '/' &&  document.getElementById('canvas-bg') !== null) {
      document.getElementById('canvas-bg').remove()
    }
  }, [] )

  const moveOnGrayImage = (e) => {
    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      const rect = e.currentTarget.getBoundingClientRect()
      const { clientX } = e
      const { clientY } = e
      section.style.backgroundPosition = `${-clientX + rect.left}px ${
        -clientY + rect.top
      }px`
      window.gsap.to(section, {
        x: clientX - rect.left,
        y: clientY - rect.top,
      })
    }
  }

  const showColorCursor = (e) => {
    document.querySelector('#custom-cursor').classList.remove('border-2')
    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.remove('hidden')
    }
  }

  const hiddeColorCursor = (e) => {
    document.querySelector('#custom-cursor').classList.add('border-2')
    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.add('hidden')
    }
  }

  return (
    <div className="w-full relative px-10 bg-gradient-to-t from-black/20 via-base-blue/10 to-black/20">
      <ScrollContainer>
        <ScrollPage key="banner">
          {/* Start banner slide */}
          <div
            key="banner"
            className="grid grid-cols-1 justify-center md:p-20 h-full">
            <div className="uppercase self-center md:w-2/3 relative">
              
              <div
                onMouseMove={moveOnGrayImage}
                onMouseEnter={showColorCursor}
                onMouseLeave={hiddeColorCursor}
                className="
                  pointer-events-none w-image-service-full h-image-service-full hidden md:block
                  absolute -top-1/2 left-3/4 z-0
                "
              >
                <div className=" pointer-events-auto bg-app-service bg-no-repeat grayscale w-full h-full absolute"/>
                <div
                  className="
                    pointer-events-none
                    bg-app-service bg-no-repeat
                    h-24 w-24 duration-800 rounded-full
                    highlight-section
                    border-2 border-base-yellow 
                  "
                />
              </div>
              <div className="pointer-events-none h-full">
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                  <p className="text-2xl md:text-6xl 2xl:text-8xl">
                    We code beautiful and interactive Cross-platform mobile Apps.
                  </p>
                </Animator>
              </div>
            </div>
          </div>
          {/* Ends banner slide */}
        </ScrollPage>

        {/* Start content slide */}
        <ScrollPage key="subtitle">
          {/* Start subtitle slide */}
          <div className="py-40 pointer-events-none">
            <Animator animation={batch(Fade(), MoveIn(200, 0), Sticky())}>
              <p className="text-lg lg:text-2xl 2xl:text-3xl mt-10 md:w-full">
                Mobile apps have their roots in more traditional software development. However, 
                one critical difference is that mobile apps are often written specifically to take advantage 
                of the unique features of a particular mobile device.
              </p>
            </Animator>
          </div>
          {/* Ends subtitle slide */}
        </ScrollPage>

        <ScrollPage key="android">
          {/* Start Android */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Android</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Android is an open source operating system with the highest community and developers reach which 
                    is the highest reason for it having the increased marketing and inter-app integrations.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 z-0">
              <div
                className="
                  md:col-start-3 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                  mt-4 md:mt-0
                ">
                <div
                  className="
                    bg-left-image bg-fixed
                    bg-hybrid bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Android */}
        </ScrollPage>

        <ScrollPage key="ios">
          {/* Start IOS */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">IOS</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    IOS development is the process of creating applications for Apple’s mobile operating system—the 
                    operating system used by the iPhone and iPod Touch. In this most fundamental sense, it has a lot 
                    in common with other types of software or app development, but there are a few key differences.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 z-0">
              <div
                className="
                  md:col-start-4 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                  mt-4 md:mt-0
                ">
                <div
                  className="
                    bg-right-image bg-fixed
                    bg-ios bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends IOS */}
        </ScrollPage>

        <ScrollPage key="hybrid">
          {/* Start Hybrid */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Hybrid</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    The best way to develop all this apps is doing it just one time, using a different programming 
                    software we can write a unique code that would be use in both of the operating system.
                    In this sense, we can optimize the processes to develop the apps, ensuring that those apps 
                    would run in any device that uses any of the operating systems.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-6 z-0">
              <div
                className="
                  md:col-start-3 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                  mt-4 md:mt-0
                ">
                <div
                  className="
                    bg-left-image bg-fixed
                    bg-hybrid bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Hybrid */}
        </ScrollPage>
        {/* Ends content slide */}

      </ScrollContainer>
    </div>
  )
}
