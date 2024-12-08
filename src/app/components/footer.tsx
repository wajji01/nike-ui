import React from 'react'
import Image from 'next/image'

import { FaTwitter } from "react-icons/fa";
import { FaFacebookF } from "react-icons/fa6";
import { FaInstagram } from "react-icons/fa";
import { FaGithub } from "react-icons/fa";
import { IoLocationOutline } from 'react-icons/io5';

export const Footer = () => {
  return (
    <>
    {/* Footer Section */}
    <footer className="bg-[#111111] text-white py-10">
      <div className="containe px-4 lg:px-24">
        <div className="">
          {/* About Shop.co */}
          

          {/* Links: Company, Help, FAQ, Resources */}
          <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 m-auto lg:m-0 lg:grid-cols-4 mt-5 gap-5 md:mt-0">
            {/* Company */}
            <div className="col-span-1">
              <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">Find A Store</h3>
              <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">Become A Member</h3>
              <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">Sign Up for Email</h3>
              <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">Send Us Feedback</h3>
              <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">Student Discounts</h3>
         
            </div>

            {/* Help */}
            <div className="col-span-1">
            <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">Get Help</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Order Status</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Delivery</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Returns</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Payment Options</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Contact Us On Nike.com Inquiries</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Contact Us On All Other Inquiries</h3>
              
            </div>

            {/* about nike */}
            <div className="col-span-1">
            <h3 className=" text-lg mb-4  hover:text-gray-400 cursor-pointer">ABOUT NIKE</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">News</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Careers</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Investors</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Sustainability</h3>
            </div>

 
          <div className=" col-span-1 ">
            <div className="flex space-x-4 float-end">
            <FaTwitter className='p-3 rounded-full bg-gray-500 text-black border border-[#0000004d] text-5xl hover:text-white duration-500' />
            <FaFacebookF className='p-3 rounded-full bg-gray-500 text-black border border-[#0000004d] text-5xl hover:text-white duration-500' />
            <FaInstagram className='p-3 rounded-full bg-gray-500 text-black border border-[#0000004d] text-5xl hover:text-white duration-500' />
            <FaGithub className='p-3 rounded-full bg-gray-500 text-black border border-[#0000004d] text-5xl hover:text-white duration-500' />
            
            </div>
          </div>
          </div>

        </div>

        <div className="border-2 border-b-gray-300 mx-auto mt-8 "></div>

        <div className="mt-8 text-left text-white flex flex-col lg:flex-row items-center justify-between gap-4 lg:gap-0 ">
          {/* Footer Text */}
          <div className="lg:w-auto cursor-pointer flex text-gray-400"> <span className='flex me-4 gap-x-3 text-white' ><IoLocationOutline /> India</span> © 2023 Nike, Inc. All Rights Reserved</div>
          <div className=' text-gray-400 flex gap-x-8'>
            <p>Guides</p>
            <p>Terms of Sale</p>
            <p>Terms of Use</p>
            <p>Nike Privacy Policy</p>
          </div>

      
        </div>
      </div>
    </footer>
  </>
  )
}