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
    description: "Improve your search rankings with our data-driven SEO services.",
    link: "/services/seo",
  },
  {
    icon: <FaBullhorn />,
    title: "Social Media Marketing",
    description: "Boost your brand’s presence with targeted social media strategies.",
    link: "/services/social-media-marketing",
  },
  {
    icon: <FaChartLine />,
    title: "Performance Marketing",
    description: "Maximize ROI through performance-based marketing campaigns.",
    link: "/services/performance-marketing",
  },
  {
    icon: <FaPaintBrush />,
    title: "Branding & Design",
    description: "We build legacies — from visual identity to impactful messaging.",
    link: "/services/branding-design",
  },
  {
    icon: <FaLaptopCode />,
    title: "Website Design & Development",
    description: "High-performance websites that are fast, sleek, and conversion-focused.",
    link: "/services/website-development",
  },
  {
    icon: <FaPenNib />,
    title: "Content Marketing",
    description: "Great content that converts — blogs, copies, scripts, and more.",
    link: "/services/content-marketing",
  },
  {
    icon: <FaVideo />,
    title: "Video Production & Motion Graphics",
    description: "Explainers, promos, reels — powerful visuals that tell your story.",
    link: "/services/video-production",
  },
  {
    icon: <FaLightbulb />,
    title: "Digital Strategy & Consulting",
    description: "Tailored digital strategies aligned to your business goals.",
    link: "/services/digital-strategy",
  },
];

export default function ServicesSection() {
  const getVisibleCount = () => {
    if (window.innerWidth < 640) return 1; // Mobile: 1
    if (window.innerWidth < 1024) return 2; // Tablet: 2
    return 3; // Desktop: 3
  };

  const [startIndex, setStartIndex] = useState(0);
  const [visibleCount, setVisibleCount] = useState(getVisibleCount());

  // Previous button handler
  const handlePrev = useCallback(() => {
    setStartIndex((prev) => Math.max(prev - visibleCount, 0));
  }, [visibleCount]);

  // Next button handler
  const handleNext = useCallback(() => {
    if (startIndex + visibleCount < servicesData.length) {
      setStartIndex((prev) => prev + visibleCount);
    } else {
      setStartIndex(0); // Loop back to the first set of services
    }
  }, [startIndex, visibleCount]);

  // Update the number of visible items when resizing the window
  useEffect(() => {
    const handleResize = () => {
      setVisibleCount(getVisibleCount());
    };

    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Autoplay functionality
  useEffect(() => {
    const autoplayInterval = setInterval(() => {
      handleNext();
    }, 5000); // Change every 5 seconds

    return () => clearInterval(autoplayInterval); // Clear interval on component unmount
  }, [startIndex, handleNext]); // Add handleNext to the dependency array

  // Get the services to display based on the current index and visible count
  const visibleServices = servicesData.slice(startIndex, startIndex + visibleCount);

  return (
    <section className="services-section py-20 bg-gray-900 text-center">


<h2 className="text-4xl font-bold mb-12" style={{ color: 'white' }}>
  Our Services
</h2>

      <div className="flex justify-center items-center gap-4 px-4">
        {/* Previous Button */}
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="text-2xl text-gray-500 hover:text-gray-800 disabled:opacity-30"
        >
          ←
        </button>

        {/* Services */}
        <div className="flex gap-6 transition-all duration-300 overflow-hidden">
          {visibleServices.map((service, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-left"
            >
              <div className="text-blue-600 text-4xl mb-4">{service.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{service.title}</h3>
              <p className="text-gray-600 mb-4">{service.description}</p>
              <a href={service.link} className="inline-block text-blue-600 font-medium hover:text-blue-800">
                Read More →
              </a>
            </div>
          ))}
        </div>

        {/* Next Button */}
        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= servicesData.length}
          className="text-2xl text-gray-500 hover:text-gray-800 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </section>
  );
}
