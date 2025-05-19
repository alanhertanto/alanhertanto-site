"use client";
import { useState } from "react";
import { useRouter } from "next/navigation";
import { PhoneIcon, EnvelopeIcon, UserIcon, PhotoIcon } from "@heroicons/react/24/solid";
import Head from 'next/head';

<Head>
    <script src="https://unpkg.com/mailgo@0.12.1/dist/mailgo.min.js" defer></script>
</Head>

export default function AppsBottom() {
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
        setTimeout(() => router.push(path), 700); // Navigate after animation
    };

    const handleClickExternalLink = (event, path) => {
        if (launching) return; // Prevent multiple clicks

        const rect = event.currentTarget.getBoundingClientRect();
        const screenWidth = window.innerWidth;
        const screenHeight = window.innerHeight;

        setAppPosition({
            x: rect.left + rect.width / 2,
            y: rect.top + rect.height / 2,
        });

        setLaunching(true);
        setTimeout(() => window.location.href = path, 700); // Navigate after animation
    };

    const handleMailClick = () => {
        const email = "alanhertantog@gmail.com";
        const cc = "alanhertantog@gmail.com";
        const bcc = "alanhertantog@gmail.com";
        const subject = encodeURIComponent("A strange email");
        const body = encodeURIComponent("This email is for me with me also in cc and in bcc");

        window.location.href = `mailto:${email}?cc=${cc}&bcc=${bcc}&subject=${subject}&body=${body}`;
    };


    return (
        <>
            {/* Bottom Navigation */}
            <div className="grid grid-cols-4 gap-4 w-full bottom-0 left-0 absolute mb-20 ml-1">
                <button className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"
                    onClick={(e) => { handleClickExternalLink(e, 'https://wa.me/6289676277362') }}>
                    <PhoneIcon className="w-8 h-8 text-white drop-shadow-lg" />
                </button>
                <button className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"
                    onClick={(e) => handleClick(e, "/guest-book")}>
                    <EnvelopeIcon className="w-8 h-8 text-white drop-shadow-lg" />
                </button>

                <button className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"
                    onClick={(e) => handleClick(e, "/about")}>
                    <UserIcon className="w-8 h-8 text-white drop-shadow-lg" />
                </button>
                <button className="relative w-16 h-16 flex items-center justify-center rounded-2xl bg-gradient-to-b from-yellow-400 to-yellow-600 shadow-lg"
                    onClick={(e) => handleClick(e, "/gallery")}>
                    <PhotoIcon className="w-8 h-8 text-white drop-shadow-lg" />
                </button>
            </div>

            {/* App Launch Animation */}
            {launching && (
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
            )}

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
