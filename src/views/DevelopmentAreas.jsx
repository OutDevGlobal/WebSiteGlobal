import React, { useEffect } from 'react'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, ZoomIn
} from "react-scroll-motion"

export const DevelopmentAreas = () => {

  useEffect( () => {
    if (location.pathname !== '/' &&  document.getElementById('canvas-bg') !== null) {
      document.getElementById('canvas-bg').remove()
    }
  }, [] )

  return (
    <div className="w-full bg-gradient-to-t from-black/20 via-base-blue/10 to-black/20">

      <ScrollContainer>
        <ScrollPage>
          {/* Start banner slide */}
          <div className="p-14 md:p-20 xl:p-32 grid grid-cols-1 justify-center h-screen">
            <div className="text-4xl md:text-6xl 2xl:text-8xl md:p-8 uppercase self-center">
              <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                <p className="text-4xl md:text-6xl 2xl:text-8xl font-montserrat font-extrabold">
                  We&apos;re an Integral services development company
                </p>
              </Animator>
            </div>
          </div>
          {/* Ends banner slide */}
        </ScrollPage>
        <ScrollPage>
          {/* Start subtitle slide */}
          <div className="p-14 md:p-20 xl:p-32 mb-40 pt-20">
            <div className=" uppercase md:w-1/2 ">
              <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                <p className="text-2xl lg:text-6xl 2xl:text-8xl mt-10 md:w-full font-montserrat font-extrabold">
                  Research and Development
                </p>
              </Animator>
            </div>
            <Animator animation={batch(Fade(), MoveIn(200, 0), Sticky())}>
              <p className="text-2xl lg:text-4xl 2xl:text-6xl mt-10 md:w-full">
                The future is now and there are infinite opportunities, that is
                why we invest part of our efforts in different areas that take us
                to the next level.
              </p>
            </Animator>
          </div>
          {/* Ends subtitle slide */}
        </ScrollPage>
        <ScrollPage>
        {/* Start Technological Development */}
        <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Technological Development
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Web 3.0 / Descentralized solutions Web 2.0 / Computer vision / Data science Custom developments
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    We develop your life project side by side with you, focusing on new technologies, so that you are 
                    always up-to-date and can enter new markets in a better way.
                  </p>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    We give you the necessary tools so that your business can reach its maximum potential;
                    simplify actions, speed up processes and reduce costs with a global solution that allows you to 
                    control everything that happens in your company from the same place.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
        <ScrollPage>
          {/* Start Art and Entretainment */}
          <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-3 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Art and Entretainment
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Art Preservation Synchronization of virtual reality with the real world
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    Art is the way people perceive reality, we seek to preserve that expression and share it with the
                    rest of the world.
                  </p>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    We seek to enhance the beauty of life in each of the pieces that the artist paints, draws, writes, 
                    composes, sculpts, molds... creates.
                  </p>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    And the most important; we generate environments where people can appreciate the artist's 
                    creations and have them for themselves, synchronizing virtual reality with physical reality in a 
                    harmonious and perfect way.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
        <ScrollPage>
          {/* Start Smart Wearables */}
          <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Smart Wearables
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Devices / Accesories Clothing
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    The technology incorporated into the items we use daily allows us to make out day to day more 
                    efficient; with the use of watches, glasses, bracelets and shirts we can know body indicators 
                    or even generate actions such as listening to music or receiving messages.
                  </p>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    We believe that the technology must provide solutions to our personal benefit on the daily 
                    activities, in this context we venture in the reseach of products that contribute to different 
                    areas as health, safety, help for people with disabilities, location of older people, etc.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
        <ScrollPage>
          {/* Start Sports */}
          <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-3 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Sports
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Computer vision reference Wearables body check
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    We know that the world of sports is exciting, that’s why we are attracted to the idea of 
                    implement artificial intelligence technology to recognize scenarios and include the games
                    rules to help make sports more attractive and fais in their different modalities, while applying 
                    sensors technology and performance measurement to help athletes to increase their performance.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
        <ScrollPage>
          {/* Start Health */}
          <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Health
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Sensors technology and performance measurement to help athletes to increase their performance.
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    Throughout history a lo largo de la historia los avances de la tecnologia en tema de salud 
                    siempre son bienvenidos, en Outdev queremos aportar soluciones implementando tecnologia 
                    blockchain donde se pueda tener un registro global inmutable ayudando a la industria para 
                    poner al alcance de los medicos informacion vital de una manera rapida y confiable, 
                    tambien incursionamos en tecnologias Vr/mr/ar para facilitar a los medicos el uso de instrumentos
                    a larga distancia y claridad en el aprendizaje de los nuevos talentos en el ambito de la medicina.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
        <ScrollPage>
          {/* Start Education */}
          <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-3 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Education
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Faster education processes with VR / MR / AR
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    We know that there are many ways of learning and thanks to these technologies we can include 
                    different forms in a single system, we believe that education can advance exponentially by 
                    having access to it with virtual reality where you can study implicitly while you're having 
                    fun as well as do practices in a world where you can fail without any risk.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
        <ScrollPage>
          {/* Start Feeding */}
          <div className="relative w-full mt-40 lg:mb-40 px-10">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
              <div className="md:col-start-2 md:col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Feeding
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="text-md md:text-2xl xl-text-2xl self-center font-sofia font-thin">
                    Food Preservation / Vertical Planting Computer Analysis / AI
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-md xl:text-lg">
                    Focusing efforts to prevent hunger in the world is an issue of global importance; 
                    applying technology to seeds to improve their tolerance to droughts, having better 
                    fertilizers, doing computer vision to prevent pest and doing vertical planting.
                  </p>
                </Animator>
              </div>
            </div>
            <div className="hidden lg:grid grid-cols-1 md:grid-cols-6 z-0">
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
        </ScrollPage>
      </ScrollContainer>

    </div>
  )
}
