import React from "react";
import Navbar from "../components/Navbar";
import Footer from "../components/Footer";
import Hero2 from "../components/Hero2";

import Abouts from "../components/Abouts";
const About = () => {
  return (
    <div>
    <Navbar/>
    
    {<Hero2 heading = "About Me" text = "I'M a fronted developer"/>}
    <Abouts/>
    <Footer/>
    </div>
  );
};

export default About;
