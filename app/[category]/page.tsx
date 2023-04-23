import Image from "next/image";
import books from "../../public/books.jpg";
import Link from "next/link";


export async function generateStaticParams() {
  const categories: string[] = ['non-fiction', 'fiction'];

  return categories.map((category) => ({
    category: category,
  }));
}



async function getData(category: string) {
  const res = await fetch(`https://simple-books-api.glitch.me/books?type=${category}`, {
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


export default async function GiveProductDetail(props: any) {
  // console.log(props);
  const quote = await getData(props.params.category);

  // console.log(quote);
  return (
    <div>
      <div className="md:px-[60px] px-[20px] grid place-items-center gap-x-40 grid-col-2 md:grid-cols-3 py-5">
        {quote.map((ele: { id: number; name: string; type: string }) => (
          <div key={ele.id} className="mt-10  ">
            <Link href={`/products/${ele.id}`}>
            <div>
              <Image src={books} width={300} height={100} alt="books"></Image>
            </div></Link>
            <div className="mt-3">
              <p className="text-2xl text-orange-800 uppercase"> {ele.name}</p>
              <p className="text-1xl text-gray-700 uppercase"> {ele.type}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
