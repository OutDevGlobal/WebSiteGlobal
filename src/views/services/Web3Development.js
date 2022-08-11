import React from 'react'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

import nftImg from '../../assets/img/web-3-development/nft.png'
import cryptoTokensImg from '../../assets/img/web-3-development/crypto_tokens.png'
import decentralizedImg from '../../assets/img/web-3-development/decentralized_solutions.png'

export const Web3Development = () => (
  <div className="w-full relative px-10">

    {/* Start banner slide */}
    <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
      <div className="text-2xl md:text-6xl uppercase self-center md:w-2/3">
        <p className="text-md md:text-2xl self-center md:w-2/3 font-sofia font-thin">
          / Expertise — 3.0 Web develpment
        </p>
        We dive into the blockchain with you
      </div>
    </div>
    {/* Ends banner slide */}

    {/* Start subtitle slide */}
    <div className="md:m-20 mb-40">
      <p className="text-lg mt-10 md:w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus efficitur semper nunc, eget accumsan mauris. 
        Ut dictum lectus sit amet sapien ullamcorper, quis sagittis lacus vehicula. Pellentesque in nisl ante. Nullam 
        vitae quam semper metus vehicula gravida. Donec quam tortor, suscipit sed suscipit eu, viverra eu nisi. 
        In pellentesque egestas odio. Suspendisse ac orci non nunc cursus iaculis nec ut orci.
      </p>
    </div>
    {/* Ends subtitle slide */}

    {/* Start content slide */}
    <div>

      {/* Start NFT */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 3.0 Web develpment
            </p>
            <p className="uppercase text-3xl mb-5">
              NFT
            </p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus, ut malesuada urna lectus ut est. 
              Etiam vitae ligula sit amet nisi fermentum cursus tempor non mauris. Nulla euismod risus libero, semper 
              fringilla felis tincidunt vitae. Nunc et sapien fermentum, rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <img
              src={nftImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="NFT"
            />
          </div>
        </div>
      </div>
      {/* Ends NFT */}

      {/* Start Crypto Tokens */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 3.0 Web develpment
            </p>
            <p className="uppercase text-3xl mb-5">
              Crypto Tokens
            </p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus, ut malesuada urna lectus ut est. 
              Etiam vitae ligula sit amet nisi fermentum cursus tempor non mauris. Nulla euismod risus libero, semper 
              fringilla felis tincidunt vitae. Nunc et sapien fermentum, rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-4 col-span-2">
            <img
              src={cryptoTokensImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Crypto Tokens"
            />
          </div>
        </div>
      </div>
      {/* Ends Crypto Tokens */}

      {/* Start Decentralized Solutions */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 3.0 Web develpment
            </p>
            <p className="uppercase text-3xl mb-5">
              Decentralized Solutions
            </p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus, ut malesuada urna lectus ut est. 
              Etiam vitae ligula sit amet nisi fermentum cursus tempor non mauris. Nulla euismod risus libero, semper 
              fringilla felis tincidunt vitae. Nunc et sapien fermentum, rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <img
              src={decentralizedImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Decentralized Solutions"
            />
          </div>
        </div>
      </div>
      {/* Ends Decentralized Solutions */}

    </div>
    {/* Ends content slide */}

    <div className="fixed lute cursor-pointer bottom-20 right-20 hidden md:block">
      <button type="button" className="sticky">
        <IconArrowDown
          className="
              text-transparent hover:text-base-yellow hover:translate hover:scale-110 duration-300
            "
        />
      </button>
    </div>

  </div>
)
