import React, { useEffect, useRef, useState } from 'react'
import { Section } from 'react-scroll-section'
import { NavLink } from 'react-router-dom'
import Draggable from 'react-draggable'

import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import { ReactComponent as IconSlashDivider } from '../assets/svg/slash_divider.svg'
import howWeDoItImg from '../assets/img/how_we_do_it.png'
import shape1 from '../assets/img/shape_test_1.png'

export const Home = () => {
  // const home = useScrollSection('home')
  // const whoWeAre = useScrollSection('whoWeAre')
  // const stuff = useScrollSection('stuff')
  // const services = useScrollSection('services')
  // const howWeDoIt = useScrollSection('howWeDoIt')
  // const ourTec = useScrollSection('ourTec')
  // const devAreas = useScrollSection('devAreas')
  const [scrollDir, setScrollDir] = useState('scrolling down')

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
    const threshold = 0
    let lastScrollY = window.pageYOffset
    let ticking = false

    const updateScrollDir = () => {
      const scrollY = window.pageYOffset

      if (Math.abs(scrollY - lastScrollY) < threshold) {
        ticking = false
        return
      }
      setScrollDir(scrollY > lastScrollY ? 'scrolling down' : 'scrolling up')
      lastScrollY = scrollY > 0 ? scrollY : 0
      ticking = false
    }

    const onScroll = () => {
      if (!ticking) {
        window.requestAnimationFrame(updateScrollDir)
        ticking = true
      }
    }

    window.addEventListener('scroll', onScroll)
    // console.log(scrollDir)

    return () => window.removeEventListener('scroll', onScroll)
  }, [scrollDir])

  const changeSection = () => {}

  const handleOnMouseMove = (e) => {
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

  const handleOnMouseEnter = (e) => {
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

  const handleOnMouseLeave = (e) => {
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
    <div className="w-full relative">
      {/* Start home slide */}
      <Section id="home" className="-mt-32 flex justify-center h-screen px-10">
        <div className="self-center relative">
          <img src={shape1} alt="Animation" className="w-[1000px]" />
          <div className="absolute bottom-20">
            <div className="grid grid-cols-1 md:grid-cols-2 text-lg">
              <div className="text-center">FROM IMAGINATION TO REALITY</div>
              <div className="grid grid-cols-1 text-center">
                <div className="font-sofia text-xl">
                  THE DEVELOPMENT YOUT SOFTWARE NEEDS
                </div>
              </div>
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
          <div className="text-6xl md:p-8 reveal-up">WHO WE ARE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 font-sofia font-light text-xl">
            <div className="pr-8 reveal-up">
              We are the company that make real the technological ventures,
              developing technological starups at early stages and generating
              MVPs.
            </div>
            <div className="pr-8 reveal-up">
              Reinvention moves the world forward. And that&apos;s what we do
              best. We help organizations reinvent themselves through digital
              and cognitive transformation.
            </div>
          </div>
        </div>
      </Section>
      {/* Ends who we are slide */}

      {/* Start stuff slide */}
      <Section
        id="stuff"
        className="grid grid-cols-1 justify-center md:p-20 h-screen px-10">
        <div className="text-2xl md:text-6xl md:p-8 uppercase self-center reveal-up">
          We team up with you to develop the products that you need
        </div>
      </Section>
      {/* Ends stuff slide */}

      {/* Start services slide */}
      <Section
        id="services"
        className="justify-center md:p-20 cursor-default h-screen px-10">
        <div className="text-2xl md:text-6xl md:p-8 uppercase reveal-up">
          WHAT DO WE DO?
        </div>
        <div className="text-xl md:text-4xl md:px-20">
          <div className="md:flex my-3">
            <NavLink
              to="/web-3-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 rotate-left"
              onMouseMove={handleOnMouseMove}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <span className="relative z-50">3.0 WEB DEVELOPMENT</span>
              <div className="w-image-service h-image-service absolute">
                <div
                  className="
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
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 rotate-right"
              onMouseMove={handleOnMouseMove}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <span className="relative z-50">AR / VR / MR DEVELOPMENT</span>
              <div className="w-image-service h-image-service absolute">
                <div
                  className="
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

          <div className="flex my-5">
            <NavLink
              to="/inmersive-web-development"
              className="
                hover:text-base-yellow cursor-pointer md:self-center text-left duration-300 rotate-left
              "
              onMouseMove={handleOnMouseMove}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <span className="relative z-50">INMERSIVE WEB DEVELOPMENT</span>
              <div className="w-image-service h-image-service absolute">
                <div
                  className="
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

          <div className="md:flex my-5">
            <NavLink
              to="/web-2-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 rotate-right"
              onMouseMove={handleOnMouseMove}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <span className="relative z-50">2.0 WEB DEVELOPMENT</span>
              <div className="w-image-service h-image-service absolute">
                <div
                  className="
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
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5 rotate-left"
              onMouseMove={handleOnMouseMove}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}>
              <span className="relative z-50">
                CROSS-PLATFORM MOBILE DEVELOPMENTS
              </span>
              <div className="w-image-service h-image-service absolute">
                <div
                  className="
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
            className="hover:text-base-yellow duration-300 reveal-up">
            EXPLORE ALL EXPERTISE
          </button>
        </div>
      </Section>
      {/* Ends services slide */}

      {/* Start how we do it slide */}
      <Section
        id="howWeDoIt"
        className="justify-center md:p-20 px-10 bg-waves-how bg-no-repeat">
        <div className="self-center grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img src={howWeDoItImg} alt="How we do it" />
          </div>
          <div className="md:p-8">
            <p className="uppercase text-6xl mb-12 reveal-up">HOW WE DO IT?</p>
            <p className="font-sofia font-light text-lg rotate-left">
              Our experience combined with a vast and diverse team of
              professionals, allows us to give you what you need, while building
              a structured growth map for the future.
            </p>
            <p className="my-8 font-sofia font-light text-lg rotate-right">
              We apply the best practices to create well-structured products,
              with a solid architecture and very intuitive for the user.
            </p>
            <p className="font-sofia font-light text-lg rotate-left">
              We use the most innovative technologies in all our solutions, from
              the simplest websites to the most complex native applications.
            </p>
          </div>
        </div>
      </Section>
      {/* Ends how we do ithow we do it slide */}

      {/* Start out technology slide */}
      <Section
        id="ourTec"
        className="justify-center my-10 md:my-auto bg-waves-technology bg-no-repeat px-10">
        <div className="self-center md:p-20">
          <div className="text-4xl md:text-6xl md:p-8 uppercase mb-12 reveal-up">
            OUR TECNOLOGY
          </div>
          <div className="flex flex-wrap gap-8 relative">
            <Draggable nodeRef={jsRef}>
              <div
                ref={jsRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab 
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={pythonRef}>
              <div
                ref={pythonRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={jiraRef}>
              <div
                ref={jiraRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={awsRef}>
              <div
                ref={awsRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={unityRef}>
              <div
                ref={unityRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={flutterRef}>
              <div
                ref={flutterRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={djangoRef}>
              <div
                ref={djangoRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={angularRef}>
              <div
                ref={angularRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={reactRef}>
              <div
                ref={reactRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
            <Draggable nodeRef={githubRef}>
              <div
                ref={githubRef}
                className="
                  bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52 cursor-grab
                ">
                BRAND
              </div>
            </Draggable>
          </div>
        </div>
      </Section>
      {/* Ends out technology slide */}

      {/* Start dev areas slide */}
      <Section id="devAreas" className="justify-center md:p-20 h-full px-10">
        <div className="self-center grid grid-cols-1 md:grid-cols-3">
          <div className="text-2xl md:text-4xl md:p-8 uppercase text-left cursor-default mb-8 reveal-up">
            we invest efforts in different areas that take us to the next level.
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                Research and technological development
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                SMART WEARABLES
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                SPORTS
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                ART AND ENTRETAINMENT
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                EDUCATION
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                HEALTH
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4 slide-left">
                FEEDING
              </p>
              <p className="font-sofia font-light text-md slide-right">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
          </div>
        </div>
      </Section>
      {/* Ends dev areas slide */}

      <div className="fixed lute cursor-pointer bottom-20 right-20 hidden md:block">
        <button type="button" onClick={changeSection} className="sticky">
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
