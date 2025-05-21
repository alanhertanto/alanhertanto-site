'use client';

import React from 'react';
import PhoneFrame from "../components/PhoneFrame";
import Navbar from "../components/Navbar";
import BezelBottom from "../components/BezelBottom";

export default function AboutPage() {
    return (
        <PhoneFrame className="flex flex-col h-full">
            <Navbar />

            {/* Scrollable content container */}
            <div className="flex flex-col h-full mt-20 relative bg-white">
                <div className="flex-1 overflow-y-auto custom-scroll  mb-40">
                    <main className="max-w-3xl mx-auto px-4 py-10 text-gray-800">
                        <h1 className="text-3xl font-bold mb-6">About Me</h1>
                        <p className="mb-4">
                            I’m a Unity developer with extensive experience across a wide range of interactive technologies—including VR, AR, MR, and WebGL. I've worked on over <strong>46 Unity thesis projects</strong> as a freelancer and developed <strong>dozens of websites</strong> using Laravel, native PHP, and CodeIgniter 3. I also completed a backend project in Node.js.
                        </p>

                        <p className="mb-4">
                            During all of my previous full-time role, I was entrusted with mentoring 3 juniors and 3 level designers, while also collaborating closely with 3D teams for Unity asset optimization. Currently, I work at Nusameta where I handle both core development and R&D tasks, occasionally contributing to gameplay features such as pet and skill systems. I’ve also assisted with deployment on both Android and iOS stores.
                        </p>

                        <p className="mb-4">
                            My development strengths lie in practical implementation and logical thinking—I'm someone who prefers solving problems and optimizing performance over taking on leadership roles. I enjoy building systems and crafting interactive experiences that feel responsive and purposeful.
                        </p>

                        <ul className="list-disc list-inside mb-4">
                            <li>Unity multiplayer using <strong>Mirror</strong> and <strong>DarkRift</strong></li>
                            <li>WebGL development (puzzle games, FPS mini-games, interactive 3D rooms)</li>
                            <li>Fuzzy Mamdani and Fuzzy C-Means + SAW for academic research</li>
                            <li>PDF rendering, texture painting, and modular asset loading in Unity</li>
                            <li>VR/MR applications for training and simulation</li>
                        </ul>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Personality & Values</h2>
                        <p className="mb-4">
                            I’m an INTP—introverted, analytical, and rational. I value objective truth over tradition, and I'm naturally skeptical of blind authority. In discussions, I prioritize logic even when it's uncomfortable. My motivation lies in continuous learning, solving complex problems, and contributing meaningfully.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Fitness & Discipline</h2>
                        <p className="mb-4">
                            I train seriously with a lean bulking goal (up to 75 kg) before cutting to ~60 kg of lean muscle. My body fat is around 16.8%, with a 77% mesomorph profile. I track workouts with precise equipment metrics and monitor measurements regularly.
                        </p>

                        <h2 className="text-2xl font-semibold mt-8 mb-4">Creative Endeavors</h2>
                        <p className="mb-4">
                            I’m developing a horror game with a lo-fi, mysterious tone, inspired by <i>State of Decay</i>. I’m also exploring pixel art for personal projects and love building flexible, modular systems in Unity.
                        </p>
                        <p className="text-center mt-10 italic text-sm text-gray-500">
                            "Balance, clarity, and intention—whether in code, life, or belief."
                        </p>
                        <div className="text-center text-xs text-gray-400 py-2 select-none">
                            &copy; {new Date().getFullYear()} Alan Hertanto Guspermana. All rights reserved.
                        </div>

                    </main>

                </div>

            </div>

            <BezelBottom />
        </PhoneFrame>
    );
}
