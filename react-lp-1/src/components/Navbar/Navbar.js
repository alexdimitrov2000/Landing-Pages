import React, { useState } from 'react'
import './Navbar.css';
import { FiX, FiMenu } from 'react-icons/fi';

const Navbar = ({ navbarLinks }) => {
  const [menuClicked, setMenuClicked] = useState(false);

  const toggleMenuClick = () => {
    setMenuClicked(!menuClicked);
  };

  return (
    <nav className='navbar'>
      <span className='navbar-logo'>Travel</span>
    
      {menuClicked ? 
        <FiX size={25} className='navbar-menu' onClick={toggleMenuClick} /> : 
        <FiMenu size={25} className='navbar-menu' onClick={toggleMenuClick} />}
      <ul className={menuClicked ? 'navbar-list navbar-list-active' : 'navbar-list'}>
        {navbarLinks.map(item => {
          return (
            <li className='navbar-item' key={item.title}>
              <a className='navbar-link' href={item.url}>{item.title}</a>
            </li>
          );
        })}
      </ul>
    </nav>
  );
}

export default Navbar;