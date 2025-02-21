import React, { useState, useRef, useEffect } from "react";
import { FaBars, FaTwitter } from "react-icons/fa";
import { links, social } from "./data";
import logo from "./logo.svg";

const Navbar = () => {
  const [isToggled, setIsToggled] = useState(false)
  const linksContainerRef = useRef(null) 
  const linksRef = useRef(null)
  
  useEffect(()=>{
    const linksHeight = linksRef.current.getBoundingClientRect().height;
    console.log(linksHeight)
    if(isToggled){
      linksContainerRef.current.style.height = `${linksHeight}px`
    }
    else{
      linksContainerRef.current.style.height = '0px'
    }
  },[isToggled])
  return (
    <>
      <nav>
        <div className="nav-center">
          <div className="nav-header">
            <img src={logo} alt="logo" />
            <button className="nav-toggle" onClick={()=>setIsToggled(v=>!v)}>
              <FaBars /> 
            </button>
          </div>
        <div className="links-container" ref={linksContainerRef}>
           <ul className="links" ref={linksRef}>
            {links.map(link=> <li key={link.id}><a href={link.url}>{link.text}</a></li>)}
           </ul> 
          </div>
          <ul className="social-icons ">
            {social.map(socialIcon=><li><a href={socialIcon.url}>{socialIcon.icon}</a></li>)}
          </ul>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
