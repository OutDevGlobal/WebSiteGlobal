import React from 'react'
import { HideScroll } from 'react-hide-on-scroll'
import { Section, useScrollSection } from 'react-scroll-section'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

export const InmersiveWebDevelopment = () => {
  const content = useScrollSection('content')
  const handleChangeSection = () => {
    content.onClick()
  }

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
          <p className="text-md md:text-2xl self-center md:w-2/3 font-sofia font-thin relative z-30">
            / Expertise — Inmersive Web Development
          </p>
          <p className="relative z-30">
            Exceptional contents and world-class Visuals
          </p>
          <div className="pointer-events-none w-image-service-full h-image-service-full hidden md:flex">
            <div
              className="
                pointer-events-auto
                relative left-1/2 transform -translate-y-1/2
                bg-inmersive-service bg-no-repeat w-image-service-full h-image-service-full
                grayscale
              "
            />
            <div
              className="
                absolute top-0
                highlight-section
                bg-inmersive-service bg-no-repeat
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
          <p className="text-lg mt-10 md:w-2/3">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
            efficitur semper nunc, eget accumsan mauris. Ut dictum lectus sit
            amet sapien ullamcorper, quis sagittis lacus vehicula. Pellentesque
            in nisl ante. Nullam vitae quam semper metus vehicula gravida. Donec
            quam tortor, suscipit sed suscipit eu, viverra eu nisi. In
            pellentesque egestas odio. Suspendisse ac orci non nunc cursus
            iaculis nec ut orci.
          </p>
        </div>
        {/* Ends subtitle slide */}

        {/* Start content slide */}
        <div>
          {/* Start 360º Video */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <p className="text-md md:text-2xl self-center font-sofia font-thin">
                  / Expertise — Inmersive Web Development
                </p>
                <p className="uppercase text-3xl mb-5">360º Video</p>
                <p className="font-sofia font-thin text-2xl mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-sofia font-light font-md">
                  Donec blandit, sem eget eleifend sagittis, ante est iaculis
                  lacus, ut malesuada urna lectus ut est. Etiam vitae ligula sit
                  amet nisi fermentum cursus tempor non mauris. Nulla euismod
                  risus libero, semper fringilla felis tincidunt vitae. Nunc et
                  sapien fermentum, rhoncus nulla eleifend, ultrices enim.
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
                    bg-video-360 bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends 360º Video */}

          {/* Start Data Visualization */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <p className="text-md md:text-2xl self-center font-sofia font-thin">
                  / Expertise — Inmersive Web Development
                </p>
                <p className="uppercase text-3xl mb-5">Data Visualization</p>
                <p className="font-sofia font-thin text-2xl mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-sofia font-light font-md">
                  Donec blandit, sem eget eleifend sagittis, ante est iaculis
                  lacus, ut malesuada urna lectus ut est. Etiam vitae ligula sit
                  amet nisi fermentum cursus tempor non mauris. Nulla euismod
                  risus libero, semper fringilla felis tincidunt vitae. Nunc et
                  sapien fermentum, rhoncus nulla eleifend, ultrices enim.
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
                    bg-data-visualization bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Data Visualization */}

          {/* Start Home Stores */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <p className="text-md md:text-2xl self-center font-sofia font-thin">
                  / Expertise — Inmersive Web Development
                </p>
                <p className="uppercase text-3xl mb-5">Home Stores</p>
                <p className="font-sofia font-thin text-2xl mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-sofia font-light font-md">
                  Donec blandit, sem eget eleifend sagittis, ante est iaculis
                  lacus, ut malesuada urna lectus ut est. Etiam vitae ligula sit
                  amet nisi fermentum cursus tempor non mauris. Nulla euismod
                  risus libero, semper fringilla felis tincidunt vitae. Nunc et
                  sapien fermentum, rhoncus nulla eleifend, ultrices enim.
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
                    bg-home-stores bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Home Stores */}

          {/* Start Digital Art */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <p className="text-md md:text-2xl self-center font-sofia font-thin">
                  / Expertise — Inmersive Web Development
                </p>
                <p className="uppercase text-3xl mb-5">Digital Art</p>
                <p className="font-sofia font-thin text-2xl mb-5">
                  Lorem ipsum dolor sit amet, consectetur adipiscing elit.
                </p>
                <p className="font-sofia font-light font-md">
                  Donec blandit, sem eget eleifend sagittis, ante est iaculis
                  lacus, ut malesuada urna lectus ut est. Etiam vitae ligula sit
                  amet nisi fermentum cursus tempor non mauris. Nulla euismod
                  risus libero, semper fringilla felis tincidunt vitae. Nunc et
                  sapien fermentum, rhoncus nulla eleifend, ultrices enim.
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
                    bg-digital-art bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Digital Art */}
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
