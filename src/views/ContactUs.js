import React from 'react'
import { ReactComponent as IconArrowDown } from '../assets/svg/arrow_down.svg'

export const ContactUs = () => (
  <div className="w-full relative p-10">
    {/* Start banner slide */}
    <div className="grid grid-cols-3 justify-end h-screen">
      <div className="md:col-start-3 text-2xl md:text-6xl uppercase self-end md:mr-20 md:mb-40">
        we&apos;re here for you
      </div>
    </div>
    {/* Ends banner slide */}

    {/* Start Contact slide */}
    <div className="grid grid-cols-1 md:grid-cols-2 h-screen px-20">
      <div className="md:col-start-2">
        <div className="uppercase text-2xl md:text-6xl">
          <p>Interested?</p>
          <p>Let&apos;s Talk</p>
        </div>
        <div className="md:py-20">
          <p className="font-sofia font-light text-lg">
            Just fill this form and we will contact you promptly to discuss your
            project. Hate forms? Drop us a message at
            <span className="text-base-purple"> info@outdev.com</span> or
            <span className="text-base-purple"> hello@outdev.com</span>
          </p>
        </div>
        <div>
          <form>
            <input
              type="text"
              id="name"
              placeholder="Your Name"
              className="
                w-9/12 bg-transparent border-0 border-b-2 border-white rounded mx-3 pt-4 pb-3 text-xl text-white
                outline-none focus:outline-none
              "
            />
            <input
              type="email"
              id="eamil"
              placeholder="Your Email"
              className="
                w-9/12 bg-transparent border-0 border-b-2 border-white rounded mx-3 pt-4 pb-3 text-xl text-white
                outline-none focus:outline-none
              "
            />
            <textarea
              id="description"
              placeholder="Tell Us About Your Project"
              rows="1"
              className="
                w-9/12 bg-transparent border-0 border-b-2 border-white rounded mx-3 pt-4 pb-3 text-xl text-white
                outline-none focus:outline-none
              "
            />
            <input
              type="file"
              id="file"
              className="
                w-9/12 bg-transparent rounded mx-3 pt-4 pb-3 text-xl text-white
                outline-none focus:outline-none
              "
            />
            <button
              type="submit"
              className="rounded-full border border-base-purple p-4 my-4 hover:bg-base-purple duration-300">
              Send Request
            </button>
          </form>
        </div>
      </div>
    </div>
    {/* Ends Contact slide */}

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
