import React, { useState } from 'react'
import {BrowserRouter as Router, Route, Routes} from "react-router-dom";

import './App.css'

import {HomePage} from './views/HomePage'

function App() {  
  return (
    <Router>
      <Routes>
          <Route path="/" element={<HomePage />} exact />
      </Routes>
    </Router>    
  )
}

export default App
