// import React from "react";
import { useState } from "react";
import "./header.css";

const Header = () => {

  const [Toggle,showMenu]= useState(false);

  return (
    <div>
      <header className="header">
        <nav className="nav container">
          <a href="#home" className="nav_logo">Priyansh</a>
          <div className={Toggle ? "nav_menu show_menu" : "nav_menu" }>
            <ul className="nav_list grid">
              <li className="nav_item">
                <a href="#home" className="nav_link active_link">
                  <i className="fa-solid fa-house  nav_icon"></i>Home
                </a>
              </li>
              <li className="nav_item">
                <a href="#about" className="nav_link">
                  <i className="fa-regular fa-user nav_icon"></i>About
                </a>
              </li>
              <li className="nav_item">
                <a href="#skills" className="nav_link">
                  <i className="fa-regular fa-file nav_icon"  ></i>Skills
                </a>
              </li>
          
              <li className="nav_item">
                <a href="#Qualification" className="nav_link">
                <i className="fa-solid fa-graduation-cap nav_icon"></i> &nbsp; Qualification
                </a>
              </li>
          
              <li className="nav_item">
                <a href="#portfolio" className="nav_link">
                <i className="fa-regular fa-image nav_icon"  ></i>Portfolio
                </a>
              </li>
              <li className="nav_item">
                <a href="#contact" className="nav_link">
                  <i className="fa-regular fa-address-book nav_icon" ></i>Contact
                </a>
              </li>
            </ul>

            <i className="fa-solid fa-xmark nav_close " onClick={()=>showMenu(!Toggle)}></i>
          </div>
          <div className="nav_toggle" onClick={() => 
            {
              showMenu(!Toggle);
            }
          }>
            <i className="fa-solid fa-grip nav_openbar"></i>
          </div>

        </nav>
      </header>
    </div>
  );
};

export default Header;
