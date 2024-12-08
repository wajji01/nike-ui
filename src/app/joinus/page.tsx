import Link from "next/link";
import { Footer } from "../components/footer";
import Navber from "../components/navbar";
import logo from "@/app/assists/Frame (1).png"
import Image from "next/image";

export default function login () {
    return (
        <>
            <Navber/>

            <section>
                <div className=" w-[380px] m-auto  justify-center my-10 text-center items-center p-7 grid gap-y-5">
                    <Image src={logo} alt="Logo" className="m-auto"/>
                    <h1 className=" text-2xl font-bold">BECOME A NIKE MEMBER</h1>
                    <p className="text-gray-500 text-sm">Create your Nike Member profile and get first access to the very best of Nike products, inspiration and community.</p>
                    <input type="email" placeholder="Email Address" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <input type="password" placeholder="Password" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <input type="text" placeholder="Firt Name" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <input type="text" placeholder="Last Name" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <input type="text" placeholder="Date Of birth" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <input type="text" placeholder="Country" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <p className="text-gray-500 text-xs">Get a Nike Member Reward every year on your Birthday.</p>
                    <div className=" flex justify-between text-sm text-gray-500">
                        <button className="border w-2/4 text-black  py-2 rounded-lg text-center  hover:bg-gray-900 duration-500 hover:text-white">Male</button>
                        <button className="border w-2/4 text-black  py-2 rounded-lg text-center  hover:bg-gray-900 duration-500 hover:text-white">Female</button>
                        </div>
                        <div >
                        <input type="checkbox" />
                        <label className="  text-sm text-gray-500"> Sign up for emails to get updates from Nike on products, offers and your Member benefits</label>
                        </div>
                    <p className="text-gray-500 text-sm">By creating an account, you agree to Nike's <Link href="#" className=" underline">Privacy Policy</Link>  and <Link href="#" className=" underline"> Terms of Use.</Link></p>
                    <button className="bg-black text-white  py-2 rounded-lg text-center  hover:bg-gray-900 duration-500 w-full">  Sign In</button>
                    <p className=" text-gray-500">Already a member? <Link href="/login" className=" text-black underline">Sign In.</Link></p>
                </div>
            </section>

            <Footer/>
        </>
    );
}