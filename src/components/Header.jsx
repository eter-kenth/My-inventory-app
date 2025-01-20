import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className="bg-gray-800 text-white shadow-lg py-10">
      <div className="container mx-auto flex items-center justify-between px-">
        <h1 className="text-xl font-semibold tracking-wide">Inventory App</h1>
        <nav className="flex space-x-4">
          <Link 
            className="text-white hover:text-gray-400 transition duration-300 font-medium" 
            to="/inventory"
          >
            Inventory
          </Link>
          <Link 
            className="text-white hover:text-gray-400 transition duration-300 font-medium" 
            to="/orders"
          >
            AboutAPP
          </Link>
        </nav>
      </div>
    </header>
  );
}

export default Header;
