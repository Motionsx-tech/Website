import React from 'react';

export default function CloudSuite() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">All-in-One, Cloud-Based, Secure</h1>
        <p className="text-lg text-gray-700">Our SaaS tools are built on robust architecture with enterprise-grade security, 99.9% uptime, and user-friendly dashboards that require minimal training.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Our cloud-based tools are designed for seamless operation with high security and ease of use. Empower your teams with real-time analytics, mobile responsiveness, and customizable workflows, all backed by a reliable infrastructure.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔒 Data Security & Role-Based Access</h3>
              <p>Protect sensitive information with enterprise-grade security and ensure authorized access with role-based controls.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔗 API Integrations & Custom Workflows</h3>
              <p>Easily integrate with other platforms and create custom workflows that fit your business needs.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📱 Mobile Responsive Dashboards</h3>
              <p>Access real-time data on the go with responsive dashboards optimized for mobile devices.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📊 Real-time Analytics & Reporting</h3>
              <p>Make informed decisions with real-time analytics and comprehensive reporting features.</p>
            </div>
          </div>

          {/* Footer line */}
          <p className="mt-10 text-md text-gray-600 font-medium">
            Our SaaS tools are ideal for businesses looking for secure, scalable, and intuitive solutions.
          </p>
        </div>
      </div>
    </div>
  );
}
