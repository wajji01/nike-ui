"use client";
import { StaticImageData } from "next/image";
import Navber from "../components/navbar";
import image1 from "@/app/assists/Rectangle.png";
import Image from "next/image";
import { IoFilter } from "react-icons/io5";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";
import { useState } from "react";

export default function Allproduct() {

    const [isVisible, setIsVisible] = useState(false);
    const [isVisible1, setIsVisible1] = useState(false);
    const [isVisible2, setIsVisible2] = useState(false);

    // Function to toggle visibility
    const toggleDiv = () => {
      setIsVisible((prev) => !prev);
    };
    const toggleDiv1 = () => {
      setIsVisible1((prev) => !prev);
    };
    const toggleDiv2 = () => {
      setIsVisible2((prev) => !prev);
    };


  type Card = {
    id: number;
    image: StaticImageData;
    name: string;
    price: number;
    title: string;
    tag?: string;
  };

  // card
  const cards: Card[] = [
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Women's Shoes",
      tag: "BestOfAirMax",
    },
  ];

  const BestOfAirMax = cards.filter((card) => card.tag === "BestOfAirMax");

  return (
    <>
      <Navber />

      <div className="grid lg:grid-flow-col  ">
        <div className="  col-span-4 p-5 border " >
          <h1 className=" font-bold text-2xl ps-5">New(500)</h1>
          <div>
            <ul className=" text-xl p-5 font-bold space-y-5 mt-5">
              <li>Shoes</li>
              <li>Sports Bras</li>
              <li>Tops & T-Shirts</li>
              <li>Hoodies & Sweatshirts</li>
              <li>Jackets</li>
              <li>Trousers & Tights</li>
              <li>Shorts</li>
              <li>Tracksuits</li>
              <li>Jumpsuits & Rompers</li>
              <li>Skirts & Dresses</li>
              <li>Socks</li>
              <li>Accessories & Equipment</li>
            </ul>
          </div>

          {/* Gender */}
          <div className=" p-5 text-xl">
            <div className=" flex justify-between">
              <p>Gender</p>
              <button onClick={toggleDiv}>
              {isVisible ? (<IoIosArrowUp className=" text-2xl" />) : (<IoIosArrowDown className=" text-2xl" />)}              
              </button>
            </div>

            {isVisible && (
            <div className=" space-y-5 mt-5">
            <div>
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">Mens</span>
                  </label> 
            </div>
              <div>
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">Womens</span>
                  </label> 
            </div>
              <div>
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">Unisex</span>
                  </label> 
            </div>
            </div>
                  )}
          </div>
          <hr />

          {/* kids */}

          <div className=" p-5 text-xl">
            <div className=" flex justify-between">
              <p>Kids</p>
              <button onClick={toggleDiv1}>
              {isVisible1 ? (<IoIosArrowUp className=" text-2xl" />) : (<IoIosArrowDown className=" text-2xl" />)}              
              </button>
            </div>
            {isVisible1 && (
                <div>
            <div className=" space-y-5 mt-5">
              <div>
                <div className="">
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">Boys</span>
                  </label>
                </div>
              </div>
            
            </div>
            <div className=" space-y-5 mt-5">
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">Girls</span>
                  </label> 
            </div>
            </div>
                )}
           
          </div>

          <hr />

          {/* price */}

          <div className=" p-5 text-xl">
            <div className=" flex justify-between">
              <p>Shop By Price</p>
              <button onClick={toggleDiv2}>
              {isVisible2 ? (<IoIosArrowUp className=" text-2xl" />) : (<IoIosArrowDown className=" text-2xl" />)}              
              </button>
            </div>
            {isVisible2 && (
            <div className=" space-y-5 mt-5">
            <div>
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">Under ₹ 2 500.00</span>
                  </label> 
            </div>
            <div>
                  <label className="flex items-center space-x-2">
                    {/* Checkbox with increased size */}
                    <input
                      type="checkbox"
                      className="w-6 h-6 accent-blue-500" // Set the size with width and height
                    />
                    <span className="text-gray-700">₹ 2 501.00 - ₹</span>
                  </label> 
            </div>


            </div>
             )}
          </div>
        </div>
        <div className="   col-span-8 border p-5">
          <div className=" flex justify-end gap-x-5">
            <p className=" flex justify-end gap-x-5">
              Hide Filters <IoFilter className=" text-2xl" />
            </p>
            <p className=" flex justify-end gap-x-5">
              Sort by <IoIosArrowDown className=" text-2xl" />{" "}
            </p>
          </div>
          <div className="grid grid-cols-2 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 md:px-10 gap-6 mt-5">
            {BestOfAirMax.map((card) => (
              <div className=" rounded-lg  overflow-hidden bg-white">
                <div key={card.id}>
                  <Image
                    src={card.image}
                    alt={card.title}
                    objectFit="cover"
                    className="rounded-t-lg w-full"
                  />
                </div>
                <div className="p-4">
                  <p className=" text-amber-900 font-bold text-base">Just In</p>
                  <h3 className="text-xl font-bold">{card.name}</h3>

                  <p className="text-gray-600 mt-2">{card.title}</p>
                  <p className="text-gray-600 my-2"> 1 Color</p>
                  <p className=" text-base font-bold">MRP : ₹{card.price}</p>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
}
