import React from 'react'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import artAndEntretainmentImg from '../assets/img/development-areas/art_and_entretainment.png'
import smartWearablesImg from '../assets/img/development-areas/smart_wearables.png'
import sportsImg from '../assets/img/development-areas/sports.png'
import healthImg from '../assets/img/development-areas/health.png'
import educationImg from '../assets/img/development-areas/education.png'
import feedingImg from '../assets/img/development-areas/feeding.png'

export const DevelopmentAreas = () => {


  // Move the cursor
  function handleOnMouseMove(e) {
    let section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      const rect = e.currentTarget.getBoundingClientRect()
      section.style.backgroundPosition = (-e.clientX + rect.left + 20)+'px ' + (-e.clientY + rect.top + 20)+'px'
      window.gsap.to(section, {
        x: e.clientX - rect.left - 20,
        y: e.clientY - rect.top - 20,
      })
    }
  }

  function handleOnMouseEnter(e) {
    let section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.remove("hidden")
    }
  }

  function handleOnMouseLeave(e) {
    let section = e.currentTarget.querySelector('.highlight-section')
    if (section !== null) {
      section.classList.add("hidden")
    }
  }

return (
  <div className="w-full relative px-10">
    {/* Start banner slide */}
    <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
      <div className="text-2xl md:text-6xl md:p-8 uppercase self-center">
        We&apos;re an Integral services development company
      </div>
    </div>
    {/* Ends banner slide */}

    {/* Start subtitle slide */}
    <div className="md:m-20 mb-40">
      <div className="text-2xl md:text-6xl uppercase md:w-1/2">
        Research and Development
      </div>
      <p className="text-lg mt-10 md:w-2/3">
        The future is now and there are infinite opportunities, that is why we
        invest part of our efforts in different areas that take us to the next
        level.
      </p>
    </div>
    {/* Ends subtitle slide */}

    {/* Start content slide */}
    <div>
      {/* Start Technological Development */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6 z-10 pointer-events-none">
          <div className="col-start-2 col-span-2">
            <p className="uppercase text-3xl mb-5">Technological Development</p>
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
        <div className="grid grid-cols-1 md:grid-cols-6 z-0 ">
        
          <div
            className="col-start-3 col-span-2 w-full md:h-[600px] relative"
            onMouseMove={handleOnMouseMove}
            onMouseEnter={handleOnMouseEnter}
            onMouseLeave={handleOnMouseLeave}
          >
            <div className="bg-technological-dev bg-[length:450px_600px] bg-no-repeat w-full h-full top-0 grayscale" />
            <div className="absolute bg-gradient-to-t from-[#090F26] z-5 w-full h-full top-0" />
            <div
              className="
                bg-technological-dev bg-[length:450px_600px] bg-no-repeat highlight-section rounded-full h-16 w-16 
                top-0 absolute pointer-events-none
              "
            />
          </div>
        </div>
      </div>
      {/* Ends Technological Development */}

      {/* Start Art and Entretainment */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="uppercase text-3xl mb-5">Art and Entretainment</p>
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
              src={artAndEntretainmentImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Art and Entretainment"
            />
          </div>
        </div>
      </div>
      {/* Ends Art and Entretainment */}

      {/* Start Smart Wearables */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="uppercase text-3xl mb-5">Smart Wearables</p>
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
              src={smartWearablesImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Smart Wearables"
            />
          </div>
        </div>
      </div>
      {/* Ends Technological Development */}

      {/* Start Sports */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="uppercase text-3xl mb-5">Sports</p>
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
              src={sportsImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Sports"
            />
          </div>
        </div>
      </div>
      {/* Ends Sports */}

      {/* Start Health */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="uppercase text-3xl mb-5">Health</p>
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
              src={healthImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Health"
            />
          </div>
        </div>
      </div>
      {/* Ends Health */}

      {/* Start Education */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="uppercase text-3xl mb-5">Education</p>
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
              src={educationImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Education"
            />
          </div>
        </div>
      </div>
      {/* Ends Education */}

      {/* Start Feeding */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="uppercase text-3xl mb-5">Feeding</p>
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
              src={feedingImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Feeding"
            />
          </div>
        </div>
      </div>
      {/* Ends Feeding */}
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

}
