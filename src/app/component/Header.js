"use client";
import React from "react";
import Link from "next/link";
import shBhati from "../../assets/img/logo.svg";
import Image from "next/image";
import menu from "../../assets/img/menu.png";
import { gsap } from "gsap";
import { ScrollToPlugin } from "gsap/ScrollToPlugin";

gsap.registerPlugin(ScrollToPlugin);

function Header() {
  const [isOpen, setIsOpen] = React.useState(false);

  const handleScroll = (id) => {
    gsap.to(window, {
      duration: 1,
      scrollTo: { y: id, offsetY: 0 },
    });
    setIsOpen(false);
  };

  return (
    <div className="relative">
      <nav className="container mx-auto flex flex-wrap items-center justify-between p-4 ">
        <Link
          href="mailto: jmeen7867@gmail.com?subject=Hello%20Najmeen"
          className="flex items-center gap-2"
        >
          <Image src={shBhati} alt="logo" width={50} height={50} />{" "}
          <span className="text-lg font-bold text-secondary">
          najmeen7867@gmail.com
          </span>
        </Link>
        <div className="relative">
          <button
            className="md:hidden p-2 text-gray-500"
            onClick={() => setIsOpen(!isOpen)}
          >
            <Image src={menu} alt="menu" width={20} height={20} />
          </button>
          <nav>
            <ul
              className={` ${
                isOpen
                  ? "block absolute top-10 right-0  w-[200px]  bg-white p-5 rounded-lg z-10 "
                  : "hidden"
              }  md:flex flex-col md:flex-row gap-12`}
            >
              <li>
                <Link
                  className="hover:text-primary text-lg md:mb-0 mb-4  block"
                  href="#about"
                  onClick={() => handleScroll("#about")}
                >
                  About
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary text-lg  md:mb-0 mb-4  block"
                  href="#skills"
                  onClick={() => handleScroll("#skills")}
                >
                  Skills
                </Link>
              </li>
              <li>
                <Link
                  className="hover:text-primary text-lg  md:mb-0 mb-4  block"
                  href="#work"
                  onClick={() => handleScroll("#work")}
                >
                  Recent Work
                </Link>
              </li>

             
              <li>
                <Link
                  className="hover:text-primary text-lg"
                  href="#contact"
                  onClick={() => handleScroll("#contact")}
                >
                  Contact
                </Link>
              </li>
            </ul>
          </nav>
        </div>
      </nav>
    </div>
  );
}

export default Header;
