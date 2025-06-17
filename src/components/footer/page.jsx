"use client";
import React from 'react';
import { Links } from '../../data.js';

const Footer = () => {
  return (
    <footer className="bg-zinc-900 text-zinc-300 px-6 md:px-16 py-12 mt-10">
      <div className="max-w-7xl mx-auto grid gap-10 md:grid-cols-3 items-start">
        {/* Logo + Description */}
        <div>
          <h3 className="text-2xl font-bold text-white mb-4">LOGO</h3>
          <p className="text-sm leading-relaxed text-zinc-400">
            Decode the future. One line at a time. Tech insights, tutorials, and trends for every developer.
          </p>
        </div>

        {/* Navigation Links */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Quick Links</h4>
          <ul className="flex flex-col gap-2">
            {Links.map(({ id, url, name }) => (
              <li key={id}>
                <a href={url} className="hover:text-white transition-colors duration-200">
                  {name}
                </a>
              </li>
            ))}
          </ul>
        </div>

        {/* Contact or Info */}
        <div>
          <h4 className="text-lg font-semibold text-white mb-4">Contact</h4>
          <ul className="text-sm flex flex-col gap-2 text-zinc-400">
            <li>Email: contact@yourdomain.com</li>
            <li>Phone: +123 456 7890</li>
            <li>Address: 123 Code Street, Dev City</li>
          </ul>
        </div>
      </div>

      {/* Bottom Bar */}
      <div className="mt-12 border-t border-zinc-700 pt-6 text-center text-sm text-zinc-500">
        &copy; {new Date().getFullYear()} YourSiteName. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
