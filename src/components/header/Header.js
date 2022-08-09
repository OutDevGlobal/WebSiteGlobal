import React from 'react'
import { MainLogo } from './MainLogo'
import { MenuLogo } from './MenuLogo'

export const Header = () => (
  <nav className="w-full flex items-center justify-between flex-wrap hoverable">
    <MainLogo />
    <MenuLogo />
  </nav>
)
