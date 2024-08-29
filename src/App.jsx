import React from 'react'
import Navbar from './component/Navbar/Navbar'
import Main from './component/Main/Main.jsx'
import About from './pages/About/About.jsx'
import Services from './pages/Services/Services.jsx'
import Skills from './component/My-skills/Skills.jsx'
import GetInTouch from './component/Get-in-touch/GetInTouch.jsx'
import Contact from './pages/Contact/Contact.jsx'
// import MyProject from './component/My-projects/MyProject.jsx'
import "./App.css"
import ScrollToTop from './component/ScrollToTop/ScrollToTop.jsx'
import { FaArrowCircleUp } from "react-icons/fa";

const App = () => {
  return (
    <div>
      <Navbar />
      <Main />

      <About />
      <Services />
      <Skills />
      {/* <MyProject /> */}
      <GetInTouch />
      <Contact />
      <ScrollToTop />

      <a href="#" class="scroll-to-top">
      <FaArrowCircleUp  className='scroll'/>
      </a>
    </div>
  )
}

export default App
