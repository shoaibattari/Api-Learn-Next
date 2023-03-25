"use client"
import Link from "next/link";


export default function Home() {
  return (
    <div>
      <div className="text-center ">
        <h1 className="text-7xl font-bold  mt-5 text-orange-500">
          Well come to <span className="text-green-500"> Book shop</span>
        </h1>

        <div>
          <button className=" mx-4 my-4 text-1xl font-bold p-5 w-36 rounded-lg bg-black text-white hover:cursor-pointer  hover:bg-orange-500 hover:scale-125 hover: duration-500 ">
            <Link href="/products">Products </Link>
          </button>
        </div>
      </div>
    </div>
  );
}
