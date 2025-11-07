import React from 'react';
import {
  PhoneIcon,
  EnvelopeIcon,
  MapPinIcon,
} from '@heroicons/react/24/solid';
import {
  FaFacebookF,
  FaTwitter,
  FaInstagram,
  FaYoutube,
  FaLinkedin,
} from 'react-icons/fa';


function Footer() {
  return (
     <footer className="bg-gray-900 text-gray-300 px-6 py-16">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-3 gap-8">
        {/* Contact Info */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h3 className="text-xl font-bold text-white mb-2">Naveen Associates Group</h3>
          <p className="text-sm text-gray-400 mb-4">Trusted for Transparency</p>
          <ul className="space-y-3 text-sm mt-15">
            <li className="flex items-center gap-2 mt-4">
              <PhoneIcon className="h-4 w-4 text-cyan-700 " />
              +91 98765 43210
            </li>
            <li className="flex items-center gap-2 mt-4">
              <EnvelopeIcon className="h-4 w-4 text-cyan-700 " />
              info@urbanvista.in
            </li>
            <li className="flex items-center gap-2 mt-4">
              <MapPinIcon className="h-4 w-4 text-cyan-700" />
              3rd Floor, Golf View Tower-A, Sector 42, Gurgaon
            </li>
          </ul>
          <h1 className='text-xl font-bold text-cyan-700 mt-15'>Follow Us</h1>
          <div className="flex gap-8 mt-4 text-white">
            <FaFacebookF className="hover:text-cyan-700 cursor-pointer" />
            <FaTwitter className="hover:text-cyan-700 cursor-pointer" />
            <FaInstagram className="hover:text-cyan-700 cursor-pointer" />
            <FaYoutube className="hover:text-cyan-700 cursor-pointer" />
          </div>
        </div>

        {/* Quick Links */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-cyan-700 mb-8">Quick Links</h4>
          <ul className="space-y-3 text-sm">
            <li><a href="#about" className="hover:text-cyan-700 mt-6">About Us</a></li>
            <li><a href="#projects" className="hover:text-cyan-700 mt-6">Properties</a></li>
            <li><a href="#developers" className="hover:text-cyan-700 mt-6">Developers</a></li>
            <li><a href="#career" className="hover:text-cyan-700 mt-6">Career</a></li>
            <li><a href="#contact" className="hover:text-cyan-700 mt-6">Contact Us</a></li>
            <li><a href="#news" className="hover:text-cyan-700 mt-6">News & Updates</a></li>
          </ul>
        </div>

        {/* Featured Projects */}
        <div className="bg-gray-800 rounded-xl p-6 shadow-md">
          <h4 className="text-lg font-semibold text-cyan-700 mb-4">Featured Projects</h4>
          <ul className="space-y-4 text-sm">
            <li>
              <div className="bg-gray-700 rounded-md p-3">
                <p className="font-semibold text-white">Whiteland The Aspen</p>
                <p className="text-gray-400 text-xs">Sector 76, Gurgaon</p>
              </div>
            </li>
            <li>
              <div className="bg-gray-700 rounded-md p-3">
                <p className="font-semibold text-white">Whiteland Blissville</p>
                <p className="text-gray-400 text-xs">Sector 76, Gurgaon</p>
              </div>
            </li>
            <li>
              <div className="bg-gray-700 rounded-md p-3">
                <p className="font-semibold text-white">DLF The Arbour</p>
                <p className="text-gray-400 text-xs">Premium Location</p>
              </div>
            </li>
          </ul>
          <button className="mt-6 bg-cyan-700 text-white px-4 py-2 rounded-md hover:bg-cyan-500 transition">
            View All Projects
          </button>
        </div>
      </div>

      {/* Copyright */}
      <div className="text-center text-sm text-gray-500 mt-10">
        &copy; {new Date().getFullYear()} Naveen Associates Group. All rights reserved.
      </div>
    </footer>


  );
}

export default Footer