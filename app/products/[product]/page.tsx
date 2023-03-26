import Image from "next/image";
import books from "../../../public/books.jpg";

//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
  const products: string[] = ["1", "2", "3", "4", "5", "6"];

  return products.map((product) => ({
    product: product,
  }));
}





async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books/3");
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function GiveName({
  params,
}: {
  params: { name: string };
}) {
  const quote = await getData();

  return (
    <div>
      <div className="flex p-3">
        <div>
          <Image src={books} width={500} height={200} alt="books"></Image>
        </div>
        <div className=" bg-gray-300 w-[1000px]">
        <div className="flex flex-col m-5 p-10">
          <p className="text-8xl">{quote.name}</p>

          <hr />
          <p className="text-4xl  text-orange-800 uppercase mt-3">
            Book Name: <span className=" text-teal-900">{quote.name}</span>
          </p>
          <p className="text-4xl  text-orange-800 uppercase mt-3">
            Book Author: <span className=" text-teal-900">{quote.author}</span>
          </p>
          <p className="text-4xl  text-orange-800 uppercase mt-3">
            Book Isbn: <span className=" text-teal-900">{quote.isbn}</span>
          </p>
          <p className="text-4xl  text-orange-800 uppercase mt-3">
            Book Type: <span className=" text-teal-900">{quote.type}</span>
          </p>
          <p className="text-4xl  text-orange-800 uppercase mt-3">
            Book Price: <span className=" text-teal-900">{quote.price} $</span>
          </p>
        </div>
        </div>
      </div>
    </div>
  );
}
