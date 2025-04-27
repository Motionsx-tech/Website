import React from 'react';

export default function VideoProductionMotionGraphics() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">Video Production & Motion Graphics</h1>
        <p className="text-lg text-gray-700">Because static is boring.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            In today’s visual-first world, we help brands communicate through powerful visuals — explainer videos, social media reels, corporate promos, or animated content. Our motion designers bring ideas to life that people remember and share.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎬 Promotional & Corporate Videos</h3>
              <p>Create engaging videos that promote your brand or showcase your corporate message in a visually compelling way.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎥 Reels, Shorts & Animations</h3>
              <p>Produce engaging short-form videos and animations tailored for social media platforms that captivate and entertain.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">2D/3D Motion Graphics</h3>
              <p>Create stunning 2D and 3D animations that add a dynamic touch to your content and messaging.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🎞️ Video Editing & Post-Production</h3>
              <p>Expert video editing and post-production services to ensure your videos are polished, professional, and impactful.</p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
