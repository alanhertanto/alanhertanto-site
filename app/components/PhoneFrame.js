'use client';
import { useEffect, useState } from 'react';
import ParticlesBackground from "./ParticlesBackground";

export default function PhoneFrame({ children }) {
    const [isAndroid, setIsAndroid] = useState(false);

    useEffect(() => {
        if (typeof window !== "undefined") {
            const ua = navigator.userAgent.toLowerCase();
            setIsAndroid(ua.includes("android"));
        }
    }, []);

    return (
        <div className="flex justify-center items-center min-h-screen relative px-8">
            <ParticlesBackground />

            {/* Left Handwritten SVG */}
            {!isAndroid && (
               <div className="absolute left-0 text-white max-w-[250px] px-4">
                    <h1 className="text-2xl font-bold mb-2">Alan Hertanto Guspermana</h1>
                    <h2 className="text-lg font-medium text-gray-300">Versatile developer specializing in Unity, WebGL, VR, AR, and multiplayer networking, with strong skills in backend development, AI integration, and asset optimization. Dedicated to crafting polished, engaging interactive experiences across platforms.</h2>
                </div>
            )}


            {/* Phone Frame */}
            <div className="flex w-[380px] h-[820px] rounded-[55px] overflow-hidden border-4 border-gray-600 z-10">
                <div className="relative w-[375px] h-[812px] wallpaper1 rounded-[50px] shadow-lg overflow-hidden border-8 border-gray-800">
                    {children}
                </div>
            </div>

            {/* Right Handwritten SVG */}
            {!isAndroid && (
                <div className="absolute right-0 text-white max-w-[250px] px-4">
                    <svg viewBox="0 0 600 300" className="w-full h-auto">
                        <path
                            d="M10,30 C40,0,80,60,120,30" // simplify or break into multiple paths
                            className="handwriting-path delay-[1s]"
                        />
                    </svg>
                </div>
            )}

        </div>
    );
}
