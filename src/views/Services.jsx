import React, { useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import { ReactComponent as IconSlashDivider } from '../assets/svg/slash_divider.svg'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, ZoomIn
} from "react-scroll-motion"

export const Services = () => {

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
    <div className="w-full block px-1">
      <ScrollContainer>
        <ScrollPage>
          {/* Start banner slide */}
          <div className="grid grid-cols-1 justify-center px-10 md:p-20 xl:p-32 h-full content-center">
            <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
              <p className="text-4xl md:text-6xl 2xl:text-8xl md:p-8 uppercase font-montserrat font-extrabold">
                we solve your challenges with excelent desing and innovate
                technology
              </p>
            </Animator>
          </div>
          {/* Ends banner slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start services slide */}
          <div
            id="services"
            className="justify-center md:p-20 xl:p-32 cursor-default h-screen px-10">
            <div className="text-4xl md:text-6xl 2xl:text-8xl md:p-8 uppercase font-montserrat font-extrabold">
              <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                <p>
                  WHAT DO WE DO?
                </p>
              </Animator>
            </div>
            <div className="text-xl md:text-4xl md:px-20">
              <div className="grid md:flex my-1 gap-8">
                <NavLink
                  to="/web-3-development"
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">WEB 3.0</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
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
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">AR / VR / MR</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
              <div className="grid md:flex my-1 gap-8">
                <NavLink
                  to="/web-3-development"
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">BLOCKCHAIN</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
                <div className="mr-10 hidden md:block">
                  <IconSlashDivider />
                </div>
                <NavLink
                  to="/web-3-development"
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">NFTS</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
              <div className="grid md:flex my-1 gap-8">
                <NavLink
                  to="/inmersive-web-development"
                  className="
                    hover:text-base-purple cursor-pointer md:self-center text-left duration-300 
                  "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">INMERSIVE EXPERIENCE</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
                <div className="mr-10 hidden md:block">
                  <IconSlashDivider />
                </div>
                <NavLink
                  to="/web-3-development"
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">CRYPTO</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
              <div className="grid md:flex my-1 gap-8">
                <NavLink
                  to="/web-2-development"
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">WEB 2.0</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
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
                  className="hover:text-base-purple cursor-pointer text-left duration-300 my-2 lg:my-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(ZoomIn())}>
                      <p className="uppercase ">CRC MOBILE</p>
                    </Animator>
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
                        border-2 border-base-purple h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
            </div>
          </div>
          {/* Ends services slide */}
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}
