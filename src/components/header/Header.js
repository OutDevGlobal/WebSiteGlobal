import React, { useState } from 'react'
import { MainLogo } from './MainLogo'
import navigationIcon from '../../assets/svg/brand/navigationIcon.svg'
import { NavLink } from 'react-router-dom'

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
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="text-white grid md:grid-cols-2 md:pt-10 pt-10 order-2 md:order-1">
            <div className="md:col-start-2 flex flex-col w-full text-center">
              <a
                href="/"
                className="text-white text-2xl hover:text-3xl hover:text-base-purple duration-300">
                Linkedin
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-3xl hover:text-base-purple duration-300">
                Facebook
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-3xl hover:text-base-purple duration-300">
                Instagram
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-3xl hover:text-base-purple duration-300">
                Twitter
              </a>
            </div>
          </div>
          <div
            className="
              flex flex-col text-white text-xl space-y-3 items-top w-full text-center md:text-left order-1 md:order-2
            "
          >
            <NavLink
              to="/"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Home
            </NavLink>
            <NavLink
              to="/services"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Services
            </NavLink>
            <NavLink
              to="/development-areas"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Development Areas
            </NavLink>
            <a
              href="/"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Say Hello
            </a>
          </div>
        </div>
      </div>
    </>
  )
}
