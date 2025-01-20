import React from 'react';
import { Link } from 'react-router-dom';

function Header() {
  return (
    <header className='HEADER-PRIMARY h-[50px] flex flex-row items-center justify-between bg-white pl-5 pr-5 shadow-md'>
      <div>
        <h1 className='H1 text-black'>INVENTORY APP</h1>
      </div>
      <nav className='NAVS flex items-center justify-center gap-3'>
        <Link className='Anchors text-black' to="/">Home</Link>
      </nav>
    </header>
  );
}

export default Header;