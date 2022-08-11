import React from 'react';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';
import { Footer } from './components/Footer';
import { Header } from './components/header/Header';
import { DevelopmentAreas } from './views/DevelopmentAreas';
import { Home } from './views/Home';
import { Services } from './views/Services';

export const SiteRouter = () => {
  return (
    <>
      <Router>
        <Header />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route path="/development-areas" element={<DevelopmentAreas />} />
          <Route path="/services" element={<Services />} />
        </Routes>
        <Footer />
      </Router>
    </>
  );
}