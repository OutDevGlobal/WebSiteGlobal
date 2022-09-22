import React, { useEffect } from 'react'
import {
  Animator, ScrollContainer, ScrollPage, batch, Fade, MoveIn, MoveOut, Sticky, ZoomIn
} from "react-scroll-motion"

export const Web3Development = () => {

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
    <div className="w-full block px-10 bg-gradient-to-t from-black/20 via-base-blue/10 to-black/20">
      <ScrollContainer>
        <ScrollPage key="banner">
          {/* Start banner slide */}
          <div
            key="banner"
            className="grid grid-cols-1 justify-center md:px-20 h-full">
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
                <div className=" pointer-events-auto bg-web3-service bg-no-repeat grayscale w-full h-full absolute"/>
                <div
                  className="
                    pointer-events-none
                    bg-web3-service bg-no-repeat
                    h-24 w-24 duration-800 rounded-full
                    highlight-section
                    border-2 border-base-purple 
                  "
                />
              </div>
              <div className="pointer-events-none h-full">
                <Animator animation={batch(Fade(), MoveOut(0, -200))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center md:w-2/3 font-sofia font-thin">
                    / Expertise — 3.0 Web develpment
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveOut(-200, 0))}>
                  <p className="text-4xl md:text-6xl 2xl:text-8xl font-montserrat font-extrabold">
                    We dive into the blockchain with you
                  </p>
                </Animator>
              </div>
            </div>
          </div>
          {/* Ends banner slide */}
        </ScrollPage>
        <ScrollPage>
           {/* Start subtitle slide */}
           <div className="py-40 pointer-events-none">
            <Animator animation={batch(Fade(), MoveIn(200, 0), Sticky())}>
              <p className="text-lg lg:text-2xl 2xl:text-3xl mt-10 md:w-full">
                The answer to the dilemma of the Web being monopolized by big corporations is that web 3.0 gives the
                power to individuals in the form of ownership. To achieve this, Web 3.0 uses blockchains, 
                cryptocurrencies and NFTs, being this the “read-write-own” web.
              </p>
            </Animator>
          </div>
          {/* Ends subtitle slide */}
        </ScrollPage>
        <ScrollPage key="nft">
          {/* Start NFT */}
          <div className="relative w-full mt-40 lg:mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 3.0 Web develpment
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">NFT</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    A non-fungible token (NFT) is an approach to tracking as well as adding value to a unique piece of
                    digital media. In essence, it is a digital version of a concrete collector’s item that is stored 
                    in a digital wallet or blockchain, offering proof of unique ownership and authenticity.
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
                    bg-hybrid bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends NFT */}
        </ScrollPage>
        <ScrollPage>
          {/* Start Crypto Tokens */}
          <div className="relative w-full mt-40 lg:mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-3 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 3.0 Web develpment
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">Crypto Tokens</p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    A token is a programmable digital unit of value that is recorded on a digital ledger,
                    in this case crypto tokens are digital units used for transaction amoing decentrilized environments.
                    These tokens are designed to be used for a particular purpose, usually within the 
                    application/platform for which they are developed.
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
                    bg-crypto-tokens bg-no-repeat w-full h-image-mobile md:w-image-wide md:h-image-wide
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Crypto Tokens */}
        </ScrollPage>
        <ScrollPage>
          {/* Start Decentralized Solutions */}
          <div className="relative w-full mt-40 lg:mb-40">
            <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10">
              <div className="col-start-2 col-span-2">
                <Animator animation={batch(Fade(), MoveIn(-200, 0))}>
                  <p className="text-md md:text-2xl xl:text-4xl self-center font-sofia font-thin">
                    / Expertise — 3.0 Web develpment
                  </p>
                </Animator>
                <Animator animation={batch(ZoomIn())}>
                  <p className="uppercase text-3xl xl:text-5xl mb-5 font-montserrat font-extrabold">
                    Decentralized Solutions
                  </p>
                </Animator>
                <Animator animation={batch(Fade(), MoveIn(200, 0))}>
                  <p className="font-sofia font-light font-md lg:text-xl xl:text-2xl">
                    Are applications or programs that exist and run on a blockchain network instead of a single
                    computer. This kind of apps are outside the purview and control of a single authority. 
                    One of their benefits  include the safeguarding of user privacy, the lack of censorship, and 
                    the flexibility of development.
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
                    bg-decentralized-solutions bg-no-repeat  w-full h-image-mobile md:w-image-wide md:h-image-wide top-0
                  "
                />
              </div>
            </div>
          </div>
          {/* Ends Decentralized Solutions */}
        </ScrollPage>
      </ScrollContainer>
    </div>
  )
}
