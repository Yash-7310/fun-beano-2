export interface Playhouse {
  id: number;
  name: string;
  location: string;
  city: string;
  rating: number;
  price: number;
  image: string;
  liveViewers: number;
  features: string[];
  ageRange: string;
  distance: number;
}

export const allPlayhouses: Playhouse[] = [
  {
    id: 1,
    name: "Kidz Adventure Park",
    location: "Connaught Place, Delhi",
    city: "Delhi",
    rating: 4.8,
    price: 599,
    image: "/playzones/1.jpg",
    // "https://images.unsplash.com/photo-1544551763-46a013bb70d5?w=400&h=250&fit=crop",
    liveViewers: 23,
    features: ["Indoor Play", "Birthday Parties", "Café"],
    ageRange: "2-12",
    distance: 2.5,
  },
  {
    id: 2,
    name: "Fun City Playhouse",
    location: "Cyber Hub, Gurugram",
    city: "Gurugram",
    rating: 4.6,
    price: 449,
    image: "/playzones/2.jpg",
    // "https://images.unsplash.com/photo-1587654780291-39c9404d746b?w=400&h=250&fit=crop",
    liveViewers: 18,
    features: ["Soft Play", "Arcade Games", "Party Halls"],
    ageRange: "1-10",
    distance: 5.2,
  },
  {
    id: 3,
    name: "Rainbow Kids Zone",
    location: "Powai, Mumbai",
    city: "Mumbai",
    rating: 4.7,
    price: 699,
    image: "/playzones/3.jpg",
    // "https://images.unsplash.com/photo-1503454537195-1dcabb73ffb9?w=400&h=250&fit=crop",
    liveViewers: 31,
    features: ["Outdoor Play", "Swimming Pool", "Food Court"],
    ageRange: "3-15",
    distance: 1.8,
  },
  {
    id: 4,
    name: "Magic Kingdom Play",
    location: "Sector 29, Gurugram",
    city: "Gurugram",
    rating: 4.5,
    price: 399,
    image: "/playzones/4.jpg",
    // "https://images.unsplash.com/photo-1576013551627-0cc20b96c2a7?w=400&h=250&fit=crop",
    liveViewers: 12,
    features: ["Bounce Castle", "Mini Golf", "Face Painting"],
    ageRange: "2-8",
    distance: 3.7,
  },
  {
    id: 5,
    name: "Adventure Island Kids",
    location: "Rohini, Delhi",
    city: "Delhi",
    rating: 4.4,
    price: 549,
    image: "/playzones/5.jpg",
    // "https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=250&fit=crop",
    liveViewers: 27,
    features: ["Water Play", "Climbing Wall", "Snack Bar"],
    ageRange: "4-14",
    distance: 8.1,
  },
  {
    id: 6,
    name: "Little Angels Playzone",
    location: "Andheri, Mumbai",
    city: "Mumbai",
    rating: 4.3,
    price: 479,
    image: "/playzones/6.jpg",
    // "https://images.unsplash.com/photo-1517451330947-7809dead78d5?w=400&h=250&fit=crop",
    liveViewers: 15,
    features: ["Toddler Area", "Art & Craft", "Music Corner"],
    ageRange: "6 months-6 years",
    distance: 4.3,
  },
];