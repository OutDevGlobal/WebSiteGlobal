import React, { useEffect } from 'react'
import {
  Animator,
  ScrollContainer,
  ScrollPage,
  batch,
  Fade,
  MoveIn,
  MoveOut,
  Sticky,
  ZoomIn,
} from 'react-scroll-motion'

export const Web2Development = () => {
  useEffect(() => {
    if (
      location.pathname !== '/' &&
      document.getElementById('canvas-bg') !== null
    ) {
      document.getElementById('canvas-bg').remove()
    }
  }, [])

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
    <div className="w-full block px-10 bg-gradient-to-t from-black/20 via-base-blue/10 to-black/20">
      <ScrollContainer>
        <ScrollPage key="banner">
          {/* Start banner slide */}
          <div
            key="banner"
            className="grid grid-cols-1 justify-center md:p-20 h-full"
          >
            <div className="uppercase self-center md:w-2/3 relative">
              <div
                onMouseMove={moveOnGrayImage}
                onMouseEnter={showColorCursor}
                onMouseLeave={hiddeColorCursor}
                className="
                  pointer-events-none w-image-service-full h-image-service-full hidden md:block
                  absolute -top-72 left-3/4 z-0
                "
              >
                <div className=" pointer-events-auto bg-web2-service bg-no-repeat grayscale w-full h-full absolute" />
                <div
                  className="
                    pointer-events-none
                    bg-web2-service bg-no-repeat
                    h-24 w-24 duration-800 rounded-full
                    highlight-section
                    border-2 border-base-purple 
                  "
                />
              </div>
              <div className="pointer-events-none h-full">
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin">
                    / Expertise — 2.0 Web Development
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                  <p className="text-4xl md:text-6xl 2xl:text-8xl font-montserrat font-extrabold">
                    We create beautiful and interactive Websites.
                  </p>
                </Animator>
              </div>
            </div>
          </div>
          {/* Ends banner slide */}
        </ScrollPage>
        <ScrollPage key="subtitle">
          {/* Start subtitle slide */}
          <div className="py-40 pointer-events-none">
            <Animator animation={batch(Fade(), MoveIn(200, 0), Sticky())}>
              <p className="text-lg lg:text-2xl 2xl:text-3xl mt-10 md:w-full">
                Technology has helped build platforms that have enabled the
                businesses to take advantage on the huge population and market
                that are now accessible over the internet and sell to them.
                Millions of users access and use the internet for various
                purposes throughout the day. They use the internet to browse,
                write, communicate, listen to music, watch videos, read news,
                trade and sell.
              </p>
            </Animator>
          </div>
          {/* Ends subtitle slide */}
        </ScrollPage>
        <ScrollPage key="ecommerce">
          {/* Start e-Commerce */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-2 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — 2.0 Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      e-Commerce
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      Ecommerce operates in different types of market segments
                      and can be conducted over computers, tablets, smartphones,
                      and other smart devices. Nearly every imaginable product
                      and service is available through ecommerce transactions.
                    </p>
                  </Animator>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 z-0">
                <div
                  className="
                    md:col-start-3 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                    mt-4 md:mt-0
                  "
                >
                  <div
                    className="
                      bg-left-image bg-fixed
                      bg-e-commerce bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends e-Commerce */}
        </ScrollPage>
        <ScrollPage key="landing-pages">
          {/* Start Landing Pages */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-3 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — 2.0 Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      Landing Pages
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      Landing pages are an essential part of the user journey
                      and have an important role to fulfill by stimulating a
                      predetermined conversion. With consideration and
                      investment, they can be the powerhouses of your content
                      strategy.
                    </p>
                  </Animator>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 z-0">
                <div
                  className="
                    md:col-start-4 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                    mt-4 md:mt-0
                  "
                >
                  <div
                    className="
                      bg-right-image bg-fixed
                      bg-landing-pages bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends Landing Pages */}
        </ScrollPage>
        <ScrollPage>
          {/* Start Content Managment System */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-2 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — 2.0 Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      Content Managment System
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      CMS are software application that allows users to build
                      and manage a website without having to code it from
                      scratch, or know how to code at all.
                    </p>
                  </Animator>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 z-0">
                <div
                  className="
                    md:col-start-3 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                    mt-4 md:mt-0
                  "
                >
                  <div
                    className="
                      bg-left-image bg-fixed
                      bg-content-managment bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends Content Managment System */}
        </ScrollPage>
        <ScrollPage>
          {/* Start Custom Software Development */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-3 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — 2.0 Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      Custom Software Development
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      Every business has particular business rules and operation
                      process, in those cases custom software development is the
                      right way.
                    </p>
                  </Animator>
                </div>
              </div>
              <div className="grid grid-cols-1 md:grid-cols-6 z-0">
                <div
                  className="
                    md:col-start-4 md:col-span-2 w-full h-image-mobile md:w-image-wide md:h-image-wide relative
                    mt-4 md:mt-0
                  "
                >
                  <div
                    className="
                      bg-right-image bg-fixed
                      bg-custom-software bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends Custom Software Development */}
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}
