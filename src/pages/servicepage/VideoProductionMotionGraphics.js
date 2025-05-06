import React from 'react';
import { motion } from 'framer-motion';
import { FaVideo, FaFilm, FaPlayCircle, FaRegEdit } from 'react-icons/fa';

export default function VideoProductionMotionGraphics() {
  return (
    <div className="font-poppins">
      {/* Hero Section - Black Background */}
      <header className="relative bg-black py-16 text-center text-white">
        <motion.h1
          className="text-5xl font-extrabold mb-4"
          initial={{ opacity: 0, y: -20 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.6 }}
        >
          <span className="text-white">Video Production &</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Motion Graphics
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Because static is boring. 
        </motion.p>
      </header>

      {/* First Content Section - White Background */}
      <motion.section
        className="py-16 bg-white text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-black">
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Video Production Approach</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We create compelling visual content that communicates your brand message effectively. Whether it's promotional videos or explainer animations, we bring your ideas to life in ways that engage and resonate with your audience.
          </p>
        </div>
      </motion.section>

      {/* Promotional & Corporate Videos - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Promotional & Corporate Videos</h2>
          <div className="flex justify-center mb-8">
            <FaVideo className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From product launches to corporate brand storytelling, our team creates promotional videos that capture your brand’s essence and resonate with your audience.
          </p>
        </div>
      </motion.section>

      {/* Reels, Shorts & Animations - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Reels, Shorts & Animations</h2>
          <div className="flex justify-center mb-8">
            <FaPlayCircle className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We specialize in creating engaging social media content, including short-form videos and animations, designed to increase engagement and build your online presence.
          </p>
        </div>
      </motion.section>

      {/* 2D/3D Motion Graphics - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">2D/3D Motion Graphics</h2>
          <div className="flex justify-center mb-8">
            <FaFilm className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Bring your ideas to life with stunning 2D and 3D motion graphics. Whether it's for advertisements, presentations, or explainer videos, we craft visuals that captivate and communicate.
          </p>
        </div>
      </motion.section>

      {/* Video Editing & Post-Production - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Video Editing & Post-Production</h2>
          <div className="flex justify-center mb-8">
            <FaRegEdit className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We offer high-quality video editing and post-production services to ensure your footage looks its best. From color grading to sound design, we handle it all to make your video stand out.
          </p>
        </div>
      </motion.section>

      {/* CTA Section - Gradient Background */}
      <motion.section
        className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-center text-white"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Ready to Bring Your Ideas to Life?</h2>
        <p className="text-xl mb-8">
          Let’s create powerful visuals that tell your brand story and engage your audience through stunning video production and motion graphics.
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
