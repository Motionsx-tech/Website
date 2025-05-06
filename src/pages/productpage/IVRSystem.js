import React from 'react';
import { motion } from 'framer-motion';
import { FaPhoneAlt, FaRoute, FaChartLine, FaHeadset, FaComments } from 'react-icons/fa';

export default function IVRSystem() {
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
          <span className="text-white">IVR System –</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Intelligent Voice Routing
          </span>{' '}
          Made Easy
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Automate. Answer. and Act faster
        </motion.p>
      </header>

      {/* First Feature Section - White Background */}
      <motion.section
        className="py-16 bg-white text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.4, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-black">
            <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">Core Features</span>
          </h2>
          <p className="text-lg text-gray-400 max-w-2xl mx-auto">
          Our cloud-based Interactive Voice Response (IVR) system helps businesses manage high call volumes efficiently while delivering a seamless caller experience. Set up intelligent call flows, record conversations, route calls to the right teams, and never miss a lead again.
          </p>
        </div>
      </motion.section>

      {/* Feature 1 - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.5, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Multi-level IVR Setup</h2>
          <div className="flex justify-center mb-8">
            <FaPhoneAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Design layered call trees to guide callers effectively based on their needs and departments.
          </p>
        </div>
      </motion.section>

      {/* Feature 2 - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.6, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Call Routing & Forwarding</h2>
          <div className="flex justify-center mb-8">
            <FaRoute className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Automatically forward calls to the right agents or teams based on rules or caller inputs.
          </p>
        </div>
      </motion.section>

      {/* Feature 3 - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.7, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Real-time Analytics & Call Logs</h2>
          <div className="flex justify-center mb-8">
            <FaChartLine className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Track every call with detailed logs and analytics to measure performance and improve operations.
          </p>
        </div>
      </motion.section>

      {/* Feature 4 - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.8, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">CRM & WhatsApp Integration</h2>
          <div className="flex justify-center mb-8">
            <FaComments className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Seamlessly integrate with your CRM or WhatsApp to unify communications and improve lead management.
          </p>
        </div>
      </motion.section>

      {/* Feature 5 - Gray Background */}
      <motion.section
        className="py-16 bg-gray-800 text-center"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 0.9, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Missed Call Alerts & Recording</h2>
          <div className="flex justify-center mb-8">
            <FaHeadset className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Never miss a lead — track missed calls, trigger alerts, and record conversations for training or compliance.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-center text-white"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Perfect for:</h2>
        <p className="text-xl mb-4">
          Customer Support, Tele-sales, Lead Management, Appointment Scheduling
        </p>
        <a
          href="/contact"
          className="bg-white text-pink-600 px-8 py-3 rounded-full text-lg font-semibold hover:bg-pink-500 hover:text-white transition"
        >
          Get a Demo
        </a>
      </motion.section>
    </div>
  );
}
