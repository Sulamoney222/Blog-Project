'use client';
import React, { useEffect, useRef } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import { items } from './data';
import AOS from 'aos';
import 'aos/dist/aos.css';
import { notFound } from 'next/navigation';
import Image from 'next/image';




//getting the datas of arrays
  const getData=(cat)=>{
    const data = items[cat]
    if(data){
      return data
    } else{
      notFound
    }
  }

const Category = ({ params }) => {
  const allItems = getData(params.category)
 // const category = params.category; 
  const categoryTitle = params.category.replace(/-/g, ' ').toUpperCase();
  const containerRef = useRef(null);
  

  // GSAP animation
  useGSAP(() => {
    gsap.fromTo(
      '#category-image',
      { opacity: 0, x: -50 },
      { opacity: 1, x: 0, duration: 1.2, ease: 'power2.out' }
    );
    gsap.fromTo(
      '#category-text',
      { opacity: 0, x: 50 },
      { opacity: 1, x: 0, duration: 1.2, delay: 0.3, ease: 'power2.out' }
    );
  }, { scope: containerRef });

  // AOS init
  useEffect(() => {
    AOS.init({ duration: 1000, once: true });
  }, []);

  

  return (
    <section
      ref={containerRef}
      className="w-full px-6 py-16 max-w-7xl mx-auto"
      
    >
      {/* Heading */}
      <h2
        data-aos="fade-up"
        className="text-3xl md:text-4xl font-bold text-center mb-12 capitalize"
      >
        {categoryTitle}
      </h2>

      {/* Content Block */}
     {
      allItems.map((item)=>{
        const {id,img,desc,title}= item

        return(
           <div 
           key={id}
           className="grid md:grid-cols-2 gap-10 items-center">
        {/* Image Placeholder */}
        <div
          id="category-image"
          className="w-full h-64 md:h-96 bg-gray-200 rounded-lg flex items-center justify-center text-lg shadow"
          data-aos="fade-right"
        >
          <Image width={40} height={40} src={img}/>
        </div>

        {/* Text Content */}
        <div
          id="category-text"
          className="space-y-6"
          data-aos="fade-left"
        >
          <p className="text-base md:text-lg leading-relaxed ">
            {desc}
          </p>
          <p className="text-base md:text-lg leading-relaxed ">
            Whether you're a developer, entrepreneur, or tech enthusiast, this space is designed to provide deep insights,
            tutorials, and case studies to help you grow and stay ahead of the curve.
          </p>
          <button className="mt-4 bg-blue-600 hover:bg-blue-700 text-white px-6 py-3 rounded-md transition duration-300">
            Get in Touch
          </button>
        </div>
      </div>
        )

      })
     }
    </section>
  );
};

export default Category;
