import React from 'react'
import { Routes, Route } from 'react-router-dom';
import Navbar from './components/Navbar'
import Hero from './components/Hero'
import About from './pages/About'
import Promises from './components/Promises'
import Choose from './pages/Choose'
import Project from './components/Project';
import Testimonial from './components/Testimonial';
import Contact from './pages/Contact';
import Footer from './components/Footer';
import NumberSpeak from './components/NumberSpeak';
import Developers from './components/Developers';
import Login from './pages/login';

export function Router() {
  return (
    <>
       
      <Routes>
         <Route path='/login' element={<Login/>}/>
        <Route path="/" element={
          <>
          <Navbar/>
            <Hero />
            <About />
            <Promises />
            <Choose />
            <Project/>
            <NumberSpeak/>
            <Developers/>
            <Testimonial/>
            <Contact/>
            <Footer/>
          </>   
        } />
        <Route path="/contact" element={<Choose />} />
      </Routes>
    </>

  )
}

export default Router;