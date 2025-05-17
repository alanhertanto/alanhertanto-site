import PhoneFrame from "../PhoneFrame";
import Navbar from "../Navbar";
import BezelBottom from "../BezelBottom";
import AppsBottom from "../AppsBottom";

export default function Contact() {
  return (
    <PhoneFrame>
      <Navbar />
      <div className="p-4 text-white mt-20">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2">Email: yourname@email.com</p>
        <p>Phone: +62 812-3456-7890</p>
      </div>
      <AppsBottom />
      <BezelBottom />
    </PhoneFrame>
  );
}
