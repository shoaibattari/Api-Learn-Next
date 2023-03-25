//https://beta.nextjs.org/docs/data-fetching/generating-static-params
export async function generateStaticParams() {
  const names: string[] = ["1", "2", "3", "4", "5", "6"];

  return names.map((name) => ({
    name: name,
  }));
}

export default function GiveName({ params }: { params: { name: string } }) {
  return (
    <div>
      <div className="text-7xl text-green-600">My name is {params.name}.</div>
    </div>
  );
}
