import React, { useRef } from 'react'
import '../../assets/css/Cursor.css'

export const Cursor = () => {
  const bigBallRef = useRef(null)
  // const $hoverables = document.querySelectorAll('.hoverable')

  // Move the cursor
  function onMouseMove(e) {
    if (bigBallRef.current !== null) {
      window.gsap.to(bigBallRef.current, {
        x: e.pageX - 15,
        y: e.pageY - window.scrollY - 15,
      })
    }
  }

  // Hover an element
  // function onMouseHover() {
  //   window.gsap.to(bigBallRef.current, 0.3, {
  //     scale: 4,
  //   })
  // }

  // function onMouseHoverOut() {
  //   window.gsap.to(bigBallRef.current, 0.3, {
  //     scale: 1,
  //   })
  // }

  // Listeners
  document.body.addEventListener('mousemove', onMouseMove)

  // for (let i = 0; i < $hoverables.length; i + 1) {
  //   console.log("a")
  //   $hoverables[i].addEventListener('mouseenter', onMouseHover)
  //   $hoverables[i].addEventListener('mouseleave', onMouseHoverOut)
  // }

  return (
    <div className="cursor hidden md:block">
      <div ref={bigBallRef} className="cursor-ball">
        <svg height="30" width="30">
          <circle
            cx="15"
            cy="15"
            r="15"
            strokeWidth="1"
            className="circle-cursor"
          />
        </svg>
      </div>
    </div>
  )
}
