import React from 'react';
import {  Link } from "react-router-dom";


import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <div className='name'>Mohin Al Hoque</div>
             
            </div>
            <div className="nav-right">
                <div className='nav-list'>
                   <ul style={{listStyleType: 'none'}} >
                       <li><Link  className='li-list' to="/home">Home</Link></li>
                       <li><Link className='li-list' to="/servicess">Servicess</Link></li>
                       <li><Link className='li-list' to="/projects">Project</Link></li>
                       <li><Link className='li-list' to="/testimonials">Review</Link></li>
                       
                       
                     
                   </ul>
                </div>
                <button className='button c-button ' ><Link to="/contact">Contact</Link> </button>
            </div>
        </div>
    );
};

export default Navbar;