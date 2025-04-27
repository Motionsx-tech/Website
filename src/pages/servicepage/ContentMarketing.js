import React from 'react';

export default function ContentMarketing() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Content Marketing</h1>
        <p className="text-lg text-gray-700">Words that work. Stories that sell.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Good content educates. Great content converts. Our writers and strategists create meaningful content that aligns with your brand voice and business goals — from blogs and articles to ad copies, email campaigns, and video scripts.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📝 Blog Writing & SEO Content</h3>
              <p>Craft blogs and articles optimized for SEO that educate and drive organic traffic to your site.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💬 Copywriting (Ads, Website, Brochures)</h3>
              <p>Create compelling copy that resonates with your audience and drives engagement, whether it's for ads, websites, or brochures.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📧 Email Campaigns & Newsletters</h3>
              <p>Design and write email campaigns and newsletters that nurture leads and convert them into loyal customers.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎥 Video Scripts & Storyboards</h3>
              <p>Write impactful video scripts and create storyboards that captivate and convert your audience.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
