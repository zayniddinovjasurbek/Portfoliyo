import React from 'react'
import "./Services.css"
import { FaConnectdevelop } from "react-icons/fa";
import { FaDev } from "react-icons/fa";
import { MdDeveloperBoard } from "react-icons/md";  




const Services = () => {
  return (
    <div className='services-container' id='services'>
        <h2>What i do</h2>
      <div className="cards-container">
        <div className="card">
          <div className="icon"><FaConnectdevelop /></div>
          <h3>Software <br/> Development</h3>
        </div>
        <div className="card ">
          <div className="icon"><FaDev /></div>
          <h3>Web <br/> Development</h3>
        </div>
        <div className="card">
          <div className="icon"><MdDeveloperBoard /></div>
          <h3>Web <br/> Design</h3>
        </div>
      </div>
    </div>
  )
}

export default Services
