import { useState, useEffect, useCallback } from "react";
import {
  FaSearch,
  FaBullhorn,
  FaChartLine,
  FaPaintBrush,
  FaLaptopCode,
  FaPenNib,
  FaVideo,
  FaLightbulb,
} from "react-icons/fa";

const servicesData = [
  {
    icon: <FaSearch />,
    title: "Search Engine Optimization",
    description: "Improve your rankings with smarter strategies.",
    link: "/services/seo",
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media Marketing",
    description: "Connect, engage, and grow across platforms.",
    link: "/services/social-media-marketing",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Marketing",
    description: "Target. Optimize. Convert. Repeat.",
    link: "/services/performance-marketing",
  },
  {
    icon: <FaPaintBrush />,
    title: "Branding & Design",
    description: "Build a brand that stands apart.",
    link: "/services/branding-design",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Development",
    description: "Lightning-fast, responsive & bold websites.",
    link: "/services/website-development",
  },
  {
    icon: <FaPenNib />,
    title: "Content Marketing",
    description: "Fuel your brand with compelling content.",
    link: "/services/content-marketing",
  },
  {
    icon: <FaVideo />,
    title: "Video & Motion Graphics",
    description: "Visually engage. Emotionally connect.",
    link: "/services/video-production",
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Strategy",
    description: "Data-driven plans tailored to you.",
    link: "/services/digital-strategy",
  },
];

export default function ServicesSection() {
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
    if (startIndex + visibleCount < servicesData.length) {
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
    }, 6000);
    return () => clearInterval(autoplayInterval);
  }, [startIndex, handleNext]);

  const visibleServices = servicesData.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="py-20 bg-black text-center">
      <h2 className="text-4xl font-bold text-white mb-4">What We Do</h2>
      <p className="text-gray-400 mb-10">
        Powerful digital services. Unique strategies. Visible results.
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
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] bg-white/5 backdrop-blur-md rounded-2xl border border-white/10 shadow-lg hover:shadow-pink-500/30 transition-all duration-300 p-6 text-left hover:border-pink-500"
            >
              <div className="text-white text-3xl mb-4 animate-pulse">
                {service.icon}
              </div>
              <h3 className="text-xl font-semibold text-white mb-2">{service.title}</h3>
              <p className="text-gray-300 mb-4">{service.description}</p>
              <a
                href={service.link}
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
          disabled={startIndex + visibleCount >= servicesData.length}
        >
          →
        </button>
      </div>
    </section>
  );
}
