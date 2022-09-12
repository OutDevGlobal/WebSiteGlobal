import React from 'react'
import { Section } from 'react-scroll-section'
import logo from '../assets/svg/brand/mainLogoOutDev.svg'
import background from '../assets/img/background_footer.png'
import { Link, NavLink } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { setSection } from '../redux/sectionSlice'

export const Footer = () => {
  const dispatch = useDispatch()

  return (
    <Section id="footer" className="h-full"> 
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
            <div className="flex gap-8 mr-10">
              <div className="flex flex-col font-sofia font-bold gap-2 mb-4 text-xl lg:text-4xl">
                <p className="text-white hover:text-base-purple duration-300 cursor-default">USA</p>
                <p className="hover:text-base-purple duration-300 cursor-default">MX</p>
                <p className="hover:text-base-purple duration-300 cursor-default">CANADA</p>
              </div>
              <div className="flex flex-col font-sofia font-bold gap-2 mb-4">
                <p className="font-sofia font-light text-xl">
                  The Gas Company Tower 555 West 5th Street 35th Floor
                </p>
                <p className="font-sofia font-bold text-lg">
                  Los Angeles, California 90013
                </p>
                <p className="font-sofia text-lg">
                  <span className="font-bold">USA Direct: </span> +1 (310) 910 9151
                </p>
                <p className="font-sofia text-lg">
                  <span className="font-bold">México: </span> +52 (33) 2315 2303
                </p>
                <p className="font-sofia text-lg">
                  <span className="font-bold">E.Mail: </span> contacto@outdev.com.mx
                </p>
              </div>
            </div>
            <div className="grid grid-cols-1 md:grid-cols-3 gap-3 mb-4 font-sofia font-light">
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/"
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  Home
                </NavLink>
                <Link
                  to="/"
                  onClick={() => { dispatch(setSection("whoWeAre")) }}
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  About us
                </Link>
                <NavLink
                  to="/"
                  onClick={() => { dispatch(setSection("ourTech")) }}
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  Our Tech
                </NavLink>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/services"
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  Services
                </NavLink>
                <NavLink
                  to="/development-areas"
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  Research and Development
                </NavLink>
              </div>
              <div className="flex flex-col gap-2">
                <NavLink
                  to="/contact-us"
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  Locations
                </NavLink>
                <NavLink
                  to="/contact-us"
                  onClick={() => { dispatch(setSection("content")) }}
                  className="text-white text-2xl hover:text-base-purple duration-300">
                  Contact us
                </NavLink>
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
}