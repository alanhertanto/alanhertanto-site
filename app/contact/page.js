import PhoneFrame from "../components/PhoneFrame";
import Navbar from "../components/Navbar";

export default function Contact() {
  return (
    <PhoneFrame>
      <Navbar />
      <div className="p-4 text-white">
        <h1 className="text-2xl font-bold">Contact</h1>
        <p className="mt-2">Email: yourname@email.com</p>
        <p>Phone: +62 812-3456-7890</p>
      </div>
    </PhoneFrame>
  );
}
