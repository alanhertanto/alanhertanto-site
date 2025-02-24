import PhoneFrame from "./components/PhoneFrame";
import Navbar from "./components/Navbar";
import HomeButton from "./components/HomeButton";
import Link from "next/link";

export default function Home() {
  return (
    <PhoneFrame>
      <Navbar />
      <div className="h-full flex flex-col justify-center items-center text-white text-xl font-semibold">
        <h1>Welcome to My Portfolio</h1>
        <div className="mt-4 space-x-4">
          <Link href="/portfolio" className="px-4 py-2 bg-blue-500 rounded-lg">
            Portfolio
          </Link>
          <Link href="/contact" className="px-4 py-2 bg-green-500 rounded-lg">
            Contact
          </Link>
        </div>
      </div>
    </PhoneFrame>
  );
}
