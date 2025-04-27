import React from 'react';

export default function SEO() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Search Engine Optimization (SEO)</h1>
        <p className="text-lg text-gray-700">Rank higher. Reach faster. Grow smarter.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Our SEO services are designed to put your business right where your customers are looking — 
            on top of Google search results. From technical audits to high-quality content creation, keyword research, 
            on-page & off-page optimization, and link building, we offer end-to-end SEO solutions that drive 
            organic traffic and long-term visibility.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🌍 Local & Global SEO</h3>
              <p>Tailored strategies to improve your visibility in specific regions or worldwide.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🛒 E-commerce SEO</h3>
              <p>Optimize your online store to rank higher and attract more qualified buyers.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎤 Voice Search & Mobile SEO</h3>
              <p>Stay ahead of the curve with SEO strategies for voice and mobile-first experiences.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📊 Competitor & Market Analysis</h3>
              <p>Understand your competitors’ strengths and tap into market gaps to lead the pack.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
