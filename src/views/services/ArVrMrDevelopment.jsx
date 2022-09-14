import React, { useEffect } from 'react'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, ZoomIn
} from "react-scroll-motion"

export const ArVrMrDevelopment = () => {

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
    <div className="w-full relative px-10 bg-gradient-to-t from-black/20 via-base-blue/10 to-black/20">
      <ScrollContainer>
        <ScrollPage key="banner">
          {/* Start banner slide */}
          <div
            key="banner"
            className="grid grid-cols-1 justify-center md:p-20 h-full">
            <div className="uppercase self-center md:w-2/3 relative">
              
              <div
                onMouseMove={moveOnGrayImage}
                onMouseEnter={showColorCursor}
                onMouseLeave={hiddeColorCursor}
                className="
                  pointer-events-none w-image-service-full h-image-service-full hidden md:block
                  absolute -top-1/2 left-3/4 z-0
                "
              >
                <div className=" pointer-events-auto bg-ar-vr-mr-service bg-no-repeat grayscale w-full h-full absolute"/>
                <div
                  className="
                    pointer-events-none
                    bg-ar-vr-mr-service bg-no-repeat
                    h-24 w-24 duration-800 rounded-full
                    highlight-section
                    border-2 border-base-yellow 
                  "
                />
              </div>
              <div className="pointer-events-none h-full">
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin">
                    / Expertise — AR/VR/MR Development
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                  <p className="text-2xl md:text-6xl 2xl:text-8xl">
                    The most espectacular interactive experiences
                  </p>
                </Animator>
              </div>
            </div>
          </div>
          {/* Ends banner slide */}
        </ScrollPage>

        {/* Start subtitle slide */}
        <ScrollPage key="subtitle">
          <div className="py-40 pointer-events-none">
            <Animator animation={batch(Fade(), MoveIn(200, 0), Sticky())}>
              <p className="text-lg lg:text-2xl 2xl:text-3xl mt-10 md:w-full">
                The incorporation of digital realities in the new developmets allow us to create unimaginable 
                worlds that we can appreciate just by using or smartphones, forging worlds that are out of 
                this reality or taking the reality into the digital world.
              </p>
            </Animator>
          </div>
        </ScrollPage>
        {/* Ends subtitle slide */}

        {/* Start content slide */}
        <ScrollPage key="art-preservation">
          {/* Start Art Preservation */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — AR/VR/MR Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Art Preservation</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    The beauty of art could be lost in a blink of an eye, natural disasters, accidents and even 
                    time are some of the enemies of this pieces, through the use of a nft we could preserve the 
                    beauty of the piece and the unique value that it has implicit, giving the owner the safety 
                    that there's not another legit owner that could claims the property of the NFT.
                    Doing this we can keep these beauty for the eternity.
                  </p>
                </Animator>
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
                    bg-art-preservation bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Art Preservation */}
        </ScrollPage>

        <ScrollPage key="medical-check-up">
          {/* Start Medical Check Up */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — AR/VR/MR Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Medical Check Up</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    The use of data to improve the body health is a reality through data science, 
                    using some standard metrics we could know how good or bad we are according to 
                    that standars in a faster and d
                  </p>
                </Animator>
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
                    bg-medical-checkup bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Medical Check Up */}
        </ScrollPage>

        <ScrollPage key="body-analysis">
          {/* Start Body Analysis With VR / MR / AR */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — AR/VR/MR Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Body Analysis With VR / MR / AR</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    The use of augmented and virtual reality for the analysis of our bodies would be the key 
                    we needed to improve the way we understand how our body works and to communicate what 
                    diseases do to our bodies, making way much more easy the understanding processes to the 
                    patient and trying to arouse people’s interest in their health care
                  </p>
                </Animator>
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
                    bg-body-analysis bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Body Analysis With VR / MR / AR */}
        </ScrollPage>

        <ScrollPage key="agile-education">
          {/* Start Agile Education Processes with VR / MR / AR */}
          <div className="relative w-full mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — AR/VR/MR Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5">Agile Education Processes with VR / MR / AR</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Integrating technology to the traditional learning processes would be the needed jump to make 
                    way faster the way people learn and implement information in their daily activities.
                    Incorporate the use of augmented and virtual reality to schools could give to students 
                    the confidence to put in practice on a real environment what they have learned on the 
                    safety of a classroom
                  </p>
                </Animator>
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
                    bg-agile-education bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Agile Education Processes with VR / MR / AR */}
        </ScrollPage>

        {/* Ends content slide */}
      </ScrollContainer>
    </div>
  )
}
