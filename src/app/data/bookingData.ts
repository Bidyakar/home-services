export type Provider = {
  id: string;
  name: string;
};

export type SubCategory = {
  id: string;
  name: string;
  providers: Provider[];
};

export type Category = {
  id: string;
  name: string;
  subcategories: SubCategory[];
};

export const bookingData: Category[] = [
  {
    id: "vehicles",
    name: "Vehicle Repair",
    subcategories: [
      {
        id: "car-repair",
        name: "Car Repair",
        providers: [
          { id: "p1", name: "ABC Car Services" },
          { id: "p2", name: "Speedy Repairs" },
        ],
      },
      {
        id: "bike-repair",
        name: "Bike Repair",
        providers: [
          { id: "p3", name: "BikeFix" },
          { id: "p4", name: "MotoCare" },
        ],
      },
    ],
  },
  {
    id: "plumbing",
    name: "Plumbing",
    subcategories: [
      {
        id: "home-plumbing",
        name: "Home Plumbing",
        providers: [
          { id: "p5", name: "Pipe Masters" },
          { id: "p6", name: "FlowFix" },
        ],
      },
    ],
  },
];
