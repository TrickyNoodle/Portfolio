import React from 'react'
import Navbar from './components/Navbar'
import './App.css'
import { Route, Routes } from 'react-router'
import Home from './components/Home/Home'
import About from './components/About/About'
import Footer from './components/Footer'
import Work from './components/Work/Work'
const App = () => {
  return (
    <>
      <Navbar />
      <Routes>
        <Route index element={<Home />} />
        <Route path='about-me' element={<About />} />
        <Route path='work' element={<Work/>}/>
      </Routes>
      <Footer />
    </>
  )
}

export default App