import React from 'react';
import { motion } from 'framer-motion';
import { FaMapMarkerAlt, FaShoppingCart, FaMicrophoneAlt, FaChartLine } from 'react-icons/fa';

export default function Seo() {
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
          <span className="text-white">Search Engine</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Optimization (SEO)
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Rank higher. Reach faster. Grow smarter.
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">SEO Services</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our SEO services are designed to put your business right where your customers are looking — on top of Google search results. From technical audits to high-quality content creation, keyword research, on-page & off-page optimization, and link building, we offer end-to-end SEO solutions that drive organic traffic and long-term visibility.
          </p>
        </div>
      </motion.section>

      {/* Local & Global SEO - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Local & Global SEO</h2>
          <div className="flex justify-center mb-8">
            <FaMapMarkerAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We optimize your website for both local and global searches, ensuring you reach the right audience no matter where they are.
          </p>
        </div>
      </motion.section>

      {/* E-commerce SEO - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">E-commerce SEO</h2>
          <div className="flex justify-center mb-8">
            <FaShoppingCart className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Our e-commerce SEO services are designed to boost your online store’s visibility, drive traffic, and increase conversions by optimizing your product pages and category listings.
          </p>
        </div>
      </motion.section>

      {/* Voice Search & Mobile SEO - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Voice Search & Mobile SEO</h2>
          <div className="flex justify-center mb-8">
            <FaMicrophoneAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            As voice search and mobile browsing become more prevalent, we ensure your website is optimized for both to capture the growing market of mobile users.
          </p>
        </div>
      </motion.section>

      {/* Competitor & Market Analysis - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Competitor & Market Analysis</h2>
          <div className="flex justify-center mb-8">
            <FaChartLine className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We conduct in-depth competitor analysis and market research to help you identify opportunities, improve your SEO strategy, and stay ahead in your industry.
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
        <h2 className="text-4xl font-bold mb-4">Ready to Rank Higher?</h2>
        <p className="text-xl mb-8">
          Let us help you grow your online presence with a customized SEO strategy that drives traffic and boosts conversions.
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
