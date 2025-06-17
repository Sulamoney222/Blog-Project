'use client';
import React, { useEffect } from 'react';
import gsap from 'gsap';
import { useGSAP } from '@gsap/react';
import Img from '../../utils/th.jpg';
import Image from 'next/image';
import Aos from 'aos';
import 'aos/dist/aos.css';

const About = () => {

  useGSAP(() => {
    gsap.to('#img', { opacity: 1, translateY: 0, duration: 3 });
    gsap.to('#text-left', { opacity: 1, translateX: 0 });
    gsap.to('#text-right', { opacity: 1, translateX: 0 });
  }, []);

  useEffect(() => {
    Aos.init({
      duration: 1000,
      once: true
    });
  }, []);

  return (
    <section className="w-full py-16 px-6 max-md:px-10">
      <div className="flex flex-col items-center space-y-12">

        {/* Image Section */}
        <div
          id="img"
          className="w-full opacity-0 -translate-y-9/12 max-w-4xl h-64 bg-gray-200 flex items-center justify-center text-lg font-medium relative"
        >
          <Image src={Img} fill alt="Team working on technology" />
        </div>

        {/* Text Content Section */}
        <div className="grid grid-cols-2 max-md:grid-cols-1 gap-10 w-full max-w-6xl">

          {/* Who Are We */}
          <div
            id="text-left"
            className="translate-x-28 opacity-0"
            data-aos="fade-right"
          >
            <h2 className="text-3xl font-bold mb-4">Who Are We?</h2>
            <p className="leading-relaxed">
              We are a visionary technology company driven by innovation, integrity, and impact.
              As a trusted leader in the digital space, we specialize in creating intelligent solutions
              that push boundaries and redefine industries. Our journey began with a bold idea —
              to harness the power of technology to create a smarter, more connected world.
            </p>
            <p className="leading-relaxed mt-4">
              At the heart of our organization is a team of highly skilled professionals — engineers, designers,
              strategists, and technologists — united by a shared commitment to excellence. We thrive on solving
              complex problems and embrace each challenge as an opportunity to innovate, grow, and lead.
            </p>
          </div>

          {/* What Do We Do */}
          <div
            id="text-right"
            className="translate-x-28 opacity-0"
            data-aos="fade-left"
          >
            <h2 className="text-3xl font-bold mb-4">What Do We Do?</h2>
            <p className="leading-relaxed">
              We provide a comprehensive suite of technology services tailored to meet today’s business challenges.
              From custom software development and AI-powered solutions to enterprise cloud systems and data analytics,
              we deliver high-impact results that drive success.
            </p>
            <p className="leading-relaxed mt-4">
              Our approach goes beyond technology — we become strategic partners to our clients.
              We listen, collaborate, and deliver with agility and precision. Whether you're scaling a startup
              or transforming a global enterprise, we help you turn vision into reality.
            </p>
          </div>

        </div>
      </div>
    </section>
  );
};

export default About;
