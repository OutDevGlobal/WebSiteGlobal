import React from 'react'
import iconLogo from '../../assets/svg/brand/iconLogoOutDev.svg'
import mainLogo from '../../assets/svg/brand/mainLogoOutDev.svg'

export const MainLogo = () => (
  <a href="/" target="_self" className="flex justify-start z-49">
    <img src={iconLogo} className="w-14 sm:w-24" alt="OutDevGlobal" />
    <img src={mainLogo} className="w-12 sm:w-20" alt="OutDevGlobal" />
  </a>
)
