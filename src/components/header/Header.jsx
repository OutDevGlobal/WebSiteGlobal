import React, { useState, useEffect } from 'react'
import { NavLink } from 'react-router-dom'
import { MainLogo } from './MainLogo'

import { ReactComponent as FacebookIcon } from '../../assets/svg/social/facebook.svg'
import { ReactComponent as TwitterIcon } from '../../assets/svg/social/twitter.svg'
import { ReactComponent as InstagramIcon } from '../../assets/svg/social/instagram.svg'
import { ReactComponent as LinkedinIcon } from '../../assets/svg/social/linkedin.svg'

import navigationIcon from '../../assets/svg/brand/navigationIcon.svg'
const FACEBOOK_URL = "https://www.facebook.com/profile.php?id=100082506201627"
const TWITTER_URL = "https://twitter.com/OutDev_Global"
const INSTAGRAM_URL = "https://www.instagram.com/out_dev_mx/"
const LINKEDIN_URL = "https://www.linkedin.com/company/outdev-global/mycompany/"

export const Header = () => {
  const [isOpen, setIsOpen] = useState(false)
  const [addBackground, setAddBackground] = useState(false)
  

  const changeBackground = () => {
    if (window.scrollY >= 66) {
      setAddBackground(true)
    } else {
      setAddBackground(false)
    }
  }

  useEffect(() => {
    // console.log(process)
    changeBackground()
    window.addEventListener("scroll", changeBackground)
  })

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

  const showGrayImage = () => {
    const cursor = document.getElementById('custom-cursor')
    cursor.classList.remove('p-5')
    cursor.classList.add('p-7')
  }

  const hiddeGrayImage = () => {
    const cursor = document.getElementById('custom-cursor')
    cursor.classList.remove('p-7')
    cursor.classList.add('p-5')
  }

  return (
    <>
      <nav
        className={`
          ${addBackground && "bg-mainBackground"}
          sticky top-0 w-full flex items-center justify-between flex-wrap px-10 z-50 pointer-events-none
        `}>
        <MainLogo />
        <button
          type="button"
          onClick={handleMenu}
          onMouseEnter={showGrayImage}
          onMouseLeave={hiddeGrayImage}
          className="
            flex items-center justify-center bg-navIconBorder hover:bg-navIconBorderEmpty bg-cover bg-no-repeat 
            w-16 h-16 lg:w-10 lg:h-10 pointer-events-auto mt-2 lg:mt-0
          ">
          <div className="card rotate-45">
            <div

              className="flex justify-center rotate-45 w-6 h-6 sm:w-10 sm:h-10">
              <img
                src={navigationIcon}
                className="w-6 h-6 sm:w-10 sm:h-10"
                alt="OutDevGlobal-Menu"
              />
            </div>
          </div>
        </button>
      </nav>
      <div
        id="menu"
        className="
          fixed z-40 flex h-0 w-screen justify-center items-center bg-black opacity-0 duration-700
          overflow-hidden bottom-0
        ">
        <div className="grid grid-cols-1 md:grid-cols-3 w-full px-10">
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
                duration-300 py-3
              ">
              Home
            </NavLink>
            <NavLink
              to="/services"
              onClick={handleMenu}
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300 py-3
              ">
              Services
            </NavLink>
            <NavLink
              to="/development-areas"
              onClick={handleMenu}
              className="
                text-transparent bg-clip-text bg-gradient-to-t from-gray-500 to-white
                text-4xl md:text-5xl hover:text-6xl hover:text-white hover:border-base-blue hover:border-b-4
                duration-300 py-3
              ">
              Development Areas
            </NavLink>
            <div className="text-center flex gap-8 justify-center md:justify-start py-3">
              <a
                href={FACEBOOK_URL}
                target='_blank'
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue">
                <FacebookIcon className="w-4 hover:w-6 duration-300" />
              </a>
              <a
                href={TWITTER_URL}
                target='_blank'
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue">
                <TwitterIcon className="w-6 hover:w-8 duration-300 mt-1" />
              </a>
              <a
                href={INSTAGRAM_URL}
                target='_blank'
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue">
                <InstagramIcon className="w-6 hover:w-8 duration-300 mt-1" />
              </a>
              <a
                href={LINKEDIN_URL}
                target='_blank'
                onClick={handleMenu}
                className="text-white text-2xl hover:text-base-blue">
                <LinkedinIcon className="w-6 hover:w-8 duration-300 mt-2" />
              </a>
            </div>
          </div>
        </div>
      </div>
    </>
  )
}
