'use client';

import { useState } from "react";

const Navbar = () => {
  const [isNavOpen, setIsNavOpen] = useState(false);

  return (
    <nav className="bg-gray-800 text-white p-4 flex justify-between items-center">
      <div className="logo font-bold">Your Brand</div>
      <button 
        className="md:hidden block" // Show hamburger only on smaller screens
        onClick={() => setIsNavOpen(!isNavOpen)}
      >
        MENU
      </button>
      <ul className={`md:flex items-center space-x-4 absolute md:static bg-gray-800 w-full left-0 p-4 md:p-0 top-12 md:top-0 transition-all ${isNavOpen ? 'opacity-100' : 'opacity-0 -top-96'}`}>
        <li><a href="#" className="hover:text-blue-500">Home</a></li>
        <li><a href="#" className="hover:text-blue-500">About</a></li>
        <li><a href="#" className="hover:text-blue-500">Services</a></li>
        <li><a href="#" className="hover:text-blue-500">Contact</a></li>
      </ul>
    </nav>
  );
};

export default Navbar;