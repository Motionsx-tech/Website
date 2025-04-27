import React from "react";

export default function WebsiteDesignDevelopment() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Website Design & Development</h1>
        <p className="text-lg text-gray-700">
          Your digital storefront, built for results.
        </p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            We create high-performance websites that are sleek, secure, responsive, and conversion-focused. From
            corporate websites to landing pages and e-commerce portals, our team ensures your digital presence is
            fast, functional, and future-ready.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💻 UI/UX Design</h3>
              <p>Design user interfaces and experiences that are intuitive, engaging, and optimized for conversions.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔧 WordPress & Custom Development</h3>
              <p>Build custom websites with WordPress or from scratch, tailored to your brand and business needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🛒 E-commerce Stores</h3>
              <p>Create robust e-commerce stores using platforms like Shopify and WooCommerce to drive online sales.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔗 Landing Pages & Funnels</h3>
              <p>Develop high-converting landing pages and sales funnels to capture leads and drive growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
