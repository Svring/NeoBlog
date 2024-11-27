import Link from "next/link";
import Image from "next/image";
import FluidCover from "./components/FluidCover";

export default async function Home() {
  return (
    <div className="relative">
      <FluidCover />
      <Link href="/article" className="absolute top-1/2 left-1/2 transform -translate-x-1/2 -translate-y-1/2 z-10 mx-auto my-auto">
        <Image 
          src="/avatar.jpeg" 
          alt="Avatar" 
          className="rounded-full opacity-60 hover:opacity-100 hover:scale-110 transition-all duration-200"
          width={150}
          height={150}
        />
      </Link>
    </div>
  );
}
