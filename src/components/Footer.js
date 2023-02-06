import React from "react";

import {
  FaHome,
  FaPhone,
  FaMailBulk,
  FaFacebook,

  FaLinkedin,
  FaTwitter,
} from "react-icons/fa";
import "./Footer.css";
const Footer = () => {
  return (
    <div className="footer">
      <div className="footer-content">
        <div className="left">
          <div className="location">
            
              
              <FaHome size={20} style={{ color: "#fff" }} className="facebook"/>
              <div>
                <p>123 Housing colony</p>
                <p>India.</p>
                
              </div>
              
             
            
          </div>
          <div className="phone">
            <h4>
              {" "}
              <FaPhone size={20} style={{ color: "#fff" }} className= "facebook" />
             1-33422-454-355443-44
            </h4>
          </div>
          <div className="email">
            <h4>
              <FaMailBulk size={20} style={{ color: "#fff" }} className= "facebook" />
              info@gmail.com
            </h4>
          </div>
        </div>

        <div className="right">
          <h3>About Me</h3>
          <p>
            Lorem dipisicing elit. Nisi vero uasi recusandae blanditiis placeat
            veritat <br />
            nfkvejhvedv dj k ndfhjvebvubr nbvyebvjdbv yurevbjdfvbeuvbedmvbeufbvejbvbejvbevhj
            <br />
            vdvhjebvjebvjbveghvbegcbe cbvcguervcbebvcbegvejgcbsugewjcg nbsdvdghtydfjxccvtkyf
          </p>
        
          <div className="social">
            <FaFacebook size={30} style={{ color: "#fff"  }} className= "facebook" />
            <FaTwitter size={30} style={{ color: "#fff" }} className = "facebook" />
            <FaLinkedin size={30} style={{ color: "#fff" } } className = "facebook" />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Footer;
