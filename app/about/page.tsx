{
  /* @ts-expect-error Async Server Component */
}
import Image from "next/image";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

async function getData() {
  const res = await fetch("https://simple-books-api.glitch.me/books/1", {
    cache: "no-cache",
  });
  // The return value is *not* serialized
  // You can return Date, Map, Set, etc.

  // Recommendation: handle errors
  if (!res.ok) {
    // This will activate the closest `error.js` Error Boundary
    throw new Error("Failed to fetch data");
  }

  return res.json();
}

export default async function Home() {
  const quote = await getData();

  return (
    <div>
      {/* {quote.map((ele) => (
        <div>
          <div>Book Name: {ele.name}</div>
          <div>Book type: {ele.type}</div>
          <div>Book Stock Status: {ele.available}</div>

          <br />
          <hr />
        </div>
      ))} */}
      <p className="text-2xl uppercase">book name: <span className="text-3xl"> {quote.name}</span></p>
      <p className="text-2xl uppercase">book author: <span className="text-3xl"> {quote.author}</span></p>
      <p className="text-2xl uppercase">book isbn: <span className="text-3xl"> {quote.isbn}</span></p>
      <p className="text-2xl uppercase">book available: <span className="text-3xl"> {quote.available}</span></p>
      <p className="text-2xl uppercase">book price: <span className="text-3xl"> {quote.price}</span></p>

    </div>

  );
}
