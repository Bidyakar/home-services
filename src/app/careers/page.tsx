"use client";

import { useState } from "react";

export default function CareersPage() {
  const [selectedDepartment, setSelectedDepartment] = useState("all");

  const scrollToOpenings = () => {
    const element = document.getElementById('openings');
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  const jobOpenings = [
    {
      id: 1,
      title: "Senior Plumber",
      department: "Field Services",
      location: "New York, NY",
      type: "Full-time",
      experience: "5+ years",
      salary: "$65k - $85k",
      description: "Join our team of expert plumbers providing top-quality residential services.",
      icon: "🔧",
      color: "from-blue-500 to-cyan-500",
    },
    {
      id: 2,
      title: "Electrician",
      department: "Field Services",
      location: "Los Angeles, CA",
      type: "Full-time",
      experience: "3+ years",
      salary: "$60k - $80k",
      description: "Licensed electrician needed for residential and commercial projects.",
      icon: "⚡",
      color: "from-yellow-500 to-orange-500",
    },
    {
      id: 3,
      title: "HVAC Technician",
      department: "Field Services",
      location: "Chicago, IL",
      type: "Full-time",
      experience: "4+ years",
      salary: "$55k - $75k",
      description: "Expert HVAC technician for installation, maintenance, and repair services.",
      icon: "❄️",
      color: "from-cyan-500 to-blue-600",
    },
    {
      id: 4,
      title: "Customer Success Manager",
      department: "Customer Support",
      location: "Remote",
      type: "Full-time",
      experience: "2+ years",
      salary: "$50k - $65k",
      description: "Help our customers get the most value from our home services platform.",
      icon: "💬",
      color: "from-green-500 to-emerald-600",
    },
    {
      id: 5,
      title: "Operations Manager",
      department: "Operations",
      location: "Austin, TX",
      type: "Full-time",
      experience: "5+ years",
      salary: "$70k - $90k",
      description: "Lead daily operations and optimize service delivery across all departments.",
      icon: "📊",
      color: "from-purple-500 to-pink-600",
    },
    {
      id: 6,
      title: "Marketing Specialist",
      department: "Marketing",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$55k - $70k",
      description: "Drive growth through creative marketing campaigns and digital strategies.",
      icon: "📱",
      color: "from-pink-500 to-rose-600",
    },
    {
      id: 7,
      title: "Carpenter",
      department: "Field Services",
      location: "Seattle, WA",
      type: "Full-time",
      experience: "4+ years",
      salary: "$58k - $78k",
      description: "Skilled carpenter for custom woodwork and home renovation projects.",
      icon: "🪚",
      color: "from-amber-600 to-orange-600",
    },
    {
      id: 8,
      title: "Mobile App Developer",
      department: "Technology",
      location: "Remote",
      type: "Full-time",
      experience: "3+ years",
      salary: "$80k - $110k",
      description: "Build and enhance our mobile app for iOS and Android platforms.",
      icon: "📲",
      color: "from-indigo-600 to-purple-600",
    },
  ];

  const departments = [
    "all",
    "Field Services",
    "Customer Support",
    "Operations",
    "Marketing",
    "Technology",
  ];

  const filteredJobs =
    selectedDepartment === "all"
      ? jobOpenings
      : jobOpenings.filter((job) => job.department === selectedDepartment);

  const benefits = [
    {
      icon: "🏥",
      title: "Health Insurance",
      description: "Comprehensive medical, dental, and vision coverage for you and your family",
    },
    {
      icon: "💰",
      title: "Competitive Pay",
      description: "Industry-leading salaries with performance bonuses and profit sharing",
    },
    {
      icon: "🏖️",
      title: "Paid Time Off",
      description: "Generous vacation days, sick leave, and paid holidays",
    },
    {
      icon: "📚",
      title: "Training & Development",
      description: "Continuous learning opportunities and professional certifications",
    },
    {
      icon: "🚗",
      title: "Company Vehicle",
      description: "Provided for field service professionals with fuel allowance",
    },
    {
      icon: "💼",
      title: "401(k) Plan",
      description: "Retirement savings plan with company matching contributions",
    },
    {
      icon: "⚖️",
      title: "Work-Life Balance",
      description: "Flexible schedules and remote work options where applicable",
    },
    {
      icon: "🎓",
      title: "Tuition Assistance",
      description: "Support for continuing education and skill development programs",
    },
  ];

  const values = [
    {
      icon: "🎯",
      title: "Excellence",
      description: "We strive for the highest quality in every service we provide",
    },
    {
      icon: "🤝",
      title: "Integrity",
      description: "Honesty and transparency guide all our business practices",
    },
    {
      icon: "💡",
      title: "Innovation",
      description: "We embrace new technologies and creative solutions",
    },
    {
      icon: "❤️",
      title: "Customer Focus",
      description: "Our customers' satisfaction is our top priority",
    },
  ];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#000001] to-[#340063] text-white py-20">
        <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
          <div className="text-center">
            <div className="inline-block bg-white/10 backdrop-blur-sm rounded-full px-6 py-2 mb-6">
              <span className="text-sm font-semibold">🚀 We're Hiring</span>
            </div>
            <h1 className="text-4xl sm:text-5xl lg:text-6xl font-bold mb-6">
              Join Our Growing Team
            </h1>
            <p className="text-xl text-white/80 max-w-3xl mx-auto mb-8">
              Build your career with ServiceHub. We're looking for talented professionals who are passionate about delivering exceptional home services.
            </p>
            <div className="flex flex-col sm:flex-row gap-4 justify-center">
              <button
                onClick={scrollToOpenings}
                className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5"
              >
                View Open Positions
              </button>
              <button className="px-8 py-3 bg-transparent border-2 border-white text-white rounded-full font-semibold hover:bg-white hover:text-indigo-600 transition-all duration-300">
                Learn More
              </button>
            </div>
          </div>
        </div>
      </div>

      {/* Stats Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 -mt-12 mb-20">
        <div className="grid grid-cols-2 md:grid-cols-4 gap-6">
          {[
            { number: "500+", label: "Team Members" },
            { number: "50+", label: "Open Positions" },
            { number: "98%", label: "Employee Satisfaction" },
            { number: "4.8★", label: "Glassdoor Rating" },
          ].map((stat, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-3xl sm:text-4xl font-bold bg-gradient-to-r from-indigo-600 to-purple-600 bg-clip-text text-transparent mb-2">
                {stat.number}
              </div>
              <div className="text-gray-600 font-medium">{stat.label}</div>
            </div>
          ))}
        </div>
      </div>

      {/* Our Values */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Our Core Values
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            These principles guide everything we do at ServiceHub
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {values.map((value, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 text-center transform transition-all duration-300 hover:-translate-y-2 hover:shadow-xl"
            >
              <div className="text-5xl mb-4">{value.icon}</div>
              <h3 className="text-xl font-bold text-gray-900 mb-2">
                {value.title}
              </h3>
              <p className="text-gray-600">{value.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Benefits Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Why Work With Us?
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto">
            We invest in our team members' success and well-being
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {benefits.map((benefit, index) => (
            <div
              key={index}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl"
            >
              <div className="text-4xl mb-4">{benefit.icon}</div>
              <h3 className="text-lg font-bold text-gray-900 mb-2">
                {benefit.title}
              </h3>
              <p className="text-gray-600 text-sm">{benefit.description}</p>
            </div>
          ))}
        </div>
      </div>

      {/* Job Openings Section */}
      <div id="openings" className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="text-center mb-12">
          <h2 className="text-3xl sm:text-4xl font-bold text-gray-900 mb-4">
            Open Positions
          </h2>
          <p className="text-lg text-gray-600 max-w-2xl mx-auto mb-8">
            Find your next opportunity and grow your career with us
          </p>

          {/* Department Filter */}
          <div className="flex flex-wrap justify-center gap-3">
            {departments.map((dept) => (
              <button
                key={dept}
                onClick={() => setSelectedDepartment(dept)}
                className={`px-6 py-2 rounded-full font-medium transition-all duration-300 ${
                  selectedDepartment === dept
                    ? "bg-gradient-to-r from-indigo-600 to-purple-600 text-white shadow-lg"
                    : "bg-white text-gray-700 hover:bg-gray-100 shadow"
                }`}
              >
                {dept === "all" ? "All Departments" : dept}
              </button>
            ))}
          </div>
        </div>

        {/* Job Cards */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
          {filteredJobs.map((job) => (
            <div
              key={job.id}
              className="bg-white rounded-xl shadow-lg p-6 transform transition-all duration-300 hover:-translate-y-1 hover:shadow-xl border border-gray-100"
            >
              <div className="flex items-start gap-4">
                <div
                  className={`w-14 h-14 bg-gradient-to-br ${job.color} rounded-xl flex items-center justify-center text-2xl flex-shrink-0 shadow-lg`}
                >
                  {job.icon}
                </div>
                <div className="flex-1">
                  <h3 className="text-xl font-bold text-gray-900 mb-1">
                    {job.title}
                  </h3>
                  <div className="flex flex-wrap gap-2 mb-3">
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      {job.department}
                    </span>
                    <span className="text-sm text-gray-600 bg-gray-100 px-3 py-1 rounded-full">
                      📍 {job.location}
                    </span>
                  </div>
                  <p className="text-gray-600 text-sm mb-4">{job.description}</p>
                  <div className="flex flex-wrap gap-3 mb-4 text-sm">
                    <span className="text-gray-700">
                      <strong>Type:</strong> {job.type}
                    </span>
                    <span className="text-gray-700">
                      <strong>Experience:</strong> {job.experience}
                    </span>
                    <span className="text-green-600 font-semibold">
                      💰 {job.salary}
                    </span>
                  </div>
                  <button className="w-full sm:w-auto px-6 py-2 bg-gradient-to-r from-indigo-600 to-purple-600 text-white rounded-lg font-semibold hover:shadow-lg transition-all duration-300 hover:-translate-y-0.5">
                    Apply Now
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {filteredJobs.length === 0 && (
          <div className="text-center py-12">
            <p className="text-gray-600 text-lg">
              No positions available in this department at the moment.
            </p>
          </div>
        )}
      </div>

      {/* Application Process */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-white rounded-2xl shadow-xl p-8 sm:p-12">
          <h2 className="text-3xl font-bold text-gray-900 mb-8 text-center">
            Our Hiring Process
          </h2>
          <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
            {[
              {
                step: "1",
                title: "Apply Online",
                description: "Submit your application and resume through our portal",
              },
              {
                step: "2",
                title: "Initial Screening",
                description: "Our HR team reviews your qualifications",
              },
              {
                step: "3",
                title: "Interview",
                description: "Meet with hiring managers and team members",
              },
              {
                step: "4",
                title: "Offer & Onboarding",
                description: "Receive offer and start your journey with us",
              },
            ].map((process, index) => (
              <div key={index} className="text-center">
                <div className="w-16 h-16 bg-gradient-to-r from-indigo-600 to-purple-600 rounded-full flex items-center justify-center text-white text-2xl font-bold mx-auto mb-4 shadow-lg">
                  {process.step}
                </div>
                <h3 className="text-lg font-bold text-gray-900 mb-2">
                  {process.title}
                </h3>
                <p className="text-gray-600 text-sm">{process.description}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      {/* CTA Section */}
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 mb-20">
        <div className="bg-gradient-to-r from-indigo-600 to-purple-600 rounded-2xl p-12 text-white text-center">
          <h2 className="text-3xl font-bold mb-4">
            Ready to Start Your Journey?
          </h2>
          <p className="text-xl text-white/90 mb-8 max-w-2xl mx-auto">
            Don't see a position that fits? Send us your resume and we'll keep you in mind for future opportunities.
          </p>
          <button className="px-8 py-3 bg-white text-indigo-600 rounded-full font-semibold shadow-lg hover:shadow-xl transition-all duration-300 hover:-translate-y-0.5">
            Submit General Application
          </button>
        </div>
      </div>
    </div>
  );
}