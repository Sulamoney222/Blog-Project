'use client';
import React, { useEffect, useRef } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import AOS from 'aos';
import 'aos/dist/aos.css';

import F from '../../utils/first.jpg';
import S from '../../utils/fourth.jpg';
import T from '../../utils/second.jpg';
import FO from '../../utils/third.jpg';

const Fills = [
  {
    id: 1,
    img: F,
    text: 'Illustrations',
    link: '/portfolio/illustrations',
  },
  {
    id: 2,
    img: S,
    text: 'Innovations',
    link: '/portfolio/innovations',
  },
  {
    id: 3,
    img: T,
    text: 'Websites',
    link: '/portfolio/websites',
  },
  {
    id: 4,
    img: FO,
    text: 'Applications',
    link: '/portfolio/applications',
  },
];

const Portfolio = () => {
  const containerRef = useRef(null);

  // AOS init
  useEffect(() => {
    AOS.init({
      duration: 1000,
      once: true,
    });
  }, []);

  // GSAP animation on mount
  useGSAP(() => {
    gsap.fromTo(
      '.portfolio-item',
      { opacity: 0, scale: 0.9, y: 30 },
      {
        opacity: 1,
        scale: 1,
        y: 0,
        duration: 1,
        stagger: 0.2,
        ease: 'power2.out',
      }
    );
  }, { scope: containerRef });

  return (
    <section ref={containerRef} className="w-full py-10 px-6">
      <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
        {Fills.map(({ id, text, img, link }) => (
          <Link href={link} key={id}>
            <div
              className="portfolio-item group relative rounded-md overflow-hidden shadow-md hover:shadow-xl transition duration-300"
              data-aos="fade-up"
            >
              {/* Image Container */}
              <div className="relative w-full h-80 aspect-[4/3]">
                <Image
                  src={img}
                  alt={text}
                  fill
                  className="object-cover group-hover:scale-105 transition-transform duration-300"
                  sizes="(max-width: 768px) 100vw, 25vw"
                />
              </div>
              {/* Text Overlay */}
              <div className="absolute bottom-0 w-full bg-black bg-opacity-50 text-white text-center py-2 text-sm font-semibold">
                {text}
              </div>
            </div>
          </Link>
        ))}
      </div>
    </section>
  );
};

export default Portfolio;
