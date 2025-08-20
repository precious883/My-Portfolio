import React from "react";
import './NavBar.css';
import InputField from "./InputField";
import AboutMe from "./AboutMe";
import Skills from "./Skills";
import Portfolio from "./Portfolio";
import Contact from "./Contact";
import { useNavigate } from "react-router-dom";


const NavBar = () => {
   const navigate = useNavigate ();
  

  const user = JSON.parse(localStorage.getItem('user') || 'null');

    if (!user){ 
        return <h2> Access denield. Please LogIn.</h2>
}
  return(
    <div>
      <div className="navbar" > 
          <ul>
            <li><a onClick={() => navigate ("/AboutMe") }>About Me</a></li>
            <li><a onClick={() => navigate ('/Skills')}>Skills</a></li>
            <li><a onClick={() => navigate ("/Portfolio")}>Portfolio</a></li>
            <li><a onClick={() => navigate ("/Contact")}>Contact Me</a></li>
          </ul>
      </div>
    </div>
    )
  };

export default NavBar;
