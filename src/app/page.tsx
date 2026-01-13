"use client";

import { useState, useRef } from "react";
import Link from "next/link";
import HeroSection from "../components/common/hero";

// Sample providers data
const providers = [
  {
    id: 1,
    name: "Richard Nelson",
    specialty: "Car Repair",
    rating: 4.5,
    image: "/images/providers/car-repair.jpg",
    categorySlug: "car-repair",
  },
  {
    id: 2,
    name: "Prabin Das",
    specialty: "Plumbing",
    rating: 4.9,
    image: "/images/providers/plumbing.jpg",
    categorySlug: "plumbing",
  },
  {
    id: 3,
    name: "Sita Kumari",
    specialty: "Electrical",
    rating: 4.7,
    image: "/images/providers/electrical.jpg",
    categorySlug: "electrical",
  },
  {
    id: 4,
    name: "Rahul Sharma",
    specialty: "Painting",
    rating: 4.4,
    image: "/images/providers/painting.jpg",
    categorySlug: "painting",
  },
];

// Separate card component for each provider
function ProviderCard({ provider }: { provider: typeof providers[0] }) {
  const [position, setPosition] = useState({ x: 0, y: 0 });
  const [active, setActive] = useState(false);
  const cardRef = useRef<HTMLDivElement>(null);

  const handleMouseMove = (e: React.MouseEvent<HTMLDivElement>) => {
    const rect = cardRef.current?.getBoundingClientRect();
    if (rect) {
      setPosition({ x: e.clientX - rect.left, y: e.clientY - rect.top });
    }
  };

  return (
    <Link
      key={provider.id}
      href={`/booking/${provider.categorySlug}?providerId=${provider.id}`}
      className="group"
    >
      <div
        ref={cardRef}
        onMouseMove={handleMouseMove}
        onMouseEnter={() => setActive(true)}
        onMouseLeave={() => setActive(false)}
        className="relative w-80 h-96 rounded-xl p-px bg-gray-900 overflow-hidden shadow-lg cursor-pointer"
      >
        {/* Hover glow */}
        <div
          className={`pointer-events-none blur-3xl rounded-full bg-gradient-to-r from-blue-500 via-indigo-500 to-purple-400 size-60 absolute transition-opacity duration-500 ${
            active ? "opacity-100" : "opacity-0"
          }`}
          style={{
            top: position.y - 120,
            left: position.x - 120,
          }}
        />

        {/* Card content */}
        <div className="relative z-10 bg-gray-900/80 p-6 h-full w-full rounded-[11px] flex flex-col items-center text-center">
          <img
            src={provider.image}
            alt={provider.name}
            className="w-24 h-24 rounded-full shadow-md my-4"
          />

          <h3 className="text-xl font-bold text-white">{provider.name}</h3>

          <p className="text-sm text-indigo-400 font-medium mb-2">
            {provider.specialty}
          </p>

          <p className="text-indigo-500 font-semibold mb-3">⭐ {provider.rating}</p>

          <p className="text-sm text-slate-400 px-4">
            Experienced specialist delivering reliable and professional service
            with customer satisfaction.
          </p>

          <span className="mt-auto text-indigo-400 text-sm font-medium group-hover:underline">
            Book Now →
          </span>
        </div>
      </div>
    </Link>
  );
}

export default function HomePage() {
  return (
    <>
      <HeroSection />

      <section className="py-16 px-6 md:px-16 lg:px-24 xl:px-32 bg-white">
        <h2 className="text-3xl font-bold text-gray-800 mb-10 text-center">
          Top Service Providers
        </h2>

        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">
          {providers.map((provider) => (
            <ProviderCard key={provider.id} provider={provider} />
          ))}
        </div>
      </section>
    </>
  );
}
