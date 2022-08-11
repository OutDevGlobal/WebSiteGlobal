import React from 'react'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import { ReactComponent as IconSlashDivider } from '../assets/svg/slash_divider.svg'

export const Services = () => (
  <div className="w-full relative px-10">
    {/* Start banner slide */}
    <div className="grid grid-cols-1 justify-center md:p-20 h-screen">
      <div className="text-2xl md:text-6xl md:p-8 uppercase self-center">
        we solve your challenges with excelent desing and innovate technology
      </div>
    </div>
    {/* Ends banner slide */}

    {/* Start What We Do slide */}
    <div className="justify-center md:p-20 cursor-default h-screen">
      <div className="text-2xl md:text-6xl md:p-8 uppercase">
        WHAT DO WE DO?
      </div>
      <div className="text-xl md:text-4xl md:px-20">
        <div className="md:flex my-3">
          <button
            type="button"
            className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
            3.0 WEB DEVELOPMENT
          </button>
          <div className="mr-10 hidden md:block">
            <IconSlashDivider />
          </div>
          <button
            type="button"
            className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
            AR / VR /MR DEVELOPMENT
          </button>
        </div>

        <div className="flex my-5">
          <button
            type="button"
            className="
                hover:text-base-yellow cursor-pointer md:self-center text-left duration-300
              ">
            INMERSIVE WEB DEVELOPMENT
          </button>
          <div className="hidden md:block">
            <IconSlashDivider />
          </div>
        </div>

        <div className="md:flex my-5">
          <button
            type="button"
            className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
            2.0 WEB DEVELOPMENT
          </button>
          <div className="hidden md:block">
            <IconSlashDivider className="mr-10" />
          </div>
          <button
            type="button"
            className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
            CROSS-PLATFORM MOBILE DEVELOPMENTS
          </button>
        </div>
      </div>
    </div>
    {/* Ends What We Do slide */}

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
