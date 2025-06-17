'use client'
import Image from "next/image";
import TechImage from "../utils/tech-a.png"; 
import gsap from "gsap";
import { useGSAP } from "@gsap/react";

export default function Home() {
  
  useGSAP(()=>{
  gsap.to('#read', {translateX:0, opacity:1, duration:2})
  gsap.to('#img', {translateY:0, opacity:1, duration:2})
  },[])
   
  return (
    <section className="min-h-screen max-md:px-10 flex items-center justify-center bg-zinc-950 text-white px-4 py-16">
      <div className="max-w-6xl w-full grid md:grid-cols-2 gap-10 items-center">
        {/* Text Section */}
        <div id="read" className="opacity-0 translate-x-20">
          <h2 id='re' className="text-4xl sm:text-5xl font-bold mb-6 leading-tight">
            Decode the Future.<br />One Line at a Time.
          </h2>
          <p className="text-lg sm:text-xl text-zinc-400 mb-8">
            Dive into deep tech insights, practical coding tutorials, and the latest trends shaping the digital world.
            Whether you're debugging your first loop or building scalable systems — this is your space.
          </p>
          <button className="bg-blue-600 hover:bg-blue-700 text-white font-semibold px-6 py-3 rounded transition duration-300">
            Contact Us
          </button>
        </div>

        {/* Image Section */}
        <div className="flex justify-center " >
          <Image
            src={TechImage}
            alt="Tech Illustration"
            width={500}
            height={500}
            id="img"
            className="w-full h-auto max-w-md -translate-y-24"
            priority
          />
        </div>
      </div>
    </section>
  );
}
