import React, { useState } from 'react';
import { FaBars, FaTimes } from 'react-icons/fa';

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className='bg-black text-white px-8 md:px-16 lg:px-24'>
      <div className='container py-4 flex justify-between items-center'>
        <div className='text-2xl font-bold'>TSR</div>

        {/* Desktop Menu */}
        <div className='hidden md:flex space-x-6'>
          <a href="#home" className='hover:text-gray-400'>Home</a>
          <a href="#about" className='hover:text-gray-400'>About Me</a>
          <a href="#service" className='hover:text-gray-400'>Services</a>
          <a href="#project" className='hover:text-gray-400'>Projects</a>
          <a href="#contact" className='hover:text-gray-400'>Contact</a>
        </div>
        <a href='#contact'>
        <button className='hidden md:inline bg-gradient-to-r from-green-400 to-blue-500 text-white transform transition-transform duration-300 hover:scale-105 px-4 py-2 rounded-full'>
          Connect Me
        </button>
        </a>

        {/* Mobile Hamburger */}
        <div className='md:hidden'>
          <button onClick={toggleMenu}>
            {isOpen ? <FaTimes size={24} /> : <FaBars size={24} />}
          </button>
        </div>
      </div>

      {/* Mobile Menu */}
      {isOpen && (
        <div className='md:hidden flex flex-col items-center space-y-4 py-4'>
          <a href="#home" onClick={toggleMenu} className='hover:text-gray-400'>Home</a>
          <a href="#about" onClick={toggleMenu} className='hover:text-gray-400'>About Me</a>
          <a href="#service" onClick={toggleMenu} className='hover:text-gray-400'>Services</a>
          <a href="#project" onClick={toggleMenu} className='hover:text-gray-400'>Projects</a>
          <a href="#contact" onClick={toggleMenu} className='hover:text-gray-400'>Contact</a>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
