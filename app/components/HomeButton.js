'use client'
 
import { useRouter } from 'next/navigation'
export default function HomeButton() {
  const router = useRouter();

  return (
    <button
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 rounded-full"
      onClick={() => router.push("/")}
    ></button>
  );
}
