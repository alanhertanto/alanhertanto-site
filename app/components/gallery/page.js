'use client';

import { useState } from "react";
import GalleryCard from "./Card";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";

const items = [
  {
    title: "Undercook Activity",
    image: "/images/undercook.jpg",
    category: "Games",
  },
  {
    title: "Red Blue Tunes",
    image: "/images/music.jpg",
    category: "Music",
  },
  {
    title: "Manga Vault",
    image: "/images/book.jpg",
    category: "Books",
  },
];

export default function Gallery() {
  const [filter, setFilter] = useState("All");

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category === filter);

  return (
    <div className="flex flex-col h-full">
      <Filter activeFilter={filter} onChange={setFilter} />
      <div className="flex-1 overflow-y-auto custom-scroll grid grid-cols-2 gap-2 pr-1">
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
  );
}
