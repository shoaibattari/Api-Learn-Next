import Link from "next/link";
import React from "react";
import Image from "next/image";
import bookShelf from "../../public/bookshelf.jpg";

function Hero() {
  return (
    <div className=" md:px-[60px] px-[20px] md:grid md:grid-cols-2 my-10">
      <div className="text-center">
        <h1 className=" text-2xl md:text-6xl font-bold  text-orange-500 ">
          Well come to <span className="text-green-500"> Book shop</span>
        </h1>

        <h1 className="text-2xl md:text-6xl font-bold  text-orange-500 mt-5">
          Explore Books API And
          <span className="text-green-500"> Get Data </span>
        </h1>
        <button className=" mx-4 my-10 text-1xl font-bold p-5 w-36 rounded-lg bg-black text-white hover:cursor-pointer  hover:bg-orange-500 hover:scale-125 hover: duration-500 ">
          <Link href="/products">Products </Link>
        </button>
      </div>

      <div>
        <Image src={bookShelf} width={600} height={300} alt="books"></Image>
      </div>
    </div>
  );
}

export default Hero;
