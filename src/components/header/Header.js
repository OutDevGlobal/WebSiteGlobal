import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { MainLogo } from './MainLogo'

import { ReactComponent as FacebookIcon } from "../../assets/svg/facebook.svg"
import { ReactComponent as TwitterIcon } from "../../assets/svg/twitter.svg"
import { ReactComponent as InstagramIcon } from "../../assets/svg/instagram.svg"
import { ReactComponent as LinkedinIcon } from "../../assets/svg/linkedin.svg"

import navigationIcon from '../../assets/svg/brand/navigationIcon.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    const menu = document.getElementById('menu')

    if (isOpen) {
      setIsOpen(!isOpen)
      menu.classList.remove('h-screen', 'opactiy-95')
      menu.classList.add('h-0', 'opacity-0')
    } else {
      setIsOpen(!isOpen)
      menu.classList.remove('h-0', 'opacity-0')
      menu.classList.add('h-screen', 'opacity-95')
    }
  }

  const handleOnMouseEnter = () => {
    const cursor = document.getElementById('custom-cursor')
    cursor.classList.remove('p-5')
    cursor.classList.add('p-7')
  }

  const handleOnMouseLeave = () => {
    const cursor = document.getElementById('custom-cursor')
    cursor.classList.remove('p-7')
    cursor.classList.add('p-5')
  }

  return (
    <>
      <nav className="sticky top-0 w-full flex items-center justify-between flex-wrap px-10 py-5 z-50">
        <MainLogo />
        <div
          className="
            flex items-center justify-center bg-navIconBorder hover:bg-navIconBorderEmpty bg-cover bg-no-repeat 
            w-10 h-10 sm:w-16 sm:h-16
          ">
          <div className="card rotate-45">
            <button
              type="button"
              onClick={handleMenu}
              onMouseEnter={handleOnMouseEnter}
              onMouseLeave={handleOnMouseLeave}
              className="flex justify-center rotate-45 w-6 h-6 sm:w-10 sm:h-10">
              <img
                src={navigationIcon}
                className="w-6 h-6 sm:w-10 sm:h-10"
                alt="OutDevGlobal-Menu"
              />
            </button>
          </div>
        </div>
      </nav>
      <div
        id="menu"
        className="
          fixed z-10 flex h-0 w-screen justify-center items-center bg-black opacity-0 duration-700
          overflow-hidden bottom-0
        ">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full">
          <div
            className="
              flex flex-col text-white text-xl space-y-3 items-top w-full text-center md:text-left
              col-start-2 col-span-2
            ">
            <NavLink
              to="/"
              onClick={handleMenu}
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={handleMenu}
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Services
            </NavLink>
            <NavLink
              to="/development-areas"
              onClick={handleMenu}
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Development Areas
            </NavLink>
            <NavLink
              to="/contact-us"
              onClick={handleMenu}
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Say Hello
            </NavLink>
            <div className="text-center flex gap-8 justify-center md:justify-start">
              
              <a
                href="/"
                onClick={handleMenu}
                className="
                  text-white text-2xl hover:text-base-blue duration-300
                  
                "
              >
                <FacebookIcon className="w-4"/>
              </a>
              <a
                href="/"
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue duration-300"
              >
                <TwitterIcon className="w-6 mt-1"/>
              </a>
              <a
                href="/"
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue duration-300"
              >
                <InstagramIcon className="w-6 mt-1"/>
              </a>
              <a
                href="/"
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue duration-300"
              >
                <LinkedinIcon className="w-6 mt-2"/>
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
