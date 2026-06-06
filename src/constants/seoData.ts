import { 
  MapPin, 
  Bed, 
  Building2, 
  Home, 
  Users, 
  Heart, 
  Layers,
  LucideIcon
} from "lucide-react";

export interface PageContent {
  title: string;
  heading: string;
  desc: string[];
  featuresTitle: string;
  features: string[];
  badge: string;
  ctaText: string;
  backText: string;
  seoTitle: string;
  seoDesc: string;
  icon: LucideIcon;
}

export const SECTOR_PAGE_DATA: Record<string, PageContent> = {
  "alpha-1": {
    title: "Alpha 1 Rentals",
    heading: "Alpha 1 Rentals",
    desc: [
      "Homlap is currently preparing rental listings and local property information for Alpha 1, Greater Noida.",
      "We are building a modern rental discovery experience for students, families, and professionals looking for homes in this sector."
    ],
    featuresTitle: "Features Coming Soon:",
    features: [
      "Verified Listings",
      "Rental Rooms",
      "PG Accommodations",
      "Flats",
      "Family Homes",
      "Studio Apartments"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Other Sectors",
    backText: "Back To Home",
    seoTitle: "Alpha 1, Greater Noida Rentals | PG, Flats & Rooms | Homlap",
    seoDesc: "Discover premium, verified, and zero brokerage PGs, flats, and rooms for rent in Alpha 1, Greater Noida. Find student and family accommodations easily.",
    icon: MapPin,
  },
  "alpha-2": {
    title: "Alpha 2 Rentals",
    heading: "Alpha 2 Rentals",
    desc: [
      "Homlap is currently preparing rental listings and local property information for Alpha 2, Greater Noida.",
      "We are building a modern rental discovery experience for students, families, and professionals looking for homes in this sector."
    ],
    featuresTitle: "Features Coming Soon:",
    features: [
      "Verified Listings",
      "Rental Rooms",
      "PG Accommodations",
      "Flats",
      "Family Homes",
      "Studio Apartments"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Other Sectors",
    backText: "Back To Home",
    seoTitle: "Alpha 2, Greater Noida Rentals | Direct Owner Rooms & Flats | Homlap",
    seoDesc: "Explore verified rental listings in Alpha 2, Greater Noida. Zero brokerage student PGs, shared apartments, and family homes with verified details.",
    icon: MapPin,
  },
  "beta-1": {
    title: "Beta 1 Rentals",
    heading: "Beta 1 Rentals",
    desc: [
      "Homlap is currently preparing rental listings and local property information for Beta 1, Greater Noida.",
      "We are building a modern rental discovery experience for students, families, and professionals looking for homes in this sector."
    ],
    featuresTitle: "Features Coming Soon:",
    features: [
      "Verified Listings",
      "Rental Rooms",
      "PG Accommodations",
      "Flats",
      "Family Homes",
      "Studio Apartments"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Other Sectors",
    backText: "Back To Home",
    seoTitle: "Beta 1, Greater Noida Rentals | Verified PGs & Flats | Homlap",
    seoDesc: "Looking for a room or flat in Beta 1, Greater Noida? Find 100% verified rentals with direct owner contact and zero brokerage on Homlap.",
    icon: MapPin,
  },
  "gamma-1": {
    title: "Gamma 1 Rentals",
    heading: "Gamma 1 Rentals",
    desc: [
      "Homlap is currently preparing rental listings and local property information for Gamma 1, Greater Noida.",
      "We are building a modern rental discovery experience for students, families, and professionals looking for homes in this sector."
    ],
    featuresTitle: "Features Coming Soon:",
    features: [
      "Verified Listings",
      "Rental Rooms",
      "PG Accommodations",
      "Flats",
      "Family Homes",
      "Studio Apartments"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Other Sectors",
    backText: "Back To Home",
    seoTitle: "Gamma 1, Greater Noida Rentals | Rooms & Apartments | Homlap",
    seoDesc: "Find the best rental properties, rooms, and PGs in Gamma 1, Greater Noida. Safe housing solutions for working professionals and students.",
    icon: MapPin,
  },
  "delta-1": {
    title: "Delta 1 Rentals",
    heading: "Delta 1 Rentals",
    desc: [
      "Homlap is currently preparing rental listings and local property information for Delta 1, Greater Noida.",
      "We are building a modern rental discovery experience for students, families, and professionals looking for homes in this sector."
    ],
    featuresTitle: "Features Coming Soon:",
    features: [
      "Verified Listings",
      "Rental Rooms",
      "PG Accommodations",
      "Flats",
      "Family Homes",
      "Studio Apartments"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Other Sectors",
    backText: "Back To Home",
    seoTitle: "Delta 1, Greater Noida Rentals | Safe Family & Student Homes | Homlap",
    seoDesc: "Search rooms, PGs, and studio flats for rent in Delta 1, Greater Noida. Handpicked, verified properties close to local amenities.",
    icon: MapPin,
  }
};

export const RENTAL_PAGE_DATA: Record<string, PageContent> = {
  "pg": {
    title: "PG Accommodation",
    heading: "PG Accommodation in Greater Noida",
    desc: [
      "Homlap is working to bring verified PG accommodations for students, interns, and working professionals.",
      "Our platform will help users compare PG options, amenities, locations, and pricing in one place."
    ],
    featuresTitle: "Coming Soon:",
    features: [
      "Boys PG",
      "Girls PG",
      "Student PG",
      "Working Professional PG"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Website",
    backText: "Back To Home",
    seoTitle: "PG Accommodation in Greater Noida | Student & Professional PGs | Homlap",
    seoDesc: "Compare the best paying guest (PG) accommodations for boys and girls in Greater Noida. Direct owner contact, 100% verified, zero brokerage.",
    icon: Bed,
  },
  "flats": {
    title: "Flats for Rent",
    heading: "Flats for Rent",
    desc: [
      "Homlap is preparing a verified flat rental experience with detailed property information, photos, amenities, and direct owner connections."
    ],
    featuresTitle: "Coming Soon:",
    features: [
      "1 BHK",
      "2 BHK",
      "3 BHK",
      "Furnished Flats",
      "Semi-Furnished Flats"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Website",
    backText: "Back To Home",
    seoTitle: "Flats for Rent in Greater Noida | 1 BHK, 2 BHK, 3 BHK Apartments | Homlap",
    seoDesc: "Find verified 1 BHK, 2 BHK, and 3 BHK flats for rent in Greater Noida. Direct owner connections, zero brokerage, and complete amenity lists.",
    icon: Building2,
  },
  "rooms": {
    title: "Rooms for Rent",
    heading: "Rooms for Rent",
    desc: [
      "Find affordable rental rooms suitable for students, professionals, and individuals looking for flexible accommodation options."
    ],
    featuresTitle: "Coming Soon:",
    features: [
      "Single Rooms",
      "Shared Rooms",
      "Budget Rooms",
      "Air-Conditioned Rooms",
      "Fully Furnished Rooms"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Website",
    backText: "Back To Home",
    seoTitle: "Rooms for Rent in Greater Noida | Single & Shared Rooms | Homlap",
    seoDesc: "Browse affordable single and shared rooms for rent in Greater Noida. Flexible rental options for students and professionals with zero brokerage.",
    icon: Home,
  },
  "family-homes": {
    title: "Family Homes for Rent",
    heading: "Family Homes for Rent",
    desc: [
      "Explore homes designed for families with larger spaces, better amenities, and residential community environments."
    ],
    featuresTitle: "Coming Soon:",
    features: [
      "Independent Houses",
      "Gated Community Villas",
      "3+ BHK Family Apartments",
      "Child-Friendly Localities"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Website",
    backText: "Back To Home",
    seoTitle: "Family Homes for Rent in Greater Noida | Gated Communities | Homlap",
    seoDesc: "Discover spacious, safe, and family-friendly houses and villas for rent in Greater Noida. Direct owner postings, verified residential areas.",
    icon: Users,
  },
  "shared-apartments": {
    title: "Shared Apartments",
    heading: "Shared Apartments",
    desc: [
      "Affordable shared living solutions for students and working professionals."
    ],
    featuresTitle: "Coming Soon:",
    features: [
      "Shared Co-Living Spaces",
      "Roommate Matching Listings",
      "Shared 2/3 BHK Flats",
      "Amenities-Inclusive Packages"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Website",
    backText: "Back To Home",
    seoTitle: "Shared Apartments in Greater Noida | Roommate Matching & Co-Living | Homlap",
    seoDesc: "Explore modern co-living and shared apartments for rent in Greater Noida. Lower rents, shared expenses, and verified flatmates with zero brokerage.",
    icon: Heart,
  },
  "studio-apartments": {
    title: "Studio Apartments",
    heading: "Studio Apartments",
    desc: [
      "Modern studio apartments offering privacy, comfort, and convenience for independent living."
    ],
    featuresTitle: "Coming Soon:",
    features: [
      "Fully Furnished Studios",
      "Single Professional Studio",
      "Modern Compact Layouts",
      "Secure & High-Access Locality"
    ],
    badge: "Launching Soon",
    ctaText: "Explore Website",
    backText: "Back To Home",
    seoTitle: "Studio Apartments for Rent in Greater Noida | Independent Studios | Homlap",
    seoDesc: "Rent premium, compact studio apartments in Greater Noida. Fully self-contained rooms offering complete privacy, comfort, and direct owner listings.",
    icon: Layers,
  }
};
