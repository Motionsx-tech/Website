import { useState } from "react";
import { motion } from "framer-motion";

export default function HeroSection() {
  const [bgImage, setBgImage] = useState("");

  // Default background image
  const defaultBg =
    "https://images.unsplash.com/photo-1559581070-52b31695ab10?q=80&w=2070&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D";

  return (
    <section
      className="hero-section min-h-screen flex flex-col justify-center items-center text-center text-white relative font-sans overflow-hidden"
      style={{
        backgroundImage: `url(${bgImage || defaultBg})`,
        backgroundSize: "cover",
        backgroundPosition: "center",
        backgroundRepeat: "no-repeat",
        height: "100vh",
        transition: "background-image 0.5s ease-in-out",
      }}
    >
      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/30 transition-colors duration-500"></div>

      <div className="relative z-10 max-w-4xl px-6 py-8">
        {/* Heading */}
        <motion.h1
          className="text-5xl md:text-6xl mb-6 leading-tight tracking-wide font-playfair"
          initial={{ opacity: 0, y: 50 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1 }}
        >
          Welcome to{" "}
          <span
            className="text-black hover:bg-[#FFC107] hover:text-white font-bold transition-all duration-300 cursor-pointer px-1 py-1"
            onMouseEnter={() =>
              setBgImage(
                "https://cdn.pixabay.com/photo/2020/05/18/16/17/social-media-5187243_1280.png"
              )
            }
            onMouseLeave={() => setBgImage("")}
          >
            Motions<span className="text-pink-500">X</span>
          </span>
        </motion.h1>

        {/* Subheading / Motto */}
        <motion.p
          className="text-lg md:text-2xl mb-8 text-gray-200 font-light tracking-normal leading-relaxed font-lora"
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 1, delay: 0.3 }}
        >
          Elevate your brand and reach new heights – from proven{" "}
          <span className="inline-block text-[#FFC107] font-bold">digital strategies</span> to{" "}
          <span className="inline-block text-[#FFC107] font-bold">precision drone solutions</span>.
        </motion.p>

        {/* CTA Button */}
        <motion.a
          href="/contact"
          className="inline-block bg-[#FFC107] text-black py-3 px-8 rounded-full text-lg font-semibold shadow-lg hover:bg-[#e6ac00] hover:scale-105 transform transition-transform duration-300"
          whileHover={{ scale: 1.1 }}
          whileTap={{ scale: 0.95 }}
        >
          Contact Us
        </motion.a>
      </div>
    </section>
  );
}
