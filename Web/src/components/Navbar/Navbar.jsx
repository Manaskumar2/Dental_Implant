import React from 'react';
import './Navbar.css';
import {useNavigate } from "react-router";




function Navbar() {

  const navigate = useNavigate();
  
  const navigateToHome = () => {
    if (window.location.pathname === '/') {
      window.location.reload();
    } else {
      navigate('/');
    }
  };

  const navigateToServices = () => {
    navigate("/services");
  }

  const scrollToBottom = () => {
    window.scrollTo({
      top: document.documentElement.scrollHeight,
      behavior: 'smooth',
    });
  };

  
  return (
    <nav className='navbar'>
      <ul className='navbar-nav'>
          <li className='nav-item' >
          <div className='nav-link' onClick={navigateToHome}>
              Home
            </div>
          </li>
          <li className='nav-item'>
          <div className='nav-link' onClick={navigateToServices}>
              Services
            </div>
          </li>
        <li className='nav-item'>
          <div className='nav-link' onClick={scrollToBottom}>
            Contact
          </div>
        </li>
        
        <li className='nav-item book'>
          <button className='nav-link' onClick={scrollToBottom}>
            Book an Appointment
          </button>
        </li>
      </ul>
    </nav>
  );
}

export default Navbar;
