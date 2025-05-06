import React from 'react';
import { motion } from 'framer-motion';
import { FaChartLine, FaSearch, FaClipboardList, FaChartBar } from 'react-icons/fa';

export default function DigitalStrategyConsulting() {
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
          <span className="text-white">Digital Strategy &</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Consulting
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your roadmap to digital excellence. Every business is unique — and so should its strategy be.
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Consulting Approach</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We provide end-to-end consulting to align your marketing efforts with business goals, audit existing campaigns, uncover growth opportunities, and create a roadmap for digital domination.
          </p>
        </div>
      </motion.section>

      {/* Digital Audits - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Digital Audits</h2>
          <div className="flex justify-center mb-8">
            <FaSearch className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We conduct thorough audits of your existing digital marketing campaigns, identifying opportunities for optimization, improved performance, and ROI.
          </p>
        </div>
      </motion.section>

      {/* 360° Strategy Planning - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">360° Strategy Planning</h2>
          <div className="flex justify-center mb-8">
            <FaClipboardList className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            From audience insights to tactical execution, we develop holistic digital strategies that are tailored to your business goals, driving results across multiple channels.
          </p>
        </div>
      </motion.section>

      {/* Competitor Benchmarking - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Competitor Benchmarking</h2>
          <div className="flex justify-center mb-8">
            <FaChartLine className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We analyze your competitors’ strategies to uncover gaps in the market and identify areas where you can gain a competitive edge.
          </p>
        </div>
      </motion.section>

      {/* Data Analytics & Reporting - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Data Analytics & Reporting</h2>
          <div className="flex justify-center mb-8">
            <FaChartBar className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our data-driven approach ensures that every decision is backed by actionable insights, helping you measure performance and adapt strategies in real-time.
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
        <h2 className="text-4xl font-bold mb-4">Ready to Dominate the Digital Landscape?</h2>
        <p className="text-xl mb-8">
          Let’s collaborate to create a strategy that drives your business to new heights. Reach out to start your digital journey today!
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
