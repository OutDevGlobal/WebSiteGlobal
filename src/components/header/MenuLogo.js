import React from 'react'
import navigationIcon from '../../assets/brand/NavigationIcon.svg'
// import navigationIconBorder from '../../assets/brand/navigationIconBorder.svg'

export const MenuLogo = () => (
  <div
    className="
      flex items-center justify-center bg-navIconBorder hover:bg-navIconBorderEmpty bg-cover bg-no-repeat w-10 h-10
      sm:w-16 sm:h-16 z-9
    "
  >
    <div className="card rotate-45">
      <button type="button" className="flex justify-center rotate-45 z-10 w-6 h-6 sm:w-10 sm:h-10">
        <img src={navigationIcon} className="w-6 h-6 sm:w-10 sm:h-10" alt="OutDevGlobal-Menu" />
      </button>
    </div>
  </div>
)
