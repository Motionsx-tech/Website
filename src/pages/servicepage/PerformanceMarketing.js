import React from 'react';
import { motion } from 'framer-motion';
import { FaBullseye, FaGoogle, FaFacebook, FaChartBar } from 'react-icons/fa';

export default function PerformanceMarketing() {
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
          <span className="text-white">Performance</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Marketing
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Every click, every rupee — optimized. From Google Ads to Meta Ads, our performance marketing approach is rooted in analytics and ROI.
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Performance Approach</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            We help you run high-converting paid campaigns with sharp targeting, creative copy, and real-time optimization. Let us help you make every marketing dollar work harder for you.
          </p>
        </div>
      </motion.section>

      {/* PPC Campaigns - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">PPC (Pay-Per-Click) Campaigns</h2>
          <div className="flex justify-center mb-8">
            <FaBullseye className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our PPC campaigns are designed to drive targeted traffic to your website, ensuring you get the best return on investment through strategic ad placements and optimization.
          </p>
        </div>
      </motion.section>

      {/* Google Display & Shopping Ads - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Google Display & Shopping Ads</h2>
          <div className="flex justify-center mb-8">
            <FaGoogle className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We help optimize your Google Ads campaigns, including display and shopping ads, to ensure you're reaching the right audience with compelling ad copy that drives conversions.
          </p>
        </div>
      </motion.section>

      {/* Facebook, Instagram & LinkedIn Ads - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Facebook, Instagram & LinkedIn Ads</h2>
          <div className="flex justify-center mb-8">
            <FaFacebook className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Leverage the power of social media advertising on Facebook, Instagram, and LinkedIn. We create ads that captivate your audience and drive measurable results.
          </p>
        </div>
      </motion.section>

      {/* Funnel Design & A/B Testing - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Funnel Design & A/B Testing</h2>
          <div className="flex justify-center mb-8">
            <FaChartBar className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our expertise in funnel design and A/B testing helps optimize every stage of your customer journey, ensuring higher conversion rates and better customer engagement.
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
        <h2 className="text-4xl font-bold mb-4">Ready to Supercharge Your Paid Campaigns?</h2>
        <p className="text-xl mb-8">
          Let us help you reach new customers, increase conversions, and get the best ROI with performance-driven paid campaigns.
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
