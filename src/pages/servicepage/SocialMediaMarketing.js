import React from 'react';
import { motion } from 'framer-motion';
import { FaInstagram, FaFacebook, FaLinkedin, FaTwitter } from 'react-icons/fa';

export default function SocialMediaMarketing() {
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
          <span className="text-white">Social Media</span>{' '}
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
          Where your brand becomes a conversation. We turn your social media handles into powerful engagement and conversion tools.
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Social Strategy</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Whether it’s Instagram, Facebook, LinkedIn, or Twitter, we design strategies that tell your brand story, build community, and generate leads through scroll-stopping content, influencer collaborations, and paid campaigns.
          </p>
        </div>
      </motion.section>

      {/* Content Creation & Scheduling - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Content Creation & Scheduling</h2>
          <div className="flex justify-center mb-8">
            <FaInstagram className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We create high-quality, engaging content tailored to your brand's voice and schedule it for optimal reach. Let us help you maintain a consistent presence and connect with your audience.
          </p>
        </div>
      </motion.section>

      {/* Social Media Advertising - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Social Media Advertising</h2>
          <div className="flex justify-center mb-8">
            <FaFacebook className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Boost your brand visibility with targeted social media ads. From Facebook to LinkedIn, we design and optimize campaigns that drive engagement and conversions.
          </p>
        </div>
      </motion.section>

      {/* Community Management - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Community Management</h2>
          <div className="flex justify-center mb-8">
            <FaLinkedin className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We manage your social media communities by engaging with your audience, responding to comments, and fostering relationships that enhance brand loyalty.
          </p>
        </div>
      </motion.section>

      {/* Influencer Marketing - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Influencer Marketing</h2>
          <div className="flex justify-center mb-8">
            <FaTwitter className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Partner with influencers to amplify your brand’s message and reach new audiences. We connect you with the right influencers to create impactful campaigns.
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
        <h2 className="text-4xl font-bold mb-4">Ready to Take Your Social Media to the Next Level?</h2>
        <p className="text-xl mb-8">
          Let’s create a social media strategy that drives engagement, builds your community, and generates leads.
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
