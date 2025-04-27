import React, { useState } from 'react';

export default function PricingPage() {
  const [activeTab, setActiveTab] = useState('Digital Marketing');

  const pricingData = {
    'Digital Marketing': [
      {
        title: 'Social Media Handling',
        features: [
          'Instagram, Facebook Page Management',
          '20 posts per month (IG & FB)',
          '3 boosted posts every 10 days',
          '3 Reels (client can provide video/animations)',
        ],
        extra: '',
      },
      {
        title: 'Influencer Marketing',
        features: [
          '1 Influencer Videography',
          '3 Collaborative Posts (stories + page tags)',
          'Script and ideas finalized mutually',
        ],
        extra: '',
      },
      {
        title: 'Meta Ads Management',
        features: [
          '3 Campaigns Setup',
          'Target Audience Research',
          'Landing Page & Form Setup',
          'Own Ad Wallet Management',
          'Lead Refinement & Follow-up by us',
        ],
        extra: '',
      },
    ],

    'Website Development': [
      {
        title: 'Static Website',
        features: [
          '4-page Website (Home, About Us, Contact Us, Blogs)',
          '10 days’ Timeline',
          'Domain, Hosting, Maintenance for 1 year',
          
        ],
        extra: '',
      },
      {
        title: 'Dynamic Website',
        features: [
          '4-dynamic page Website (Home, About Us, Contact Us, Blogs)',
          '15 days’ Timeline',
          'Domain, Hosting, Maintenance for 1 year',
          
        ],
        extra: '',
      },
      {
        title: 'Ecommerce Website',
        features: [
          'Login & Register',
          'Shopping Cart & Payment Processing',
          'Inventory Management & Shipping',
          'SEO Optimization & Social Media Integration',
          'Customer Support & Marketing Strategies',
          '50 products included (INR 149 per extra product)',
          '25 days’ Timeline',
          'Domain, Hosting, Maintenance for 1 year',
        ],
        extra: 'Including payment gateway, OTP & mail integration',
      },
    ],

    'SaaS Solutions': [
      {
        title: 'IVR (Interactive Voice Response)',
        features: [
          'Multi-level IVR Setup',
          'Call Routing & Forwarding',
          'Real-time Analytics & Call Logs',
          'Bulk E-mail & Bulk SMS',
          'Exit Formalities',
          'Social Media Integration',
          'Customer Support',
          '1 day installation in client’s system',
        ],
        extra: '',
      },
      {
        title: 'CRM (Client Management System)',
        features: [
          'Client Management & Lead Follow-up Reminders',
          'Teams’ Client Response Tracking',
          'Auto Stock Management',
          'Inventory, Invoice Generation',
          'Visual Stock Level Charts',
          '1 day installation in client’s system',
        ],
        extra: '',
      },
      {
        title: 'HRMS (Human Resource Management System)',
        features: [
          'Punch In/Out System & Geo-Fenced Attendance',
          'Live Tracking of Staff',
          'Offer, Joining Letter Disbursement',
          'Salary Disbursement & Leave Applications',
          'Addition up to 50 employees',
          '2 days’ Installation Timeline',
        ],
        extra: '',
      },
    ],
  };

  const tabs = Object.keys(pricingData);

  return (
    <div className="bg-white min-h-screen py-16 px-4">
      {/* Header */}
      <div className="text-center mb-12">
        <h1 className="text-4xl md:text-5xl font-bold text-[#10375C] mb-4">Our Pricing</h1>
        <p className="text-lg text-gray-600">
          Transparent, Flexible, and Designed to Help You Grow 🚀
        </p>
      </div>

      {/* Tabs */}
      <div className="flex justify-center mb-12">
        {tabs.map((tab) => (
          <button
            key={tab}
            onClick={() => setActiveTab(tab)}
            className={`px-6 py-2 m-2 font-semibold rounded-full transition-all duration-300
              ${activeTab === tab
                ? 'bg-[#10375C] text-white scale-105 shadow-lg'
                : 'bg-gray-200 text-[#10375C] hover:bg-gray-300'}`}
          >
            {tab}
          </button>
        ))}
      </div>

      {/* Cards */}
      <div className="max-w-7xl mx-auto grid gap-8 md:grid-cols-3 px-4">
        {pricingData[activeTab].map((service, index) => (
          <div
            key={index}
            className="bg-[#f5f8fa] rounded-2xl shadow-xl p-8 hover:scale-105 hover:shadow-2xl transition-transform duration-300 flex flex-col justify-between"
          >
            <div>
              <h2 className="text-2xl font-bold text-[#10375C] mb-6">{service.title}</h2>
              <ul className="space-y-3 mb-6 text-gray-700 text-left">
                {service.features.map((feature, idx) => (
                  <li key={idx} className="flex items-start space-x-2">
                    <span className="text-[#10375C] text-lg mt-1">✔️</span>
                    <span>{feature}</span>
                  </li>
                ))}
              </ul>
              {service.extra && (
                <p className="text-sm text-gray-600">{service.extra}</p>
              )}
            </div>
            <div className="text-center mt-6">
              <a
                href="https://docs.google.com/forms/d/e/1FAIpQLSeT5mKzBnbfRDYqNDD5MxVReSkQOIiEEm2aoniVgFXbW_MiaQ/viewform?usp=dialog"
                target="_blank"
                rel="noopener noreferrer"
                className="bg-[#10375C] hover:bg-[#0a2a49] text-white font-semibold px-6 py-2 rounded-full transition-all duration-300"
              >
                Request for Callback 🚀
              </a>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}
