'use client';
import React, { useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Image from 'next/image';
import Con from '../../utils/contact-image.jpg';

const Contacts = () => {
  const container = useRef(null);

  useGSAP(() => {
    gsap.fromTo(
      '#contact-image',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out' }
    );

    gsap.fromTo(
      '#contact-form',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.5, ease: 'power2.out', delay: 0.3 }
    );
  }, { scope: container });

  return (
    <section ref={container} className="w-full py-20 px-6 max-md:px-4">
      {/* Heading */}
      <div className="text-center mb-12">
        <h2 className="text-4xl font-bold">Contact Us</h2>
        <p className=" mt-2">Let’s work together or just say hello!</p>
      </div>

      {/* Content */}
      <div className="grid md:grid-cols-2 max-md:grid-cols-1 gap-10 items-center">

        {/* Image Section */}
        <div
          id="contact-image"
          className="relative w-full h-96 rounded-lg overflow-hidden shadow-md"
        >
          <Image
            src={Con}
            alt="Contact"
            fill
            priority
            className="object-cover"
          />
        </div>

        {/* Contact Form */}
        <div id="contact-form" className="w-full">
          <form className="w-full max-w-xl mx-auto space-y-6">
            {/* Inputs */}
            <div className="flex flex-col gap-4">
              <input
                type="text"
                placeholder="Your Name"
                className="w-full border border-gray-300 p-3 rounded-md placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <input
                type="email"
                placeholder="Your Email"
                className="w-full border border-gray-300 p-3 rounded-md placeholder:text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
            </div>

            {/* Message */}
            <div>
              <textarea
                placeholder="Your message..."
                className="w-full border border-gray-300 p-3 rounded-md placeholder:text-sm resize-none focus:outline-none focus:ring-2 focus:ring-blue-500"
                rows={6}
              ></textarea>
            </div>

            {/* Submit */}
            <div>
              <button
                type="submit"
                className="bg-blue-600 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition duration-300"
              >
                Send Message
              </button>
            </div>
          </form>
        </div>

      </div>
    </section>
  );
};

export default Contacts;
