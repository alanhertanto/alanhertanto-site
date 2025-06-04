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
               <div className="flex left-0 text-white  px-4">
                    {/* <h2 className="text-2xl font-bold mb-2">Alan Hertanto Guspermana</h2>
                    <p className="text-lg font-medium text-gray-300">Versatile developer specializing in Unity, WebGL, VR, AR, and multiplayer networking, with strong skills in backend development, AI integration, and asset optimization. Dedicated to crafting polished, engaging interactive experiences across platforms.</p> */}
                </div>
            )}


            {/* Phone Frame */}
            <div className="flex w-[380px] h-[820px] rounded-[55px] overflow-hidden border-4 border-gray-600 z-10">
                <div className="relative w-[375px] h-[812px] wallpaper1 rounded-[50px] shadow-lg overflow-hidden border-8 border-gray-800">
                    {children}
                </div>
            </div>
        </div>
    );
}
