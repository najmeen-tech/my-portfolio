"use client";
import React, { useEffect } from "react";
import Image from "next/image";
import Link from "next/link";
import SHBhati from "@/assets/img/s.h.bhati.jpeg";
import { gsap } from "gsap";

function Hero() {
  useEffect(() => {
    const numbers = [
      { element: document.querySelector("#experience"), endValue: 5 },
      { element: document.querySelector("#projects"), endValue: 145 },
      { element: document.querySelector("#clients"), endValue: 124 },
    ];

    numbers.forEach(({ element, endValue }, index) => {
      gsap.to(element, {
        innerHTML: endValue,
        duration: 2,
        snap: { innerHTML: 1 },
        ease: "bounce.out",
      });
    });
  }, []);

  return (
    <div id="about relative">
      <div className="container mx-auto py-16  px-4 flex  flex-col-reverse lg:grid grid-cols-12 gap-8 items-center justify-center">
        <div className="col-span-7">
          <h1 className="text-4xl font-bold text-secondary ">
          Hello, I am Najmeen 
          </h1>
          <h2 className="text-4xl md:text-7xl font-extrabold my-4 text-primary">
          I design engaging and interactive web experiences.
          </h2>
          <p className="text-xl font-normal text-gray-500 max-w-[600px]">
          I specialize in crafting responsive, high-performance web applications using HTML, SCSS, Tailwind CSS, MUI, React.js, Next.js, WordPress, and Ionic. As a vendor, I also create and sell premium templates on
            <Link
              href="https://www.templatemonster.com/authors/w3codemasters/"
              className="text-primary"
            >
              {" "}
              TemplateMonster.
            </Link>
            
          </p>

       
        </div>
        <div className="col-span-5 flex justify-center items-center">
          <Image
            src={SHBhati}
            alt="s.h.bhati front end developer"
            width={400}
            height={400}
            className=" rounded-xl rotate-3 hover:rotate-0 transition-all duration-300 ease-in-out shadow-xl lg:w-[300px] lg:h-[300px] md:w-[400px] md:h-[400px] w-[250px] h-[250px]"
          />
        </div>
      </div>
      <ul className="container mx-auto items-center justify-center md:grid grid-cols-12 w-full  ">
        <li className="col-span-4 flex items-center flex-col md:flex-row gap-2  md:mb-0  mb-5">
          <span id="experience" className="text-7xl font-bold text-primary">
            0
          </span>
          <span className="text-xl font-normal text-gray-500 max-w-30">
            Years of Experience
          </span>
        </li>

        <li className="col-span-4 flex items-center flex-col md:flex-row gap-2  md:mb-0  mb-5">
          <span id="projects" className="text-7xl font-bold text-primary">
            0
          </span>
          <span className="text-xl font-normal text-gray-500 max-w-30">
            Project Completed{" "}
          </span>
        </li>

        <li className="col-span-4 flex items-center flex-col  md:flex-row gap-2  md:mb-0  mb-5">
          <span id="clients" className="text-7xl font-bold text-primary">
            0
          </span>
          <span className="text-xl font-normal text-gray-500 max-w-30">
            Happy Clients
          </span>
        </li>
      </ul>
    </div>
  );
}

export default Hero;
