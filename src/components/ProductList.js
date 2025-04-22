const products = [
  {
    title: "IVR System – Intelligent Voice Routing Made Easy",
    description: "Automate, answer, and act faster. Manage high call volumes with our cloud-based IVR system, streamlining call routing, conversation recording, and integration with CRM and WhatsApp.",
    features: [
      "Multi-level IVR Setup",
      "Call Routing & Forwarding",
      "Real-time Analytics & Call Logs",
      "CRM & WhatsApp Integration",
      "Missed Call Alert & Call Recording"
    ],
    idealFor: "Customer Support, Tele-sales, Lead Management, Appointment Scheduling",
    icon: "📞"
  },
  {
    title: "HRMS – Human Resource Management System",
    description: "Simplify HR tasks from employee onboarding to payroll automation and performance reviews, all in one easy-to-use platform.",
    features: [
      "Employee Database & Onboarding",
      "Attendance & Leave Management",
      "Payroll Automation",
      "Performance Appraisals",
      "Employee Self-Service Portal",
      "HR Reports & Compliance"
    ],
    idealFor: "HR Managers, Admin Teams, Growing Startups, Remote Teams",
    icon: "💼"
  },
  {
    title: "CRM – Customer Relationship Management",
    description: "A CRM platform that helps track leads, manage sales pipelines, and centralize communication, empowering your teams to close deals and build lasting relationships.",
    features: [
      "Lead Capture & Scoring",
      "Deal Pipeline Tracking",
      "Task & Follow-up Reminders",
      "Client Communication History",
      "Reporting & Sales Analytics",
      "Integrations with Email, IVR & WhatsApp"
    ],
    idealFor: "Sales Teams, Customer Service, Marketing Campaigns",
    icon: "📊"
  },
  {
    title: "All-in-One, Cloud-Based, Secure",
    description: "Our SaaS tools are built on enterprise-grade architecture with top-tier security, 99.9% uptime, and responsive mobile dashboards.",
    features: [
      "Data Security & Role-Based Access",
      "API Integrations & Custom Workflows",
      "Mobile Responsive Dashboards",
      "Real-time Analytics & Reporting"
    ],
    icon: "🌐"
  }
];

export default function ProductList() {
  return (
    <div className="container mx-auto px-4 py-8">
      <h2 className="text-3xl font-bold text-center mb-8">OUR PRODUCTS</h2> {/* Added heading */}
      <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div key={index} className="bg-white p-6 rounded-lg shadow-md">
            <div className="text-4xl mb-4">{product.icon}</div>
            <h3 className="text-xl font-semibold">{product.title}</h3>
            <p className="mt-2 text-gray-600">{product.description}</p>
            <ul className="mt-4 space-y-2 text-gray-700">
              {product.features.map((feature, i) => (
                <li key={i} className="flex items-center">
                  <span className="mr-2">•</span>{feature}
                </li>
              ))}
            </ul>
            <p className="mt-4 font-medium text-gray-800">Ideal for: {product.idealFor}</p>
          </div>
        ))}
      </div>
    </div>
  );
}
