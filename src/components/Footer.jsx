import React from 'react';
import { FaFacebook, FaTwitter, FaInstagram, FaLinkedin } from 'react-icons/fa';

function Footer() {
  return (
    <div className="bg-gradient-to-r from-gray-800 to-gray-900 text-white py-6">
      <footer className="container mx-auto px-4 text-center">
        <h1 className="text-xl font-bold mb-2">Wel Development Integral </h1>
        <p className="text-sm mb-4">© 2025 My App. All rights reserved.</p>
        <div className="flex justify-center space-x-6">
          <a href="#" className="text-blue-500 hover:text-blue-300 transition">
            <FaFacebook size={24} />
          </a>
          <a href="#" className="text-blue-400 hover:text-blue-200 transition">
            <FaTwitter size={24} />
          </a>
          <a href="#" className="text-pink-500 hover:text-pink-300 transition">
            <FaInstagram size={24} />
          </a>
          <a href="#" className="text-blue-600 hover:text-blue-400 transition">
            <FaLinkedin size={24} />
          </a>
        </div>
      </footer>
    </div>
  );
}

export default Footer;
