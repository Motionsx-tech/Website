// src/pages/DroneService.jsx
import React from "react";
import { Link } from "react-router-dom";
import { motion } from "framer-motion";

const coreServices = [
  {
    title: ["Drone Surveying", "& Mapping"],
    icon: "🛰️",
    items: [
      "Topographic surveys",
      "Land and boundary mapping",
      "Construction site monitoring",
      "Mining and quarry surveys",
      "Agricultural crop health monitoring",
    ],
  },
  {
    title: ["Aerial Videography", "& Photography"],
    icon: "🎥",
    items: [
      "Real estate property shoots",
      "Event and wedding coverage",
      "Tourism and landscape promotion",
      "Corporate films and commercials",
      "Industrial and infrastructure documentation",
    ],
  },
];

const whyChooseUs = [
  "Expertise in drone technology and aerial data analytics",
  "DGCA-compliant, licensed, and safety-focused operations",
  "High-resolution imagery, 3D mapping, and precision survey outputs",
  "Creative videography and promotional content tailored for businesses",
  "Cost-efficient, fast, and reliable project execution",
];

const mission = "To revolutionize surveying and videography through drone technology, providing innovative, accurate, and visually compelling solutions for businesses and individuals.";
const vision = "To be a trusted leader in drone survey and aerial videography across India, delivering unmatched value through technology and creativity.";

const DroneService = () => {
  return (
    <div className="w-full text-white bg-gradient-to-b from-gray-900 via-gray-800 to-black font-sans">

      {/* Hero Section */}
      <section className="relative w-full h-screen flex flex-col items-center justify-center overflow-hidden">
        <img
          src="https://images.unsplash.com/photo-1506947411487-a56738267384?q=80&w=2069&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
          alt="Drone Hero"
          className="absolute w-full h-full object-cover opacity-60"
        />
        <motion.div
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
          className="text-center z-10 px-6"
        >
          <h1 className="text-5xl md:text-7xl font-extrabold tracking-wide">
            <span className="text-white">MotionsX</span>{' '}
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">SkyOps</span>
          </h1>
          <p className="mt-4 text-xl md:text-2xl text-gray-300 max-w-3xl mx-auto">
            Redefining surveying and aerial videography with cutting-edge drone technology
          </p>
        </motion.div>
      </section>

     <motion.section className="relative py-20 px-6 md:px-20 overflow-hidden">
  {/* Optional Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1489087433598-048557455f41?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black/40"></div>
  </div>

  <h2 className="text-4xl md:text-5xl font-bold text-center mb-16 relative z-10">
    <span className="text-white">Our</span>{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
      Core Services
    </span>
  </h2>

  <div className="relative z-10 grid md:grid-cols-2 gap-12">
    {coreServices.map((service, idx) => (
      <motion.div
        key={idx}
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.6, delay: idx * 0.2 }}
        className="bg-white/20 backdrop-blur-md border border-white/20 rounded-2xl p-8 text-center shadow-lg cursor-pointer transform transition-transform hover:-translate-y-4 hover:scale-105"
      >
        {/* Title */}
        <h3 className="text-2xl md:text-3xl font-bold mb-4 text-white">
          {service.title[0]}{" "}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-blue-500 to-purple-600">
            {service.title[1]}
          </span>
        </h3>

        {/* Items */}
        <ul className="text-gray-100 text-lg space-y-2">
          {service.items.map((item, i) => (
            <motion.li
              key={i}
              initial={{ opacity: 0, x: -10 }}
              whileInView={{ opacity: 1, x: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.3, delay: i * 0.1 }}
            >
              {item}
            </motion.li>
          ))}
        </ul>
      </motion.div>
    ))}
  </div>

  {/* Optional decorative floating shapes */}
  <div className="absolute -top-20 -left-16 w-40 h-40 bg-white/10 rounded-full animate-pulse-slow"></div>
  <div className="absolute -bottom-20 -right-16 w-60 h-60 bg-white/10 rounded-full animate-pulse-slow"></div>
</motion.section>


      {/* Why Choose Us – Hexagon / Honeycomb Grid with Background Image */}
<section className="relative py-20 px-6 md:px-20 text-black">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1514043454212-14c181f46583?q=80&w=1932&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-50"></div> {/* Dark overlay */}
  </div>

  <h2 className="relative text-4xl md:text-5xl font-bold text-center mb-16 z-10">
    <span className="text-white">Why Choose</span>{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-white to-gray-200">
      MotionsX?
    </span>
  </h2>

  <div className="relative flex flex-wrap justify-center -mx-4 z-10">
    {whyChooseUs.map((point, i) => (
      <motion.div
        key={i}
        initial={{ opacity: 0, y: 50 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.5, delay: i * 0.1 }}
        className="w-[220px] h-[190px] m-4 flex-shrink-0 relative"
      >
        {/* Hexagon shape directly using inline clip-path */}
        <div
          className="absolute inset-0 bg-white bg-opacity-20 hover:bg-opacity-40 transition-colors duration-300 flex items-center justify-center p-4 text-center"
          style={{
            clipPath:
              "polygon(25% 6.7%, 75% 6.7%, 100% 50%, 75% 93.3%, 25% 93.3%, 0% 50%)",
          }}
        >
          <p className="text-sm md:text-base text-white">{point}</p>
        </div>
      </motion.div>
    ))}
  </div>
</section>


      {/* Mission & Vision – Transparent Flip Cards */}
<section className="relative py-20 px-6 md:px-20 text-center overflow-hidden">
  {/* Background Image */}
  <div className="absolute inset-0">
    <img
      src="https://images.unsplash.com/photo-1473186639016-1451879a06f0?q=80&w=2005&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D"
      alt="Background"
      className="w-full h-full object-cover"
    />
    <div className="absolute inset-0 bg-black bg-opacity-40"></div> {/* Dark overlay */}
  </div>

  <h2 className="text-4xl md:text-5xl font-bold mb-16 relative z-10">
    <span className="text-white">Our</span>{" "}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-gray-100 to-gray-300">
      Mission & Vision
    </span>
  </h2>

  <div className="relative flex flex-wrap justify-center gap-12 z-10">
    {/* Mission Flip Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6 }}
      className="w-64 h-64 perspective cursor-pointer"
      whileHover={{ y: -10 }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-center justify-center backface-hidden border border-white/20 p-6">
          <span className="text-5xl mb-4">🎯</span>
          <h3 className="text-xl font-semibold text-white">Mission</h3>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full bg-white/20 backdrop-blur-md rounded-2xl shadow-inner flex flex-col items-center justify-center p-6 text-center transform rotate-y-180 backface-hidden border border-white/20">
          <p className="text-white text-sm">{mission}</p>
        </div>
      </div>
    </motion.div>

    {/* Vision Flip Card */}
    <motion.div
      initial={{ opacity: 0, y: 40 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true }}
      transition={{ duration: 0.6, delay: 0.2 }}
      className="w-64 h-64 perspective cursor-pointer"
      whileHover={{ y: -10 }}
    >
      <div className="relative w-full h-full transition-transform duration-700 transform-style-preserve-3d hover:rotate-y-180">
        {/* Front Side */}
        <div className="absolute w-full h-full bg-white/30 backdrop-blur-md rounded-2xl shadow-lg flex flex-col items-center justify-center backface-hidden border border-white/20 p-6">
          <span className="text-5xl mb-4">👁️</span>
          <h3 className="text-xl font-semibold text-white">Vision</h3>
        </div>
        {/* Back Side */}
        <div className="absolute w-full h-full bg-white/20 backdrop-blur-md rounded-2xl shadow-inner flex flex-col items-center justify-center p-6 text-center transform rotate-y-180 backface-hidden border border-white/20">
          <p className="text-white text-sm">{vision}</p>
        </div>
      </div>
    </motion.div>
  </div>

  {/* Floating soft bubbles for decoration */}
  <div className="absolute -top-16 -left-10 w-40 h-40 bg-white/20 opacity-20 rounded-full animate-pulse-slow"></div>
  <div className="absolute -bottom-16 -right-10 w-60 h-60 bg-white/20 opacity-20 rounded-full animate-pulse-slow"></div>
</section>

      {/* CTA Section */}
<section className="py-20 px-6 md:px-20 bg-gradient-to-r from-gray-200 to-gray-400 text-black text-center rounded-t-3xl relative overflow-hidden">
  <h2 className="text-4xl md:text-5xl font-bold mb-4">Experience MotionsX SkyOps</h2>
  <p className="mb-8 text-lg md:text-xl max-w-2xl mx-auto">
    Book a demo flight and witness the precision, speed, and creativity of our drones in action.
  </p>

  <Link to="/contact">
    <motion.button
      whileHover={{ scale: 1.1 }}
      whileTap={{ scale: 0.95 }}
      className="px-10 py-4 bg-black text-white rounded-full font-semibold text-lg shadow-lg"
    >
      Contact Us
    </motion.button>
  </Link>

  {/* Optional subtle floating shapes for depth */}
  <div className="absolute -top-16 -left-10 w-40 h-40 bg-white/10 rounded-full animate-pulse-slow"></div>
  <div className="absolute -bottom-16 -right-10 w-60 h-60 bg-white/10 rounded-full animate-pulse-slow"></div>
</section>

    </div>
  );
};

export default DroneService;
