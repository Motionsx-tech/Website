import React from 'react';

export default function CRM() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">CRM – Customer Relationship Management</h1>
        <p className="text-lg text-gray-700">Track leads. Close deals. Delight customers.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Your sales and support teams deserve a CRM that actually works for them. Our CRM platform centralizes customer data, sales pipelines, communication, and follow-ups so your team can focus on what matters: closing deals and building relationships.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔑 Lead Capture & Scoring</h3>
              <p>Capture leads from multiple sources and automatically score them based on engagement.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📊 Deal Pipeline Tracking</h3>
              <p>Track your deals through each stage with visual pipelines and customizable workflows.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">⏰ Task & Follow-up Reminders</h3>
              <p>Set task reminders and follow-ups to ensure you never miss a deadline or opportunity.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💬 Client Communication History</h3>
              <p>Access complete communication history to maintain personalized conversations.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📈 Reporting & Sales Analytics</h3>
              <p>Generate detailed reports and gain insights into sales performance and trends.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔌 Integrations with Email, IVR & WhatsApp</h3>
              <p>Seamlessly integrate with email, IVR systems, and WhatsApp for unified customer engagement.</p>
            </div>
          </div>

          {/* Footer line */}
          <p className="mt-10 text-md text-gray-600 font-medium">
            Perfect for: Sales Teams, Customer Service, Marketing Campaigns
          </p>
        </div>
      </div>
    </div>
  );
}
