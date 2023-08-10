import React from "react";
import "../componentcss/navbar.css";
import Link from "next/link";

const NavBar = () => {
  return (
    <div className='navbar'>
      <div className='red-rectangle'></div>
      <div className='red-triangle'></div>
      <div className='first-link'>
        <Link href='/'>Home</Link>
      </div>
      <div className='link'>
        <Link href='/projects'>Projects</Link>
      </div>
      <div className='link'>
        <Link href='/resume'>Resume</Link>
      </div>
      <div className='link'>
        <Link href='/contact'>Contact</Link>
      </div>
      <div className='empty-rhombus'></div>
    </div>
  );
};

export default NavBar;
