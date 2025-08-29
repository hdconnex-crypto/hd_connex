
// Location data
export const locationsByCounty: Record<string, string[]> = {
  "Volusia": ["Daytona Beach", "DeBary", "DeLand", "Deltona", "Edgewater", "New Smyrna Beach", "Ormond Beach", "Port Orange"],
  "Flagler": ["Bunnell", "Flagler Beach", "Palm Coast"],
  "Orange": ["Apopka", "Maitland", "Ocoee", "Orlando", "Winter Garden", "Winter Park"],
  "Seminole": ["Altamonte Springs", "Casselberry", "Lake Mary", "Longwood", "Oviedo", "Sanford", "Winter Springs"],
  "Osceola": ["Kissimmee", "St. Cloud"]
};

// Services data
export const services = [
  "Roofing", "Landscaping", "Concrete", "Tree Service", "Dock & Marine", 
  "New Construction", "Plumbing", "Electrical", "HVAC", "Remodels", 
  "Painting", "Flooring", "Pools", "Fencing & Decks", "Handyman", 
  "Gutters", "Windows & Doors"
];

// Contractor profiles data
export const contractorProfiles = {
  1: {
    id: 1,
    companyName: "Reliable Roofing Inc.",
    logo: "https://placehold.co/100x100/2563eb/ffffff?text=RR",
    yearsInBusiness: 15,
    isInsured: true,
    insuranceAmount: "$2,000,000",
    licenseNumber: "RR282828",
    specialties: ["Roofing", "Gutters"],
    serviceAreas: ["Volusia", "Flagler"],
    phone: "(386) 555-0123",
    email: "info@reliableroofing.com",
    website: "www.reliableroofing.com",
    aboutUs: "Family-owned roofing company serving Central Florida for over 15 years. We specialize in residential and commercial roofing with a commitment to quality craftsmanship and customer satisfaction.",
    certifications: ["GAF Master Elite", "CertainTeed SELECT ShingleMaster"],
    rating: 4.8,
    totalReviews: 127
  },
  2: {
    id: 2,
    companyName: "Orlando Pool Masters",
    logo: "https://placehold.co/100x100/059669/ffffff?text=OPM",
    yearsInBusiness: 8,
    isInsured: true,
    insuranceAmount: "$1,500,000",
    licenseNumber: "OPM12345",
    specialties: ["Pools"],
    serviceAreas: ["Orange", "Seminole"],
    phone: "(407) 555-0456",
    email: "contact@orlandopoolmasters.com",
    website: "www.orlandopoolmasters.com",
    aboutUs: "Premier pool installation and maintenance company in the Orlando area. We create custom pool experiences that transform your backyard into a personal oasis.",
    certifications: ["NSPF Certified", "Pool & Hot Tub Alliance Member"],
    rating: 4.9,
    totalReviews: 89
  }
};

// Reviews data
export const reviewsData = {
  1: [
    {
      id: 1,
      customerName: "Sarah Johnson",
      rating: 5,
      date: "2025-08-20",
      review: "Excellent work on our roof replacement. The team was professional, clean, and completed the job on schedule. Highly recommend!",
      projectType: "Roof Replacement",
      verified: true
    },
    {
      id: 2,
      customerName: "Mike Davidson",
      rating: 5,
      date: "2025-08-15",
      review: "Outstanding service from start to finish. They handled our insurance claim perfectly and the new roof looks amazing.",
      projectType: "Storm Damage Repair",
      verified: true
    },
    {
      id: 3,
      customerName: "Lisa Chen",
      rating: 4,
      date: "2025-08-10",
      review: "Great quality work and fair pricing. The crew was respectful and cleaned up thoroughly after the job.",
      projectType: "Gutter Installation",
      verified: true
    }
  ],
  2: [
    {
      id: 4,
      customerName: "Robert Martinez",
      rating: 5,
      date: "2025-08-18",
      review: "Dream pool came to life! The design process was collaborative and the installation was flawless. Couldn't be happier.",
      projectType: "Custom Pool Installation",
      verified: true
    },
    {
      id: 5,
      customerName: "Jennifer Wilson",
      rating: 5,
      date: "2025-08-12",
      review: "Professional service and beautiful results. They transformed our backyard into a resort-like paradise.",
      projectType: "Pool & Landscape Design",
      verified: true
    }
  ]
};

// Types
export interface ContractorProfile {
  id: number;
  companyName: string;
  logo: string;
  yearsInBusiness: number;
  isInsured: boolean;
  insuranceAmount: string;
  licenseNumber: string;
  specialties: string[];
  serviceAreas: string[];
  phone: string;
  email: string;
  website: string;
  aboutUs: string;
  certifications: string[];
  rating: number;
  totalReviews: number;
}

export interface Review {
  id: number;
  customerName: string;
  rating: number;
  date: string;
  review: string;
  projectType: string;
  verified: boolean;
}

export interface FormData {
  service: string;
  county: string;
  city: string;
  details: string;
  name: string;
  email: string;
  phone: string;
  smsOptOut: boolean;
}
