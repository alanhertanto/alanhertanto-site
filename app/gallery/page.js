'use client';

import { useState } from "react";
import GalleryCard from "./Card";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "../components/PhoneFrame";
import Navbar from "../components/Navbar";
import BezelBottom from "../components/BezelBottom";
import AppsBottom from "../components/AppsBottom";

const items = [
  {
    title: "Undercook Activity",
    image: "/undercook-activity.png",
    category: ["2D Games","Single Player"],
  },
  {
    title: "Test Site Turret",
    image: "/test-site-turret.png",
    category: ["2D Games","Single Player"],
  },
  {
    title: "Aras Link Mask Frontend & Backend",
    image: "/aras.png",
    category: "Website",
  },
  {
    title: "DISPORAPAR Kuningan Tourism",
    image: "/disporapar.png",
    category: "Website",
  },
  {
    title: "Workin Studio Freelance Platform",
    image: "workin.png",
    category: "Website",
  },
  {
    title: "AR Chemistry Quiz",
    image: "ar-chemistry-quiz.png",
    category: ["Apps", "Augmented Reality"],
  }, {
    title: "Deep Sea",
    image: "deep-sea.png",
    category: ["3D Games", "Single Player"],
  },
  {
    title: "Mixed Reality PAL's Showcase",
    image: "PAL.png",
    category: ["Mixed Reality","Apps"],
  },
  {
    title: "Training Center of Defence: National Defence",
    image: "belneg.png",
    category: ["Virtual Reality","Simulation","Apps"],
  },
  {
    title: "Training Center of Defence: Technical Function",
    image: "tekfung.png",
    category: ["Virtual Reality","Simulation","Apps"],
  },
  {
    title: "Training Center of Defence: Management",
    image: "manajemen.png",
    category: ["Virtual Reality","Simulation","Apps"],
  }, {
    title: "Web-GL Porfolio Showcase",
    image: "webgl.png",
    category: ["Website","3D Games","Single Player"],
  },
];

//https://pariwisatakuningan.kuningankab.go.id/
//aras-system.com
export default function Gallery() {
  const [filter, setFilter] = useState("All");

const filtered =
  filter === "All" ? items : items.filter((i) => i.category.includes(filter));

  return (
    <PhoneFrame>
      <Navbar />
      <div className="flex flex-col h-full mt-20">
        <Filter activeFilter={filter} onChange={setFilter} />
        <div className="flex-1 overflow-y-auto custom-scroll grid grid-cols-2 gap-2 pr-1 mb-40">
          <AnimatePresence>
            {filtered.map((item, idx) => (
              <motion.div
                key={item.title}
                initial={{ opacity: 0, y: 10 }}
                animate={{ opacity: 1, y: 0 }}
                exit={{ opacity: 0, y: 10 }}
                transition={{ duration: 0.2, delay: idx * 0.05 }}
              >
                <GalleryCard {...item} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>
      </div>
      <BezelBottom />
    </PhoneFrame>

  );
}
