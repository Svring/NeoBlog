import Link from "next/link";

export default async function Home() {
  return (
    <div 
      className="bg-black flex justify-between flex-row w-full h-screen p-2 bg-cover bg-center"
      style={{ backgroundImage: 'url("/abstract.jpeg")' }}
    >
      <Link href="/article" className="z-10 mx-auto my-auto bg-black text-white px-4 py-2 rounded-md hover:bg-gray-900">
        View Article
      </Link>
    </div>
  );
}
