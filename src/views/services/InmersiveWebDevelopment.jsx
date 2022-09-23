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

export const InmersiveWebDevelopment = () => {
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
        <ScrollPage key="page">
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
                <div className=" pointer-events-auto bg-inmersive-service bg-no-repeat grayscale w-full h-full absolute" />
                <div
                  className="
                    pointer-events-none
                    bg-inmersive-service bg-no-repeat
                    h-24 w-24 duration-800 rounded-full
                    highlight-section
                    border-2 border-base-purple 
                  "
                />
              </div>
              <div className="pointer-events-none h-full">
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin">
                    / Expertise — Inmersive Web Development
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                  <p className="text-4xl md:text-6xl 2xl:text-8xl font-montserrat font-extrabold">
                    Exceptional contents and world-class visualization
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
                The COVID-19 pandemic changed the world in a number of ways,
                immersive technologies, have helped customers to see and
                understand how products work in a space. Or how important is the
                experience from your sit.
              </p>
            </Animator>
          </div>
          {/* Ends subtitle slide */}
        </ScrollPage>

        <ScrollPage key="video">
          {/* Start 360º Video */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-2 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — Inmersive Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      360º Video
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      360 videos are recordings that include views from every
                      direction, all shot at the same time, using a rig of
                      multiple cameras or an omnidirectional camera.
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
                      lg:bg-left-image lg:bg-fixed
                      bg-video-360 bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends 360º Video */}
        </ScrollPage>

        <ScrollPage key="data-visualization">
          {/* Start Data Visualization */}
          <div className="relative w-full mt-40 lg:mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — Inmersive Web Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Data Visualization
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    This concept consist in merging logical data visualizations
                    with empathetic stories to maximize impact and
                    understandability “Makes data sence”.
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
                    lg:bg-right-image bg-fixed
                    bg-data-visualization bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Data Visualization */}
        </ScrollPage>

        <ScrollPage key="home-stores">
          {/* Start Home Stores */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-2 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — Inmersive Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      Home Stores
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      Home shoppin are designed to digitally extend or replace
                      reality for the user in order to improve the overall
                      experience. These can include: augmented reality (AR),
                      virtual reality (VR), and mixed reality (MR), a
                      combination of physical and digital worlds to produce new
                      environments.
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
                      lg:bg-left-image bg-fixed
                      bg-home-stores bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends Home Stores */}
        </ScrollPage>

        <ScrollPage key="digital-art">
          {/* Start Digital Art */}
          <div className="relative w-full h-full lg:mb-40 flex">
            <div className="self-center">
              <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
                <div className="col-start-3 col-span-2">
                  <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                    <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                      / Expertise — Inmersive Web Development
                    </p>
                  </Animator>
                  <Animator animation={batch(ZoomIn())}>
                    <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                      Digital Art
                    </p>
                  </Animator>
                  <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                    <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                      Immersive digital art experiences are becoming more and
                      more popular and art galleries, museums, and cultural
                      spaces have started making use of Information and
                      Communication Technologies, Virtual Reality, and Augmented
                      Reality to innovate and differentiate their cultural
                      services in the market.
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
                      bg-digital-art bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                    "
                  />
                </div>
              </div>
            </div>
          </div>
          {/* Ends Digital Art */}
        </ScrollPage>
        {/* Ends content slide */}
      </ScrollContainer>
    </div>
  )
}
