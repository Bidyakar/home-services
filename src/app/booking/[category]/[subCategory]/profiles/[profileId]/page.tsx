import Link from "next/link";

type Props = {
  params: Promise<{
    category: string;
    subCategory: string;
    profileId: string;
  }>;
};

export default async function ProfileDetailPage({ params }: Props) {
  // Await params in Next.js 15+
  const resolvedParams = await params;
  const { category, subCategory, profileId } = resolvedParams;

  console.log("Profile ID:", profileId); 

  const profileDetails: Record<string, any> = {
    "autofix-pro": {
      id: "autofix-pro",
      name: "AutoFix Pro",
      rating: 4.9,
      jobs: 150,
      hourlyRate: 60,
      offerRate: 50,
      experience: "15 years",
      location: "Downtown, City Center",
      availability: "Mon-Sat, 9 AM - 6 PM",
      images: [
        "https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1632823469964-087498552ca5?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
      ],
      about: "Expert mechanic with over 15 years of experience in car diagnostics, engine repair, and transmission work. Specialized in all major car brands including Toyota, Honda, Ford, and BMW.",
      services: [
        "Engine diagnostics and repair",
        "Transmission service",
        "Brake system repair",
        "Oil change and maintenance",
        "AC repair and servicing",
        "Electrical system diagnosis",
      ],
      certifications: [
        "ASE Certified Master Technician",
        "Manufacturer Certified (Toyota, Honda)",
        "EPA 609 Certified",
      ],
      reviews: [
        {
          name: "John D.",
          rating: 5,
          comment: "Excellent service! Fixed my car's engine issue quickly and professionally.",
          date: "2 weeks ago",
        },
        {
          name: "Sarah M.",
          rating: 5,
          comment: "Very knowledgeable and honest. Highly recommend!",
          date: "1 month ago",
        },
        {
          name: "Mike R.",
          rating: 4,
          comment: "Good work, fair pricing. Will use again.",
          date: "2 months ago",
        },
      ],
    },
    "quick-car-service": {
      id: "quick-car-service",
      name: "Quick Car Service",
      rating: 4.7,
      jobs: 120,
      hourlyRate: 55,
      offerRate: 45,
      experience: "12 years",
      location: "Westside Avenue",
      availability: "Mon-Sun, 8 AM - 7 PM",
      images: [
        "https://images.unsplash.com/photo-1438761681033-6461ffad8d80?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1486262715619-67b85e0b08d3?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1632823469964-087498552ca5?q=80&w=600&auto=format&fit=crop",
        "https://images.unsplash.com/photo-1619642751034-765dfdf7c58e?q=80&w=600&auto=format&fit=crop",
      ],
      about: "Fast and reliable car servicing with a focus on customer satisfaction. We handle all major car brands and provide quick turnaround times.",
      services: [
        "General car servicing",
        "Oil and filter changes",
        "Tire rotation and balancing",
        "Battery replacement",
        "Brake inspection and repair",
        "Quick diagnostics",
      ],
      certifications: [
        "ASE Certified Technician",
        "Certified Auto Service Excellence",
      ],
      reviews: [
        {
          name: "Emily W.",
          rating: 5,
          comment: "Super fast service! Got my car back the same day.",
          date: "1 week ago",
        },
      ],
    },
  };

  const profile = profileDetails[profileId] || {
    id: profileId,
    name: "Professional",
    rating: 4.5,
    jobs: 50,
    hourlyRate: 50,
    offerRate: 40,
    experience: "5 years",
    location: "City Center",
    availability: "Mon-Fri, 9 AM - 5 PM",
    images: ["https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?q=80&w=600&auto=format&fit=crop"],
    about: "Experienced professional providing quality services.",
    services: ["General services"],
    certifications: ["Certified Professional"],
    reviews: [],
  };

  return (
    <div className="p-6 max-w-7xl mx-auto">
      {/* Debug info - remove this later */}
      <div className="mb-4 p-2 bg-gray-100 text-xs">
        Debug: category={category}, subCategory={subCategory}, profileId={profileId}
      </div>

      {/* Breadcrumb */}
      <p className="text-sm mb-6">
        <Link href="/booking" className="hover:text-indigo-500">Home</Link> / 
        <Link href="/booking" className="hover:text-indigo-500"> Booking</Link> / 
        <Link href={`/booking/${category}`} className="hover:text-indigo-500 capitalize"> {category.replace(/-/g, " ")}</Link> / 
        <Link href={`/booking/${category}/${subCategory}`} className="hover:text-indigo-500 capitalize"> {subCategory.replace(/-/g, " ")}</Link> / 
        <span className="text-indigo-500"> {profile.name}</span>
      </p>

      <div className="grid md:grid-cols-3 gap-8">
        {/* Left Column - Profile Info */}
        <div className="md:col-span-2">
          {/* Image Gallery */}
          <div className="grid grid-cols-2 md:grid-cols-4 gap-2 mb-6">
            {profile.images.map((img: string, idx: number) => (
              <img
                key={idx}
                src={img}
                alt={`${profile.name} ${idx + 1}`}
                className="w-full h-48 object-cover rounded-lg"
              />
            ))}
          </div>

          {/* Profile Header */}
          <div className="mb-6">
            <h1 className="text-4xl font-bold mb-2">{profile.name}</h1>
            <div className="flex flex-wrap items-center gap-4 text-white-600">
              <div className="flex items-center gap-1">
                <span className="text-yellow-500">⭐</span>
                <span className="font-semibold">{profile.rating}</span>
                <span>({profile.jobs} jobs)</span>
              </div>
              <span>•</span>
              <span>{profile.experience} experience</span>
              <span>•</span>
              <span>📍 {profile.location}</span>
            </div>
          </div>

          {/* About */}
          <div className="mb-6" >
            <h2 className="text-2xl font-semibold mb-3">About</h2>
            <p className="text-white leading-relaxed">{profile.about}</p>
          </div>

          {/* Services */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Services Offered</h2>
            <ul className="grid md:grid-cols-2 gap-2">
              {profile.services.map((service: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-green-500">✓</span>
                  <span>{service}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Certifications */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-3">Certifications</h2>
            <ul className="space-y-2">
              {profile.certifications.map((cert: string, idx: number) => (
                <li key={idx} className="flex items-center gap-2">
                  <span className="text-indigo-500">🏆</span>
                  <span>{cert}</span>
                </li>
              ))}
            </ul>
          </div>

          {/* Reviews */}
          <div className="mb-6">
            <h2 className="text-2xl font-semibold mb-4">Customer Reviews</h2>
            <div className="space-y-4">
              {profile.reviews.length > 0 ? (
                profile.reviews.map((review: any, idx: number) => (
                  <div key={idx} className="border-b pb-4">
                    <div className="flex items-center gap-2 mb-2">
                      <span className="font-semibold">{review.name}</span>
                      <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                      <span className="text-gray- text-sm">{review.date}</span>
                    </div>
                    <p className="text-gray-700">{review.comment}</p>
                  </div>
                ))
              ) : (
                <p className="text-gray-500">No reviews yet</p>
              )}
            </div>
          </div>
        </div>

        {/* Right Column - Booking Card */}
        <div className="md:col-span-1">
          <div className="border rounded-lg p-6 sticky top-6 shadow-lg">
            <div className="mb-4">
              <p className="text-gray-500 line-through text-sm">
                ${profile.hourlyRate}/hour
              </p>
              <p className="text-3xl font-bold text-indigo-600">
                ${profile.offerRate}/hour
              </p>
              <p className="text-sm text-gray-600">Special first-time offer</p>
            </div>

            <div className="mb-4 py-4 border-y">
              <p className="text-sm text-gray-600 mb-1">Availability</p>
              <p className="font-medium">{profile.availability}</p>
            </div>

            <Link
              href={`/booking/${category}/${subCategory}/profiles/${profileId}/booking`}
              className="block w-full py-3 px-4 bg-indigo-600 text-white text-center font-semibold rounded-lg hover:bg-indigo-700 transition mb-3"
            >
              Book Now
            </Link>

            <button className="w-full py-3 px-4 border-2 border-indigo-600 text-indigo-600 font-semibold rounded-lg hover:bg-indigo-50 transition">
              Send Message
            </button>

            <div className="mt-6 space-y-2 text-sm text-white-600">
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Instant booking confirmation</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Free cancellation up to 24h</span>
              </div>
              <div className="flex items-center gap-2">
                <span>✓</span>
                <span>Satisfaction guaranteed</span>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}