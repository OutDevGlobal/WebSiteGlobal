import React from 'react'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

import video360Img from '../../assets/img/inmersive-web-development/video_360.png'
import dataVisualizationImg from '../../assets/img/inmersive-web-development/data_visualization.png'
import homeStoresImg from '../../assets/img/inmersive-web-development/home_stores.png'
import digitalArtImg from '../../assets/img/inmersive-web-development/digital_art.png'

export const Web2Development = () => (
  <div className="w-full relative px-10">
    {/* Start banner slide */}
    <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
      <div className="text-2xl md:text-6xl uppercase self-center md:w-2/3">
        <p className="text-md md:text-2xl self-center md:w-2/3 font-sofia font-thin">
          / Expertise — Inmersive Web Development
        </p>
        Exceptional contents and world-class Visuals.
      </div>
    </div>
    {/* Ends banner slide */}

    {/* Start subtitle slide */}
    <div className="md:m-20 mb-40">
      <p className="text-lg mt-10 md:w-2/3">
        Lorem ipsum dolor sit amet, consectetur adipiscing elit. Vivamus
        efficitur semper nunc, eget accumsan mauris. Ut dictum lectus sit amet
        sapien ullamcorper, quis sagittis lacus vehicula. Pellentesque in nisl
        ante. Nullam vitae quam semper metus vehicula gravida. Donec quam
        tortor, suscipit sed suscipit eu, viverra eu nisi. In pellentesque
        egestas odio. Suspendisse ac orci non nunc cursus iaculis nec ut orci.
      </p>
    </div>
    {/* Ends subtitle slide */}

    {/* Start content slide */}
    <div>
      {/* Start 360º Video */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — Inmersive Web Development
            </p>
            <p className="uppercase text-3xl mb-5">360º Video</p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus,
              ut malesuada urna lectus ut est. Etiam vitae ligula sit amet nisi
              fermentum cursus tempor non mauris. Nulla euismod risus libero,
              semper fringilla felis tincidunt vitae. Nunc et sapien fermentum,
              rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <img
              src={video360Img}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="360º Video"
            />
          </div>
        </div>
      </div>
      {/* Ends 360º Video */}

      {/* Start Data Visualization */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — Inmersive Web Development
            </p>
            <p className="uppercase text-3xl mb-5">Data Visualization</p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus,
              ut malesuada urna lectus ut est. Etiam vitae ligula sit amet nisi
              fermentum cursus tempor non mauris. Nulla euismod risus libero,
              semper fringilla felis tincidunt vitae. Nunc et sapien fermentum,
              rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-4 col-span-2">
            <img
              src={dataVisualizationImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Data Visualization"
            />
          </div>
        </div>
      </div>
      {/* Ends Data Visualization */}

      {/* Start Home Stores */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — Inmersive Web Development
            </p>
            <p className="uppercase text-3xl mb-5">Home Stores</p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus,
              ut malesuada urna lectus ut est. Etiam vitae ligula sit amet nisi
              fermentum cursus tempor non mauris. Nulla euismod risus libero,
              semper fringilla felis tincidunt vitae. Nunc et sapien fermentum,
              rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <img
              src={homeStoresImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Home Stores"
            />
          </div>
        </div>
      </div>
      {/* Ends Home Stores */}

      {/* Start Digital Art */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — Inmersive Web Development
            </p>
            <p className="uppercase text-3xl mb-5">Digital Art</p>
            <p className="font-sofia font-thin text-2xl mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit.
            </p>
            <p className="font-sofia font-light font-md">
              Donec blandit, sem eget eleifend sagittis, ante est iaculis lacus,
              ut malesuada urna lectus ut est. Etiam vitae ligula sit amet nisi
              fermentum cursus tempor non mauris. Nulla euismod risus libero,
              semper fringilla felis tincidunt vitae. Nunc et sapien fermentum,
              rhoncus nulla eleifend, ultrices enim.
            </p>
          </div>
        </div>
        <div className="grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-4 col-span-2">
            <img
              src={digitalArtImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Digital Art"
            />
          </div>
        </div>
      </div>
      {/* Ends Digital Art */}
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
