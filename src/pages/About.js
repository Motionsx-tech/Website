import React from "react";
import { motion } from "framer-motion";

function About() {
  return (
    <section className="min-h-screen bg-white py-20 px-6 md:px-12 relative overflow-hidden">
      {/* Heading */}
      <motion.div
        initial={{ opacity: 0, y: 50 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="max-w-4xl mx-auto text-center"
      >
        <h1 className="text-5xl font-bold mb-6">
          <span className="text-black">Motions</span>
          <span style={{ color: "#ED2176" }}>X</span>
        </h1>

        {/* Mission Quote */}
        <motion.blockquote
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          transition={{ delay: 0.5, duration: 1 }}
          className="italic text-xl text-indigo-600 font-medium mb-12"
        >
          “We believe motion can transform experience — from interaction to intuition.”
        </motion.blockquote>

        {/* About Description */}
        <p className="text-lg text-gray-700 mb-6">
          MotionsX is a creative technology studio focused on building intuitive,
          animated, and AI-powered digital experiences.
        </p>
        <p className="text-gray-600 leading-relaxed mb-6">
          Born out of a passion for motion and intelligence, we combine design,
          animation, and smart systems to craft tools that feel human — like
          SmartXAlgo, our intelligent auto-trading platform.
        </p>
        <p className="text-gray-600 leading-relaxed">
          From visual storytelling to functional interfaces, our goal is to make
          complexity feel simple and beautiful — whether you’re using our products
          or exploring our digital universe.
        </p>
      </motion.div>

      {/* Vision / Mission / Values */}
      <div className="grid md:grid-cols-3 gap-6 max-w-6xl mx-auto mt-20">
        {[
          {
            title: "Our Vision",
            text: "To redefine the way people experience digital products through motion and intelligence.",
          },
          {
            title: "Our Mission",
            text: "To build AI-powered and beautifully designed tools that simplify complexity.",
          },
          {
            title: "Our Values",
            text: "Creativity, Empathy, Simplicity, and Precision.",
          },
        ].map((item, i) => (
          <motion.div
            key={i}
            whileHover={{ scale: 1.05 }}
            initial={{ opacity: 0, y: 30 }}
            whileInView={{ opacity: 1, y: 0 }}
            transition={{ delay: i * 0.2, duration: 0.6 }}
            className="bg-gray-100 p-6 rounded-xl shadow"
          >
            <h3 className="text-xl font-bold text-gray-800 mb-2">{item.title}</h3>
            <p className="text-gray-600">{item.text}</p>
          </motion.div>
        ))}
      </div>

      {/* Stats */}
      <div className="mt-20 grid grid-cols-2 md:grid-cols-4 gap-6 text-center max-w-5xl mx-auto">
        {[
          { label: "Clients Served", value: "120+" },
          { label: "Projects Delivered", value: "250+" },
          { label: "Products Launched", value: "5+" },
          { label: "Years of Experience", value: "3+" },
        ].map((stat, i) => (
          <motion.div
            key={i}
            whileInView={{ y: 0, opacity: 1 }}
            initial={{ y: 20, opacity: 0 }}
            transition={{ delay: i * 0.2 }}
          >
            <p className="text-3xl font-bold text-indigo-600">{stat.value}</p>
            <p className="text-gray-600">{stat.label}</p>
          </motion.div>
        ))}
      </div>

      {/* Founder's Note */}
      <div className="mt-24 text-left max-w-3xl mx-auto">
        <h3 className="text-2xl font-semibold text-gray-900 mb-2">From the Founder</h3>
        <p className="text-gray-600">
          MotionsX began with a simple belief — that design and motion can humanize
          even the most complex digital systems. Whether it's a trading AI or a
          simple webpage, our goal is to make every interaction feel meaningful.
        </p>
        <p className="text-sm text-gray-500 mt-2">– Deepam Bhusan Mohapatra</p>
      </div>

      {/* Back Button */}
      <div className="mt-16 text-center">
        <a
          href="/"
          className="inline-block bg-indigo-600 hover:bg-indigo-700 text-white font-semibold py-3 px-6 rounded-full transition duration-300"
        >
          Back to Home
        </a>
      </div>
    </section>
  );
}

export default About;
