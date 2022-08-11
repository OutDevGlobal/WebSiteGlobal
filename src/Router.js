import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { DevelopmentAreas } from './views/DevelopmentAreas'
import { Home } from './views/Home'
import { Services } from './views/Services'
import { InmersiveWebDevelopment } from './views/services/InmersiveWebDevelopment'
import { Web3Development } from './views/services/Web3Development'

export const SiteRouter = () => (
  <Router>
    <Header />
    <Routes>
      <Route path="/" element={<Home />} />
      <Route path="/development-areas" element={<DevelopmentAreas />} />
      <Route path="/services" element={<Services />} />
      <Route path="/web-3-development" element={<Web3Development />} />
      <Route
        path="/inmersive-web-development"
        element={<InmersiveWebDevelopment />}
      />
    </Routes>
    <Footer />
  </Router>
)
