"use client";

import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import logo from "../images/logo.png";
import imaginius from "../images/imaginius.png";
import githubIcon from "../images/githubicon.png";

export function NavBar() {
  const [isNavBarOpen, setIsNavBarOpen] = useState<boolean>(false);

  const handleNavBarToggle = () => {
    setIsNavBarOpen(!isNavBarOpen);
  };

  const closeNavBar = () => {
    setIsNavBarOpen(false);
  };

  return (
    <div className="border-b py-3 bg-white text-sm sm:text-xl 2xl:text-2xl">
      <div className="container mx-auto flex items-center justify-between">
        <Link href="/">
          <div className="flex items-center space-x-2 cursor-pointer">
            <div className="w-7 h-4">
              <Image src={logo} alt="logo" width={48} height={48} />
            </div>
            <span className="text-xl font-semibold text-black hover:text-purple-300">
             {/* Imaginius */}
             <Image src={imaginius} alt="logo" width={100} height={70} />
            </span>
          </div>
        </Link>

        {/* For devices larger than md */}
        <nav className="hidden md:flex space-x-10">
          <Link
            href="/gallery"
            className="text-black hover:text-purple-300 transition-colors duration-300"
          >
            Gallery
          </Link>
          <Link
            href="/instructions"
            className="text-black hover:text-purple-300 transition-colors duration-300"
          >
           About
          </Link>
        </nav>

        {/* Devices smaller than md */}
        <button
          className="md:hidden bg-purple-600 text-white font-semibold px-6 mr-2 py-2 hover:bg-purple-500 transition-colors duration-300 rounded-3xl"
          onClick={handleNavBarToggle}
        >
          Menu
        </button>

        {/* The NavBar popup */}
        {isNavBarOpen && (
          <div className="md:hidden absolute top-16 right-0 left-0 bg-white py-3 gap-y-1 flex flex-col items-center space-y-3 z-50">
            <Link href="/gallery">
              <p
                className="text-white text-lg hover:white transition-colors duration-300"
                onClick={closeNavBar}
              >
                Gallery
              </p>
            </Link>
            <Link href="/instructions">
              <p
                className="text-white text-lg hover:white transition-colors duration-300 "
                onClick={closeNavBar}
              >
                About
              </p>
            </Link>
          </div>
        )}

       
      </div>
    </div>
  );
}
