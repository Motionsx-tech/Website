import React from 'react';

export default function BrandingDesign() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Branding & Design</h1>
        <p className="text-lg text-gray-700">We don’t just design logos. We build legacies.</p>
      </div>

      {/* Content section */}
      <div className="bg-white font-poppins">
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Our creative team builds brands that leave a lasting impression — from visual identity to brand voice.
            Whether you’re a startup or an established business rebranding, we shape your brand to resonate emotionally and stand out in the crowd.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎨 Logo Design & Brand Identity</h3>
              <p>Create logos and visual systems that define your brand's presence and style.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🧭 Brand Strategy & Messaging</h3>
              <p>Develop a unique tone, mission, and messaging that connects with your audience.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📦 Packaging Design</h3>
              <p>Design packaging that’s both visually appealing and aligned with your brand values.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📑 Marketing Collateral</h3>
              <p>Create brochures, decks, banners, and more to support your brand's communication needs.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  );
}
