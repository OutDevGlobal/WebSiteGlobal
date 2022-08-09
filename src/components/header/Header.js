import React, { useState } from 'react'
import { MainLogo } from './MainLogo'
import navigationIcon from '../../assets/svg/brand/navigationIcon.svg'

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)

  const handleMenu = () => {
    const menu = document.getElementById('menu')

    if (isOpen) {
      setIsOpen(!isOpen)
      menu.classList.remove('w-screen', 'h-screen', 'opactiy-95')
      menu.classList.add('w-0', 'h-0', 'opacity-0')
    } else {
      setIsOpen(!isOpen)
      menu.classList.remove('w-0', 'h-0', 'opacity-0')
      menu.classList.add('w-screen', 'h-screen', 'opacity-95')
    }
  }

  return (
    <>
      <nav className="w-full flex items-center justify-between flex-wrap hoverable z-50 px-10 py-5">
        <MainLogo />
        <div
          className="
            flex items-center justify-center bg-navIconBorder hover:bg-navIconBorderEmpty bg-cover bg-no-repeat 
            w-10 h-10 sm:w-16 sm:h-16 z-50
          ">
          <div className="card rotate-45">
            <button
              type="button"
              onClick={handleMenu}
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
          fixed z-0 left-0 top-0 w-full h-screen flex justify-center items-center bg-black opacity-0 duration-700
          overflow-hidden
        ">
        <div className="grid grid-cols-1 md:grid-cols-2 w-full">
          <div className="text-white grid md:grid-cols-2 md:pt-10 order-2 md:order-1 pt-10">
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
          <div className="flex flex-col text-white text-xl space-y-3 items-top w-full text-center md:text-left ">
            <a
              href="/"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Home
            </a>
            <a
              href="/"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Services
            </a>
            <a
              href="/"
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300
              ">
              Development Areas
            </a>
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
