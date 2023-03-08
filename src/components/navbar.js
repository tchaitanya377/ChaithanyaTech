import './navbar.css'
import React, { useState } from "react";
import { Link } from "react-router-dom";
import  logo  from "./ct.png"

export const Nav = () => {

    const [isActive, setIsActive] = useState(false);

    const toggleNavbar = () => {
      setIsActive(!isActive);
    };

    return(
        <div className={`navbar ${isActive ? "active" : ""}`}>
            <nav>
                <div className='nav-heading'>
                <img src={logo} alt="logo"  height="100rem" />
                    <h3 className='nav-title'>Chaithanya <b className='tech'>Tech</b></h3>
                </div>
                <div className="nav-items">
                    <ul className="nav-list">
                        <li><Link to='/'> Home </Link></li>
                        {/* <li><Link to='/'> Blog </Link></li> */}
                        <li><Link to='/portfolio'> Portfolio </Link></li>
                        <li><Link to='/about'> About </Link></li>
                    
                    </ul>
                </div>
                <div className='icons' onClick={toggleNavbar} >
                <ion-icon name="menu-outline" className='icon-nav'></ion-icon>
                <ion-icon name="close-outline" className='icon-nav'></ion-icon>
                </div>
                
            </nav>
        </div>
    )
} 