import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCompass, FaBoxOpen, FaFileAlt } from 'react-icons/fa';

export default function ContentMarketing() {
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
          <span className="text-white">Content</span>{' '}
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
          Words that work. Stories that sell. Good content educates.{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Great content converts.
          </span>
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
            Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Creative Approach</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
            Our team of writers and strategists create meaningful content that aligns with your brand voice and business goals—whether it's blogs, articles, or ad copy.
          </p>
        </div>
      </motion.section>

      {/* Blog Writing & SEO Content - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Blog Writing & SEO Content</h2>
          <div className="flex justify-center mb-8">
            <FaPaintBrush className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Boost your website traffic with high-quality blog posts optimized for SEO. Our content ensures that your brand's voice stands out in search results, driving organic traffic to your website.
          </p>
        </div>
      </motion.section>

      {/* Copywriting (Ads, Website, Brochures) - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Copywriting (Ads, Website, Brochures)</h2>
          <div className="flex justify-center mb-8">
            <FaCompass className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We craft compelling and persuasive copy that resonates with your audience and encourages action. From website content to ad copy and brochures, our writing drives results.
          </p>
        </div>
      </motion.section>

      {/* Email Campaigns & Newsletters - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Email Campaigns & Newsletters</h2>
          <div className="flex justify-center mb-8">
            <FaBoxOpen className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Engage your audience with personalized email campaigns and newsletters that align with your brand’s voice. Our content ensures that your messages cut through the noise and get the attention they deserve.
          </p>
        </div>
      </motion.section>

      {/* Video Scripts & Storyboards - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Video Scripts & Storyboards</h2>
          <div className="flex justify-center mb-8">
            <FaFileAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Whether it's for a product demo, brand story, or explainer video, our writers create video scripts that capture attention and communicate your message effectively.
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
        <h2 className="text-4xl font-bold mb-4">Ready to Take Your Content to the Next Level?</h2>
        <p className="text-xl mb-8">
          Let’s create content that not only speaks to your audience but also converts them into loyal customers.
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>
    </div>
  );
}
