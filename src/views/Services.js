import React from 'react'
import { HideScroll } from 'react-hide-on-scroll'
import { NavLink } from 'react-router-dom'
import { Section, useScrollSection } from 'react-scroll-section'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import { ReactComponent as IconSlashDivider } from '../assets/svg/slash_divider.svg'
import MovingText from 'react-moving-text'

export const Services = () => {
  const services = useScrollSection('services')

  const handleChangeSection = () => {
    services.onClick()
  }

  const moveOnGrayImage = (e) => {
    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      const rect = e.currentTarget.getBoundingClientRect()
      const { clientX } = e
      const { clientY } = e
      section.style.backgroundPosition = `${-clientX + rect.left + 210}px ${
        -clientY + rect.top - 140
      }px`
      window.gsap.to(section, {
        x: clientX - rect.left - 60,
        y: clientY - rect.top + 140,
      })
    }
  }

  const showGrayImage = (e) => {
    document.querySelector('#custom-cursor').classList.remove('border-2')
    e.currentTarget.classList.add('relative', 'z-50')
    e.currentTarget.querySelector('.grayscale').classList.remove('w-0', 'h-0')
    e.currentTarget
      .querySelector('.grayscale')
      .classList.add('w-image-service', 'h-image-service')

    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.remove('hidden')
    }
  }

  const hiddeGrayImage = (e) => {
    document.querySelector('#custom-cursor').classList.add('border-2')
    e.currentTarget.classList.remove('relative', 'z-50')
    e.currentTarget
      .querySelector('.grayscale')
      .classList.remove('w-image-service', 'h-image-service')
    e.currentTarget.querySelector('.grayscale').classList.add('w-0', 'h-0')

    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.add('hidden')
    }
  }

  return (
    <div className="w-full relative px-1">
      {/* Start banner slide */}
      <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
        <div className="text-2xl md:text-6xl md:p-8 uppercase self-center">
          <MovingText
            className="animated-text hidden"
            type="flip"
            duration="500ms"
            delay="0ms"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none">
            we solve your challenges with excelent desing and innovate technology
          </MovingText>
        </div>
      </div>
      {/* Ends banner slide */}

      {/* Start What We Do slide */}
      <Section
        id="services"
        className="justify-center md:p-20 cursor-default h-screen px-10">
        <div className="text-2xl md:text-6xl md:p-8 uppercase">
          <MovingText
            className="animated-text hidden"
            type="fadeInFromLeft"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            WHAT DO WE DO?
          </MovingText>
        </div>
        <div className="text-xl md:text-4xl md:px-20">
          <div className="grid md:flex my-5">
            <NavLink
              to="/web-3-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 "
              onMouseMove={moveOnGrayImage}
              onMouseEnter={showGrayImage}
              onMouseLeave={hiddeGrayImage}>
              <span className="relative z-30">
                <MovingText
                  className="animated-text hidden"
                  type="popIn"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  3.0 WEB DEVELOPMENT
                </MovingText>
              </span>
              <div className="absolute pointer-events-none">
                <div
                  className="
                    pointer-events-auto
                    relative left-1/2 transform -translate-y-1/2
                    bg-fixed bg-web3-service bg-no-repeat w-0 h-0
                    grayscale duration-300
                  "
                />
                <div
                  className="
                    absolute -top-1/2
                    hidden highlight-section
                    bg-web3-service bg-no-repeat
                    border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                    pointer-events-none
                  "
                />
              </div>
            </NavLink>
            <div className="mr-10 hidden md:block">
              <IconSlashDivider />
            </div>
            <NavLink
              to="/ar-vr-mr-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 "
              onMouseMove={moveOnGrayImage}
              onMouseEnter={showGrayImage}
              onMouseLeave={hiddeGrayImage}>
              <span className="relative z-30">
                <MovingText
                  className="animated-text hidden"
                  type="popIn"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  AR / VR / MR DEVELOPMENT
                </MovingText>
              </span>
              <div className="absolute pointer-events-none">
                <div
                  className="
                    pointer-events-auto
                    relative left-1/2 transform -translate-y-1/2
                    bg-fixed bg-ar-vr-mr-service bg-no-repeat w-0 h-0
                    grayscale duration-300
                  "
                />
                <div
                  className="
                    absolute -top-1/2
                    hidden highlight-section
                    bg-ar-vr-mr-service bg-no-repeat
                    border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                    pointer-events-none
                  "
                />
              </div>
            </NavLink>
          </div>

          <div className="grid md:flex my-5">
            <NavLink
              to="/inmersive-web-development"
              className="
                hover:text-base-yellow cursor-pointer md:self-center text-left duration-300 
              "
              onMouseMove={moveOnGrayImage}
              onMouseEnter={showGrayImage}
              onMouseLeave={hiddeGrayImage}>
              <span className="relative z-30">
                <MovingText
                  className="animated-text hidden"
                  type="popIn"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  INMERSIVE WEB DEVELOPMENT
                </MovingText>
              </span>
              <div className="absolute pointer-events-none">
                <div
                  className="
                    pointer-events-auto
                    relative left-1/2 transform -translate-y-1/2
                    bg-fixed bg-inmersive-service bg-no-repeat w-0 h-0
                    grayscale duration-300
                  "
                />
                <div
                  className="
                    absolute -top-1/2
                    hidden highlight-section
                    bg-inmersive-service bg-no-repeat
                    border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                    pointer-events-none
                  "
                />
              </div>
            </NavLink>
            <div className="hidden md:block">
              <IconSlashDivider />
            </div>
          </div>

          <div className="grid md:flex my-5">
            <NavLink
              to="/web-2-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 "
              onMouseMove={moveOnGrayImage}
              onMouseEnter={showGrayImage}
              onMouseLeave={hiddeGrayImage}>
              <span className="relative z-30">
                <MovingText
                  className="animated-text hidden"
                  type="popIn"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  2.0 WEB DEVELOPMENT
                </MovingText>
              </span>
              <div className="absolute pointer-events-none">
                <div
                  className="
                    pointer-events-auto
                    relative left-1/2 transform -translate-y-1/2
                    bg-fixed bg-web2-service bg-no-repeat w-0 h-0
                    grayscale duration-300
                  "
                />
                <div
                  className="
                    absolute -top-1/2
                    hidden highlight-section
                    bg-web2-service bg-no-repeat
                    border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                    pointer-events-none
                  "
                />
              </div>
            </NavLink>
            <div className="hidden md:block">
              <IconSlashDivider className="mr-10" />
            </div>
            <NavLink
              to="/app-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 "
              onMouseMove={moveOnGrayImage}
              onMouseEnter={showGrayImage}
              onMouseLeave={hiddeGrayImage}>
              <span className="relative z-30">
                <MovingText
                  className="animated-text hidden"
                  type="popIn"
                  duration="2000ms"
                  delay="0s"
                  direction="normal"
                  timing="ease"
                  iteration="1"
                  fillMode="none">
                  CROSS-PLATFORM MOBILE DEVELOPMENTS
                </MovingText>
              </span>
              <div className="absolute pointer-events-none">
                <div
                  className="
                    pointer-events-auto
                    relative left-1/2 transform -translate-y-1/2
                    bg-fixed bg-app-service bg-no-repeat w-0 h-0
                    grayscale duration-300
                  "
                />
                <div
                  className="
                    absolute -top-1/2
                    hidden highlight-section
                    bg-app-service bg-no-repeat
                    border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                    pointer-events-none
                  "
                />
              </div>
            </NavLink>
          </div>
        </div>
        <div className="text-lg md:p-8 uppercase text-right my-5">
          <button
            type="button"
            className="hover:text-base-yellow duration-300 ">
              <MovingText
                className="animated-text hidden"
                type="rotateCW"
                duration="1000ms"
                delay="2s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                EXPLORE ALL EXPERTISE
              </MovingText>
          </button>
        </div>
      </Section>
      {/* Ends What We Do slide */}

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
