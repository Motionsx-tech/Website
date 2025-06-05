import { Link } from "react-router-dom";

const products = [
  {
    title: "IVR System – Intelligent Voice Routing Made Easy",
    description: "Automate, answer, and act faster. Manage high call volumes with our cloud-based IVR system.",
    icon: "📞",
    subservices: [
      "Cloud IVR",
      "Multi-level Menus",
      "Call Recording & Analytics",
      "Voice Authentication"
    ],
    link: "/products/ivr-system"
  },
  {
    title: "HRMS – Human Resource Management System",
    description: "Simplify HR tasks from employee onboarding to payroll automation and performance reviews.",
    icon: "💼",
    subservices: [
      "Employee Management",
      "Payroll & Tax Calculation",
      "Leave & Attendance",
      "Appraisal & Performance Reviews"
    ],
    link: "/products/hrms"
  },
  {
    title: "CRM – Customer Relationship Management",
    description: "A CRM platform that helps track leads, manage sales pipelines, and centralize communication.",
    icon: "📊",
    subservices: [
      "Lead Tracking",
      "Sales Pipeline Management",
      "Marketing Automation",
      "Customer Support Integration"
    ],
    link: "/products/crm"
  },
  {
    title: "SmartXalgo – Next-Gen Algorithmic Trading Platform",
    description: "Harness the power of advanced AI algorithms, real-time market analysis, and institutional-grade tools to transform your trading performance and achieve consistent profitability.",
    icon: "🤖",
    subservices: [
      "Advanced AI Algorithms",
      "Real-time Market Analysis",
      "Institutional-grade Tools",
      "Consistent Profitability"
    ],
    link: "/products/smartxalgo"
  }
];

export default function ProductList() {
  return (
    <div className="container mx-auto p-6">
      <h2 className="text-3xl font-bold text-center mb-8">Our Products</h2>

      <div className="grid md:grid-cols-3 gap-8">
        {products.map((product, index) => (
          <div
            key={index}
            className="bg-white p-6 rounded-lg shadow-lg hover:shadow-xl transition duration-300 transform hover:scale-105"
          >
            <div className="text-4xl mb-4 text-center">{product.icon}</div>
            <h3 className="text-xl font-semibold text-center mb-2">{product.title}</h3>
            <p className="mt-2 text-gray-700">{product.description.substring(0, 200)}...</p>
            <Link
              to={product.link}
              className="mt-4 block text-blue-600 hover:text-blue-800 text-center"
            >
              Read More
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
