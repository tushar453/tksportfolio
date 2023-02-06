import "./Hero.css";
import React from 'react'
import Introimg from "../components/assests/images.jpg";
import { NavLink } from "react-router-dom";
const Hero = () => {
  return (
    <div className="hero">
      <div className="mask">
<img classname= "into-img"src={Introimg} alt="Introimg" />
      </div>
      <div className="content">
        <p>Hi THIS IS TUSHARKANT SHARMA</p>
        <h1>React Developer.</h1>
         <div >
        <NavLink to = "/project" className="btn">Projects </NavLink>
        <NavLink to = "/contact" className="btn btn-light">Contact</NavLink>
      </div>
      </div>
     
    </div>

  )
}

export default Hero

