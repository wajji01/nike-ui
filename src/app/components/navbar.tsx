"use client"

import Image from "next/image";
import logo from "@/app/assists/Frame.png";
import logo1 from "@/app/assists/Frame (1).png";
import React, { useState } from 'react';
import Link from 'next/link';
import { IoBagOutline, IoClose } from "react-icons/io5";
import { FaRegHeart } from "react-icons/fa";




const Navber = () => {

  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <>
    <div className="">
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-1 lg:grid-cols-2 justify-center bg-[#F5F5F5] text-[#000000] py-3 lg:px-28 px-4 gap-y-2">
        <div className=" mx-auto lg:m-0">
            <Link href="/">
        <Image src={logo} alt="boy-girl"/>
        </Link>
        </div>
        <div className="flex gap-x-6 col-span-1 justify-center lg:justify-end">
            <Link href="/allproduct" className=" border-e-black border-e-2 pe-5">Find a Store</Link>
            <Link href="/contactus" className=" border-e-black border-e-2 pe-5">Help</Link>
            <Link href="/joinus" className=" border-e-black border-e-2 pe-5">Join Us</Link>
            <Link href="/login">Sign In</Link>
        </div>
      </div>
      </div>



   


    <div className="bg-white">
      {/* Main Navbar Wrapper */}
      <div className="shadow-sm px-2 lg:px-20 py-2">
        <div className="flex justify-between items-center w-full py-4 md:px-6">
          {/* Logo Section */}
          <div className="flex items-center">
            <Image src={logo1} alt="Logo" width={50} height={50} />
          </div>

          {/* Desktop Navigation Links */}
          <div className="hidden lg:flex lg:items-center lg:gap-x-6 text-black font-medium">
            <Link href="#" className="hover:text-gray-700">
              New & Featured
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Men
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Women
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Kids
            </Link>
            <Link href="#" className="hover:text-gray-700">
              Sale
            </Link>
            <Link href="#" className="hover:text-gray-700">
              SNIKRS
            </Link>
          </div>

          {/* Search Bar & Icons */}
          <div className="flex gap-x-2 md:flex md:gap-x-4 items-center">
          <div className="relative  md:block md:gap-x-5 items-center">
            <input
              type="text"
              placeholder="Search"
              className="pl-10 pr-4 py-2 w-44 h-10 rounded-full bg-gray-100 text-gray-700 placeholder-gray-400 focus:outline-none hover:scale-105 transition-transform"
            />
            <svg
              className="w-5 h-5 absolute left-3 top-2.5 text-gray-900"
              xmlns="http://www.w3.org/2000/svg"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z"
              />
            </svg>
          </div>
            <FaRegHeart className="text-2xl cursor-pointer" />
            <IoBagOutline className="text-2xl cursor-pointer" />
          </div>

          {/* Mobile Hamburger Icon */}
          <div className="lg:hidden">
            <button
              onClick={() => setMenuOpen((prev) => !prev)}
              className="text-black text-3xl hover:text-orange-500 focus:outline-none"
            >
              ☰
            </button>
          </div>
        </div>

        {/* Mobile Menu (Toggleable) */}
        {menuOpen && (
          <div className="lg:hidden bg-white absolute mt-20 left-0 top-16 w-full py-4 z-20 shadow-md">
            <div className="flex flex-col items-start  space-y-3 px-4 text-black font-medium">
              <Link
                href="#"
                className="w-full hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                New & Featured
              </Link>
              <Link
                href="#"
                className="w-full hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Men
              </Link>
              <Link
                href="#"
                className="w-full hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Women
              </Link>
              <Link
                href="#"
                className="w-full hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Kids
              </Link>
              <Link
                href="#"
                className="w-full hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                Sale
              </Link>
              <Link
                href="#"
                className="w-full hover:text-gray-700"
                onClick={() => setMenuOpen(false)}
              >
                SNIKRS
              </Link>
            </div>
          </div>
        )}
      </div>
    </div>


    </>
  );
}

export default Navber;