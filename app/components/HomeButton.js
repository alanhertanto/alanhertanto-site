'use client'

import { useRouter } from 'next/navigation'

export default function HomeButton() {
  const router = useRouter();

  return (
    <div className='shine-effect'>
    <button
      className="absolute bottom-4 left-1/2 transform -translate-x-1/2 w-12 h-12 bg-gray-700 border-2 border-solid border-white rounded-full flex items-center justify-center homeButton"
      onClick={() => router.push("/")}
    >
      <span className="homeScreenButton">
      </span>
    </button>

    </div>
  );
}
