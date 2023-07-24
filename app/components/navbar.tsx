// components/CyberpunkNavBar.js

import React from "react";
import "../componentcss/navbar.css";
import Link from "next/link";
const NavBar = () => {
  return (
    <div className='navbar'>
      <Link href='/'>Home</Link>
      <Link href='/projects'>Projects</Link>
      <Link href='/resume'>Resume</Link>
      <Link href='/contact'>Contact</Link>
    </div>
  );
};

export default NavBar;
