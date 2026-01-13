import Link from "next/link";

type Props = {
  params: Promise<{
    category: string;
  }>;
};

export default async function CategoryPage({ params }: Props) {
  // Await params in Next.js 15+
  const { category } = await params;

  // Define subcategories for each main category
  const subcategoriesData: Record<string, any[]> = {
    "plumber": [
      {
        name: "Leak Repair",
        slug: "leak-repair",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop",
        description: "Fix leaky pipes and faucets",
        icon: "💧"
      },
      {
        name: "Pipe Installation",
        slug: "pipe-installation",
        image: "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
        description: "Install new pipes and fixtures",
        icon: "🔧"
      },
      {
        name: "Drain Cleaning",
        slug: "drain-cleaning",
        image: "https://images.unsplash.com/photo-1585704032915-c3400ca199e7?q=80&w=600&auto=format&fit=crop",
        description: "Clear clogged drains",
        icon: "🚰"
      },
      {
        name: "Water Heater",
        slug: "water-heater",
        image: "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop",
        description: "Repair and install water heaters",
        icon: "♨️"
      },
    ],
    "electrician": [
      {
        name: "Wiring",
        slug: "wiring",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
        description: "Electrical wiring services",
        icon: "⚡"
      },
      {
        name: "Appliance Repair",
        slug: "appliance-repair",
        image: "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
        description: "Fix electrical appliances",
        icon: "🔌"
      },
      {
        name: "Lighting Installation",
        slug: "lighting-installation",
        image: "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
        description: "Install lights and fixtures",
        icon: "💡"
      },
      {
        name: "Panel Upgrade",
        slug: "panel-upgrade",
        image: "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
        description: "Upgrade electrical panels",
        icon: "⚙️"
      },
    ],
    "gardening": [
      {
        name: "Lawn Mowing",
        slug: "lawn-mowing",
        image: "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=600&auto=format&fit=crop",
        description: "Professional lawn care",
        icon: "🌱"
      },
      {
        name: "Tree Trimming",
        slug: "tree-trimming",
        image: "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop",
        description: "Trim and prune trees",
        icon: "🌳"
      },
      {
        name: "Landscaping",
        slug: "landscaping",
        image: "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop",
        description: "Design and maintain gardens",
        icon: "🏡"
      },
      {
        name: "Irrigation System",
        slug: "irrigation-system",
        image: "https://images.unsplash.com/photo-1625246333195-78d9c38ad449?q=80&w=600&auto=format&fit=crop",
        description: "Install sprinkler systems",
        icon: "💦"
      },
      {
        name: "Garden Maintenance",
        slug: "garden-maintenance",
        image: "https://images.unsplash.com/photo-1597868165956-03a6827955b1?q=80&w=600&auto=format&fit=crop",
        description: "Regular garden upkeep",
        icon: "🌿"
      },
      {
        name: "Pest Control",
        slug: "pest-control",
        image: "https://images.unsplash.com/photo-1562839887-4f0b5f1e8e8e?q=80&w=600&auto=format&fit=crop",
        description: "Garden pest management",
        icon: "🐛"
      },
    ],
    "cleaning": [
      {
        name: "Deep Cleaning",
        slug: "deep-cleaning",
        image: "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop",
        description: "Thorough home cleaning",
        icon: "✨"
      },
      {
        name: "Carpet Cleaning",
        slug: "carpet-cleaning",
        image: "https://images.unsplash.com/photo-1600585152220-90363fe7e115?q=80&w=600&auto=format&fit=crop",
        description: "Professional carpet care",
        icon: "🧽"
      },
      {
        name: "Window Cleaning",
        slug: "window-cleaning",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        description: "Sparkling clean windows",
        icon: "🪟"
      },
      {
        name: "Move-in/Move-out",
        slug: "move-in-move-out",
        image: "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
        description: "Complete moving cleaning",
        icon: "📦"
      },
      {
        name: "Office Cleaning",
        slug: "office-cleaning",
        image: "https://images.unsplash.com/photo-1497366216548-37526070297c?q=80&w=600&auto=format&fit=crop",
        description: "Commercial office cleaning",
        icon: "🏢"
      },
      {
        name: "Kitchen Cleaning",
        slug: "kitchen-cleaning",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
        description: "Deep kitchen sanitization",
        icon: "🍳"
      },
    ],
    "vehicles": [
      {
        name: "Car Repair",
        slug: "car-repair",
        image: "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
        description: "Complete car servicing",
        icon: "🚗"
      },
      {
        name: "Bike Repair",
        slug: "bike-repair",
        image: "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
        description: "Motorcycle maintenance",
        icon: "🏍️"
      },
      {
        name: "Car Wash",
        slug: "car-wash",
        image: "https://images.unsplash.com/photo-1601362840469-51e4d8d58785?q=80&w=600&auto=format&fit=crop",
        description: "Professional car cleaning",
        icon: "🧼"
      },
      {
        name: "Oil Change",
        slug: "oil-change",
        image: "https://images.unsplash.com/photo-1487754180451-c456f719a1fc?q=80&w=600&auto=format&fit=crop",
        description: "Quick oil change service",
        icon: "🛢️"
      },
      {
        name: "Tire Service",
        slug: "tire-service",
        image: "https://images.unsplash.com/photo-1594787318286-3d835c1d207f?q=80&w=600&auto=format&fit=crop",
        description: "Tire repair and replacement",
        icon: "🛞"
      },
      {
        name: "Battery Service",
        slug: "battery-service",
        image: "https://images.unsplash.com/photo-1609592043945-6c5c97155d7c?q=80&w=600&auto=format&fit=crop",
        description: "Battery testing and replacement",
        icon: "🔋"
      },
    ],
    "carpentry": [
      {
        name: "Furniture Assembly",
        slug: "furniture-assembly",
        image: "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=600&auto=format&fit=crop",
        description: "Assemble and install furniture",
        icon: "🪑"
      },
      {
        name: "Door Installation",
        slug: "door-installation",
        image: "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop",
        description: "Install and repair doors",
        icon: "🚪"
      },
      {
        name: "Cabinet Making",
        slug: "cabinet-making",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
        description: "Custom cabinet design and installation",
        icon: "🗄️"
      },
      {
        name: "Shelving Installation",
        slug: "shelving-installation",
        image: "https://images.unsplash.com/photo-1595428774223-ef52624120d2?q=80&w=600&auto=format&fit=crop",
        description: "Install wall shelves and storage",
        icon: "📚"
      },
      {
        name: "Deck Building",
        slug: "deck-building",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
        description: "Build and repair outdoor decks",
        icon: "🏗️"
      },
      {
        name: "Wood Finishing",
        slug: "wood-finishing",
        image: "https://images.unsplash.com/photo-1615529182904-14819c35db37?q=80&w=600&auto=format&fit=crop",
        description: "Staining and finishing woodwork",
        icon: "🪵"
      },
    ],
    "painting": [
      {
        name: "Interior Painting",
        slug: "interior-painting",
        image: "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
        description: "Paint indoor walls and ceilings",
        icon: "🎨"
      },
      {
        name: "Exterior Painting",
        slug: "exterior-painting",
        image: "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop",
        description: "Paint building exteriors",
        icon: "🏠"
      },
      {
        name: "Wallpaper Installation",
        slug: "wallpaper-installation",
        image: "https://images.unsplash.com/photo-1509317336763-f6a741f0bfec?q=80&w=600&auto=format&fit=crop",
        description: "Install decorative wallpaper",
        icon: "🖼️"
      },
      {
        name: "Cabinet Painting",
        slug: "cabinet-painting",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
        description: "Refinish kitchen cabinets",
        icon: "🎨"
      },
      {
        name: "Deck Staining",
        slug: "deck-staining",
        image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?q=80&w=600&auto=format&fit=crop",
        description: "Stain and seal outdoor decks",
        icon: "🪵"
      },
      {
        name: "Drywall Repair",
        slug: "drywall-repair",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        description: "Fix and paint damaged drywall",
        icon: "🧱"
      },
    ],
    "hvac": [
      {
        name: "AC Repair",
        slug: "ac-repair",
        image: "https://images.unsplash.com/photo-1631545806609-47c7b1f8f73e?q=80&w=600&auto=format&fit=crop",
        description: "Air conditioner repair and maintenance",
        icon: "❄️"
      },
      {
        name: "Heating Repair",
        slug: "heating-repair",
        image: "https://images.unsplash.com/photo-1607400201889-565b1ee75f8e?q=80&w=600&auto=format&fit=crop",
        description: "Furnace and heater services",
        icon: "🔥"
      },
      {
        name: "AC Installation",
        slug: "ac-installation",
        image: "https://images.unsplash.com/photo-1585412459412-ebe3d4e4857d?q=80&w=600&auto=format&fit=crop",
        description: "Install new air conditioning units",
        icon: "🌬️"
      },
      {
        name: "Duct Cleaning",
        slug: "duct-cleaning",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        description: "Clean air ducts and vents",
        icon: "🌀"
      },
      {
        name: "Thermostat Installation",
        slug: "thermostat-installation",
        image: "https://images.unsplash.com/photo-1545259742-24f9d0f6a1e9?q=80&w=600&auto=format&fit=crop",
        description: "Install smart thermostats",
        icon: "🌡️"
      },
      {
        name: "HVAC Maintenance",
        slug: "hvac-maintenance",
        image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        description: "Regular HVAC system checkups",
        icon: "⚙️"
      },
    ],
    "appliance": [
      {
        name: "Refrigerator Repair",
        slug: "refrigerator-repair",
        image: "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=600&auto=format&fit=crop",
        description: "Fix refrigerator issues",
        icon: "🧊"
      },
      {
        name: "Washing Machine Repair",
        slug: "washing-machine-repair",
        image: "https://images.unsplash.com/photo-1626806787461-102c1bfaaea1?q=80&w=600&auto=format&fit=crop",
        description: "Repair washing machines",
        icon: "🧺"
      },
      {
        name: "Dishwasher Repair",
        slug: "dishwasher-repair",
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=600&auto=format&fit=crop",
        description: "Fix dishwasher problems",
        icon: "🍽️"
      },
      {
        name: "Oven Repair",
        slug: "oven-repair",
        image: "https://images.unsplash.com/photo-1556911220-bff31c812dba?q=80&w=600&auto=format&fit=crop",
        description: "Repair ovens and stoves",
        icon: "🔥"
      },
      {
        name: "Dryer Repair",
        slug: "dryer-repair",
        image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c?q=80&w=600&auto=format&fit=crop",
        description: "Fix clothes dryers",
        icon: "👕"
      },
      {
        name: "Microwave Repair",
        slug: "microwave-repair",
        image: "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=600&auto=format&fit=crop",
        description: "Repair microwave ovens",
        icon: "📻"
      },
    ],
  };

  // Get subcategories for the current category
  const subcategories = subcategoriesData[category] || [];

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section */}
      <div className="bg-gradient-to-b from-[#000001]  to-[#340063] text-white py-16 px-6">
        <div className="max-w-7xl mx-auto">
          <Link 
            href="/booking" 
            className="inline-flex items-center text-white/80 hover:text-white mb-4 transition"
          >
            <svg className="w-5 h-5 mr-2" fill="none" stroke="currentColor" viewBox="0 0 24 24">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
            </svg>
            Back to Categories
          </Link>
          <h1 className="text-5xl md:text-6xl font-bold capitalize mb-4">
            {category.replace(/-/g, " ")} Services
          </h1>
          <p className="text-xl text-indigo-100">
            Choose from our professional {category.replace(/-/g, " ")} services
          </p>
        </div>
      </div>

      {/* Subcategories Section */}
      <div className="max-w-7xl mx-auto px-6 py-12">
        {subcategories.length > 0 ? (
          <>
            <div className="mb-8">
              <p className="text-gray-600 text-black">
                <span className="font-semibold text-indigo-600">{subcategories.length}</span> services available
              </p>
            </div>

            {/* Subcategories Grid */}
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4 gap-6">
              {subcategories.map((subCategory, index) => (
                <Link
                  key={index}
                  href={`/booking/${category}/${subCategory.slug}`}
                  className="group relative overflow-hidden rounded-2xl shadow-lg hover:shadow-2xl transition-all duration-300 transform hover:-translate-y-2"
                >
                  {/* Image with overlay */}
                  <div className="relative h-64 overflow-hidden">
                    <img 
                      className="w-full h-full object-cover transform group-hover:scale-110 transition-transform duration-500" 
                      src={subCategory.image} 
                      alt={subCategory.name} 
                    />
                    {/* Dark overlay */}
                    <div className="absolute inset-0 bg-gradient-to-t from-black/80 via-black/40 to-transparent"></div>
                  </div>

                  {/* Content overlay */}
                  <div className="absolute inset-0 flex flex-col justify-end p-6">
                    {/* Icon badge */}
                    <div className="absolute top-4 right-4 bg-white/20 backdrop-blur-md rounded-full w-12 h-12 flex items-center justify-center border border-white/30">
                      <span className="text-2xl">{subCategory.icon}</span>
                    </div>

                    {/* Text content */}
                    <div className="space-y-2">
                      <h3 className="text-white text-2xl font-bold group-hover:text-indigo-300 transition-colors">
                        {subCategory.name}
                      </h3>
                      <p className="text-white/90 text-sm">
                        {subCategory.description}
                      </p>
                      
                      {/* Arrow indicator */}
                      <div className="flex items-center text-white/80 text-sm font-medium pt-2">
                        <span className="group-hover:mr-2 transition-all">View Professionals</span>
                        <svg 
                          className="w-5 h-5 transform group-hover:translate-x-2 transition-transform" 
                          fill="none" 
                          stroke="currentColor" 
                          viewBox="0 0 24 24"
                        >
                          <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                        </svg>
                      </div>
                    </div>
                  </div>

                  {/* Shine effect on hover */}
                  <div className="absolute inset-0 opacity-0 group-hover:opacity-100 transition-opacity duration-300">
                    <div className="absolute inset-0 bg-gradient-to-r from-transparent via-white/10 to-transparent transform -skew-x-12 translate-x-full group-hover:translate-x-[-200%] transition-transform duration-1000"></div>
                  </div>
                </Link>
              ))}
            </div>
          </>
        ) : (
          /* No subcategories message */
          <div className="text-center py-20">
            <div className="w-24 h-24 bg-gray-200 rounded-full flex items-center justify-center mx-auto mb-6">
              <span className="text-5xl">🔍</span>
            </div>
            <h3 className="text-2xl font-bold text-gray-800 mb-2">No Services Available</h3>
            <p className="text-gray-600 text-black mb-6">
              We're currently setting up services in this category
            </p>
            <Link 
              href="/booking"
              className="inline-block px-8 py-3 bg-indigo-600 text-white rounded-lg hover:bg-indigo-700 transition font-semibold"
            >
              Browse Other Categories
            </Link>
          </div>
        )}
      </div>

      {/* Why Choose Us Section */}
      {subcategories.length > 0 && (
        <div className="bg-white py-16 px-6 mt-12">
          <div className="max-w-7xl mx-auto">
            <h2 className="text-3xl font-bold text-center text-gray-800 mb-12">
              Why Choose Our {category.replace(/-/g, " ")} Services?
            </h2>
            <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
              <div className="text-center">
                <div className="w-16 h-16 bg-indigo-500 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-yellow-500">✓</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Verified Experts</h3>
                <p className="text-gray-600 text-sm">Background-checked professionals</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-purple-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">⭐</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Top Rated</h3>
                <p className="text-gray-600 text-sm">4.8+ average rating</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-pink-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">💰</span>
                </div>
                <h3 className="font-semibold text-black mb-2">Best Prices</h3>
                <p className="text-gray-600 text-sm">Competitive & transparent pricing</p>
              </div>
              <div className="text-center">
                <div className="w-16 h-16 bg-green-100 rounded-full flex items-center justify-center mx-auto mb-4">
                  <span className="text-3xl">🛡️</span>
                </div>
                <h3 className="font-semibold text-black mb-2">100% Guarantee</h3>
                <p className="text-gray-600 text-sm">Satisfaction guaranteed</p>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}