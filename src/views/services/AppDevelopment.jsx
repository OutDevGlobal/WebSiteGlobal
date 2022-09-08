import React, { useEffect } from 'react'
import { HideScroll } from 'react-hide-on-scroll'
import M from 'react-moving-text'
const MovingText = M.default? M.default: M
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { Section, useScrollSection } from 'react-scroll-section'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

export const AppDevelopment = () => {
  const content = useScrollSection('content')

  const handleChangeSection = () => {
    content.onClick()
  }

  useEffect(() => {
    window.gsap.registerPlugin(ScrollTrigger)

    // Text animation
    window.gsap.utils.toArray('.animated-text-app').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: false,
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

  useEffect( () => () => ScrollTrigger.getAll().forEach(st => st.kill()), [] )

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
      section.style.backgroundPosition = `${-clientX + rect.left + 300}px ${
        -clientY + rect.top - 100
      }px`
      window.gsap.to(section, {
        x: clientX - rect.left - 50,
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
      {/* Start banner slide */}
      <Section
        id="banner"
        className="grid grid-cols-1 justify-center md:p-20 h-screen">
        <div
          onMouseMove={moveOnGrayImage}
          onMouseEnter={showColorCursor}
          onMouseLeave={hiddeColorCursor}
          className=" uppercase self-center md:w-2/3">
          <MovingText
            className="animated-text-app hidden"
            type="fadeInFromRight"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin relative z-30">
              / Expertise — App Development
            </p>
          </MovingText>
          <MovingText
            className="animated-text-app hidden"
            type="fadeInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <p className="relative z-30 text-2xl md:text-6xl 2xl:text-8xl">
              Exceptional contents and world-class Visuals
            </p>
          </MovingText>
          <div className="pointer-events-none w-image-service-full h-image-service-full hidden md:flex">
            <MovingText
              className="animated-text-app hidden"
              type="fadeIn"
              duration="4000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              <div
                className="
                  pointer-events-auto
                  relative left-1/2 transform -translate-y-1/2
                  bg-app-service bg-no-repeat w-image-service-full h-image-service-full
                  grayscale
                "
              />
            </MovingText>
            <div
              className="
                absolute top-0
                highlight-section
                bg-app-service bg-no-repeat
                border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                pointer-events-none
              "
            />
          </div>
        </div>
      </Section>
      {/* Ends banner slide */}

      <Section id="content">
        {/* Start subtitle slide */}
        <div className="md:m-20 mb-40">
          <MovingText
            className="animated-text-app hidden"
            type="popIn"
            duration="2000ms"
            delay="0ms"
            direction="normal"
            timing="ease-out"
            iteration="1"
            fillMode="none">
            <p className="text-lg lg:text-2xl 2xl:text-3xl mt-10 md:w-2/3">
              Mobile apps has its roots in more traditional software development. One critical difference, however,
              is that mobile apps are often written specifically to take advantage of the unique features of a 
              particular mobile device.
            </p>
          </MovingText>
        </div>
        {/* Ends subtitle slide */}

        {/* Start content slide */}
        <div>
          {/* Start Android */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <MovingText
                  className="animated-text-app hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-app hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Android</p>
                </MovingText>
                <MovingText
                  className="animated-text-app hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Android is an open source operating system with the highest community and developers reach which 
                    is the highest reason for it having the increased marketing and inter-app integrations.
                  </p>
                </MovingText>
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
                    bg-android bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Android */}

          {/* Start IOS */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <MovingText
                  className="animated-text-app hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-app hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">IOS</p>
                </MovingText>
                <MovingText
                  className="animated-text-app hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    IOS development is the process of creating applications for Apple’s mobile operating system—the 
                    operating system used by the iPhone and iPod Touch. In this most fundamental sense, it has a lot 
                    in common with other types of software or app development, but there are a few key differences.
                  </p>
                </MovingText>
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

          {/* Start Hybrid */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <MovingText
                  className="animated-text-app hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — App Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-app hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Hybrid</p>
                </MovingText>
                {/* <MovingText
                  className="animated-text-app hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </p>
                </MovingText> */}
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
        </div>
        {/* Ends content slide */}
      </Section>

      <HideScroll variant="down">
        <div className="fixed lute cursor-pointer bottom-20 right-20 hidden md:block">
          <button
            type="button"
            onClick={handleChangeSection}
            className="sticky">
            <IconArrowDown
              className="
                text-transparent hover:text-base-yellow hover:translate hover:scale-110 duration-300
              "
            />
          </button>
        </div>
      </HideScroll>
    </div>
  )
}
