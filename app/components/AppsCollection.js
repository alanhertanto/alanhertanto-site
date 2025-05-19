"use client";

import { useState } from "react";
import { useRouter } from "next/navigation";

export default function AppsCollection() {
    const router = useRouter();
    const [launching, setLaunching] = useState(false);
    const [appPosition, setAppPosition] = useState({ x: 0, y: 0 });

    const handleClick = (event, path) => {
        if (launching) return; // Prevent multiple clicks

        const rect = event.currentTarget.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        setAppPosition({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        });

        setLaunching(true);
        setTimeout(() => {
            if (path.startsWith("http")) {
                window.location.href = path; // Redirect to external URL
            } else {
                router.push(path); // Navigate internally
            }
        }, 700); // Delay for animation
    };
    return (
        <>
            <div className="relative mt-4 grid grid-cols-4 gap-4 w-full absolute mb-20 ml-1">
                <div className="flex flex-col items-center rounded-2xl">
                    <button className="relative w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden icon"
                        onClick={(e) => handleClick(e, "https://noyomi.itch.io/undercook-activity")}>
                        <img src="./undercook-activity.png" className="w-16 h-16 text-white drop-shadow-lg" />
                    </button>
                    <p className="mt-2 text-white text-[min(6px,2vw)] text-center leading-tight">
                        Undercook Activity
                    </p>
                </div>

                <div className="flex flex-col items-center rounded-2xl">
                    <button className="relative w-16 h-16 flex items-center justify-center rounded-2xl shadow-lg overflow-hidden icon"
                        onClick={(e) => handleClick(e, "https://noyomi.itch.io/test-site-turret")}>
                        <img src="./test-site-turret.png" className="w-16 h-16 text-white drop-shadow-lg" />
                    </button>
                    <p className="mt-2 text-white text-[min(6px,2vw)] text-center leading-tight">
                        Test Site Turret
                    </p>
                </div>
            </div>

            {/* App Launch Animation */}
            {
                launching && (
                    <div
                        className="fixed bg-white rounded-2xl shadow-lg animate-app-launch"
                        style={{
                            position: "fixed",
                            width: "64px",
                            height: "64px",
                            top: appPosition.y,
                            left: appPosition.x,
                            transform: "translate(-50%, -50%)",
                            animation: "moveToCenter 0.3s ease-out forwards, expandToScreen 0.4s ease-out 0.3s forwards"
                        }}
                    />
                )
            }

            {/* Tailwind Animation (Add to global styles) */}
            <style jsx>{`
                @keyframes moveToCenter {
                    0% {
                        top: ${appPosition.y}px;
                        left: ${appPosition.x}px;
                    }
                    100% {
                        top: 50%;
                        left: 50%;
                    }
                }

                @keyframes expandToScreen {
                    0% {
                        width: 64px;
                        height: 64px;
                    }
                    100% {
                        width: 355px;
                        height: 724px;
                    }
                }
                
                .animate-app-launch {
                    animation: moveToCenter 0.3s ease-out forwards, expandToScreen 0.4s ease-out 0.3s forwards;
                }
            `}</style>
        </>
    );
}
