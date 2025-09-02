import React, { useState, useRef } from "react";
import { motion, AnimatePresence } from "framer-motion";

// Placeholder data structure
const galleryItems = [
  { id: 1, tag: "Team" },
  { id: 2, tag: "Office" },
  { id: 3, tag: "Celebrations" },
  { id: 4, tag: "Team" },
  { id: 5, tag: "Office" },
  { id: 6, tag: "Celebrations" },
  { id: 7, tag: "Team" },
  { id: 8, tag: "Office" },
  { id: 9, tag: "Celebrations" },
];

const filters = ["All", "Team", "Office", "Celebrations"];

function Gallery() {
  const [activeFilter, setActiveFilter] = useState("All");
  const itemRefs = useRef([]);

  const filteredItems =
    activeFilter === "All"
      ? galleryItems
      : galleryItems.filter((item) => item.tag === activeFilter);

  const handleSurprise = () => {
    const visibleItems = filteredItems;
    if (visibleItems.length > 0) {
      const randomIndex = Math.floor(Math.random() * visibleItems.length);
      const ref = itemRefs.current[visibleItems[randomIndex].id];
      if (ref && ref.scrollIntoView) {
        ref.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  return (
    <section className="min-h-screen bg-white py-20 px-4 md:px-12">
      <div className="max-w-6xl mx-auto text-center">
        {/* Heading */}
        <motion.h1
          initial={{ opacity: 0, y: 30 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
          className="text-5xl font-bold mb-4"
        >
          <span className="text-black">Motions</span>
          <span style={{ color: "#ED2176" }}>X</span> Gallery
        </motion.h1>

        {/* Subtext */}
        <motion.p
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3 }}
          className="text-gray-600 mb-12 max-w-xl mx-auto"
        >
          A vibrant look at our team, our workspace, and the moments that make us MotionsX.
        </motion.p>

        {/* Filter Buttons */}
        <div className="flex flex-wrap justify-center gap-4 mb-8">
          {filters.map((tag) => (
            <button
              key={tag}
              onClick={() => setActiveFilter(tag)}
              className={`px-5 py-2 rounded-full border font-medium transition ${
                activeFilter === tag
                  ? "bg-indigo-600 text-white border-indigo-600"
                  : "bg-white text-gray-700 border-gray-300 hover:border-indigo-400"
              }`}
            >
              {tag}
            </button>
          ))}
        </div>

        {/* Surprise Me Button */}
        <motion.button
          whileTap={{ scale: 0.95 }}
          whileHover={{ scale: 1.03 }}
          onClick={handleSurprise}
          className="mb-12 bg-pink-500 text-white px-6 py-2 rounded-full font-medium hover:bg-pink-600 transition"
        >
          🎁 Surprise Me
        </motion.button>

        {/* Grid */}
        <motion.div
          layout
          className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6"
        >
          <AnimatePresence>
            {filteredItems.map((item, i) => (
              <motion.div
                key={item.id}
                ref={(el) => (itemRefs.current[item.id] = el)}
                layout
                initial={{ opacity: 0, scale: 0.95 }}
                animate={{ opacity: 1, scale: 1 }}
                exit={{ opacity: 0, scale: 0.95 }}
                transition={{ duration: 0.4 }}
                className="bg-gray-200 h-64 rounded-xl shadow-md flex items-center justify-center text-gray-400 text-xl font-semibold"
              >
                {item.tag}
              </motion.div>
            ))}
          </AnimatePresence>
        </motion.div>

        {/* Testimonials */}
        <div className="mt-24 text-left">
          <h2 className="text-3xl font-bold text-center mb-10">💬 What Our Team Says</h2>
          <div className="grid md:grid-cols-3 gap-8 max-w-6xl mx-auto">
            {[
              {
                name: "Aarav S.",
                text: "Working at MotionsX feels like home. The creativity and collaboration here are unmatched.",
              },
              {
                name: "Sanya R.",
                text: "The office culture is electric — celebrations, growth, and a lot of fun!",
              },
              {
                name: "Vikram P.",
                text: "Every project feels exciting. The best part? You’re not just a coder, you’re a creator.",
              },
            ].map((t, i) => (
              <motion.div
                key={i}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ delay: i * 0.2 }}
                className="bg-gray-100 rounded-xl p-6 shadow-sm"
              >
                <p className="text-gray-700 italic mb-4">“{t.text}”</p>
                <p className="text-gray-900 font-semibold text-right">– {t.name}</p>
              </motion.div>
            ))}
          </div>
        </div>
{/* Meet Our Team Section */}
<section className="mt-24 text-center">
  <h2 className="text-3xl font-bold mb-10">👥 Meet Our Team</h2>

  <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-10 max-w-6xl mx-auto">
    {[
      {
        name: "Aarav Sharma",
        role: "Creative Director",
        fact: "Loves sketching brand mascots.",
        photo: "https://i.pravatar.cc/300?img=12",
        linkedin: "https://linkedin.com/in/aaravsharma",
        github: "https://github.com/aaravsharma",
      },
      {
        name: "Sanya Kapoor",
        role: "UX Engineer",
        fact: "Can design entire flows on a napkin.",
        photo: "https://i.pravatar.cc/300?img=15",
        linkedin: "https://linkedin.com/in/sanyakapoor",
        github: "https://github.com/sanyakapoor",
      },
      {
        name: "Dev Mehta",
        role: "Motion Designer",
        fact: "Edits reels faster than you blink.",
        photo: "https://i.pravatar.cc/300?img=20",
        linkedin: "https://linkedin.com/in/devmehta",
        github: "https://github.com/devmehta",
      },
    ].map((member, i) => (
      <div
        key={i}
        className="group [perspective:1000px] w-full h-80"
      >
        <div className="relative w-full h-full transition-transform duration-700 [transform-style:preserve-3d] group-hover:[transform:rotateY(180deg)]">
          {/* Front */}
          <div className="absolute inset-0 bg-white rounded-xl shadow-xl overflow-hidden [backface-visibility:hidden]">
            <img
              src={member.photo}
              alt={member.name}
              className="w-full h-full object-cover"
            />
          </div>

          {/* Back */}
          <div className="absolute inset-0 bg-indigo-600 text-white p-6 rounded-xl flex flex-col items-center justify-center text-center [transform:rotateY(180deg)] [backface-visibility:hidden]">
            <h3 className="text-xl font-bold mb-1">{member.name}</h3>
            <p className="text-sm font-medium mb-2">{member.role}</p>
            <p className="text-xs italic mb-4">{member.fact}</p>

            {/* Social Icons */}
            <div className="flex gap-4 mt-2">
              <a
                href={member.linkedin}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-gray-200 hover:scale-110 transition"
              >
                {/* LinkedIn Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M4.98 3.5C4.98 4.88 3.87 6 2.5 6S0 4.88 0 3.5 1.11 1 2.5 1s2.48 1.12 2.48 2.5zM0 8.25h5V24H0V8.25zM7.5 8.25h4.78v2.13h.07c.67-1.27 2.3-2.61 4.74-2.61 5.07 0 6 3.34 6 7.68V24h-5v-6.89c0-1.64-.03-3.76-2.29-3.76-2.3 0-2.65 1.79-2.65 3.63V24h-5V8.25z" />
                </svg>
              </a>

              <a
                href={member.github}
                target="_blank"
                rel="noopener noreferrer"
                className="hover:text-white text-gray-200 hover:scale-110 transition"
              >
                {/* GitHub Icon */}
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  className="w-5 h-5"
                  fill="currentColor"
                  viewBox="0 0 24 24"
                >
                  <path d="M12 .5C5.37.5 0 5.87 0 12.5c0 5.29 3.438 9.776 8.207 11.387.6.112.793-.261.793-.577v-2.234c-3.338.726-4.042-1.415-4.042-1.415-.546-1.387-1.333-1.756-1.333-1.756-1.091-.746.083-.73.083-.73 1.205.085 1.84 1.237 1.84 1.237 1.072 1.834 2.809 1.304 3.495.996.108-.776.42-1.305.763-1.605-2.665-.304-5.466-1.332-5.466-5.932 0-1.31.469-2.381 1.236-3.221-.123-.304-.536-1.528.117-3.182 0 0 1.008-.322 3.3 1.23a11.466 11.466 0 013.003-.403c1.02.004 2.047.138 3.003.403 2.291-1.552 3.297-1.23 3.297-1.23.655 1.654.242 2.878.12 3.182.77.84 1.235 1.911 1.235 3.221 0 4.61-2.805 5.625-5.475 5.922.429.37.823 1.096.823 2.21v3.293c0 .319.192.694.8.576C20.565 22.275 24 17.788 24 12.5 24 5.87 18.63.5 12 .5z" />
                </svg>
              </a>
            </div>
          </div>
        </div>
      </div>
    ))}
  </div>
</section>

        {/* Back Button */}
        <div className="mt-16 text-center">
          <a
            href="/"
            className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
          >
            Back to Home
          </a>
        </div>
      </div>
    </section>
  );
}

export default Gallery;
