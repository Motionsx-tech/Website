import React from 'react';

export default function PerformanceMarketing() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Performance Marketing</h1>
        <p className="text-lg text-gray-700">Every click, every rupee — optimized.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            From Google Ads to Meta Ads, our performance marketing approach is rooted in analytics and ROI. 
            We help you run high-converting paid campaigns with sharp targeting, creative copy, and real-time optimization.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💰 PPC (Pay-Per-Click) Campaigns</h3>
              <p>Strategic campaigns designed to maximize returns with optimal cost per click.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🛍️ Google Display & Shopping Ads</h3>
              <p>Visually appealing ads to showcase your products across Google’s network.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📱 Facebook, Instagram & LinkedIn Ads</h3>
              <p>Custom-tailored campaigns for your audience on the world’s biggest platforms.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🧪 Funnel Design & A/B Testing</h3>
              <p>Test, analyze, and optimize each step of your funnel for maximum performance.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
