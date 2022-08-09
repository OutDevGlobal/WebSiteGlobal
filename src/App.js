import React from 'react'
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom'
import { Header } from './components/header/Header'
import { BGParticles } from './components/animations/Particles'
import { HomePage } from './views/HomePage'

const App = () => (
  <>
    <BGParticles />
    <Header />
    <Router>
      <Routes>
        <Route path="/" element={<HomePage />} exact />
      </Routes>
    </Router>
  </>
)

export default App
