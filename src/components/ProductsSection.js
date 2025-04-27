import { useState, useEffect, useCallback } from "react";
import { FaPhoneAlt, FaUsers, FaHandshake,  } from "react-icons/fa";

const productsData = [
  {
    icon: <FaPhoneAlt />,
    title: "IVR System",
    description: "Automate, answer, and act faster with intelligent voice routing. Set up multilevel IVR, forward calls, log activity and more.",
    link: "/products/ivr-system",
  },
  {
    icon: <FaUsers />,
    title: "HRMS",
    description: "Smart HR tools for smarter teams. Handle onboarding, attendance, payroll, performance reviews — all in one place.",
    link: "/products/hrms",
  },
  {
    icon: <FaHandshake />,
    title: "CRM",
    description: "Track leads, manage pipelines, and close deals with ease. Your all-in-one sales and customer relationship management system.",
    link: "/products/crm",
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
    <section className="services-section py-20 bg-gray-900 text-center"> {/* Background color */}

      <h2 className="text-4xl font-bold mb-12" style={{ color: 'white' }}>
  Our Products
</h2>



      <div className="flex justify-center items-center gap-4 px-4">
        <button
          onClick={handlePrev}
          disabled={startIndex === 0}
          className="text-2xl text-gray-500 hover:text-gray-800 disabled:opacity-30"
        >
          ←
        </button>

        <div className="flex gap-6 transition-all duration-300 overflow-hidden">
          {visibleProducts.map((product, index) => (
            <div
              key={index}
              className="w-[280px] sm:w-[300px] md:w-[320px] lg:w-[360px] flex-shrink-0 bg-white rounded-xl shadow-md hover:shadow-xl transition duration-300 p-6 text-left"
            >
              <div className="text-blue-600 text-4xl mb-4">{product.icon}</div>
              <h3 className="text-xl font-semibold text-gray-800 mb-2">{product.title}</h3>
              <p className="text-gray-600 mb-4">{product.description}</p>
              <a href={product.link} className="inline-block text-blue-600 font-medium hover:text-blue-800">
                Read More →
              </a>
            </div>
          ))}
        </div>

        <button
          onClick={handleNext}
          disabled={startIndex + visibleCount >= productsData.length}
          className="text-2xl text-gray-500 hover:text-gray-800 disabled:opacity-30"
        >
          →
        </button>
      </div>
    </section>
  );
}
