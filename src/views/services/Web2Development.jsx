import React, { useEffect } from 'react'
import { HideScroll } from 'react-hide-on-scroll'
import M from 'react-moving-text'
const MovingText = M.default? M.default: M
import { Section, useScrollSection } from 'react-scroll-section'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

export const Web2Development = () => {
  const content = useScrollSection('content')

  const handleChangeSection = () => {
    content.onClick()
  }

  useEffect(() => {
    window.gsap.registerPlugin(ScrollTrigger)

    // Text animation
    window.gsap.utils.toArray('.animated-text-web2').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: false,
        onEnter() {
          element.classList.remove('hidden')
          element.classList.add('grid')
        },
        // onLeave() {
        //   element.classList.remove('grid')
        //   element.classList.add('hidden')
        // },
        // onEnterBack() {
        //   element.classList.remove('hidden')
        //   element.classList.add('grid')
        // },
        // onLeaveBack() {
        //   element.classList.remove('grid')
        //   element.classList.add('hidden')
        // },
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
          className="text-2xl md:text-6xl uppercase self-center md:w-2/3">
          <MovingText
            className="animated-text-web2 hidden"
            type="fadeInFromRight"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin relative z-30">
              / Expertise — 2.0 Web Development
            </p>
          </MovingText>
          <MovingText
            className="animated-text-web2 hidden"
            type="fadeInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            <p className="relative z-30  text-2xl md:text-6xl 2xl:text-8xl">
              We create beautiful and interactive Websites
            </p>
          </MovingText>
          <div className="pointer-events-none w-image-service-full h-image-service-full hidden md:flex">
            <MovingText
              className="animated-text-web2 hidden"
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
                  bg-web2-service bg-no-repeat w-image-service-full h-image-service-full
                  grayscale
                "
              />
            </MovingText>
            <div
              className="
                absolute top-0
                highlight-section
                bg-web2-service bg-no-repeat
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
            className="animated-text-web2 hidden"
            type="popIn"
            duration="2000ms"
            delay="0ms"
            direction="normal"
            timing="ease-out"
            iteration="1"
            fillMode="none">
            <p className="text-lg lg:text-2xl 2xl:text-3xl mt-10 md:w-2/3">
              Technology has helped build platforms that have enabled the businesses to take advantage on 
              the huge population and market that are now accessible over the internet and sell to them. 
              Millions of users access and use the internet for various purposes throughout the day. 
              They use the internet to  browse, write, communicate, listen to music, watch videos, read news, 
              trade and sell.
            </p>
          </MovingText>
        </div>
        {/* Ends subtitle slide */}

        {/* Start content slide */}
        <div>
          {/* Start e-Commerce */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 2.0 Web Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">e-Commerce</p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Ecommerce operates in different types of market segments and can be conducted over computers, 
                    tablets, smartphones, and other smart devices. Nearly every imaginable product and service is 
                    available through ecommerce transactions.
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
                    bg-e-commerce bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends e-Commerce */}

          {/* Start Landing Pages */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 2.0 Web Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Landing Pages</p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Landing pages are an essential part of the user journey and have an important role to fulfill by 
                    stimulating a predetermined conversion. With consideration and investment, they can be the 
                    powerhouses of your content strategy.
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
                    bg-landing-pages bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Landing Pages */}

          {/* Start Content Managment System */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 2.0 Web Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">
                    Content Managment System
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    CMS are software application that allows users to build and manage a website without having to
                    code it from scratch, or know how to code at all.
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
                    bg-content-managment bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Content Managment System */}

          {/* Start Custom Software Development */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromRight"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 2.0 Web Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="fadeInFromLeft"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="uppercase text-3xl xl:text-5xl mb-5">
                    Custom Software Development
                  </p>
                </MovingText>
                <MovingText
                  className="animated-text-web2 hidden"
                  type="popIn"
                  duration="1000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Every business has particular business rules and operation process, in those cases custom 
                    software development is the right way.
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
                    bg-custom-software bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Custom Software Development */}
        </div>
        {/* Ends content slide */}
      </Section>

      <HideScroll variant="down">
        <div className="fixed cursor-pointer bottom-20 right-20 hidden md:block">
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
