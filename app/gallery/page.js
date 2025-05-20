'use client';

import { useState } from "react";
import GalleryCard from "./Card";
import Filter from "./Filter";
import { motion, AnimatePresence } from "framer-motion";
import PhoneFrame from "../components/PhoneFrame";
import Navbar from "../components/Navbar";
import BezelBottom from "../components/BezelBottom";
import AppsBottom from "../components/AppsBottom";
import { image } from "@heroui/react";

const items = [
  {
    title: "Undercook Activity",
    image: "/undercook-activity.png",
    category: ["2D Games", "Single Player"],
    description: "Undercook Activity is a cooking simulation game where players take on the role of a chef in a busy kitchen. The objective is to prepare and serve various dishes while managing time and resources. Players must chop ingredients, cook them, and plate the final dishes to satisfy customer orders. The game features multiple levels with increasing difficulty, requiring players to multitask and prioritize tasks effectively. Be prepared for a fast-paced and fun cooking experience while you getting distrubed by anomalies.",
    technology: "Unity, C#",
  },
  {
    title: "Test Site Turret",
    image: "/test-site-turret.png",
    category: ["2D Games", "Single Player"],
    description: "A simple turret defense game where you can build turrets and defend against waves of enemies. The game features a variety of turrets, each with unique abilities and upgrade paths. Players can strategically place turrets to maximize their effectiveness and protect their base from enemy attacks.",
    technology: "Unity, C#",
  },
  {
    title: "Aras Link Mask Frontend & Backend",
    image: "/aras.png",
    category: "Website",
    description: "Aras Link Masking Tools is a subscription-based web service that provides API keys for users to manage URL redirection on WordPress sites. The platform enables dynamic link redirection based on various criteria such as geolocation, device platform, country, or specific keywords. This tool helps users deliver targeted content and improve user experience by customizing URL redirects according to visitor attributes.",
    technology: "Laravel, PHP, MySQL, HTML, CSS, JavaScript, NodeJs, ExpressJs",
  },
  {
    title: "DISPORAPAR Kuningan Tourism",
    image: "/disporapar.png",
    category: "Website",
    description: "DISPORAPAR Kuningan is a website that provides information about tourism in Kuningan, Indonesia. It offers details about various tourist attractions, events, and activities in the region. The website aims to promote Kuningan as a tourist destination and provide visitors with the necessary information to plan their trips.",
    technology: "CodeIgniter 2, PHP, MySQL, HTML, CSS, JavaScript",
  },
  {
    title: "Workin Studio Freelance Platform",
    image: "workin.png",
    category: "Website",
    gallery: [
      "/workin.png",
      "/workin-1.png",
      "/workin-2.png",
      "/workin-3.png",
      "/workin-4.png",
    ],
    description: "Workin Studio is a freelance platform and talent pool that connects freelancers with clients looking for their services. The platform allows freelancers to create profiles, showcase their skills, and bid on projects posted by clients. Clients can browse through freelancer profiles, view their portfolios, and hire them for specific tasks or projects. The platform aims to streamline the hiring process for both freelancers and clients, making it easier to find and collaborate with the right talent.",
    technology: "Laravel, PHP, MySQL, HTML, CSS, JavaScript",
  },
  {
    title: "AR Chemistry Quiz",
    image: "ar-chemistry-quiz.png",
    gallery: [
      "/ar-chemistry-quiz.png",
      "/ar-chemistry-quiz-1.png",
      "/ar-chemistry-quiz-2.png",
      "/ar-chemistry-quiz-3.png",
      "/ar-chemistry-quiz-4.png",
    ],
    description: "Kinetic Chems is an educational media application designed to enhance chemistry learning through Augmented Reality (AR). By leveraging AR technology, the app visually demonstrates chemical reactions in an interactive and immersive way, allowing students to better understand complex concepts. This innovative tool brings abstract chemical processes to life, making learning more engaging, intuitive, and effective for students.",
    category: ["Apps", "Augmented Reality"],
    technology: "Unity, C#, Vuforia, Firebase",
  }, {
    title: "Deep Sea",
    image: "deep-sea.png",
    gallery: [
      "/deep-sea.png",
      "/deep-sea-1.png",
      "/deep-sea-2.png",
      "/deep-sea-3.png"
    ],
    description: "This game was developed as part of the Gameloft Students Competition Series: Game Development 2020. It is an Endless Runner platformer set in an underwater adventure theme. Players must dodge various obstacles and manage their oxygen levels, which serve as their health. The game features multiple power-ups, including a protective shield, an obstacle-destroying torpedo, and a temporary speed boost. At certain milestones, players encounter boss battles that add an extra layer of challenge. The game is supported by a backend built with Native PHP, using MySQL as its database management system. Players can upgrade their gear to progress further in each run, adding a strategic progression element to the gameplay.",
    category: ["3D Games", "Single Player"],
    technology: "Unity, C#, PHP, MySQL",
  },
  {
    title: "Introduction Games of Hijaiyah Word",
    image: "bakti.png",
    category: ["Website", "2D Games", "Single Player"],
    technology: "Unity, C#, WebGL, GLTF",
    gallery: [
      "/bakti.png",
      "/bakti-1.png",
      "/bakti-2.png",
      "/bakti-3.png",
      "/bakti-4.png",
      "/bakti-5.png",
    ],
    description: "This game is a 2D puzzle-based educational application featuring a variety of interactive mini-games such as point-and-click challenges, card matching, audio-based word recognition, and word-to-answer dragging tasks. The core gameplay focuses on language learning, where players must correctly match or identify words to progress through levels. Upon completing each level, the player's actions and performance data are sent to a Node.js-based backend. Parents can monitor their child's progress through the PT. Bakti Indonesia Mengaji website, which is connected to the game's backend system. I served as the sole Unity developer on this project, responsible for implementing all gameplay mechanics, UI, animations, and system integration on the client side.",
  },
  {
    title: "Mixed Reality PAL's Showcase",
    image: "PAL.png",
    category: ["Mixed Reality", "Apps"],
    description: "Due to NDA restrictions, detailed information cannot be disclosed. However, the project is a Mixed Reality (MR) showcase application developed at Falah Inovasi Teknologi, specifically designed to present PT. PAL's products. Built for the HoloLens 2, the application allows users to interact with 3D objects using a combination of hand movements and finger gestures. I served as the sole Unity developer on this project, responsible for implementing the interactive MR experience from start to finish.",
    technology: "Unity, C#, HoloLens 2",
  },
  {
    title: "Training Center of Defence: National Defence",
    image: "belneg.png",
    gallery: [
      "/belneg-2.png",
      "/belneg-3.png",
    ],
    technology: "Unity, Leap Motion, C#, JSON, MySQL, PHP",
    description: "The application is a VR Training Simulation developed at Falah Inovasi Teknologi, designed to provide immersive training related to National Defence. Users can select various training scenarios, each of which is based on official guidebooks from military training centers. Within the simulation, users can interact with the virtual environment by grabbing items using their hands—rendered as 3D models—or by performing specific finger gestures. Movement within the environment is controlled either through UI elements or gesture-based navigation. The system utilizes Leap Motion for hand tracking and gesture recognition. Upon completion of each scenario, training data is transmitted to a backend system via Unity WebRequest, formatted as JSON, and stored in a connected database. I served as the core programmer and also acted as the Unity team lead, overseeing the development and integration of core systems and interaction logic throughout the project.",
    category: ["Virtual Reality", "Simulation", "Apps"],
  },
  {
    title: "Training Center of Defence: Technical Function",
    image: "tekfung.png",
    gallery: [
      "/tekfung-1.png",
      "/tekfung-2.png",
      "/tekfung-3.png",
    ],
    technology: "Unity, Leap Motion, C#, JSON, MySQL, PHP",
    description: "This project is a VR Training Simulation developed at Falah Inovasi Teknologi, aimed at providing immersive training in Defence Management. Users can choose from a range of scenarios, each based on standardized training materials from official defence education centers. Interaction within the simulation is achieved through natural hand movements—using 3D-rendered hand models—and specific finger gestures. Users can also navigate the virtual environment via UI controls or gesture-based movement. The system leverages Leap Motion for accurate hand and gesture tracking. Upon completing a scenario, the system transmits training data to a backend server through Unity WebRequest, using JSON format to store the results in a connected database. I contributed to this project as the core programmer and served as the Unity team lead, responsible for the development and coordination of all Unity-related components and interaction systems.",
    category: ["Virtual Reality", "Simulation", "Apps"],
  },
  {
    title: "Training Center of Defence: Management",
    image: "manajemen.png",
    gallery: [
      "/manajemen.png",
      "/manajemen-2.png",
    ],
    description: "This project is a VR Training Simulation developed at Falah Inovasi Teknologi, designed to deliver immersive training in Defence Management. Users can select from various training scenarios, each aligned with official guidebooks from defense education centers. Within the simulation, users interact with the virtual environment by grabbing objects using 3D-rendered hands or by performing specific finger gestures. Navigation is possible either through UI-based movement controls or gesture-based input. The system relies on Leap Motion Sensor technology to accurately detect and track the user's hands and gestures. Upon completion of each scenario, performance data is sent to a backend system via Unity WebRequest, formatted in JSON, and stored in a connected database. In this project, I served as co-lead on the Unity development team, contributing to both the core implementation and coordination of technical efforts across the development process.",
    category: ["Virtual Reality", "Simulation", "Apps"],
    technology: "Unity, Leap Motion, C#, JSON, MySQL, PHP",
  },
  {
    title: "Web-GL Porfolio Showcase",
    image: "webgl.png",
    category: ["Website", "3D Games", "Single Player"],
    technology: "Unity, C#, WebGL, GLTF",
  },
  {
    title: "VR Escape Room: School Evacuation Simulation (Thesis Project)",
    image: "vr-escape-room.png",
    description:"This project is a VR Escape Room game developed as part of my undergraduate thesis. The scenario places the player in a collapsing school building, where they must navigate and escape before time runs out. The gameplay mimics real-world movement by utilizing the smartphone’s gyroscope, detecting motion through device shaking to simulate walking. A key feature of the system is the use of the Fuzzy Mamdani Algorithm, which dynamically determines the behavior of NPCs that the player must find and rescue during their escape. This adds a layer of unpredictability and simulates a real-life evacuation scenario.I developed the entire game independently using Unity, with a focus on immersive interaction, algorithmic NPC behavior, and motion-based controls.",
    category: ["Virtual Reality", "Simulation", "3D Games", "Single Player"],
    technology: "Unity, C#, Google Cardboard SDK, Fuzzy Logic",
  }
];
export default function Gallery() {
  const [filter, setFilter] = useState("All");
  const [selectedItem, setSelectedItem] = useState(null);
  const [fullscreenImage, setFullscreenImage] = useState(null);

  const filtered =
    filter === "All" ? items : items.filter((i) => i.category.includes(filter));

  const [carouselIndex, setCarouselIndex] = useState(0);

  const nextImage = () => {
    if (!selectedItem?.gallery) return;
    setCarouselIndex((carouselIndex + 1) % selectedItem.gallery.length);
  };

  const prevImage = () => {
    if (!selectedItem?.gallery) return;
    setCarouselIndex(
      (carouselIndex - 1 + selectedItem.gallery.length) %
      selectedItem.gallery.length
    );
  };

  const closePopup = () => {
    setSelectedItem(null);
    setCarouselIndex(0); // reset carousel saat popup ditutup
  };


  return (
    <PhoneFrame>
      <Navbar />
      <div className="flex flex-col h-full mt-20 relative">
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
                <GalleryCard {...item} onClick={() => setSelectedItem(item)} />
              </motion.div>
            ))}
          </AnimatePresence>
        </div>

        {/* POPUP */}
        <AnimatePresence>
          {selectedItem && (
            <motion.div
              className="absolute inset-0 bg-black bg-opacity-70 flex items-center justify-center z-50"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
            >
              {/* Scrollable container */}
              <div className="bg-white text-black rounded-lg p-4 w-full max-w-sm max-h-[80vh] overflow-y-auto relative -mt-20">
                <h2 className="text-lg font-bold mb-2 text-center">
                  {selectedItem.title}
                </h2>

                {/* Image or Carousel */}
                <div className="relative w-full h-56 mb-2">
                  {selectedItem.gallery ? (
                    <>
                      <img
                        src={selectedItem.gallery ? selectedItem.gallery[carouselIndex] : selectedItem.image}
                        alt={selectedItem.title}
                        className="w-full h-full object-cover rounded cursor-pointer"
                        onClick={() =>
                          setFullscreenImage(selectedItem.gallery
                            ? selectedItem.gallery[carouselIndex]
                            : selectedItem.image)
                        }
                      />
                      <button
                        onClick={prevImage}
                        className="absolute top-1/2 left-2 transform -translate-y-1/2 bg-black text-white p-1 px-2 rounded"
                      >
                        ◀
                      </button>
                      <button
                        onClick={nextImage}
                        className="absolute top-1/2 right-2 transform -translate-y-1/2 bg-black text-white p-1 px-2 rounded"
                      >
                        ▶
                      </button>
                      <div className="absolute bottom-2 right-2 text-sm text-white bg-black bg-opacity-50 px-2 py-1 rounded">
                        {carouselIndex + 1}/{selectedItem.gallery.length}
                      </div>
                    </>
                  ) : (
                    <img
                      src={selectedItem.gallery ? selectedItem.gallery[carouselIndex] : selectedItem.image}
                      alt={selectedItem.title}
                      className="w-full h-full object-cover rounded cursor-pointer"
                      onClick={() =>
                        setFullscreenImage(selectedItem.gallery
                          ? selectedItem.gallery[carouselIndex]
                          : selectedItem.image)
                      }
                    />)}
                </div>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Technology:</strong> {selectedItem.technology || "No Techonology Description available."}</p>
                <p className="text-sm text-gray-600 mb-2">
                  <strong>Description:</strong> {selectedItem.description || "No description available."}</p>
                <p className="text-sm text-gray-600 mb-4 text-center">
                  <strong>Category:</strong>
                  {Array.isArray(selectedItem.category)
                    ? selectedItem.category.join(", ")
                    : selectedItem.category}
                </p>
                <button
                  className="bg-black text-white px-4 py-2 rounded block mx-auto"
                  onClick={closePopup}
                >
                  Close
                </button>
              </div>
            </motion.div>
          )}
        </AnimatePresence>
        <AnimatePresence>
          {fullscreenImage && (
            <motion.div
              className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center"
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              exit={{ opacity: 0 }}
              onClick={() => setFullscreenImage(null)} // Click anywhere to close
            >
              <img
                src={fullscreenImage}
                alt="Fullscreen"
                className="max-w-full max-h-full object-contain"
              />
            </motion.div>
          )}
        </AnimatePresence>


      </div>
      <BezelBottom />
    </PhoneFrame>
  );
}
