import Link from "next/link";

const categories = [
  {
    name: "Vehicles",
    slug: "vehicles",
    icon: "🚗",
    description: "Car & bike repair services",
    gradient: "from-blue-500 to-cyan-500",
    bgColor: "bg-blue-50",
  },
  {
    name: "Electrician",
    slug: "electrician",
    icon: "⚡",
    description: "Wiring & appliance repair",
    gradient: "from-yellow-500 to-orange-500",
    bgColor: "bg-yellow-50",
  },
  {
    name: "Plumbing",
    slug: "plumbing",
    icon: "🔧",
    description: "Leak repair & installation",
    gradient: "from-indigo-500 to-purple-500",
    bgColor: "bg-indigo-50",
  },
  {
    name: "Cleaning",
    slug: "cleaning",
    icon: "🧹",
    description: "Deep & carpet cleaning",
    gradient: "from-green-500 to-teal-500",
    bgColor: "bg-green-50",
  },
  {
    name: "Gardening",
    slug: "gardening",
    icon: "🌿",
    description: "Lawn & landscaping care",
    gradient: "from-emerald-500 to-lime-500",
    bgColor: "bg-emerald-50",
  },
  {
    name: "Carpentry",
    slug: "carpentry",
    icon: "🪚",
    description: "Furniture & door installation",
    gradient: "from-amber-600 to-orange-600",
    bgColor: "bg-amber-50",
  },
  {
    name: "Painting",
    slug: "painting",
    icon: "🎨",
    description: "Interior & exterior painting",
    gradient: "from-pink-500 to-rose-500",
    bgColor: "bg-pink-50",
  },
  {
    name: "HVAC",
    slug: "hvac",
    icon: "❄️",
    description: "AC repair & maintenance",
    gradient: "from-sky-500 to-blue-600",
    bgColor: "bg-sky-50",
  },
  {
    name: "Appliance",
    slug: "appliance",
    icon: "🔌",
    description: "Home appliance repairs",
    gradient: "from-violet-500 to-purple-600",
    bgColor: "bg-violet-50",
  },
];

export default function BookingPage() {
  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section - Custom Gradient */}
      <div className="bg-gradient-to-b from-[#000001]  to-[#340063] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto text-center">
          <h1 className="text-5xl md:text-6xl font-bold mb-4 animate-fade-in">
            Find Your Perfect Service
          </h1>
          <p className="text-black md:text-2xl text-white/90 mb-8">
            Professional home services at your fingertips
          </p>
          <div className="flex flex-wrap justify-center gap-4">
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">✓ Verified Professionals</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">✓ Best Prices</span>
            </div>
            <div className="bg-white/20 backdrop-blur-sm rounded-full px-6 py-3">
              <span className="font-semibold">✓ 24/7 Support</span>
            </div>
          </div>
        </div>
      </div>

      {/* Categories Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold text-gray-800 mb-3">
            Choose a Service Category
          </h2>
          <p className="text-gray-600 text-lg">
            Select from our wide range of professional services
          </p>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Link
              key={category.slug}
              href={`/booking/${category.slug}`}
              className="group relative overflow-hidden rounded-2xl bg-white shadow-md hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              {/* Gradient Background on Hover */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-0 group-hover:opacity-10 transition-opacity duration-300`}></div>
              
              {/* Content */}
              <div className="relative p-6">
                {/* Icon Container */}
                <div className={`${category.bgColor} w-20 h-20 rounded-2xl flex items-center justify-center mb-4 group-hover:scale-110 transition-transform duration-300`}>
                  <span className="text-4xl">{category.icon}</span>
                </div>

                {/* Text Content */}
                <h3 className="text-2xl font-bold text-gray-800 mb-2 group-hover:text-transparent group-hover:bg-clip-text group-hover:bg-gradient-to-r group-hover:from-[#8139c6] group-hover:to-[#39C681] transition-all duration-300">
                  {category.name}
                </h3>
                <p className="text-gray-600 mb-4">
                  {category.description}
                </p>

                {/* Arrow Icon */}
                <div className="flex items-center text-[#8139c6] font-semibold group-hover:gap-2 transition-all duration-300">
                  <span>Explore Services</span>
                  <svg 
                    className="w-5 h-5 transform group-hover:translate-x-2 transition-transform duration-300" 
                    fill="none" 
                    stroke="currentColor" 
                    viewBox="0 0 24 24"
                  >
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                  </svg>
                </div>
              </div>

              {/* Decorative Corner */}
              <div className={`absolute top-0 right-0 w-20 h-20 bg-gradient-to-br ${category.gradient} opacity-10 rounded-bl-full`}></div>
            </Link>
          ))}
        </div>
      </div>

      {/* Stats Section - Custom Gradient */}
      <div className="bg-gradient-to-r from-[#000001] via-[#5d70a3] to-[#340063] py-16 px-6 mt-12">
        <div className="max-w-7xl mx-auto">
          <div className="grid grid-cols-2 md:grid-cols-4 gap-8 text-center text-white">
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">500+</div>
              <div className="text-white/80">Professionals</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">10K+</div>
              <div className="text-white/80">Services Done</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">4.8⭐</div>
              <div className="text-white/80">Average Rating</div>
            </div>
            <div>
              <div className="text-4xl md:text-5xl font-bold mb-2">24/7</div>
              <div className="text-white/80">Support</div>
            </div>
          </div>
        </div>
      </div>

      {/* How It Works Section */}
      <div className="max-w-7xl mx-auto px-6 py-16">
        <h2 className="text-3xl md:text-4xl font-bold text-center text-gray-800 mb-12">
          How It Works
        </h2>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8">
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#000001] via-[#5d70a3] to-[#340063] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">🔍</span>
            </div>
            <h3 className="text-black font-semibold mb-2">1. Choose Service</h3>
            <p className="text-gray-600">Select the service you need from our categories</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#000001] via-[#5d70a3] to-[#340063] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-white text-3xl">🧑‍🦰</span>
            </div>
            <h3 className="text-black font-semibold mb-2">2. Pick Professional</h3>
            <p className="text-gray-600">Browse profiles and select your preferred expert</p>
          </div>
          <div className="text-center">
            <div className="w-16 h-16 bg-gradient-to-br from-[#000001] via-[#5d70a3] to-[#340063] rounded-full flex items-center justify-center mx-auto mb-4 shadow-lg">
              <span className="text-3xl">✅</span>
            </div>
            <h3 className="text-black font-semibold mb-2">3. Book & Relax</h3>
            <p className="text-gray-600">Schedule your service and let us handle the rest</p>
          </div>
        </div>
      </div>
    </div>
  );
}