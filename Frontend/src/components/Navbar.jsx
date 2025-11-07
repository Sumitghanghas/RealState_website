import React, { useState, useEffect, useRef } from 'react';
import { Link } from 'react-router-dom';

function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const dropdownRef = useRef(null);

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 50);
    window.addEventListener('scroll', onScroll);

    const handleClickOutside = (event) => {
      if (dropdownRef.current && !dropdownRef.current.contains(event.target)) {
        setIsDropdownOpen(false);
      }
    };
    document.addEventListener('mousedown', handleClickOutside);

    return () => {
      window.removeEventListener('scroll', onScroll);
      document.removeEventListener('mousedown', handleClickOutside);
    };
  }, []);

  return (
    <header
      className={`fixed top-0 w-full z-50 transition-colors duration-300 ${
        scrolled ? 'bg-black' : 'bg-transparent'
      }`}
    >
      <div className="flex justify-between items-center px-6 py-4">
        <div className="flex items-center gap-2">
          <img
            src="./src/assets/gallery/logo/logo_4.png"
            alt="Logo"
            className="h-10"
          />
          <span className="text-white font-bold text-xl">
            Naveen Associates Group
          </span>
        </div>
        <nav className="relative flex gap-10 text-white font-medium mr-20">
          <Link to="/">Home</Link>

          <div className="relative" ref={dropdownRef}>
            <button
              className="focus:outline-none flex items-center gap-1 hover:cursor-pointer"
              onClick={() => setIsDropdownOpen((prev) => !prev)}
            >
              Properties ▾
            </button>

            {isDropdownOpen && (
              <div className="absolute left-0 mt-2 w-48 bg-gray-800 text-white rounded shadow-lg  border-gray-700">
                <Link
                  to="/residential"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Residential
                </Link>
                <Link
                  to="/commercial"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Commercial
                </Link>
                <Link
                  to="/industrial"
                  className="block px-4 py-2 hover:bg-gray-700"
                  onClick={() => setIsDropdownOpen(false)}
                >
                  Industrial
                </Link>
              </div>
            )}
          </div>

          <Link to="/about">About Us</Link>
          <Link to="/projects">Gallery</Link>
          <Link to="/contact">Contact Us</Link>
        </nav>
      </div>
    </header>
  );
}

export default Navbar;
