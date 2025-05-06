import React from 'react';
import { motion } from 'framer-motion';
import { FaRegHandshake, FaTasks, FaChartBar, FaRegEnvelope, FaWhatsapp } from 'react-icons/fa';

export default function CRM() {
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
          <span className="text-white">CRM –</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Customer Relationship Management
          </span>{' '}
          Made Simple
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Track leads. Close deals. Delight customers.
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
            Your sales and support teams deserve a CRM that actually works for them. Our platform centralizes customer data, sales pipelines, communication, and follow-ups so your team can focus on what matters: closing deals and building relationships.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Lead Capture & Scoring</h2>
          <div className="flex justify-center mb-8">
            <FaRegHandshake className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Automatically capture and score leads to prioritize high-value opportunities and drive conversions.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Deal Pipeline Tracking</h2>
          <div className="flex justify-center mb-8">
            <FaTasks className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Track and manage your sales pipeline, from lead to close, with real-time updates on your deals.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Task & Follow-up Reminders</h2>
          <div className="flex justify-center mb-8">
            <FaChartBar className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Stay on top of important tasks with reminders for follow-ups, meetings, and deadlines.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Client Communication History</h2>
          <div className="flex justify-center mb-8">
            <FaRegEnvelope className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Keep track of all client interactions across email, calls, and meetings, ensuring seamless communication.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Reporting & Sales Analytics</h2>
          <div className="flex justify-center mb-8">
            <FaChartBar className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Gain insights into your sales performance with real-time reports and analytics to optimize strategies.
          </p>
        </div>
      </motion.section>

      {/* Feature 6 - Black Background */}
      <motion.section
        className="py-16 bg-black text-center"
        initial={{ opacity: 0, x: -100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.0, duration: 0.6 }}
      >
        <div className="container mx-auto px-4">
          <h2 className="text-3xl font-bold mb-4 text-white">Integrations with Email, IVR & WhatsApp</h2>
          <div className="flex justify-center mb-8">
            <FaWhatsapp className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Connect with customers through email, IVR, and WhatsApp seamlessly from one unified platform.
          </p>
        </div>
      </motion.section>

      {/* CTA Section */}
      <motion.section
        className="bg-gradient-to-r from-pink-500 to-purple-600 py-16 text-center text-white"
        initial={{ opacity: 0, x: 100 }}
        animate={{ opacity: 1, x: 0 }}
        transition={{ delay: 1.1, duration: 0.6 }}
      >
        <h2 className="text-4xl font-bold mb-4">Perfect for:</h2>
        <p className="text-xl mb-4">
          Sales Teams, Customer Service, Marketing Campaigns
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
