import "./Navbar.css"
import React , {useState} from 'react'
import { NavLink } from "react-router-dom"
import {FaBars , FaTimes} from "react-icons/fa";

const Navbar = () => {
    const [click, setClick] = useState(false);
    const handleclick = () => setClick(!click);
    const [color, setColor] = useState(false);
    const changecolor = ()=>{
        if(window.scrollY>=1){
            setColor(true);
        }
        else{
            setColor(false);
        }
    };
    window.addEventListener("scroll",changecolor);

  return (
    <>
    <div className={color?"header header-bg": "header"}>
<NavLink to ="/">
    <h1>Tushar.</h1>
</NavLink>
<ul className={click ?"nav-menu active":"nav-menu"}>
   
      <li><NavLink to ="/">Home</NavLink></li>
      <li><NavLink to = "/project">Projects</NavLink></li>  
       <li><NavLink to = "/about">About</NavLink></li> 
      <li><NavLink to = "/contact">Contact</NavLink></li>  
    
</ul>
<div className="hamburger" onClick={handleclick}>
   { click ? (<FaTimes size= {20} style = {{color:"#fff"}}/>) : (<FaBars size= {20} style = {{color:"#fff"}}/>) }
</div>
    </div>
  </>
  )
}

export default Navbar