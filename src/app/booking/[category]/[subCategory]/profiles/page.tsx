const profiles = [
  { id: "rahul", name: "Rahul Mechanic", rating: 4.9, jobs: 120 },
  { id: "suman", name: "Suman Auto Works", rating: 4.7, jobs: 95 },
  { id: "amit", name: "Amit Garage", rating: 4.5, jobs: 80 },
];

export default function ProfilesPage({ params }: any) {
  const { category, subCategory } = params;

  // Sort by rating & jobs
  const rankedProfiles = profiles.sort(
    (a, b) => b.rating - a.rating || b.jobs - a.jobs
  );

  return (
    <div className="p-6 ">
      <h1 className="text-2xl font-bold mb-4">
        Top {subCategory} Professionals
      </h1>

      <div className="grid gap-4">
        {rankedProfiles.map((p) => (
          <a
            key={p.id}
            href={`/booking/${category}/${subCategory}/profiles/${p.id}`}
            className="p-4 border rounded hover:shadow"
          >
            <h2 className="font-semibold">{p.name}</h2>
            <p>⭐ {p.rating} | Jobs: {p.jobs}</p>
          </a>
        ))}
      </div>
    </div>
  );
}
