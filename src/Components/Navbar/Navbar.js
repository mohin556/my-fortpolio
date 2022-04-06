import React from 'react';
import './Navbar.css'
const Navbar = () => {
    return (
        <div className='navbar'>
            <div className="nav-left">
                <div className='name'>Mohin Al Hoque</div>
                <span>toggole</span>
            </div>
            <div className="nav-right">
                <div className='nav-list'>
                   <ul style={{listStyleType: 'none'}} >
                       <li>Home</li>
                       <li>Services</li>
                       <li>Experience</li>
                       <li>Portfolio</li>
                       <li>Testimonial</li>
                   </ul>
                </div>
                <button className='button' >Contact </button>
            </div>
        </div>
    );
};

export default Navbar;