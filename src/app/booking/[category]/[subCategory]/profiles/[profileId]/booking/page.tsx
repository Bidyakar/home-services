"use client";

import Link from "next/link";
import React from "react";
import { useState } from "react";

type Props = {
  params: Promise<{
    category: string;
    subCategory: string;
    profileId: string;
  }>;
};

export default function ProfileDetailPage({ params }: any) {
  const [category, setCategory] = useState("");
  const [subCategory, setSubCategory] = useState("");
  const [profileId, setProfileId] = useState("");
  const [selectedImage, setSelectedImage] = useState(0);

  // Use React.use() or handle params in useEffect
  React.useEffect(() => {
    params.then((p: any) => {
      setCategory(p.category);
      setSubCategory(p.subCategory);
      setProfileId(p.profileId);
    });
  }, [params]);

  // Mock profile data (later replace with API/DB call)
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
    // ... (add all other profiles here - same as before)
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

  if (!category) return <div className="p-6">Loading...</div>;

  return (
    <div className="min-h-screen bg-gradient-to-br from-gray-50 to-gray-100">
      {/* Hero Section with Breadcrumb */}
      <div className="bg-gradient-to-b from-[#000001] to-[#340063] text-white py-8 px-6">
        <div className="max-w-7xl mx-auto">
          <nav className="text-sm mb-4 flex items-center gap-2 text-white/80">
            <Link href="/booking" className="hover:text-white transition">Home</Link>
            <span>/</span>
            <Link href="/booking" className="hover:text-white transition">Booking</Link>
            <span>/</span>
            <Link href={`/booking/${category}`} className="hover:text-white transition capitalize">
              {category.replace(/-/g, " ")}
            </Link>
            <span>/</span>
            <Link href={`/booking/${category}/${subCategory}`} className="hover:text-white transition capitalize">
              {subCategory.replace(/-/g, " ")}
            </Link>
            <span>/</span>
            <span className="text-white font-medium">{profile.name}</span>
          </nav>
        </div>
      </div>

      {/* Main Content */}
      <div className="bg-gradient-to-b from-[#000001] to-[#340063] max-w-7xl mx-auto px-6 py-12">
        <div className="grid lg:grid-cols-3 gap-8">
          {/* Left Column - Profile Info */}
          <div className="lg:col-span-2 space-y-8">
            {/* Image Gallery */}
            <div className="bg-white rounded-2xl shadow-lg overflow-hidden">
              {/* Main Image */}
              <div className="relative h-96 bg-gray-900">
                <img
                  src={profile.images[selectedImage]}
                  alt={profile.name}
                  className="w-full h-full object-contain"
                />
                {/* Verified Badge */}
                <div className="absolute top-4 right-4 bg-green-500 text-white px-4 py-2 rounded-full text-sm font-semibold flex items-center gap-2">
                  <span>✓</span> Verified
                </div>
              </div>

              {/* Thumbnail Gallery */}
              <div className="p-4 grid grid-cols-4 gap-2">
                {profile.images.map((img: string, idx: number) => (
                  <button
                    key={idx}
                    onClick={() => setSelectedImage(idx)}
                    className={`relative h-24 rounded-lg overflow-hidden transition-all ${
                      selectedImage === idx ? "ring-4 ring-indigo-500" : "hover:opacity-75"
                    }`}
                  >
                    <img
                      src={img}
                      alt={`${profile.name} ${idx + 1}`}
                      className="w-full h-full object-cover"
                    />
                  </button>
                ))}
              </div>
            </div>

            {/* Profile Header Card */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h1 className="text-4xl font-bold text-gray-900 mb-4">{profile.name}</h1>
              <div className="flex flex-wrap items-center gap-4 text-gray-700">
                <div className="flex items-center gap-2 bg-yellow-50 px-4 py-2 rounded-full">
                  <span className="text-yellow-500 text-xl">⭐</span>
                  <span className="font-bold text-lg">{profile.rating}</span>
                  <span className="text-gray-600">({profile.jobs} jobs)</span>
                </div>
                <div className="flex items-center gap-2 bg-indigo-50 px-4 py-2 rounded-full">
                  <span>💼</span>
                  <span className="font-medium">{profile.experience} experience</span>
                </div>
                <div className="flex items-center gap-2 bg-pink-50 px-4 py-2 rounded-full">
                  <span>📍</span>
                  <span className="font-medium">{profile.location}</span>
                </div>
              </div>
            </div>

            {/* About Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-4 flex items-center gap-2">
                <span className="text-indigo-600">👤</span> About
              </h2>
              <p className="text-gray-700 leading-relaxed text-lg">{profile.about}</p>
            </div>

            {/* Services Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-indigo-600">🛠️</span> Services Offered
              </h2>
              <div className="grid md:grid-cols-2 gap-3">
                {profile.services.map((service: string, idx: number) => (
                  <div key={idx} className="flex items-start gap-3 bg-green-50 p-4 rounded-lg">
                    <span className="text-green-500 text-xl flex-shrink-0">✓</span>
                    <span className="text-gray-800 font-medium">{service}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Certifications Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-indigo-600">🏆</span> Certifications
              </h2>
              <div className="space-y-3">
                {profile.certifications.map((cert: string, idx: number) => (
                  <div key={idx} className="flex items-center gap-3 bg-indigo-50 p-4 rounded-lg">
                    <span className="text-2xl">🎖️</span>
                    <span className="text-gray-800 font-medium">{cert}</span>
                  </div>
                ))}
              </div>
            </div>

            {/* Reviews Section */}
            <div className="bg-white rounded-2xl shadow-lg p-8">
              <h2 className="text-2xl font-bold text-gray-900 mb-6 flex items-center gap-2">
                <span className="text-indigo-600">💬</span> Customer Reviews
              </h2>
              <div className="space-y-6">
                {profile.reviews.length > 0 ? (
                  profile.reviews.map((review: any, idx: number) => (
                    <div key={idx} className="border-l-4 border-indigo-500 pl-6 py-4 bg-gray-50 rounded-r-lg">
                      <div className="flex items-center gap-3 mb-3">
                        <div className="w-10 h-10 bg-indigo-100 rounded-full flex items-center justify-center font-bold text-indigo-600">
                          {review.name.charAt(0)}
                        </div>
                        <div>
                          <p className="font-semibold text-gray-900">{review.name}</p>
                          <div className="flex items-center gap-2">
                            <span className="text-yellow-500">{"⭐".repeat(review.rating)}</span>
                            <span className="text-gray-500 text-sm">{review.date}</span>
                          </div>
                        </div>
                      </div>
                      <p className="text-gray-700 leading-relaxed">{review.comment}</p>
                    </div>
                  ))
                ) : (
                  <p className="text-gray-500 text-center py-8">No reviews yet. Be the first to review!</p>
                )}
              </div>
            </div>
          </div>

          {/* Right Column - Booking Card */}
          <div className="lg:col-span-1">
            <div className="sticky top-6 bg-white rounded-2xl shadow-2xl p-8 border-2 border-indigo-100">
              {/* Price Section */}
              <div className="mb-6 text-center">
                <p className="text-gray-400 line-through text-lg mb-1">
                  ${profile.hourlyRate}/hour
                </p>
                <p className="text-5xl font-bold text-indigo-600 mb-2">
                  ${profile.offerRate}
                  <span className="text-2xl text-gray-600">/hour</span>
                </p>
                <div className="inline-block bg-green-100 text-green-800 px-4 py-1 rounded-full text-sm font-semibold">
                  🎉 Special first-time offer
                </div>
              </div>

              {/* Availability */}
              <div className="mb-6 p-4 bg-indigo-50 rounded-xl">
                <p className="text-sm text-indigo-600 font-semibold mb-1">⏰ Availability</p>
                <p className="font-medium text-gray-900">{profile.availability}</p>
              </div>

              {/* Action Buttons */}
              <div className="space-y-3 mb-6">
                <Link
                  href={`/booking/${category}/${subCategory}/profiles/${profileId}/booking`}
                  className="block w-full py-4 px-6 bg-gradient-to-r from-indigo-600 to-purple-600 text-white text-center font-bold rounded-xl hover:from-indigo-700 hover:to-purple-700 transition shadow-lg hover:shadow-xl transform hover:-translate-y-0.5"
                >
                  📅 Book Now
                </Link>

                <button className="w-full py-4 px-6 border-2 border-indigo-600 text-indigo-600 font-bold rounded-xl hover:bg-indigo-50 transition">
                  💬 Send Message
                </button>
              </div>

              {/* Trust Badges */}
              <div className="space-y-3 pt-6 border-t">
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Instant booking confirmation</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Free cancellation up to 24h</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>100% Satisfaction guaranteed</span>
                </div>
                <div className="flex items-center gap-3 text-sm text-gray-700">
                  <span className="text-green-500 text-xl">✓</span>
                  <span>Secure payment processing</span>
                </div>
              </div>

              {/* Money Back Guarantee Badge */}
              <div className="mt-6 p-4 bg-gradient-to-r from-green-50 to-emerald-50 rounded-xl border-2 border-green-200 text-center">
                <p className="text-green-800 font-bold text-sm">🛡️ Money-Back Guarantee</p>
                <p className="text-green-700 text-xs mt-1">100% refund if not satisfied</p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}