import React, { useRef } from 'react'

export const Cursor = () => {
  const bigBallRef = useRef(null)

  // Move the cursor
  function onMouseMove(e) {
    if (bigBallRef.current !== null) {
      window.gsap.to(bigBallRef.current, {
        x: e.pageX - 20,
        y: e.pageY - window.scrollY - 20,
      })
    }
  }

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove)

  return (
    <span
      ref={bigBallRef}
      id="custom-cursor"
      className="
        fixed top-0 left-0 mix-blend-difference pointer-events-none
        hidden md:block h-10 w-10 rounded-full border-2 border-base-yellow duration-800
      "
      style={{ zIndex: '100' }}
    />
  )
}
