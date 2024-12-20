import { BiSolidDislike, BiSolidLike } from "react-icons/bi";
import { Footer } from "../components/footer";
import Navber from "../components/navbar";
import { MdOutlinePhoneAndroid } from "react-icons/md";
import { LuMessageSquareMore } from "react-icons/lu";
import { CgMail } from "react-icons/cg";
import { FaLocationDot } from "react-icons/fa6";

export default function contactus() {
  return (
    <>
      <Navber />
      <div className=" hidden lg:block">
        <h2 className="text-3xl text-center font-bold mt-8 mb-4 ">GET HElP</h2>
        <div className="flex justify-center">
          <input
            type="search"
            className="border-2 border-black rounded-lg w-3/4 lg:w-[20%] p-3"
          />
        </div>
        <div className="flex my-10  ">
      

        <div className="grid gap-10 px-36 py-16 w-3/4">

        <div className=" text-black grid gap-3 text-xl">
          <p className=" text-lg  lg:text-4xl font-bold">
            WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
          </p>

          <p>
            We want to make buying your favourite Nike shoes and gear online
            fast and easy, and we accept the following payment options:
          </p>

          <div className="ps-10 grid gap-2">

          <p>
            Visa, Mastercard, Diners Club, Discover, American Express, Visa
            Electron, Maestr
          </p>

          <p>
            If you enter your PAN information at checkout, youll be able to pay
            for your order with PayTM or a local credit or debit card
          </p>
          <p>Apple Pay</p>
          </div>
          <div>
            <p>
              <span className="font-semibold">Nike Member</span>
              can store multiple debit or credit cards in their profile for
              faster checkout. If youre not already a Member,
              <span className="underline cursor-pointer px-2">Join us</span>
              today.
            </p>
            <button className="bg-black text-white px-4 py-2 rounded-full mt-4">
              Join Us
            </button>
            <button className="bg-black text-white px-4 py-2 rounded-full mt-4 ml-2">
              SHOP NIKE
            </button>
          </div>
        </div>

        <div className=" text-black grid gap-3 text-xl ">
          <h2 className=" text-2xl font-bold">FAQs</h2>
          <p className=" font-bold">Does my card need international purchases enabled?</p>

          <p>
            Yes, we recommend asking your bank to enable international purchases
            on your card. You will be notified at checkout if international
            purchases need to be enabled.
          </p> <br />
          <p>
            Please note, some banks may charge{" "}
            <span className="underline cursor-pointer">
              {" "}
              a small transaction fee{" "}
            </span>{" "}
            for international orders.
          </p> <br />
          <p className="font-bold ">
            Can I pay for my order with multiple methods?
          </p> 
          <p>
            No, payment for Nike orders cant be split between multiple payment
            methods.
          </p> <br />
          <p className=" font-bold ">
            What payment method is accepted for SNKRS orders?
          </p>
          <p>
            You can use any accepted credit card to pay for your SNKRS order.
          </p> <br />
          <p className="font-bold ">
            Why dont I see Apple Pay as an option?
          </p>
          <p>
            To see Apple Pay as an option in the Nike App or on Nike.com, youll
            need to use a compatible Apple device running the latest OS, be
            signed in to your iCloud account and have a supported card in your
            Wallet. Additionally, youll need to use Safari to use Apple Pay on
            Nike.com.
          </p> <br />
          <p>Was this answer helpful?</p>
          <div className=" flex text-4xl gap-x-5">
          <BiSolidLike /><BiSolidDislike />
          </div>
          <p className="">RELATED</p>
          <div className="ps-10 grid gap-y-3">
          <p className="font-bold underline ">
            WHAT ARE NIKES DELIVERY OPTIONS?
          </p>
          <p className="font-bold underline ">
            HOW DO I GET FREE DELIVERY ON NIKE ORDERS?
          </p>
        </div>
        </div>

       
        </div>

        <div className=" space-y-10  py-16 border-s-gray-400 border-s-2 w-1/4 text-center ">
          <h1 className="text-5xl  font-bold"> contect us </h1>
          <MdOutlinePhoneAndroid className="text-8xl m-auto" />
          <p className="text-xl">000 800 919 0566 <br />
          Products & Orders: 24 hours a day, <br /> 7 days a week <br />
          Company Info & Enquiries: 07:30 - <br /> 16:30, Monday - Friday
          </p>

          <LuMessageSquareMore className="text-8xl m-auto" />
          <p className="text-xl">24 hours a day <br />
          7 days a week
          </p>

          <CgMail className="text-8xl m-auto" />
          <p className="text-xl">Well reply within <br />
          five business days
          </p>

          <FaLocationDot className="text-8xl m-auto" />
          <p className="text-xl">STORE LOCATOR <br />
          Find Nike retail stores near you
          </p>
        </div>
        </div>
      </div>
      <div className="px-5 md:px-10 lg:px-20 block lg:hidden">
        <h2 className="text-3xl text-center font-bold mt-8 mb-4">GET HELP</h2>
        
        {/* Search Bar */}
        <div className="flex justify-center mb-10">
          <input
            type="search"
            className="border-2 border-black rounded-lg w-full md:w-3/4 lg:w-[20%] p-3"
            placeholder="Search for help"
          />
        </div>

        {/* FAQ Section */}
        <div className="grid gap-10 lg:px-36 py-16 w-full">
          <div className="text-black grid gap-3 text-base md:text-lg lg:text-xl">
            <p className="text-lg lg:text-4xl font-bold">
              WHAT PAYMENT OPTIONS CAN I USE ON NIKE ORDERS?
            </p>
            <p>
              We want to make buying your favourite Nike shoes and gear online
              fast and easy, and we accept the following payment options:
            </p>
            <div className="pl-10 grid gap-2">
              <p>Visa, Mastercard, Diners Club, Discover, American Express, Visa Electron, Maestro</p>
              <p>
                If you enter your PAN information at checkout, youll be able to pay
                for your order with PayTM or a local credit or debit card.
              </p>
              <p>Apple Pay</p>
            </div>
            <div>
              <p>
                <span className="font-semibold">Nike Member</span>
                can store multiple debit or credit cards in their profile for
                faster checkout. If youre not already a Member,
                <span className="underline cursor-pointer px-2">Join us</span>
                today.
              </p>
              <button className="bg-black text-white px-4 py-2 rounded-full mt-4">Join Us</button>
              <button className="bg-black text-white px-4 py-2 rounded-full mt-4 ml-2">SHOP NIKE</button>
            </div>
          </div>

          {/* FAQs */}
          <div className="text-black grid gap-3 text-base md:text-lg lg:text-xl">
            <h2 className="text-2xl font-bold">FAQs</h2>
            <p className="font-bold">Does my card need international purchases enabled?</p>
            <p>
              Yes, we recommend asking your bank to enable international purchases
              on your card. You will be notified at checkout if international
              purchases need to be enabled.
            </p>
            <p>
              Please note, some banks may charge{" "}
              <span className="underline cursor-pointer">a small transaction fee</span> for international orders.
            </p>

            <p className="font-bold">Can I pay for my order with multiple methods?</p>
            <p>No, payment for Nike orders cant be split between multiple payment methods.</p>

            <p className="font-bold">What payment method is accepted for SNKRS orders?</p>
            <p>You can use any accepted credit card to pay for your SNKRS order.</p>

            <p className="font-bold">Why dont I see Apple Pay as an option?</p>
            <p>
              To see Apple Pay as an option in the Nike App or on Nike.com, youll
              need to use a compatible Apple device running the latest OS, be
              signed in to your iCloud account, and have a supported card in your
              Wallet. Additionally, youll need to use Safari to use Apple Pay on
              Nike.com.
            </p>

            <p>Was this answer helpful?</p>
            <div className="flex text-4xl gap-x-5">
              <BiSolidLike />
              <BiSolidDislike />
            </div>

            <p className="mt-5">RELATED</p>
            <div className="pl-10 grid gap-y-3">
              <p className="font-bold underline">WHAT ARE NIKES DELIVERY OPTIONS?</p>
              <p className="font-bold underline">HOW DO I GET FREE DELIVERY ON NIKE ORDERS?</p>
            </div>
          </div>
        </div>

        {/* Contact Us Section */}
        <div className="space-y-10 py-16 border-t-2 border-s-gray-400 text-center">
          <h1 className="text-3xl md:text-5xl font-bold">CONTACT US</h1>

          <div className="space-y-5">
            <div className=" justify-center items-center space-x-5">
              <MdOutlinePhoneAndroid className="text-6xl md:text-8xl m-auto items-center mb-4" />
              <div>
                <p className="text-lg">000 800 919 0566</p>
                <p className="text-sm">Products & Orders: 24 hours a day, 7 days a week</p>
                <p className="text-sm">Company Info & Enquiries: 07:30 - 16:30, Monday - Friday</p>
              </div>
            </div>

            <div className=" justify-center items-center space-x-5">
              <LuMessageSquareMore className="text-6xl md:text-8xl m-auto items-center mb-4" />
              <p className="text-lg">24 hours a day, 7 days a week</p>
            </div>

            <div className=" justify-center items-center space-x-5">
              <CgMail className="text-6xl md:text-8xl m-auto items-center mb-4" />
              <p className="text-lg">Well reply within five business days</p>
            </div>

            <div className=" justify-center items-center space-x-5">
              <FaLocationDot className="text-6xl md:text-8xl m-auto items-center mb-4" />
              <p className="text-lg">STORE LOCATOR</p>
              <p className="text-sm">Find Nike retail stores near you</p>
            </div>
          </div>
        </div>
      </div>
      <Footer />
    </>
  );
}



// export default function contactus() {
//   return (
//     <>
//       <Navber />
     

//       <Footer />
//     </>
//   );
// }

