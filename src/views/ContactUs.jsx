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
        markers: false,
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
            <div className="uppercase text-2xl md:text-7xl font-bold mt-10">
              <MovingText
                className="animated-text-contact hidden"
                type="fadeInFromRight"
                duration="1000ms"
                delay="0s"
                direction="normal"
                timing="ease"
                iteration="1"
                fillMode="none">
                <p>USA</p>
                <p>MX</p>
                <p>CANADA</p>
              </MovingText>
            </div>
            <div className="md:py-5">
              <MovingText
                className="animated-text-contact hidden"
                type="popIn"
                duration="2000ms"
                delay="0ms"
                direction="normal"
                timing="ease-out"
                iteration="1"
                fillMode="none">
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
