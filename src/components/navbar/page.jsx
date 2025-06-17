"use client";
import React from 'react';
import { Links } from '../../data.js';
import { UseGlobalContext } from '../../Context.jsx';

const Navbar = () => {
  const { openMenu, navToggle } = UseGlobalContext();

  return (
    <div>
      <nav className='px-8 flex justify-between mt-4 max-md:px-9 md:px-16'>
        <div className="w-xl h-xl">
          LOGO
        </div>

        {/* Desktop links */}
        <ul className='flex gap-4 capitalize text-zinc-400 max-md:hidden'>
          {Links.map(({ id, url, name }) => (
            <li key={id}>
              <a className='cursor-pointer hover:text-zinc-50 transition-all' href={url}>{name}</a>
            </li>
          ))}
        </ul>

        {/* Mobile menu toggle button */}
        <div className='md:hidden'>
          <h4 className='cursor-pointer' onClick={navToggle}>☰</h4>
        </div>
      </nav>

      {/* Slide-in Mobile Menu */}
      <div
        className={`fixed top-0 right-0 h-full w-64 bg-zinc-900 text-white z-50 shadow-lg transition-transform duration-300 ease-in-out 
        ${openMenu ? 'translate-x-0' : 'translate-x-full'}`}
      >
        <div className='flex flex-col p-6 gap-4 capitalize'>
          {Links.map(({ id, url, name }) => (
            <a key={id} className='hover:text-zinc-300' href={url}>
              {name}
            </a>
          ))}
          <button onClick={navToggle} className="mt-4 text-sm text-zinc-400 hover:text-white">Close</button>
        </div>
      </div>

      {/* Optional background overlay */}
      {openMenu && (
        <div
          className="fixed inset-0 bg-black/50 z-40"
          onClick={navToggle}
        />
      )}
    </div>
  );
};

export default Navbar;
