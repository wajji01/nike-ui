import { IoCartOutline } from "react-icons/io5";
import { Footer } from "../components/footer"
import Navber from "../components/navbar"
import productimg from "@/app/assists/productDetail.png"
import Image from "next/image";


export default function productdetail() {
return (
    <>
    <Navber/>

    <section className="  mb-40 p-40">
        <div className=" grid grid-cols-1 md:grid-cols-2">
            <div className=" px-10">
                <Image src={productimg} alt="product Image" className=" w-full" />
            </div>
            <div className="px-20">
                <h1 className=" text-6xl font-bold py-5">Nike Air Force 1 <br />
                PLT.AF.ORM</h1>
                <p className=" w-3/4 text-xl py-10 -tracking-tighter">Turn style on its head with this crafted take on the Air Jordan 1 Mid. Its inside out-inspired construction, including unique layering and exposed foam accents, ups the ante on this timeless Jordan Brand silhouette. Details like the deco stitching on the Swoosh add coveted appeal, while the unexpected shading, rich mixture of materials and aged midsole aesthetic give this release an artisan finish.</p>
                <h1 className=" text-4xl font-bold py-5">₹ 8 695.00</h1>
                <button className="bg-black text-white px-10 py-2 rounded-full flex gap-x-2 hover:bg-gray-900 duration-500"> <IoCartOutline className=" text-2xl" />  Add To Cart</button>
            </div>

        </div>
    </section>


    <Footer/>

    </>
);

}

