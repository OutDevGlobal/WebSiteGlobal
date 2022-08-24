import React from 'react'

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom'
import { ScrollingProvider } from 'react-scroll-section'
import { Footer } from './components/Footer'
import { Header } from './components/header/Header'
import { ScrollToTop } from './components/utils/ScrollToTop'
import { ContactUs } from './views/ContactUs'
import { DevelopmentAreas } from './views/DevelopmentAreas'
import { Home } from './views/Home'
import { Services } from './views/Services'
import { AppDevelopment } from './views/services/AppDevelopment'
import { ArVrMrDevelopment } from './views/services/ArVrMrDevelopment'
import { InmersiveWebDevelopment } from './views/services/InmersiveWebDevelopment'
import { Web2Development } from './views/services/Web2Development'
import { Web3Development } from './views/services/Web3Development'

export const SiteRouter = () => (
  <Router>
    <ScrollToTop />
    <ScrollingProvider>
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
        <Route path="/web-2-development" element={<Web2Development />} />
        <Route path="/app-development" element={<AppDevelopment />} />
        <Route path="/ar-vr-mr-development" element={<ArVrMrDevelopment />} />
        <Route path="/contact-us" element={<ContactUs />} />
      </Routes>
      <Footer />
    </ScrollingProvider>
  </Router>
)
