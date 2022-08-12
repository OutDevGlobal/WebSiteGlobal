import React from 'react'
import { ReactComponent as IconArrowDown } from '../../assets/svg/arrow_down.svg'

import eCommerceImg from '../../assets/img/web-2-development/e_commerce.png'
import landingPagesImg from '../../assets/img/web-2-development/landing_pages.png'
import contentManagmentImg from '../../assets/img/web-2-development/content_managment_system.png'
import customSoftwareImg from '../../assets/img/web-2-development/custom_software_development.png'

export const Web2Development = () => (
  <div className="w-full relative px-10">
    {/* Start banner slide */}
    <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
      <div className="text-2xl md:text-6xl uppercase self-center md:w-2/3">
        <p className="text-md md:text-2xl self-center md:w-2/3 font-sofia font-thin">
          / Expertise — 2.0 Web Development
        </p>
        We create beautiful and interactive Website
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
      {/* Start e-Commerce */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 2.0 Web Development
            </p>
            <p className="uppercase text-3xl mb-5">e-Commerce</p>
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
              src={eCommerceImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="e-Commerce"
            />
          </div>
        </div>
      </div>
      {/* Ends e-Commerce */}

      {/* Start Landing Pages */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 2.0 Web Development
            </p>
            <p className="uppercase text-3xl mb-5">Landing Pages</p>
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
              src={landingPagesImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Landing Pages"
            />
          </div>
        </div>
      </div>
      {/* Ends Landing Pages */}

      {/* Start Content Managment System */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-2 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 2.0 Web Development
            </p>
            <p className="uppercase text-3xl mb-5">Content Managment System</p>
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
              src={contentManagmentImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Content Managment System"
            />
          </div>
        </div>
      </div>
      {/* Ends Content Managment System */}

      {/* Start Custom Software Development */}
      <div className="relative w-full mb-40">
        <div className="md:absolute bottom-5 grid grid-cols-1 md:grid-cols-6">
          <div className="col-start-3 col-span-2">
            <p className="text-md md:text-2xl self-center font-sofia font-thin">
              / Expertise — 2.0 Web Development
            </p>
            <p className="uppercase text-3xl mb-5">
              Custom Software Development
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
              src={customSoftwareImg}
              className="w-full md:h-[500px] mt-5 md:mt-0"
              alt="Custom Software Development"
            />
          </div>
        </div>
      </div>
      {/* Ends Custom Software Development */}
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
