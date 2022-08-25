import React, { useRef, useState } from 'react'
import { Section, useScrollSection } from 'react-scroll-section'
import { NavLink } from 'react-router-dom'
import Draggable from 'react-draggable'
import MovingText from 'react-moving-text'

import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
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

export const Home = () => {
  const home = useScrollSection('home')
  const whoWeAre = useScrollSection('whoWeAre')
  const stuff = useScrollSection('stuff')
  const services = useScrollSection('services')
  const howWeDoIt = useScrollSection('howWeDoIt')
  const ourTec = useScrollSection('ourTec')
  const devAreas = useScrollSection('devAreas')
  const footer = useScrollSection('footer')

  const sections = [
    home,
    whoWeAre,
    stuff,
    services,
    howWeDoIt,
    ourTec,
    devAreas,
    footer,
  ]

  const [currentSection, setCurrentSection] = useState(0)

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

  const handleChangeSection = () => {
    if (currentSection + 1 !== sections.length) {
      const section = sections[currentSection + 1]
      section.onClick()
      setCurrentSection(currentSection + 1)
    }
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
    <div className="w-full relative">
      {/* Start home slide */}
      <Section id="home" className="-mt-32 flex justify-center h-screen px-10">
        <div className="self-center">
          <Star />
        </div>
        <div className="grid grid-cols-1 md:grid-cols-2 text-lg w-full">
          <div className="text-center self-end pb-20">
            <MovingText
              className="animated-text hidden"
              type="popIn"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              FROM IMAGINATION TO REALITY
            </MovingText>
          </div>
          <div className="grid grid-cols-1 text-center self-end pb-20">
            <div className="font-sofia text-xl">
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="200ms"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none">
                THE DEVELOPMENT YOUT SOFTWARE NEEDS
              </MovingText>
            </div>
          </div>
        </div>
      </Section>
      {/* Ends home slide */}

      {/* Start who we are slide */}
      <Section
        id="whoWeAre"
        className="grid grid-cols-1 justify-center md:p-20 h-screen px-10">
        <div className="self-center">
          <div className="text-6xl md:p-8 ">
            <MovingText
              className="animated-text hidden"
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              WHO WE ARE
            </MovingText>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 font-sofia font-light text-xl">
            <div className="pr-8">
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="0ms"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none">
                We are the company that make real the technological ventures,
                developing technological starups at early stages and generating
                MVPs.
              </MovingText>
            </div>
            <div className="pr-8">
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="0ms"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none">
                Reinvention moves the world forward. And that&apos;s what we do
                best. We help organizations reinvent themselves through digital
                and cognitive transformation.
              </MovingText>
            </div>
          </div>
        </div>
      </Section>
      {/* Ends who we are slide */}

      {/* Start stuff slide */}
      <Section
        id="stuff"
        className="grid grid-cols-1 justify-center md:p-20 h-screen px-10">
        <div className="text-2xl md:text-6xl md:p-8 uppercase self-center ">
          <MovingText
            className="animated-text hidden"
            type="flip"
            duration="500ms"
            delay="0ms"
            direction="normal"
            timing="ease-in"
            iteration="1"
            fillMode="none">
            We team up with you to develop the products that you need
          </MovingText>
        </div>
      </Section>
      {/* Ends stuff slide */}

      {/* Start services slide */}
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
      {/* Ends services slide */}

      {/* Start how we do it slide */}
      <Section
        id="howWeDoIt"
        className="justify-center md:p-20 px-10 bg-waves-how bg-no-repeat h-screen">
        <div className="grid grid-cols-1 md:grid-cols-2 content-center h-full">
          <div className="bg-fixed bg-how-section bg-no-repeat bg-contain md:mx-10" />
          <div className="md:p-8">
            <div className="uppercase text-6xl mb-12 ">
              <MovingText
                className="animated-text hidden"
                type="fadeInFromRight"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                HOW WE DO IT?
              </MovingText>
            </div>
            <MovingText
              className="animated-text hidden"
              type="popIn"
              duration="2000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              <p className="font-sofia font-light text-lg ">
                Our experience combined with a vast and diverse team of
                professionals, allows us to give you what you need, while
                building a structured growth map for the future.
              </p>
            </MovingText>
            <MovingText
              className="animated-text hidden"
              type="popIn"
              duration="2000ms"
              delay="250ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              <p className="my-8 font-sofia font-light text-lg ">
                We apply the best practices to create well-structured products,
                with a solid architecture and very intuitive for the user.
              </p>
            </MovingText>
            <MovingText
              className="animated-text hidden"
              type="popIn"
              duration="2000ms"
              delay="500ms"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              <p className="font-sofia font-light text-lg ">
                We use the most innovative technologies in all our solutions,
                from the simplest websites to the most complex native
                applications.
              </p>
            </MovingText>
          </div>
        </div>
      </Section>
      {/* Ends how we do ithow we do it slide */}

      {/* Start out technology slide */}
      <Section
        id="ourTec"
        className="justify-center my-10 md:my-auto bg-waves-technology bg-no-repeat px-10">
        <div className="self-center md:p-20">
          <div className="text-4xl md:text-6xl md:p-8 uppercase mb-12">
            <MovingText
              className="animated-text hidden"
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              OUR TECNOLOGY
            </MovingText>
          </div>
          <div className="flex flex-wrap gap-4 relative">
            <Draggable ref={pythonRef} nodeRef={pythonRef}>
              <div
                ref={pythonRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={pythonIcon} alt="python" />
              </div>
            </Draggable>
            <Draggable ref={jsRef} nodeRef={jsRef}>
              <div
                ref={jsRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={jsIcon} alt="JS" />
              </div>
            </Draggable>
            <Draggable nodeRef={jiraRef}>
              <div
                ref={jiraRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={jiraIcon} alt="Jira" />
              </div>
            </Draggable>
            <Draggable nodeRef={awsRef}>
              <div
                ref={awsRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={awsIcon} alt="AWS" />
              </div>
            </Draggable>
            <Draggable nodeRef={unityRef}>
              <div
                ref={unityRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={unityIcon} alt="Unity" />
              </div>
            </Draggable>
            <Draggable nodeRef={flutterRef}>
              <div
                ref={flutterRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={flutterIcon} alt="Flutter" />
              </div>
            </Draggable>
            <Draggable nodeRef={djangoRef}>
              <div
                ref={djangoRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={djangoIcon} alt="Django" />
              </div>
            </Draggable>
            <Draggable nodeRef={angularRef}>
              <div
                ref={angularRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={angularIcon} alt="Angular" />
              </div>
            </Draggable>
            <Draggable nodeRef={reactRef}>
              <div
                ref={reactRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={reactIcon} alt="React" />
              </div>
            </Draggable>
            <Draggable nodeRef={githubRef}>
              <div
                ref={githubRef}
                className="
                  bg-black shadow-purple w-24 md:w-52 h-24 md:h-52 cursor-grab rounded-xl
                ">
                <img src={githubIcon} alt="Github" />
              </div>
            </Draggable>
          </div>
        </div>
      </Section>
      {/* Ends out technology slide */}

      {/* Start dev areas slide */}
      <Section id="devAreas" className="justify-center md:p-20 h-full px-10">
        <div className="self-center grid grid-cols-1 md:grid-cols-3">
          <div className="text-2xl md:text-4xl md:p-8 uppercase text-left cursor-default mb-8 ">
            <MovingText
              className="animated-text hidden"
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              we invest efforts in different areas that take us to the next
              level
            </MovingText>
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <NavLink
              to="/development-areas"
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="200ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  Research and technological development
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="4000ms"
                delay="500ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  SMART WEARABLES
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="600ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  SPORTS
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="800ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  ART AND ENTRETAINMENT
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="1000ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  EDUCATION
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="1200ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  HEALTH
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
              className="mb-10 text-left"
              onMouseMove={moveRoundImage}
              onMouseEnter={showRoundImage}
              onMouseLeave={hideRoundImage}>
              <MovingText
                className="animated-text hidden"
                type="popIn"
                duration="2000ms"
                delay="1300ms"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 ">
                  FEEDING
                </p>
                <p className="font-sofia font-light text-md slide-right">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit...
                </p>
              </MovingText>
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
      </Section>
      {/* Ends dev areas slide */}

      <div className="fixed lute cursor-pointer bottom-20 right-20 hidden md:block">
        <button type="button" onClick={handleChangeSection} className="sticky">
          <IconArrowDown
            className="
                text-transparent hover:text-base-yellow hover:translate hover:scale-110 duration-300
              "
          />
        </button>
      </div>
    </div>
  )
}
