import ProfileCard from "./ProfileCard";

type Props = {
  params: Promise<{
    category: string;
    subCategory: string;
  }>;
};

export default async function ProfilesPage({ params }: Props) {
  const { category, subCategory } = await params;

  // Define profiles for different subcategories
  const profilesData: Record<string, any[]> = {
    // Vehicle - Car Repair
    "car-repair": [
      {
        id: "autofix-pro",
        name: "AutoFix Pro",
        rating: 4.9,
        jobs: 150,
        hourlyRate: 60,
        offerRate: 50,
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1632823469964-087498552ca5?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "15+ years in car diagnostics and repair",
          "Specialized in engine and transmission work",
          "Same-day service for most repairs",
        ],
      },
      {
        id: "quick-car-service",
        name: "Quick Car Service",
        rating: 4.7,
        jobs: 120,
        hourlyRate: 55,
        offerRate: 45,
        images: [
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1632823469964-087498552ca5?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Fast and reliable car servicing",
          "All major brands covered",
          "Free pickup and drop service",
        ],
      },
    ],
    // Vehicle - Bike Repair
    "bike-repair": [
      {
        id: "bike-medics",
        name: "Bike Medics",
        rating: 4.8,
        jobs: 110,
        hourlyRate: 45,
        offerRate: 38,
        images: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Expert in two-wheeler repairs",
          "Genuine spare parts only",
          "90-day warranty on repairs",
        ],
      },
      {
        id: "two-wheeler-care",
        name: "Two Wheeler Care",
        rating: 4.6,
        jobs: 95,
        hourlyRate: 40,
        offerRate: 35,
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1558618666-fcd25c85cd64?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1609630875171-b1321377ee65?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1568772585407-9361f9bf3a87?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Affordable bike maintenance",
          "Emergency roadside assistance",
          "Free bike wash with service",
        ],
      },
    ],
    // Plumbing - Leak Repair
    "leak-repair": [
      {
        id: "bb-plumbing",
        name: "BB Plumbing Solutions",
        rating: 4.9,
        jobs: 200,
        hourlyRate: 50,
        offerRate: 42,
        images: [
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "20+ years leak detection expertise",
          "24/7 emergency service available",
          "No-leak guarantee for 1 year",
        ],
      },
      {
        id: "leak-masters",
        name: "Leak Masters",
        rating: 4.7,
        jobs: 160,
        hourlyRate: 48,
        offerRate: 40,
        images: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Advanced leak detection equipment",
          "Minimal damage to walls/floors",
          "Free inspection included",
        ],
      },
    ],
    // Plumbing - Pipe Installation
    "pipe-installation": [
      {
        id: "pipepro-solutions",
        name: "PipePro Solutions",
        rating: 4.8,
        jobs: 140,
        hourlyRate: 55,
        offerRate: 48,
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1607472586893-edb57bdc0e39?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Expert in PVC, copper, and PEX pipes",
          "Licensed and insured",
          "Free estimates provided",
        ],
      },
    ],
    // Electrical - Wiring
    "wiring": [
      {
        id: "spark-electricals",
        name: "Spark Electricals",
        rating: 4.9,
        jobs: 180,
        hourlyRate: 60,
        offerRate: 52,
        images: [
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Certified master electrician",
          "Residential and commercial wiring",
          "Code-compliant installations",
        ],
      },
      {
        id: "powerfix-pro",
        name: "PowerFix Pro",
        rating: 4.7,
        jobs: 145,
        hourlyRate: 55,
        offerRate: 48,
        images: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1621905252507-b35492cc74b4?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1473341304170-971dccb5ac1e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Emergency electrical services",
          "Smart home wiring specialist",
          "Safety inspection included",
        ],
      },
    ],
    // Cleaning - Deep Cleaning
    "deep-cleaning": [
      {
        id: "sparkle-clean",
        name: "SparkleClean Services",
        rating: 4.9,
        jobs: 220,
        hourlyRate: 40,
        offerRate: 35,
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Professional deep cleaning service",
          "Eco-friendly cleaning products",
          "Satisfaction guarantee",
        ],
      },
      {
        id: "deepclean-pro",
        name: "DeepClean Pro",
        rating: 4.8,
        jobs: 190,
        hourlyRate: 38,
        offerRate: 32,
        images: [
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1628177142898-93e36e4e3a50?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1600607687920-4e2a09cf159d?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Trained cleaning professionals",
          "Same-day service available",
          "All cleaning supplies included",
        ],
      },
    ],
    // Gardening - Lawn Mowing
    "lawn-mowing": [
      {
        id: "green-thumb-lawn",
        name: "Green Thumb Lawn Care",
        rating: 4.8,
        jobs: 175,
        hourlyRate: 45,
        offerRate: 38,
        images: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Weekly/bi-weekly lawn maintenance",
          "Professional-grade equipment",
          "Edge trimming included",
        ],
      },
      {
        id: "perfect-lawns",
        name: "Perfect Lawns",
        rating: 4.7,
        jobs: 155,
        hourlyRate: 42,
        offerRate: 36,
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1558904541-efa843a96f01?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1592595896551-12b371d546d5?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1416879595882-3373a0480b5b?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Affordable lawn care services",
          "Flexible scheduling",
          "Leaf cleanup included",
        ],
      },
    ],
    // HVAC - AC Repair
    "ac-repair": [
      {
        id: "cool-comfort-hvac",
        name: "Cool Comfort HVAC",
        rating: 4.9,
        jobs: 210,
        hourlyRate: 65,
        offerRate: 55,
        images: [
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1631545806609-47c7b1f8f73e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585412459412-ebe3d4e4857d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "24/7 emergency AC repairs",
          "All brands serviced",
          "Free diagnostics",
        ],
      },
    ],
    // Carpentry - Furniture Assembly
    "furniture-assembly": [
      {
        id: "handy-assembly",
        name: "Handy Assembly Services",
        rating: 4.8,
        jobs: 165,
        hourlyRate: 50,
        offerRate: 42,
        images: [
          "https://images.unsplash.com/photo-1500648767791-00dcc994a43e?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581539250439-c96689b516dd?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1505691938895-1758d7feb511?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Expert furniture assembly",
          "IKEA specialist",
          "Tools and hardware provided",
        ],
      },
    ],
    // Painting - Interior Painting
    "interior-painting": [
      {
        id: "color-masters",
        name: "Color Masters Painting",
        rating: 4.9,
        jobs: 195,
        hourlyRate: 55,
        offerRate: 48,
        images: [
          "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1589939705384-5185137a7f0f?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1562259949-e8e7689d7828?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "Professional interior painting",
          "Premium quality paints",
          "Clean and precise work",
        ],
      },
    ],
    // Appliance - Refrigerator Repair
    "refrigerator-repair": [
      {
        id: "appliance-experts",
        name: "Appliance Repair Experts",
        rating: 4.8,
        jobs: 185,
        hourlyRate: 60,
        offerRate: 52,
        images: [
          "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1571175443880-49e1d25b2bc5?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1585659722983-3a675dabf23d?q=80&w=600&auto=format&fit=crop",
          "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        ],
        description: [
          "All refrigerator brands serviced",
          "Genuine replacement parts",
          "90-day repair warranty",
        ],
      },
    ],
  };

  // Get profiles for current subcategory, or use default
  const profiles = profilesData[subCategory] || [
    {
      id: "general-service",
      name: "General Service Provider",
      rating: 4.5,
      jobs: 100,
      hourlyRate: 50,
      offerRate: 42,
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1581578731548-c64695cc6952?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1621905251918-48416bd8575a?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1504307651254-35680f356dfd?q=80&w=600&auto=format&fit=crop",
      ],
      description: [
        "Professional service provider",
        "Quality work guaranteed",
        "Flexible scheduling available",
      ],
    },
  ];

  // Sort by rating & jobs
  const rankedProfiles = profiles.sort(
    (a, b) => b.rating - a.rating || b.jobs - a.jobs
  );

  return (
    <div className="p-6 max-w-7xl mx-auto">
      <p className="text-sm mb-4">
        <span>Home</span> / <span>Booking</span> /{" "}
        <span className="capitalize">{category.replace(/-/g, " ")}</span> /{" "}
        <span className="text-indigo-500 capitalize">
          {subCategory.replace(/-/g, " ")}
        </span>
      </p>

      <h1 className="text-3xl font-bold mb-8">
        Top {subCategory.replace(/-/g, " ")} Professionals
      </h1>

      <div className="grid gap-8">
        {rankedProfiles.map((profile) => (
          <ProfileCard
            key={profile.id}
            profile={profile}
            category={category}
            subCategory={subCategory}
          />
        ))}
      </div>
    </div>
  );
}