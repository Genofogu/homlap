import { 
  Bed, 
  Building2, 
  Home, 
  Users, 
  Heart, 
  Layers,
  LucideIcon 
} from "lucide-react";

export interface PropertyType {
  name: string;
  icon: LucideIcon;
  desc: string;
  slug: string;
}

export interface City {
  name: string;
  image: string;
  slug: string;
}

export interface Listing {
  id: number;
  title: string;
  location: string;
  price: number;
  type: string;
  rating: number;
  image: string;
  amenities: string[];
  featured?: boolean;
}

export interface Testimonial {
  name: string;
  role: string;
  text: string;
  rating: number;
}

export interface FAQ {
  q: string;
  a: string;
}

export const SECTORS: Sector[] = [
  {
    name: "Alpha 1",
    image: "https://images.unsplash.com/photo-1545324418-cc1a3fa10c00?auto=format&fit=crop&q=80&w=800",
    slug: "alpha-1",
  },
  {
    name: "Alpha 2",
    image: "https://images.unsplash.com/photo-1512917774080-9991f1c4c750?auto=format&fit=crop&q=80&w=800",
    slug: "alpha-2",
  },
  {
    name: "Beta 1",
    image: "https://images.unsplash.com/photo-1600585154340-be6161a56a0c?auto=format&fit=crop&q=80&w=800",
    slug: "beta-1",
  },
  {
    name: "Gamma 1",
    image: "https://images.unsplash.com/photo-1582268611958-ebfd161ef9cf?auto=format&fit=crop&q=80&w=800",
    slug: "gamma-1",
  },
  {
    name: "Delta 1",
    image: "https://images.unsplash.com/photo-1564013799919-ab600027ffc6?auto=format&fit=crop&q=80&w=800",
    slug: "delta-1",
  },
];

export const LIST_PROPERTY_FORM_URL = "https://forms.google.com";

export const PROPERTY_TYPES: PropertyType[] = [
  { name: "PG", icon: Bed, desc: "Safe shared living spaces", slug: "pg" },
  {
    name: "Flats",
    icon: Building2,
    desc: "Modern apartments for independence",
    slug: "flats",
  },
  {
    name: "Rooms",
    icon: Home,
    desc: "Private rooms in shared homes",
    slug: "rooms",
  },
  {
    name: "Family Homes",
    icon: Users,
    desc: "Spacious homes for your family",
    slug: "family-homes",
  },
  {
    name: "Shared Apartments",
    icon: Heart,
    desc: "Live with like-minded people",
    slug: "shared",
  },
  {
    name: "Studio Apartments",
    icon: Layers,
    desc: "Compact & modern self-contained spaces",
    slug: "studio-apartments",
  },
];

export const FEATURED_LISTINGS: Listing[] = [
  {
    id: 1,
    title: "Modern 2BHK Flat",
    location: "Bandra, Mumbai",
    price: 45000,
    type: "Flat",
    rating: 4.8,
    image: "https://images.unsplash.com/photo-1522708323590-d24dbb6b0267?auto=format&fit=crop&q=80&w=800",
    amenities: ["WiFi", "AC", "Parking"],
    featured: true,
  },
  {
    id: 2,
    title: "Premium Boys PG",
    location: "Saket, Delhi",
    price: 12000,
    type: "PG",
    rating: 4.5,
    image: "https://images.unsplash.com/photo-1555854816-80271f767b72?auto=format&fit=crop&q=80&w=800",
    amenities: ["Food", "WiFi", "Laundry"],
    featured: true,
  },
  {
    id: 3,
    title: "Luxury Studio Apartment",
    location: "HSR Layout, Bangalore",
    price: 28000,
    type: "Flat",
    rating: 4.9,
    image: "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&q=80&w=800",
    amenities: ["Pool", "Gym", "Power Backup"],
    featured: true,
  },
  {
    id: 4,
    title: "Fully Furnished Flat",
    location: "Boring Road, Patna",
    price: 18000,
    type: "Family Home",
    rating: 4.6,
    image: "https://images.unsplash.com/photo-1493809842364-78817add7ffb?auto=format&fit=crop&q=80&w=800",
    amenities: ["Balcony", "Gated Security"],
    featured: true,
  },
];

export const TESTIMONIALS: Testimonial[] = [
  {
    name: "Rahul S.",
    role: "Student",
    text: "Found a great PG near my college within 2 days. The verification process gave me peace of mind.",
    rating: 5,
  },
  {
    name: "Priya Mehra",
    role: "Working Professional, Greater Noida",
    text: "Direct owner contact saved me thousands in brokerage. Homlap is a game changer for Greater Noida rentals.",
    rating: 5,
  },
  {
    name: "Ananya Kirin",
    role: "Student",
    text: "The app helped me discover rental options I would never have found through traditional searches. Everything felt faster and more organized.",
    rating: 5,
  },
];

export const FAQS: FAQ[] = [
  {
    q: "How does Homlap verify listings?",
    a: "We conduct physical checks and verify property ownership documents for every listing to ensure 100% safety. Our team visits the property to verify amenities and location accuracy.",
  },
  {
    q: "Is there any brokerage fee?",
    a: "No! Homlap is a zero-brokerage platform. You connect directly with owners or property managers, saving you nearly 1-2 months of rent in fees.",
  },
  {
    q: "Can I book a visit online?",
    a: "Yes, you can schedule physical or virtual tours directly through our platform. Once you like a property, click 'Schedule Visit' to pick a time slot.",
  },
  {
    q: "Are the monthly prices negotiable?",
    a: "While the listed prices are set by owners, you can discuss and negotiate directly with them through our secure contact options.",
  },
  {
    q: "What documents do I need to move in?",
    a: "Commonly required documents include a valid Aadhaar card, PAN card, and sometimes a permanent address proof or employment/student ID for verification.",
  },
  {
    q: "What amenities are usually included in PGs?",
    a: "Most PGs on Homlap include high-speed WiFi, professional housekeeping, laundry facilities, 24/7 security, and at least 2 meals a day.",
  },
  {
    q: "Is my security deposit safe with Homlap?",
    a: "Homlap provides guidelines for secure payments. We recommend paying deposits only after physical verification and signing a formal rental agreement.",
  },
  {
    q: "Can I find roommates through Homlap?",
    a: "Yes! Our 'Shared Apartments' category allows you to find people looking for roommates. You can see their preferences and connect directly.",
  },
  {
    q: "Is the platform free for tenants?",
    a: "For sure! Tenants can browse, search, and contact owners completely free of charge on Homlap.",
  },
];
