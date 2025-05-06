import React from 'react';
import { motion } from 'framer-motion';
import { FaLaptop, FaWordpress, FaShoppingCart, FaFunnelDollar } from 'react-icons/fa';

export default function WebsiteDesignDevelopment() {
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
          <span className="text-white">Website Design &</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Development
          </span>
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Your digital storefront, built for results. We create high-performance websites that are sleek, secure, responsive, and conversion-focused.
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Web Development Approach</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            From corporate websites to landing pages and e-commerce portals, our team ensures your digital presence is fast, functional, and future-ready.
          </p>
        </div>
      </motion.section>

      {/* UI/UX Design - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">UI/UX Design</h2>
          <div className="flex justify-center mb-8">
            <FaLaptop className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We create user-centered designs that prioritize both aesthetics and usability. Your website will look great and be intuitive, providing the best user experience possible.
          </p>
        </div>
      </motion.section>

      {/* WordPress & Custom Development - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">WordPress & Custom Development</h2>
          <div className="flex justify-center mb-8">
            <FaWordpress className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We specialize in both WordPress and custom website development, ensuring your site is optimized, scalable, and meets your exact specifications.
          </p>
        </div>
      </motion.section>

      {/* E-commerce Stores - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">E-commerce Stores (Shopify, WooCommerce)</h2>
          <div className="flex justify-center mb-8">
            <FaShoppingCart className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Build a robust online store with Shopify or WooCommerce. We ensure your e-commerce site is secure, user-friendly, and ready to generate sales.
          </p>
        </div>
      </motion.section>

      {/* Landing Pages & Funnels - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Landing Pages & Funnels</h2>
          <div className="flex justify-center mb-8">
            <FaFunnelDollar className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We design high-converting landing pages and sales funnels that help you turn visitors into customers, optimizing for both design and functionality.
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
        <h2 className="text-4xl font-bold mb-4">Ready to Build Your High-Performance Website?</h2>
        <p className="text-xl mb-8">
          Let’s create a website that drives results, boosts conversions, and represents your brand at its best.
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
