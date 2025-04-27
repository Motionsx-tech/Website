import React from 'react';

export default function SocialMediaMarketing() {
  return (
    <div className="bg-white">
      <div className="bg-blue-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Social Media Marketing (SMM)</h1>
        <p className="text-lg text-gray-700">Where your brand becomes a conversation.</p>
      </div>

      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            We turn your social media handles into powerful engagement and conversion tools. Whether it’s Instagram, Facebook, LinkedIn, or Twitter, we design strategies that tell your brand story, build community, and generate leads through scroll-stopping content, influencer collaborations, and paid campaigns.
          </p>

          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📅 Content Creation & Scheduling</h3>
              <p>Create content calendars and visually engaging posts that connect with your audience.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📈 Social Media Advertising</h3>
              <p>Use paid campaigns to strategically reach your audience across platforms.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🤝 Community Management</h3>
              <p>Engage with followers, respond to queries, and build loyal brand communities.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">✨ Influencer Marketing</h3>
              <p>Partner with niche influencers to amplify your brand voice and drive conversions.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
