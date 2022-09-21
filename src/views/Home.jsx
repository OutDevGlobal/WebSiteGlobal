import React, { useEffect, useRef } from 'react'
import { NavLink } from 'react-router-dom'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, ZoomIn, Move
} from "react-scroll-motion"
import { ReactComponent as IconSlashDivider } from '../assets/svg/slash_divider.svg'

// Technology
import angularIcon from '../assets/svg/technology/angular.svg'
import awsIcon from '../assets/svg/technology/aws.svg'
import djangoIcon from '../assets/svg/technology/django.svg'
import flutterIcon from '../assets/svg/technology/flutter.svg'
import githubIcon from '../assets/svg/technology/github.svg'
import jiraIcon from '../assets/svg/technology/jira.svg'
import jsIcon from '../assets/svg/technology/js.svg'
import pythonIcon from '../assets/svg/technology/python.svg'
import reactIcon from '../assets/svg/technology/react.svg'
import unityIcon from '../assets/svg/technology/unity.svg'

import { Star } from '../components/animations/Star'
import { useDispatch, useSelector } from 'react-redux'
import { setSection } from '../redux/sectionSlice'
import { useScrollSection } from 'react-scroll-section'

export const Home = () => {
  const dispatch = useDispatch()
  const section = useSelector((state) => state.section.section)
  const whoWeAre = useScrollSection('whoWeAre')
  const ourTech = useScrollSection('ourTech')

  const jsRef = useRef(null)
  const pythonRef = useRef(null)
  const jiraRef = useRef(null)
  const awsRef = useRef(null)
  const unityRef = useRef(null)
  const flutterRef = useRef(null)
  const djangoRef = useRef(null)
  const angularRef = useRef(null)
  const reactRef = useRef(null)
  const githubRef = useRef(null)

  useEffect(() => {
    if (section !== ''){
      if (section === 'whoWeAre'){
        whoWeAre.onClick()
      }

      if (section === 'ourTech'){
        ourTech.onClick()
      }

      dispatch(setSection(''))
    }
  }, [section])

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

  const moveRoundImage = (e) => {
    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      const rect = e.currentTarget.getBoundingClientRect()
      const { clientX } = e
      const { clientY } = e
      window.gsap.to(section, {
        x: clientX - rect.left - 60,
        y: clientY - rect.top,
      })
    }
  }

  const showRoundImage = (e) => {
    document.querySelector('#custom-cursor').classList.remove('border-2')
    e.currentTarget.classList.add('relative', 'z-50')
    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.remove('w-0', 'h-0')
      section.classList.add('w-40', 'h-40')
    }
  }

  const hideRoundImage = (e) => {
    document.querySelector('#custom-cursor').classList.add('border-2')
    e.currentTarget.classList.remove('relative', 'z-50')

    const section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.remove('w-40', 'h-40')
      section.classList.add('w-0', 'h-0')
    }
  }

  return (
    <div className="w-full block">
      <ScrollContainer>
        <ScrollPage>
          {/* Start home slide */}
          <div id="home" className="-mt-32 flex justify-center px-10 h-screen">
            <div className="self-center">
              <Star />
            </div>
            <div className="grid grid-cols-1 md:grid-cols-2 text-2xl lg:text-4xl w-full">
              <div className="text-center self-end lg:p-20 xl:px-40">
                <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                  <p>FROM IMAGINATION TO REALITY</p>
                </Animator>
              </div>
              <div className="text-center self-end lg:p-20 xl:px-40 font-sofia">
                <Animator animation={batch(Fade(), MoveOut(200, 0))}>
                  <p>THE DEVELOPMENT YOUR SOFTWARE NEEDS</p>
                </Animator>
              </div>
            </div>
          </div>
          {/* Ends home slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start who we are slide */}
          <div
            id="whoWeAre"
            className="grid grid-cols-1 justify-center px-10 md:p-20 xl:p-32 h-screen">
            <div className="self-center">
              <div className="text-6xl 2xl:text-8xl md:p-8 ">
                <Animator animation={batch(MoveIn(-200, 0), Fade())}>
                  <p>WHO WE ARE</p>
                </Animator>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 font-sofia font-light text-xl xl:text-3xl">
                <div className="pr-8 lg:pr-32">
                  <Animator animation={batch(Move(), Fade())}>
                    <p>
                      We are the company that make real the technological ventures,
                      developing technological starups at early stages and generating
                      MVPs.
                    </p>
                  </Animator>
                </div>
                <div className="pr-8 lg:pr-32">
                  <Animator animation={batch(Move(), Fade())}>
                    <p>
                      Reinvention moves the world forward. And that&apos;s what we do
                      best. We help organizations reinvent themselves through digital
                      and cognitive transformation.
                    </p>
                  </Animator>
                </div>
              </div>
            </div>
          </div>
          {/* Ends who we are slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start stuff slide */}
          <div
            id="stuff"
            className="grid grid-cols-1 justify-center px-10 md:p-20 xl:p-32 h-screen">
            <div className="text-4xl md:text-6xl 2xl:text-8xl md:p-8 uppercase self-center ">
              <Animator animation={batch(ZoomIn())}>
                <p>
                  We team up with you to develop the products that you need
                </p>
              </Animator>
            </div>
          </div>
          {/* Ends stuff slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start services slide */}
          <div
            id="services"
            className="justify-center px-10 md:px-20 xl:px-32 cursor-default h-screen">
            <div className="text-4xl md:text-6xl 2xl:text-8xl md:px-8 pb-10 uppercase">
              <Animator animation={batch(MoveIn(-200, 0), Fade(), MoveOut(0, -200))}>
                <p>
                  WHAT DO WE DO?
                </p>
              </Animator>
            </div>
            <div className="text-xl md:text-3xl md:px-20">
              <div className="grid md:flex py-1 gap-8">
                <NavLink
                  to="/web-3-development"
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
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
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(200, 0))}>
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
                        border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
              <div className="grid md:flex py-1 gap-8">
                <NavLink
                  to="/web-3-development"
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
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
                  to="/web-3-development"
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(200, 0))}>
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
                        border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
              <div className="grid md:flex py-1 gap-8">
                <NavLink
                  to="/inmersive-web-development"
                  className="
                    hover:text-base-yellow cursor-pointer md:self-center text-left duration-300 
                  "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
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
                  to="/web-3-development"
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(200, 0))}>
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
                        border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
                        pointer-events-none
                      "
                    />
                  </div>
                </NavLink>
              </div>
              <div className="grid md:flex py-1 gap-8">
                <NavLink
                  to="/web-2-development"
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
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
                  className="hover:text-base-yellow cursor-pointer text-left duration-300 py-2 lg:py-5 "
                  onMouseMove={moveOnGrayImage}
                  onMouseEnter={showGrayImage}
                  onMouseLeave={hiddeGrayImage}>
                  <span className="relative z-30">
                    <Animator animation={batch(Fade(), MoveIn(200, 0))}>
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
                        border-2 border-base-yellow h-24 w-24 duration-800 rounded-full
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
        <ScrollPage>
          {/* Start how we do it slide */}
          <div
            id="howWeDoIt"
            className="justify-center px-10 md:px-20 xl:px-32 bg-waves-how bg-no-repeat bg-bottom h-screen">
            <div className="grid grid-cols-1 md:grid-cols-2 content-center">
              <div className="bg-fixed bg-how-section bg-no-repeat bg-contain md:mx-10" />
              <div className="md:px-8">
                <div className="uppercase text-4xl 2xl:text-8xl mb-8">
                  <Animator animation={batch(MoveIn(-200, 0))}>
                    <p>
                      HOW WE DO IT?
                    </p>
                  </Animator>
                </div>
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="font-sofia font-light text-lg xl:text-2xl">
                    Our experience combined with a vast and diverse team of
                    professionals, allows us to give you what you need, while
                    building a structured growth map for the future.
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="my-8 font-sofia font-light text-lg xl:text-2xl">
                    We apply the best practices to create well-structured products,
                    with a solid architecture and very intuitive for the user.
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="font-sofia font-light text-lg xl:text-2xl">
                    We use the most innovative technologies in all our solutions,
                    from the simplest websites to the most complex native
                    applications.
                  </p>
                </Animator>
              </div>
            </div>
          </div>
          {/* Ends how we do ithow we do it slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start out technology slide */}
          <div
            id="ourTech"
            className="justify-center bg-waves-technology bg-no-repeat bg-cover h-screen">
            <div className="self-center md:px-20 2xl:px-32">
              <div className="text-4xl md:text-6xl 2xl:text-8xl md:p-8 uppercase">
                <Animator animation={batch(MoveIn(-200, 0))}>
                  <p className="font-sofia font-light text-2xl xl:text-6xl">
                    OUR TECHNOLOGY
                  </p>
                </Animator>
              </div>
              <div className="flex flex-wrap gap-4 relative justify-center">
                <div ref={jsRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={pythonIcon} alt="python" />
                </div>
                <div ref={jsRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={jsIcon} alt="JS" />
                </div>
                <div ref={jiraRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={jiraIcon} alt="Jira" />
                </div>
                <div ref={awsRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={awsIcon} alt="AWS" />
                </div>
                <div ref={unityRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={unityIcon} alt="Unity" />
                </div>
                <div ref={flutterRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={flutterIcon} alt="Flutter" />
                </div>
                <div ref={djangoRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={djangoIcon} alt="Django" />
                </div>
                <div ref={angularRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={angularIcon} alt="Angular" />
                </div>
                <div ref={reactRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={reactIcon} alt="React" />
                </div>
                <div ref={githubRef} className="bg-black shadow-purple w-20 md:w-52 h-20 md:h-52 rounded-xl">
                  <img src={githubIcon} alt="Github" />
                </div>
              </div>
            </div>
          </div>
          {/* Ends out technology slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start dev areas slide */}
          <div id="devAreas" className="justify-center px-10 md:px-24 xl:px-32 h-screen">
            <div className="self-center grid grid-cols-1 md:grid-cols-3 xl:gap-4">
              <div className="text-2xl md:text-4xl 2xl:text-6xl md:px-8 uppercase text-left cursor-default self-start">
                <Animator animation={batch(Fade(), MoveIn(0, 1000))}>
                  <p className="font-sofia font-light text-2xl py-5 pt-20">
                    we invest efforts in different areas that take us to the next
                    level
                  </p>
                </Animator>
              </div>
              <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 lg:gap-3">
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade(), MoveIn(800, 800))}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4">
                      Research and technological development
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      The future is now and there are infinite opportunities...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-technological-dev bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade(), MoveIn(0, 800))}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4">
                      SMART WEARABLES
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      Devices accesories and clothing...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-smart-wearables bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade(), MoveIn(-800, 800))}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                      SPORTS
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      Computer vision reference Wearables body check...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-sports bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade(), MoveIn(800, 0))}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                      ART AND ENTRETAINMENT
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      New experiences are comming from real world to virtual world...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-art-and-entretainment bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade())}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                      EDUCATION
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      Learning is getting into an evolution, where virtual and mixed reality makes possible new 
                      learning ways...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-education bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade(), MoveIn(-800, 0))}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                      HEALTH
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      Know how things work and reduce the risk in real life...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-health bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="mb-3 lg:mb-10 text-left"
                  onMouseMove={moveRoundImage}
                  onMouseEnter={showRoundImage}
                  onMouseLeave={hideRoundImage}>
                  <Animator animation={batch(Fade(), MoveIn(800, -800))}>
                    <p className="text-lg 2xl:text-3xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                      FEEDING
                    </p>
                    <p className="hidden lg:block xl:text-xl font-sofia font-light text-md slide-right">
                      Food preservation, vertical planting with computer analysis and artificial intelligence...
                    </p>
                  </Animator>
                  <div
                    className="
                      absolute -top-1/2 duration-300
                      highlight-section
                      bg-feeding bg-no-repeat bg-cover
                      border-2 border-base-yellow h-0 w-0 rounded-full
                      pointer-events-none
                    "
                  />
                </NavLink>
              </div>
            </div>
          </div>
          {/* Ends dev areas slide */}
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}
