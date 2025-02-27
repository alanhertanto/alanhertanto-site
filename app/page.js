import PhoneFrame from "./components/PhoneFrame";
import Navbar from "./components/Navbar";
import BezelBottom from "./components/BezelBottom";
import AppsBottom from "./components/AppsBottom";

export default function Home() {
  return (
    <PhoneFrame>
      <Navbar />
      <div className="h-full flex flex-col mt-20 mb-20 items-start justify-start p-4 text-white text-xl font-semibold">

      </div>
      <AppsBottom />
      <BezelBottom />
    </PhoneFrame>
  );
}


