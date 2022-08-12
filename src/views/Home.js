import React from 'react'
import {
  useScrollSection,
  Section,
} from 'react-scroll-section'
import { NavLink } from 'react-router-dom'

import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import { ReactComponent as IconSlashDivider } from '../assets/svg/slash_divider.svg'
import howWeDoItImg from '../assets/img/how_we_do_it.png'
import shape1 from '../assets/img/shape_test_1.png'

export const Home = () => {
  const home = useScrollSection('home')
  const whoWeAre = useScrollSection('whoWeAre')
  const stuff = useScrollSection('stuff')
  const services = useScrollSection('services')
  const howWeDoIt = useScrollSection('howWeDoIt')
  const ourTec = useScrollSection('ourTec')
  const devAreas = useScrollSection('devAreas')

  const changeSection = () => {
   
   console.log('Change Section')
  }

  return (
    <div className="w-full relative px-10">
      {/* Start home slide */}
      <Section id="home" className="-mt-32 flex justify-center h-screen">
        <div className="self-center relative">
          <img src={shape1} alt="Animation" className="w-[1000px]" />
          <div className="absolute bottom-20">
            <div className="grid grid-cols-1 md:grid-cols-2 text-lg">
              <div className="text-center">FROM IMAGINATION TO REALITY</div>
              <div className="grid grid-cols-1 text-center">
                <div className="font-sofia text-xl">
                  THE DEVELOPMENT YOUT SOFTWARE NEEDS
                </div>
              </div>
            </div>
          </div>
        </div>
      </Section>
      {/* Ends home slide */}

      {/* Start who we are slide */}
      <Section
        id="whoWeAre"
        className="grid grid-cols-1 justify-center md:p-20 h-screen">
        <div className="self-center">
          <div className="text-6xl md:p-8">WHO WE ARE</div>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 md:p-8 font-sofia font-light text-xl">
            <div className="pr-8">
              We are the company that make real the technological ventures,
              developing technological starups at early stages and generating
              MVPs.
            </div>
            <div className="pr-8">
              Reinvention moves the world forward. And that&apos;s what we do
              best. We help organizations reinvent themselves through digital
              and cognitive transformation.
            </div>
          </div>
        </div>
      </Section>
      {/* Ends who we are slide */}

      {/* Start stuff slide */}
      <Section
        id="stuff"
        className="grid grid-cols-1 justify-center md:p-20 h-screen">
        <div className="text-2xl md:text-6xl md:p-8 uppercase self-center">
          We team up with you to develop the products that you need
        </div>
      </Section>
      {/* Ends stuff slide */}

      {/* Start services slide */}
      <Section
        id="services"
        className="justify-center md:p-20 cursor-default h-screen">
        <div className="text-2xl md:text-6xl md:p-8 uppercase">
          WHAT DO WE DO?
        </div>
        <div className="text-xl md:text-4xl md:px-20">
          <div className="md:flex my-3">
            <NavLink
              to="/web-3-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
              3.0 WEB DEVELOPMENT
            </NavLink>
            <div className="mr-10 hidden md:block">
              <IconSlashDivider />
            </div>
            <NavLink
              to="/ar-vr-mr-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
              AR / VR /MR DEVELOPMENT
            </NavLink>
          </div>

          <div className="flex my-5">
            <NavLink
              to="/inmersive-web-development"
              className="
                  hover:text-base-yellow cursor-pointer md:self-center text-left duration-300
                ">
              INMERSIVE WEB DEVELOPMENT
            </NavLink>
            <div className="hidden md:block">
              <IconSlashDivider />
            </div>
          </div>

          <div className="md:flex my-5">
            <NavLink
              to="/web-2-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
              2.0 WEB DEVELOPMENT
            </NavLink>
            <div className="hidden md:block">
              <IconSlashDivider className="mr-10" />
            </div>
            <NavLink
              to="/app-development"
              className="hover:text-base-yellow cursor-pointer text-left duration-300 my-5">
              CROSS-PLATFORM MOBILE DEVELOPMENTS
            </NavLink>
          </div>
        </div>
        <div className="text-lg md:p-8 uppercase text-right my-5">
          <button type="button" className="hover:text-base-yellow duration-300">
            EXPLORE ALL EXPERTISE
          </button>
        </div>
      </Section>
      {/* Ends services slide */}

      {/* Start how we do it slide */}
      <Section id="howWeDoIt" className="justify-center md:p-20">
        <div className="self-center grid grid-cols-1 md:grid-cols-2">
          <div className="">
            <img src={howWeDoItImg} alt="How we do it" />
          </div>
          <div className="md:p-8">
            <p className="uppercase text-6xl mb-12">HOW WE DO IT?</p>
            <p className="font-sofia font-light text-lg">
              Our experience combined with a vast and diverse team of
              professionals, allows us to give you what you need, while building
              a structured growth map for the future.
            </p>
            <p className="my-8 font-sofia font-light text-lg">
              We apply the best practices to create well-structured products,
              with a solid architecture and very intuitive for the user.
            </p>
            <p className="font-sofia font-light text-lg">
              We use the most innovative technologies in all our solutions, from
              the simplest websites to the most complex native applications.
            </p>
          </div>
        </div>
      </Section>
      {/* Ends how we do ithow we do it slide */}

      {/* Start out technology slide */}
      <Section id="ourTec" className="justify-center md:p-20 my-10 md:my-auto">
        <div className="self-center">
          <div className="text-4xl md:text-6xl md:p-8 uppercase mb-12">
            OUR TECNOLOGY
          </div>
          <div className="flex flex-wrap gap-8 ">
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
            <div className="bg-black shadow-purple w-1/4 md:w-1/6 h-24 md:h-52">
              BRAND
            </div>
          </div>
        </div>
      </Section>
      {/* Ends out technology slide */}

      {/* Start dev areas slide */}
      <Section id="devAreas" className="justify-center md:p-20 h-full">
        <div className="self-center grid grid-cols-1 md:grid-cols-3">
          <div className="text-2xl md:text-4xl md:p-8 uppercase text-left cursor-default mb-8">
            we invest efforts in different areas that take us to the next level.
          </div>
          <div className="col-span-2 grid grid-cols-1 md:grid-cols-3 gap-8">
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                Research and technological development
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                SMART WEARABLES
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                SPORTS
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                ART AND ENTRETAINMENT
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                EDUCATION
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                HEALTH
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
            <button type="button" className="mb-10 text-left">
              <p className="text-2xl hover:text-base-yellow duration-300 uppercase mb-4">
                FEEDING
              </p>
              <p className="font-sofia font-light text-md">
                Lorem ipsum dolor sit amet, consectetur adipiscing elit...
              </p>
            </button>
          </div>
        </div>
      </Section>
      {/* Ends dev areas slide */}

      <div className="fixed lute cursor-pointer bottom-20 right-20 hidden md:block">
        <button type="button" onClick={changeSection} className="sticky">
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
