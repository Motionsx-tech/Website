import React from 'react';
import { motion } from 'framer-motion';
import { FaUserAlt, FaRegCalendarCheck, FaMoneyBillAlt, FaChartLine, FaClipboardList } from 'react-icons/fa';

export default function HRMS() {
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
          <span className="text-white">HRMS –</span>{' '}
          <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600">
            Human Resource Management System
          </span>{' '}
          Made Easy
        </motion.h1>
        <motion.p
          className="text-xl text-white max-w-4xl mx-auto"
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.3, duration: 0.6 }}
        >
          Smart HR tools for smarter teams.
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
            Managing employees doesn’t have to be chaotic. Our HRMS module simplifies everything — from hiring and onboarding to attendance, payroll, and performance reviews — in one easy-to-use platform.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Employee Database & Onboarding</h2>
          <div className="flex justify-center mb-8">
            <FaUserAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Centralize your employee data and streamline onboarding processes, ensuring smooth transitions for new hires.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Attendance & Leave Management</h2>
          <div className="flex justify-center mb-8">
            <FaRegCalendarCheck className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Track employee attendance, manage leaves, and ensure compliance with company policies effortlessly.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Payroll Automation</h2>
          <div className="flex justify-center mb-8">
            <FaMoneyBillAlt className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Automate payroll processing, ensuring timely and accurate payments with minimal manual intervention.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Performance Appraisals</h2>
          <div className="flex justify-center mb-8">
            <FaChartLine className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Conduct performance reviews, set goals, and track progress to optimize employee development.
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
          <h2 className="text-3xl font-bold mb-4 text-white">Employee Self-Service Portal</h2>
          <div className="flex justify-center mb-8">
            <FaClipboardList className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Empower employees to access and manage their personal information, benefits, and requests independently.
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
          <h2 className="text-3xl font-bold mb-4 text-white">HR Reports & Compliance</h2>
          <div className="flex justify-center mb-8">
            <FaClipboardList className="text-pink-500 text-6xl" />
          </div>
          <p className="text-lg text-gray-400 max-w-3xl mx-auto">
            Generate insightful reports and ensure compliance with labor laws and internal policies.
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
          HR Managers, Admin Teams, Growing Startups, Remote Teams
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
