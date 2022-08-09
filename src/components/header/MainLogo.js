import React from 'react'
import iconLogo from '../../assets/svg/brand/iconLogoOutDev.svg'
import mainLogo from '../../assets/svg/brand/mainLogoOutDev.svg'

export const MainLogo = () => (
  <a href="/" target="_self" className="flex justify-start">
    <img src={iconLogo} className="m1 w-14 sm:w-24" alt="OutDevGlobal" />
    <img src={mainLogo} className="m1 w-12 sm:w-20" alt="OutDevGlobal" />
  </a>
)
