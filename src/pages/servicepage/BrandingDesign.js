import React from 'react';
import { motion } from 'framer-motion';
import { FaPaintBrush, FaCompass, FaBoxOpen, FaFileAlt } from 'react-icons/fa';

export default function BrandingDesign() {
  return (
    <div className="font-poppins">

      {/* Hero Section */}
      <header className="relative bg-black py-16 text-center text-white">
  <motion.h1
    className="text-5xl font-extrabold mb-4"
    initial={{ opacity: 0, y: -20 }}
    animate={{ opacity: 1, y: 0 }}
    transition={{ duration: 0.6 }}
  >
    <span className="text-white">Branding</span>{' '}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
      & Design
    </span>
  </motion.h1>
  <motion.p
    className="text-xl text-white max-w-4xl mx-auto"
    initial={{ opacity: 0 }}
    animate={{ opacity: 1 }}
    transition={{ delay: 0.3, duration: 0.6 }}
  >
    We don’t just design logos. We build{' '}
    <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 font-semibold">
      legacies
    </span>.
  </motion.p>
</header>


      {/* Introduction Section */}
      <motion.section 
        className="container mx-auto px-4 py-16 text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <h2 className="text-3xl font-bold mb-4">
          Our <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Creative Approach</span>
        </h2>
        <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          At MotionsX, we understand that your brand is more than just a logo—it's a reflection of your company's identity, mission, and vision. Our team of designers and strategists work hand-in-hand to create brands that resonate emotionally with your audience and stand out in the market.
        </p>
      </motion.section>

      {/* Logo Design & Identity Section */}
      <motion.section 
        className="py-16 bg-gray-800"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Logo Design & Brand Identity
          </h2>
          <div className="flex justify-center mb-8">
            <FaPaintBrush className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            We craft distinctive and memorable logos that reflect your brand's unique personality. From typography to color schemes, we ensure that your logo communicates your brand’s essence effectively.
            Whether you are a startup looking for a fresh identity or an established company in need of a redesign, our team is equipped to deliver designs that stand out in the crowd.
          </p>
        </div>
      </motion.section>

      {/* Brand Strategy & Messaging Section */}
      <motion.section 
        className="py-16 bg-black"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Brand Strategy & Messaging
          </h2>
          <div className="flex justify-center mb-8">
            <FaCompass className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            A great brand isn’t just about a logo, it's about a story. We work with you to develop a comprehensive brand strategy, defining your brand’s mission, tone, and messaging. This strategy serves as the foundation for your brand's voice across all platforms, ensuring consistent communication that resonates with your audience.
          </p>
        </div>
      </motion.section>

      {/* Packaging Design Section */}
      <motion.section 
        className="py-16 bg-gray-800"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Packaging Design
          </h2>
          <div className="flex justify-center mb-8">
            <FaBoxOpen className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Packaging is one of the most powerful tools to connect with your audience. We design packaging that is not only visually striking but also aligned with your brand values. Whether it's retail packaging, shipping boxes, or custom labels, we create designs that enhance your product's appeal and make a lasting impression.
          </p>
        </div>
      </motion.section>

      {/* Marketing Collateral Section */}
      <motion.section 
        className="py-16 bg-black"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4 text-center">
          <h2 className="text-3xl font-bold mb-4 text-white">
            Marketing Collateral
          </h2>
          <div className="flex justify-center mb-8">
            <FaFileAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Consistency is key when it comes to marketing materials. We design brochures, business cards, presentation decks, banners, and more to ensure your brand maintains a cohesive identity across all touchpoints. Whether it's for print or digital marketing, our collateral designs will effectively communicate your message.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section 
        className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-center text-white"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">
          Ready to Build Your Legacy?
        </h2>
        <p className="text-xl mb-8">
          Let's collaborate to create a brand that stands the test of time. Contact us today to get started!
        </p>
        <a href="/contact" className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition">
          Get in Touch
        </a>
      </motion.section>

    </div>
  );
}
