import React from 'react'
import { Section } from 'react-scroll-section'
import logo from '../assets/svg/brand/mainLogoOutDev.svg'
import background from '../assets/img/background_footer.png'

export const Footer = () => (
  <Section id="footer">
    <footer className="md:flex justify-center">
      <div className="md:w-full relative">
        <img
          src={background}
          className="absolute w-full md:w-5/12 h-[400px] md:h-[400px] -mt-28 md:-ml-12 z-5"
          alt="Blue Light"
        />
        <div className="grid grid-cols-1 md:grid-cols-3 text-center md:text-left">
          <div className="flex justify-center z-10">
            <img src={logo} className="w-52" alt="OutDev" />
          </div>
          <div className="z-10">
            <div className="flex flex-col font-sofia font-light gap-2 mb-4">
              <a
                href="/"
                className="text-white text-xl hover:text-base-purple duration-300">
                JOIN US
                <p>CAREERS@OUTDEV.COM</p>
              </a>
              <a
                href="/"
                className="text-white text-xl hover:text-base-purple duration-300">
                OUTDEV.MX
              </a>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 font-sofia font-light">
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                Home
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                About us
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                Our Tec
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                Services
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                Research and Development
              </a>
            </div>
            <div className="flex flex-col gap-2">
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                Locations
              </a>
              <a
                href="/"
                className="text-white text-2xl hover:text-base-purple duration-300">
                Contact us
              </a>
            </div>
          </div>
        </div>
        <div className="w-full grid grid-cols-1 md:grid-cols-2 gap-3 mb-4">
          <div className="flex justify-center z-10">
            &copy; {new Date().getFullYear()} OutDevGlobal
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 text-center gap-2">
            <div>
              <a
                href="/"
                className="text-white text-sm hover:text-md hover:text-base-purple duration-300">
                Terms and Conditions
              </a>
            </div>
            <div>
              <a
                href="/"
                className="text-white text-sm hover:text-2md hover:text-base-purple duration-300">
                Privacy Policy
              </a>
            </div>
          </div>
        </div>
      </div>
    </footer>
  </Section>
)
