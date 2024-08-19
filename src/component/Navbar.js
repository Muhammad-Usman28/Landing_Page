import React, { useState } from 'react';

export default function Navbar() {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  return (
    <div className="w-full">
      <header className="
         fixed top-0 left-0 right-0 z-100 bg-white shadow-lg
        xl:w-full xl:h-14 xl:flex xl:items-center xl:justify-between xl:px-4
        lg:w-full lg:h-14 lg:flex lg:items-center lg:justify-between lg:px-4
        md:w-full md:h-14 md:flex md:items-center md:justify-between md:px-4
        sm:w-full sm:h-14 sm:flex sm:items-center sm:justify-between sm:px-4">
        
        <h1 className="
          xl:text-black xl:font-bold xl:text-4xl 
          lg:text-black lg:font-bold lg:text-2xl
          md:text-black md:font-bold md:text-2xl
          sm:text-black sm:font-bold sm:text-lg">Burj Services Company</h1>
        
        <button onClick={toggleMenu} className="xl:hidden lg:hidden md:hidden sm:block text-black focus:outline-none">
          <svg className="w-8 h-8" fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16"></path>
          </svg>
        </button>
        
        {/* Navbar for larger screens */}
        <nav className="hidden xl:flex xl:justify-between lg:flex md:flex space-x-12 mt-1"> {/* Adjusted spacing */}
          <a href="/home" className="
            xl:text-black xl:font-semibold xl:text-2xl 
            lg:text-black lg:font-semibold lg:text-xl
            md:text-black md:font-semibold md:text-lg
            block">Home</a>
          <a href="/sitebook" className="
            xl:text-black xl:font-semibold xl:text-2xl 
            lg:text-black lg:font-semibold lg:text-xl
            md:text-black md:font-semibold md:text-lg
            block">Sitebook</a>
          <a href="/about" className="
            xl:text-black xl:font-semibold xl:text-2xl 
            lg:text-black lg:font-semibold lg:text-xl
            md:text-black md:font-semibold md:text-lg
            block">About Us</a>
          <a href="/contact-us" className="
            xl:text-black xl:font-semibold xl:text-2xl 
            lg:text-black lg:font-semibold lg:text-xl
            md:text-black md:font-semibold md:text-lg
            block">Contact Us</a>
        </nav>
        
        {/* Dropdown menu for smaller screens */}
        {menuOpen && (
          <nav className="sm:block md:hidden lg:hidden xl:hidden absolute top-14 left-0 right-0 bg-white shadow-lg">
            <a href="/home" className="block px-4 py-2 text-black text-lg font-semibold">Home</a>
            <a href="/sitebook" className="block px-4 py-2 text-black text-lg font-semibold">Sitebook</a>
            <a href="/about" className="block px-4 py-2 text-black text-lg font-semibold">About Us</a>
            <a href="/contact-us" className="block px-4 py-2 text-black text-lg font-semibold">Contact Us</a>
          </nav>
        )}
      </header>
    </div>
  );
}
