import Image from "next/image";
import books from "../../../public/books.jpg";

//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
  const products: number[] = [1, 2, 3, 4, 5, 6];

  return products.map((product) => ({
    product: product,
  }));
}

async function getData(id: number) {
  const res = await fetch(`https://simple-books-api.glitch.me/books/${id}`);
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function GiveProductDetail(props: any) {
  // console.log(props);
  const quote = await getData(props.params.product);

  // console.log(quote);
  return (
    <div>
      <div className="md:px-[50px] px-[20px] grid grid-col-1 md:grid-cols-2 py-5">
        <div className="md:flex">
          <Image src={books} width={700} height={200} alt="books"></Image>
        </div>
        <div className=" bg-gray-300 w-auto">
          <div className="grid m-5 p-5">
            <div>
              <p className="text-3xl lg:text-5xl uppercase font-bold  my-3">{quote.name}</p>

              <hr />
            </div>
            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
                 Price:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900 font-bold">
                $ {quote.price}
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
                Name:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900">
                {quote.name}
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
              Type:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900">
                {quote.type}
              </p>
            </div>
            <hr />

            <div className="grid grid-cols-2 my-3">
              <p className=" text-1xl md:text-2xl  text-orange-800 uppercase">
               Author:
              </p>
              <p className="text-1xl md:text-2xl  text-teal-900">
                {quote.author}
              </p>
            </div>
            <hr />
          </div>
        </div>
      </div>
    </div>
  );
}
