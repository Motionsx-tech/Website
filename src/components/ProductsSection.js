import { useState, useEffect, useCallback } from "react";
import { FaPhoneAlt, FaUsers, FaHandshake, FaRobot } from "react-icons/fa"; // Added FaRobot for SmartXalgo

const productsData = [
  {
    icon: <FaPhoneAlt />,
    title: "IVR System",
    description:
      "Automate, answer, and act faster with intelligent voice routing. Set up multilevel IVR, forward calls, log activity and more.",
    link: "/products/ivr-system",
  },
  {
    icon: <FaUsers />,
    title: "HRMS",
    description:
      "Smart HR tools for smarter teams. Handle onboarding, attendance, payroll, performance reviews — all in one place.",
    link: "/products/hrms",
  },
  {
    icon: <FaHandshake />,
    title: "CRM",
    description:
      "Track leads, manage pipelines, and close deals with ease. Your all-in-one sales and customer relationship management system.",
    link: "/products/crm",
  },
  {
    icon: <FaRobot />, // Placeholder icon for SmartXalgo — you can replace this
    title: "SmartXalgo",
    description:
      "Next-Gen Algorithmic Trading Platform leveraging AI, real-time market analysis, and institutional tools.",
    link: "/products/smartxalgo",
  },
];

export default function ProductsSection() {
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1;
    if (window.innerWidth < 1024) return 2;
    return 3;
  };

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  const handlePrev = useCallback(() => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  }, [visibleCount]);

  const handleNext = useCallback(() => {
    if (startIndex + visibleCount < productsData.length) {
      setStartIndex((prev) => prev + visibleCount);
    } else {
      setStartIndex(0);
    }
  }, [startIndex, visibleCount]);

  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 5000);
    return () => clearInterval(autoplayInterval);
  }, [startIndex, handleNext]);

  const visibleProducts = productsData.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-4">Our Products</h2>
      <p className="text-gray-400 mb-10">
        Discover innovative products designed to streamline your business operations.
      </p>

      <div className="flex justify-center items-center gap-4 px-4">
        {/* Prev Button */}
        <button
          onClick={handlePrev}
          className="text-white text-2xl hover:text-pink-500 transition disabled:opacity-30"
          disabled={startIndex === 0}
        >
          ←
        </button>

        {/* Cards */}
        <div className="flex gap-6 transition-all duration-300 overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 p-6 text-left hover:border-pink-500"
            >
              <div className="text-white text-3xl mb-4 animate-pulse">{product.icon}</div>
              <h3 className="text-xl font-semibold text-white mb-2">{product.title}</h3>
              <p className="text-gray-300 mb-4">{product.description}</p>
              <a
                href={product.link}
                className="inline-block mt-2 px-4 py-2 text-sm border border-pink-500 text-pink-400 rounded-full hover:bg-pink-500 hover:text-white transition-all"
              >
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          className="text-white text-2xl hover:text-pink-500 transition disabled:opacity-30"
          disabled={startIndex + visibleCount >= productsData.length}
        >
          →
        </button>
      </div>
    </section>
  );
}
