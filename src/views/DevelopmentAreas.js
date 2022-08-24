import React from 'react'
import MovingText from 'react-moving-text'
import { Section, useScrollSection } from 'react-scroll-section'
import { HideScroll } from 'react-hide-on-scroll'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'

export const DevelopmentAreas = () => {
  const content = useScrollSection('content')

  const handleChangeSection = () => {
    content.onClick()
  }

  return (
    <div className="w-full bg-gradient-to-t from-black/20 via-base-blue/10 to-black/20">
      {/* Start banner slide */}
      <div className="mx-14 md:mx-20 grid grid-cols-1 justify-center h-screen">
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
            We&apos;re an Integral services development company
          </MovingText>
        </div>
      </div>
      {/* Ends banner slide */}

      <Section id="content" className="pt-40">
        {/* Start subtitle slide */}
        <div className="mx-14 md:mx-20 mb-40">
          <div className="text-2xl md:text-6xl uppercase md:w-1/2 ">
            <MovingText
              className="animated-text hidden"
              type="fadeInFromLeft"
              duration="1000ms"
              delay="0s"
              direction="normal"
              timing="ease"
              iteration="1"
              fillMode="none">
              Research and Development
            </MovingText>
          </div>
          <p className="text-lg mt-10 md:w-2/3 ">
            <MovingText
              className="animated-text hidden"
              type="popIn"
              duration="2000ms"
              delay="0ms"
              direction="normal"
              timing="ease-out"
              iteration="1"
              fillMode="none">
              The future is now and there are infinite opportunities, that is
              why we invest part of our efforts in different areas that take us
              to the next level.
            </MovingText>
          </p>
        </div>
        {/* Ends subtitle slide */}

        {/* Start content slide */}
        <div className="mx-14 md:mx-20">
          {/* Start Technological Development */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Technological Development
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md text-justify md:text-left ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-technological-dev bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Technological Development */}

          {/* Start Art and Entretainment */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-3 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromRight"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Art and Entretainment
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-art-and-entretainment bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Art and Entretainment */}

          {/* Start Smart Wearables */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Smart Wearables
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-smart-wearables bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Technological Development */}

          {/* Start Sports */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-3 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromRight"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Sports
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-sports bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Sports */}

          {/* Start Health */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Health
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-health bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Health */}

          {/* Start Education */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-3 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromRight"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Education
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-education bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Education */}

          {/* Start Feeding */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <p className="uppercase text-2xl md:text-3xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="fadeInFromLeft"
                    duration="1000ms"
                    delay="0s"
                    direction="normal"
                    timing="ease"
                    iteration="1"
                    fillMode="none">
                    Feeding
                  </MovingText>
                </p>
                <p className="font-sofia font-thin text-2xl mb-5 ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                  </MovingText>
                </p>
                <p className="font-sofia font-light font-md ">
                  <MovingText
                    className="animated-text hidden"
                    type="popIn"
                    duration="2000ms"
                    delay="0ms"
                    direction="normal"
                    timing="ease-out"
                    iteration="1"
                    fillMode="none">
                    Donec blandit, sem eget eleifend sagittis, ante est iaculis
                    lacus, ut malesuada urna lectus ut est. Etiam vitae ligula
                    sit amet nisi fermentum cursus tempor non mauris. Nulla
                    euismod risus libero, semper fringilla felis tincidunt
                    vitae. Nunc et sapien fermentum, rhoncus nulla eleifend,
                    ultrices enim.
                  </MovingText>
                </p>
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
                    bg-feeding bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Feeding */}
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
