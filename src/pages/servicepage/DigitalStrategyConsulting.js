import React from 'react';

export default function DigitalStrategyConsulting() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Digital Strategy & Consulting</h1>
        <p className="text-lg text-gray-700">Your roadmap to digital excellence.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Every business is unique — and so should its strategy be. We provide end-to-end consulting to align your marketing efforts with business goals, audit existing campaigns, uncover growth opportunities, and create a roadmap for digital domination.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📊 Digital Audits</h3>
              <p>Conduct a thorough audit of your digital marketing efforts to identify areas for improvement and growth.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎯 360° Strategy Planning</h3>
              <p>Develop a comprehensive and tailored strategy that covers all aspects of your digital marketing needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔍 Competitor Benchmarking</h3>
              <p>Evaluate your competition and industry trends to ensure your strategy is always ahead of the curve.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📈 Data Analytics & Reporting</h3>
              <p>Leverage data to gain insights and create actionable reports that guide your digital strategy and growth.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
