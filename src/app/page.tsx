import Image, { StaticImageData } from "next/image";
import bannerImage from "@/app/assists/Image.png";
import bannerImage1 from "@/app/assists/Image1.png";
import bannerImage2 from "@/app/assists/banner3.png";
import Navber from "./components/navbar";
import { Footer } from "./components/footer";
import { FaArrowCircleLeft, FaArrowCircleRight } from "react-icons/fa";
import image1 from "@/app/assists/Image (1).png";
import image2 from "@/app/assists/Image (2).png";
import image3 from "@/app/assists/Image (3).png";
import men from "@/app/assists/men.png";
import men1 from "@/app/assists/men1.png";
import women from "@/app/assists/women.png";
import women1 from "@/app/assists/women1.png";
import essent from "@/app/assists/essent.png";
import essent1 from "@/app/assists/essent1.png";
import essent2 from "@/app/assists/essent2.png";

type Card = {
  id: number;
  image: StaticImageData;
  name: string;
  price: number;
  title: string;
  tag?: string;
};
export default function Home() {
  // card
  const cards: Card[] = [
    {
      id: 1,
      image: image1,
      name: "Nike Air Max Pulse",
      price: 13.995,
      title: "Womens Shoes",
      tag: "BestOfAirMax",
    },
    {
      id: 2,
      image: image2,
      name: "Nike Air Max Pulse",
      price: 100,
      title: "Jeans",
      tag: "BestOfAirMax",
    },
    {
      id: 3,
      image: image3,
      name: "Nike Air Max Pulse",
      price: 100,
      title: "Check Shirt",
      tag: "BestOfAirMax",
    },
    {
      id: 4,
      image: men,
      name: "Nike Air Max Pulse",
      price: 100,
      title: "Check Shirt",
      tag: "mens",
    },
    {
      id: 5,
      image: men1,
      name: "Nike Air Max Pulse",
      price: 100,
      title: "Check Shirt",
      tag: "mens",
    },
    {
      id: 6,
      image: women,
      name: "Nike Air Max Pulse",
      price: 100,
      title: "Check Shirt",
      tag: "womens",
    },
    {
      id: 7,
      image: women1,
      name: "Nike Air Max Pulse",
      price: 100,
      title: "Check Shirt",
      tag: "womens",
    },
  ];

  const BestOfAirMax = cards.filter((card) => card.tag === "BestOfAirMax");
  const mens = cards.filter((card) => card.tag === "mens");
  const womens = cards.filter((card) => card.tag === "womens");

  return (
    <div>
      <Navber />

      {/* banner */}
      <div className=" bg-[#F5F5F5] py-3 space-y-5">
        <h1 className=" text-center text-2xl font-bold">Hello Nike App</h1>
        <p className=" text-center">
          Download the app to access everything Nike. Get Your Great
        </p>
      </div>
      <section>
        <Image src={bannerImage} alt="banner" className="w-full px-10" />
        <div className=" text-center space-y-5 py-10">
          <p>First Look</p>
          <h1 className=" text-5xl lg:text-7xl font-bold">NIKE AIR MAX PULSE</h1>
          <p>
            Extreme comfort. Hyper durable. Max volume. Introducing the Air Max
            Pulse <br />
            —designed to push you past your limits and help you go to the max.
          </p>
          <button className="bg-black text-white px-10 py-2 rounded-full hover:bg-gray-900 me-3">
            Notify Me
          </button>
          <button className="bg-black text-white px-10 py-2 rounded-full hover:bg-gray-900">
            Shop Air Max
          </button>
        </div>
      </section>

      {/* best of nike */}
      <section>
        <div className=" flex px-10 text-2xl justify-between">
          <div className="font-bold">Best of Air Max</div>
          <div className=" flex gap-x-5">
            <p>Shop</p>
            <FaArrowCircleLeft className=" text-gray-600 text-4xl" />
            <FaArrowCircleRight className=" text-4xl" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 gap-6 mt-5">
          {BestOfAirMax.map((card) => (
            <div key={card.id} className=" rounded-lg  overflow-hidden bg-white">
              <div >
                <Image
                  src={card.image}
                  alt={card.title}
                  objectFit="cover"
                  className="rounded-t-lg w-full"
                />
              </div>
              <div className="p-4">
                <div className=" flex justify-between font-bold">
                  <h3 className="text-xl">{card.name}</h3>
                  <p>₹{card.price}</p>
                </div>
                <p className="text-gray-600 mt-2">{card.title}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* fratured */}

      <section className=" my-20 px-10">
        <h1 className=" py-5 text-2xl font-bold">Featured</h1>
        <Image src={bannerImage1} alt="banner" className="w-full " />
        <div className=" text-center space-y-10 py-10">
          <h1 className=" text-5xl lg:text-7xl font-bold">STEP INTO WHAT FEELS GOOD</h1>
          <p>
            Cause everyone should know the feeling of running in that perfect
            pair.
          </p>
          <button className="bg-black text-white px-10 py-2 rounded-full hover:bg-gray-900 me-3">
            Find Your Shoe
          </button>
        </div>
      </section>

      {/* gear up */}
      <section>
        <div className=" flex px-10 text-2xl font-bold justify-between">
          <div>Gear Up</div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-10 gap-6 mt-5">
          <div>
            <div className=" flex gap-x-5 justify-end px-10">
              <p>Shop Mens</p>
              <FaArrowCircleLeft className=" text-gray-600 text-4xl" />
              <FaArrowCircleRight className=" text-4xl" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-10 gap-6 mt-5">
              {mens.map((card) => (
                <div key={card.id} className=" rounded-lg  overflow-hidden bg-white">
                  <div >
                    <Image
                      src={card.image}
                      alt={card.title}
                      objectFit="cover"
                      className="rounded-t-lg w-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className=" flex justify-between font-bold">
                      <h3 className="text-xl">{card.name}</h3>
                      <p>₹{card.price}</p>
                    </div>
                    <p className="text-gray-600 mt-2">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
          <div>
            <div className=" flex gap-x-5 justify-end px-10">
              <p>Shop Womens</p>
              <FaArrowCircleLeft className=" text-gray-600 text-4xl" />
              <FaArrowCircleRight className=" text-4xl" />
            </div>
            <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-2 px-10 gap-6 mt-5">
              {womens.map((card) => (
                <div key={card.id} className=" rounded-lg  overflow-hidden bg-white">
                  <div >
                    <Image
                      src={card.image}
                      alt={card.title}
                      objectFit="cover"
                      className="rounded-t-lg w-full"
                    />
                  </div>
                  <div className="p-4">
                    <div className=" flex justify-between font-bold">
                      <h3 className="text-xl">{card.name}</h3>
                      <p>₹{card.price}</p>
                    </div>
                    <p className="text-gray-600 mt-2">{card.title}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* Dont Miss */}
      <section className=" my-20 px-10">
        <h1 className=" py-5 text-2xl font-bold">Dont Miss</h1>
        <Image src={bannerImage2} alt="banner" className="w-full " />
        <div className=" text-center space-y-10 py-10">
          <h1 className=" text-5xl lg:text-7xl font-bold">FLIGHT ESSENTIALS</h1>
          <p>
            Your built-to-last, all-week wears—but with style only Jordan Brand
            can deliver.
          </p>
          <button className="bg-black text-white px-10 py-2 rounded-full hover:bg-gray-900 me-3">
            Shop
          </button>
        </div>
      </section>

      {/* The Essentials */}
      <section className=" my-20 px-10">
        <h1 className=" py-5 text-2xl font-bold">The Essentials</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-2 lg:grid-cols-3 px-10 gap-6 mt-5">
          <div className="relative ">
            {" "}
            {/* Container with relative positioning */}
            {/* Image */}
            <Image
              src={essent} // Replace with your image URL
              alt="Sample Image"
              className="w-full"
            />
            {/* Button */}
            <button className="duration-500 text-2xl  absolute bottom-24 left-14 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-400">
              Mens
            </button>
          </div>
          <div className="relative ">
            {" "}
            {/* Container with relative positioning */}
            {/* Image */}
            <Image
              src={essent1} // Replace with your image URL
              alt="Sample Image"
              className="w-full"
            />
            {/* Button */}
            <button className="duration-500 text-2xl  absolute bottom-24 left-14 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-400">
              Womens
            </button>
          </div>
          <div className="relative ">
            {" "}
            {/* Container with relative positioning */}
            {/* Image */}
            <Image
              src={essent2} // Replace with your image URL
              alt="Sample Image"
              className="w-full"
            />
            {/* Button */}
            <button className="duration-500 text-2xl  absolute bottom-24 left-14 px-8 py-4 bg-white text-black font-semibold rounded-full hover:bg-gray-400">
              Kids
            </button>
          </div>

        </div>
      </section>

      {/* icons */}
      <section className=" my-10">
      <div className="col-span-2 grid grid-cols-1 sm:grid-cols-2 m-auto px-10 justify-center items-center  lg:px-48 lg:m-0 lg:grid-cols-4 mt-5 gap-5 md:mt-0">
            {/* Company */}
            <div className="col-span-1">
              <h3 className=" text-lg mb-10 font-bold hover:text-gray-400 cursor-pointer ">Icons</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Air Force 1</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Huarache</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Air Max 90</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Air Max 95</h3>
         
            </div>

            {/* Help */}
            <div className="col-span-1">
            <h3 className=" text-lg mb-10 font-bold hover:text-gray-400 cursor-pointer">Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">All Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Custom Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Jordan Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Running Shoes</h3>
              
            </div>

            {/* about nike */}
            <div className="col-span-1">
            <h3 className=" text-lg mb-10 font-bold hover:text-gray-400 cursor-pointer">Clothing</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">All Clothing</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Modest Wear</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Hoodies & Pullovers</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Shirts & Tops</h3>
            </div>

 
          <div className=" col-span-1 ">
          <h3 className=" text-lg mb-10 font-bold hover:text-gray-400 cursor-pointer">Kids</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Infant & Toddler Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Kids Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Kids Jordan Shoes</h3>
              <h3 className=" text-lg mb-4 text-gray-500 hover:text-gray-400 cursor-pointer">Kids Basketball Shoes</h3>
          </div>
          </div>
      </section>
      <Footer />
    </div>
  );
}
