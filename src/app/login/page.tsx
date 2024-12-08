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
                    <h1 className=" text-2xl font-bold">YOUR ACCOUNT <br /> FOR EVERYTHING <br /> NIKE</h1>
                    <input type="email" placeholder="Email Address" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <input type="password" placeholder="Password" className=" border rounded-lg border-gray-200 w-80 h-10 px-5" />
                    <div className=" flex justify-between text-sm text-gray-500">
                        <div >
                        <input type="checkbox" />
                        <label> Keep me signed in</label>
                        </div>
                        <div>
                        Forgotten your password?
                        </div>
                    </div>
                    <p className="text-gray-500 text-sm">By logging in, you agree to Nike's Privacy Policy and Terms of Use.</p>
                    <button className="bg-black text-white  py-2 rounded-lg text-center  hover:bg-gray-900 duration-500 w-full">  Sign In</button>
                    <p className=" text-gray-500">Not a member? <Link href="/joinus" className=" text-black underline">Join Us.</Link></p>
                </div>
            </section>

            <Footer/>
        </>
    );
}