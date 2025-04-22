// components/ServicesSection.js
export default function ServicesSection() {
    return (
      <section className="services-section py-20 bg-white text-center">
        <h2 className="text-4xl font-bold mb-10">Our Services</h2>
        <div className="flex flex-wrap justify-center gap-8">
          <div className="service-item bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Search Engine Optimization</h3>
            <p>Service description goes here.</p>
          </div>
          <div className="service-item bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Social Media Marketing</h3>
            <p>Service description goes here.</p>
          </div>
          <div className="service-item bg-gray-200 p-6 rounded-lg shadow-md">
            <h3 className="text-2xl font-semibold">Performance Marketing</h3>
            <p>Service description goes here.</p>
          </div>
        </div>
      </section>
    );
  }
  