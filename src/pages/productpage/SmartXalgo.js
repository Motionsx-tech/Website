import React, { useState, useEffect } from "react";
import { FaRobot, FaChartLine, FaShieldAlt, FaClock } from "react-icons/fa";

export default function SmartXalgo() {
  const [animate, setAnimate] = useState(false);
  const [openFAQ, setOpenFAQ] = useState(null);

  // Scroll to top on mount
  useEffect(() => {
    window.scrollTo(0, 0);
    setAnimate(true);
  }, []);

  const features = [
    {
      icon: <FaRobot className="text-pink-500 w-8 h-8" />,
      title: "Advanced AI Algorithms",
      desc: "Leverage machine learning models to predict and execute trades with precision.",
    },
    {
      icon: <FaChartLine className="text-pink-500 w-8 h-8" />,
      title: "Real-Time Market Analysis",
      desc: "Continuous market monitoring to spot trends and opportunities instantly.",
    },
    {
      icon: <FaClock className="text-pink-500 w-8 h-8" />,
      title: "Instant Execution",
      desc: "Fast and reliable trade execution to capitalize on market movements.",
    },
    {
      icon: <FaShieldAlt className="text-pink-500 w-8 h-8" />,
      title: "Institutional-Grade Security",
      desc: "Top-tier encryption and safeguards to protect your data and assets.",
    },
  ];

  const faqs = [
    {
      question: "Is SmartXalgo suitable for beginners?",
      answer:
        "Yes! SmartXalgo offers easy-to-use tools and intuitive interfaces suitable for both beginners and experienced traders.",
    },
    {
      question: "What markets does SmartXalgo support?",
      answer:
        "Our platform supports multiple markets including stocks, forex, crypto, and commodities.",
    },
    {
      question: "Can I customize trading algorithms?",
      answer:
        "Absolutely. You can customize and create your own trading strategies using our advanced AI-powered builder.",
    },
    {
      question: "Is there a demo or trial available?",
      answer:
        "Yes, we offer a free trial so you can explore the platform before committing.",
    },
  ];

  const toggleFAQ = (index) => {
    setOpenFAQ(openFAQ === index ? null : index);
  };

  return (
    <section className="min-h-screen bg-black text-white flex flex-col items-center px-6 py-20 text-center">
      {/* Heading */}
      <h1
        className={`text-4xl md:text-6xl font-extrabold mb-4 transition-transform duration-700 ${
          animate ? "translate-y-0 opacity-100" : "translate-y-10 opacity-0"
        }`}
      >
        <span className="text-white">Smart</span>
        <span className="text-transparent bg-clip-text bg-gradient-to-r from-pink-500 to-purple-600 ml-2">
          Xalgo
        </span>
      </h1>
      <p
        className={`text-xl md:text-2xl text-gray-300 mb-6 max-w-3xl transition-opacity duration-1000 delay-200 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        Next-Gen Algorithmic Trading Platform
      </p>
      <p
        className={`max-w-2xl mx-auto text-gray-400 mb-10 transition-opacity duration-1000 delay-400 ${
          animate ? "opacity-100" : "opacity-0"
        }`}
      >
        Harness the power of advanced AI algorithms, real-time market analysis,
        and institutional-grade tools to transform your trading performance and
        achieve consistent profitability.
      </p>
      <a
        href="https://www.smartxalgo.com"
        target="_blank"
        rel="noopener noreferrer"
        className={`bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition transform duration-300 ${
          animate ? "opacity-100 scale-100" : "opacity-0 scale-90"
        }`}
      >
        Try It Now
      </a>

      {/* Features */}
      <div className="mt-20 max-w-4xl w-full grid grid-cols-1 md:grid-cols-2 gap-10 text-left">
        {features.map(({ icon, title, desc }, i) => (
          <div
            key={i}
            className={`flex gap-4 items-start transition-transform duration-700 delay-${
              600 + i * 150
            } ${animate ? "translate-x-0 opacity-100" : "translate-x-10 opacity-0"}`}
          >
            <div className="mt-1">{icon}</div>
            <div>
              <h3 className="text-pink-400 font-semibold text-lg mb-1">{title}</h3>
              <p className="text-gray-400">{desc}</p>
            </div>
          </div>
        ))}
      </div>

      {/* Resources Section with Animated Glow Cards */}
<div className="mt-24 max-w-5xl w-full px-6 text-center">
  <h2 className="text-3xl font-extrabold text-white mb-4">
  Resources & Learning
</h2>
  <p className="text-gray-400 mb-10 max-w-2xl mx-auto">
    Dive into our rich collection of guides, tutorials, and expert content to help you master algorithmic trading.
  </p>

  <div className="grid gap-8 grid-cols-1 md:grid-cols-3">
    {[
      {
        title: "Getting Started",
        desc: "Learn how to set up your first strategy and navigate the SmartXalgo dashboard.",
      },
      {
        title: "AI Strategy Guides",
        desc: "Deep-dive into how AI-powered algorithms can be customized and optimized.",
      },
      {
        title: "Video Tutorials",
        desc: "Watch step-by-step walkthroughs for setting up, testing, and executing trades.",
      },
    ].map((item, i) => (
      <div
        key={i}
        className={`relative group bg-gray-900 rounded-xl p-6 shadow-lg border border-gray-800 overflow-hidden transition duration-700 ease-out transform ${
          animate
            ? `translate-y-0 opacity-100 delay-${500 + i * 150}`
            : "translate-y-6 opacity-0"
        }`}
      >
        {/* Pink glow effect */}
        <div className="absolute inset-0 rounded-xl opacity-0 group-hover:opacity-100 transition duration-500 blur-lg bg-gradient-to-r from-pink-500 to-purple-600 z-0" />
        {/* Content */}
        <div className="relative z-10">
          <h3 className="text-xl font-semibold text-white mb-2">{item.title}</h3>
          <p className="text-gray-400">{item.desc}</p>
          <a
            href="https://www.smartxalgo.com/resources"
            target="_blank"
            rel="noopener noreferrer"
            className="mt-4 inline-block text-pink-400 hover:underline font-medium"
          >
            Read More →
          </a>
        </div>
      </div>
    ))}
  </div>
</div>


      {/* Pricing Section */}
      <div className="mt-24 max-w-3xl w-full text-center px-6">
        <h2 className="text-3xl font-extrabold text-white mb-4">
  Pricing Plans Made Simple
</h2>
        <p className="text-gray-400 mb-6">
          Explore flexible pricing plans designed to fit your trading needs. No surprises, just straightforward value.
        </p>
        <a
          href="https://www.smartxalgo.com/pricing"
          target="_blank"
          rel="noopener noreferrer"
          className="inline-block bg-pink-500 hover:bg-pink-600 text-white font-semibold py-3 px-8 rounded-full transition transform duration-300"
        >
          View Pricing
        </a>
      </div>

      {/* FAQ Section */}
      <div className="mt-28 max-w-4xl w-full px-6 text-left">
        <h2 className="text-3xl font-extrabold text-white mb-8 text-center">
  Frequently Asked Questions
</h2>
        <div className="space-y-4">
          {faqs.map(({ question, answer }, i) => (
            <div
              key={i}
              className="bg-gray-900 rounded-lg cursor-pointer border border-pink-700"
              onClick={() => toggleFAQ(i)}
            >
              <div className="flex justify-between items-center px-6 py-4">
                <h3 className="text-lg font-semibold text-white">{question}</h3>
                <span className="text-pink-500 font-bold text-2xl select-none">
                  {openFAQ === i ? "−" : "+"}
                </span>
              </div>
              {openFAQ === i && (
                <p className="px-6 pb-4 text-gray-400">{answer}</p>
              )}
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
