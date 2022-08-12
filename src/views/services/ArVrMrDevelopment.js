import React from 'react'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

import artPreservationImg from '../../assets/img/ar-vr-mr-development/art_preservation.png'
import medicalCheckupImg from '../../assets/img/ar-vr-mr-development/medical_checkup.png'
import bodyAnalysisImg from '../../assets/img/ar-vr-mr-development/body_analysis.png'
import agileEducationImg from '../../assets/img/ar-vr-mr-development/agile_education.png'

export const ArVrMrDevelopment = () => (
  <div className="w-full relative px-10">
    {/* Start banner slide */}
    <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
      <div className="text-2xl md:text-6xl uppercase self-center md:w-2/3">
        <p className="text-md md:text-2xl self-center md:w-2/3 font-sofia font-thin">
          / Expertise — AR/VR/MR Development
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
      {/* Start Art Preservation */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — AR/VR/MR Development
            </p>
            <p className="uppercase text-3xl mb-5">Art Preservation</p>
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
              src={artPreservationImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Art Preservation"
            />
          </div>
        </div>
      </div>
      {/* Ends Art Preservation */}

      {/* Start Medical Check Up */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — AR/VR/MR Development
            </p>
            <p className="uppercase text-3xl mb-5">Medical Check Up</p>
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
              src={medicalCheckupImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Medical Check Up"
            />
          </div>
        </div>
      </div>
      {/* Ends Medical Check Up */}

      {/* Start Body Analysis With VR / MR / AR */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — AR/VR/MR Development
            </p>
            <p className="uppercase text-3xl mb-5">
              Body Analysis With VR / MR / AR
            </p>
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
              src={bodyAnalysisImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Body Analysis With VR / MR / AR"
            />
          </div>
        </div>
      </div>
      {/* Ends Body Analysis With VR / MR / AR */}

      {/* Start Agile Education Processes with VR / MR / AR */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — AR/VR/MR Development
            </p>
            <p className="uppercase text-3xl mb-5">
              Agile Education Processes with VR / MR / AR
            </p>
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
              src={agileEducationImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Agile Education Processes with VR / MR / AR"
            />
          </div>
        </div>
      </div>
      {/* Ends Agile Education Processes with VR / MR / AR */}
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
