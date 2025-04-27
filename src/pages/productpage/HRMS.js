import React from 'react';

export default function HRMS() {
  return (
    <div className="bg-white">
      {/* Header section */}
      <div className="bg-indigo-50 py-12 text-center">
        <h1 className="text-4xl font-bold mb-2">HRMS – Human Resource Management System</h1>
        <p className="text-lg text-gray-700">Smart HR tools for smarter teams.</p>
      </div>

      {/* Content section */}
      <div className="container mx-auto px-4 py-10">
        <div className="bg-white shadow-lg rounded-lg p-6 lg:p-10">
          <p className="mb-6 text-gray-700 text-lg">
            Managing employees doesn’t have to be chaotic. Our HRMS module is designed to simplify everything — from hiring and onboarding to attendance, payroll, and performance reviews — in one easy-to-use platform.
          </p>

          {/* Feature cards */}
          <div className="grid gap-6 md:grid-cols-2">
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📋 Employee Database & Onboarding</h3>
              <p>Store, manage, and onboard employees with ease in a centralized system.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🕒 Attendance & Leave Management</h3>
              <p>Track attendance, manage leaves, and generate reports effortlessly.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">💰 Payroll Automation</h3>
              <p>Automate salary processing with tax calculations and payslip generation.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📈 Performance Appraisals</h3>
              <p>Evaluate employee performance and run review cycles with custom criteria.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">🧑‍💼 Employee Self-Service Portal</h3>
              <p>Empower staff to access payslips, apply for leave, and update personal details.</p>
            </div>
            <div className="bg-gray-100 p-6 rounded-lg shadow-md">
              <h3 className="text-xl font-semibold mb-2">📊 HR Reports & Compliance</h3>
              <p>Generate reports, maintain compliance, and stay audit-ready at all times.</p>
            </div>
          </div>

          {/* Footer line */}
          <p className="mt-10 text-md text-gray-600 font-medium">
            Perfect for: HR Managers, Admin Teams, Growing Startups, Remote Teams
          </p>
        </div>
      </div>
    </div>
  );
}
