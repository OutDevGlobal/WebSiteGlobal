import React, { useEffect } from 'react'
import M from 'react-moving-text'
const MovingText = M.default? M.default: M
import { Section, useScrollSection } from 'react-scroll-section'
import { HideScroll } from 'react-hide-on-scroll'
import { ScrollTrigger } from 'gsap/ScrollTrigger'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'
import { ReactComponent as AttachIcon } from '../assets/svg/attach.svg'

export const ContactUs = () => {
  const content = useScrollSection('content')

  const handleChangeSection = () => {
    content.onClick()
  }

  useEffect(() => {
    window.gsap.registerPlugin(ScrollTrigger)

    // Text animation
    window.gsap.utils.toArray('.animated-text-contact').forEach((element) => {
      ScrollTrigger.create({
        trigger: element,
        markers: true,
        onEnter() {
          element.classList.remove('hidden')
          element.classList.add('block')
        },
        onLeave() {
          element.classList.remove('block')
          element.classList.add('hidden')
        },
        onEnterBack() {
          element.classList.remove('hidden')
          element.classList.add('block')
        },
        onLeaveBack() {
          element.classList.remove('block')
          element.classList.add('hidden')
        },
      })
    })
  }, [])

  useEffect( () => () => ScrollTrigger.getAll().forEach(st => st.kill()), [] )

  useEffect( () => {
    if (location.pathname !== '/' &&  document.getElementById('canvas-bg') !== null) {
      document.getElementById('canvas-bg').remove()
    }
  }, [] )

  return (
    <div className="w-full relative">
      {/* Start banner slide */}
      <div className="grid grid-cols-1 md:grid-cols-3 md:justify-end h-screen">
        <div className="md:col-start-3 text-2xl md:text-6xl uppercase justify-center md:self-center md:mr-20">
          <MovingText
            className="animated-text-contact hidden"
            type="fadeInFromRight"
            duration="1000ms"
            delay="0s"
            direction="normal"
            timing="ease"
            iteration="1"
            fillMode="none">
            we&apos;re here for you
          </MovingText>
        </div>
      </div>
      {/* Ends banner slide */}

      <Section id="content">
        {/* Start Contact slide */}
        <div className="grid grid-cols-1 md:grid-cols-2 h-screen md:px-20">
          <div className="md:col-start-2">
            <div className="uppercase text-2xl md:text-6xl">
              <MovingText
                className="animated-text-contact hidden"
                type="fadeInFromRight"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p>Interested?</p>
                <p>Let&apos;s Talk</p>
              </MovingText>
            </div>
            <div className="md:py-20">
              <MovingText
                className="animated-text-contact hidden"
                type="popIn"
                duration="2000ms"
                delay="0ms"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none">
                <p className="font-sofia font-light text-lg">
                  Just fill this form and we will contact you promptly to
                  discuss your project. Hate forms? Drop us a message at
                  <span className="text-base-purple"> info@outdev.com</span> or
                  <span className="text-base-purple"> hello@outdev.com</span>
                </p>
              </MovingText>
            </div>
            <div>
              <MovingText
                className="animated-text-contact hidden"
                type="shakeMix"
                duration="1000ms"
                delay="0ms"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none">
                <form>
                  <input
                    type="text"
                    id="name"
                    placeholder="Your Name"
                    className="
                      w-full md:w-9/12 bg-transparent border-0 border-b-2 border-white rounded mx-3 pt-4 pb-3 text-xl
                      text-white outline-none focus:outline-none
                      
                    "
                  />
                  <input
                    type="email"
                    id="eamil"
                    placeholder="Your Email"
                    className="
                      w-full md:w-9/12 bg-transparent border-0 border-b-2 border-white rounded mx-3 pt-4 pb-3 text-xl
                      text-white outline-none focus:outline-none
                    "
                  />
                  <textarea
                    id="description"
                    placeholder="Tell Us About Your Project"
                    rows="1"
                    className="
                      w-full md:w-9/12 bg-transparent border-0 border-b-2 border-white rounded mx-3 pt-4 pb-3 text-xl
                      text-white outline-none focus:outline-none
                    "
                  />
                  <div className="flex">
                    <label
                      htmlFor="file"
                      className="pt-4 pl-4 cursor-ponter flex">
                      <AttachIcon />
                      <span className="ml-4">Add Attachment</span>
                      <input type="file" id="file" className="hidden" />
                    </label>
                  </div>
                  <button
                    type="submit"
                    className="rounded-full border border-base-purple p-4 mt-10 hover:bg-base-purple duration-300">
                    Send Request
                  </button>
                </form>
              </MovingText>
            </div>
          </div>
        </div>
        {/* Ends Contact slide */}
      </Section>

      <HideScroll variant="down">
        <div className="fixed lute cursor-pointer bottom-20 right-20 hidden md:block">
          <button
            type="button"
            onClick={handleChangeSection}
            className="sticky">
            <IconArrowDown
              className="
                text-transparent hover:text-base-yellow hover:translate hover:scale-110 duration-300
              "
            />
          </button>
        </div>
      </HideScroll>
    </div>
  )
}
