import React from 'react';

export default function IVRSystem() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">IVR System – Intelligent Voice Routing Made Easy</h1>
        <p className="text-lg text-gray-700">Automate, answer, and act faster.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Our cloud-based Interactive Voice Response (IVR) system helps businesses manage high call volumes efficiently while delivering a seamless caller experience. 
            Set up intelligent call flows, record conversations, route calls to the right teams, and never miss a lead again.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📞 Multi-level IVR Setup</h3>
              <p>Configure smart menus to guide callers to the right information or department.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🔁 Call Routing & Forwarding</h3>
              <p>Automatically direct calls to available agents or designated departments.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📊 Real-time Analytics & Call Logs</h3>
              <p>Track all interactions, view insights, and monitor team performance live.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💬 CRM & WhatsApp Integration</h3>
              <p>Seamlessly connect with your CRM and WhatsApp for unified communication.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📥 Missed Call Alert & Call Recording</h3>
              <p>Capture every missed opportunity and keep a record of all conversations.</p>
            </div>
          </div>

          {/* Use Case */}
          <div className="mt-10">
            <h3 className="text-xl font-semibold mb-2">Perfect for:</h3>
            <p className="text-gray-700">Customer Support, Tele-sales, Lead Management, Appointment Scheduling</p>
          </div>
        </div>
      </div>
    </div>
  );
}
