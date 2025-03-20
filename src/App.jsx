import React from 'react'
import { Navbar } from './componetnts/Navbar'
import Home from './componetnts/Home'
import About from './componetnts/About'
import Portfolio from './componetnts/Portfolio'
import Experience from './componetnts/Experience'
import Footer from './componetnts/Footer'
import Contact from './componetnts/Contact'
// import Contact from './componetnts/test'

import toast, { Toaster } from 'react-hot-toast';


const App = () => {
  return (

    <>
      <div>
        <Toaster/>
        <Navbar />
        <Home />
        <About />
        <Portfolio />
        <Experience />
        <Contact/>
        <Footer /> 
      </div>
    </>
  )
}

export default App