import { Home, Sparkles, Key, Shield, Box, Sun, Briefcase } from "lucide-react";
import { type Service } from "@/lib/types/services";

export const services: Service[] = [
  {
    id: "standard",
    icon: Home,
    title: "Standard Cleaning",
    description: "Keep your home fresh and welcoming.",
    details: "Includes dusting, mopping, vacuuming, and tidying up to maintain a clean living space. Ideal for regular upkeep.",
    image: "https://images.unsplash.com/photo-1581578731548-c64695cc6952",
    benefits: [
      "Regular maintenance cleaning",
      "Dusting and wiping all surfaces",
      "Vacuuming and mopping floors",
      "Bathroom and kitchen cleaning",
      "Making beds and changing linens",
      "Taking out trash and recycling"
    ],
    price: "From $120",
    duration: "2-3 hours"
  },
  {
    id: "deep",
    icon: Sparkles,
    title: "Deep Cleaning",
    description: "A detailed clean for those hard-to-reach spots.",
    details: "Focuses on deep scrubbing, including behind furniture, inside cabinets, and other often-overlooked areas. Perfect for a more thorough clean.",
    image: "https://images.unsplash.com/photo-1527515637462-cff94eecc1ac",
    benefits: [
      "Thorough deep cleaning of all areas",
      "Inside cabinet and drawer cleaning",
      "Behind and under furniture",
      "Window tracks and sills",
      "Baseboards and door frames",
      "Light fixtures and ceiling fans"
    ],
    price: "From $250",
    duration: "4-6 hours"
  },
  {
    id: "end-of-lease",
    icon: Key,
    title: "End of Lease Cleaning",
    description: "Specialized cleaning tailored to meet real estate expectations.",
    details: "Covers deep cleaning of all rooms, including carpets, windows, and fixtures, making sure everything meets inspection standards.",
    image: "https://images.unsplash.com/photo-1560448204-603b3fc33ddc",
    benefits: [
      "Full property deep clean",
      "Carpet steam cleaning",
      "Window and track cleaning",
      "Oven and appliance cleaning",
      "Wall spot cleaning",
      "Full inspection checklist coverage"
    ],
    price: "From $350",
    duration: "6-8 hours"
  },
  {
    id: "bond",
    icon: Shield,
    title: "Bond Cleaning",
    description: "In-depth cleaning to ensure every corner shines.",
    details: "Includes comprehensive cleaning of floors, walls, and surfaces, with attention to detail to secure full bond return.",
    image: "https://images.unsplash.com/photo-1584622650111-993a426fbf0a",
    benefits: [
      "Guaranteed bond return",
      "Complete property cleaning",
      "Detailed bathroom descaling",
      "Full kitchen degreasing",
      "Window and blind cleaning",
      "Professional carpet cleaning"
    ],
    price: "From $380",
    duration: "6-8 hours"
  },
  {
    id: "move",
    icon: Box,
    title: "Move-In/Move-Out Cleaning",
    description: "Cleaning designed to make moving stress-free.",
    details: "Ensures your new or old home is spotless, covering all areas from bathrooms to kitchens, so you can move without worry.",
    image: "https://images.unsplash.com/photo-1600585154526-990dced4db0d",
    benefits: [
      "Complete property cleaning",
      "Cabinet and drawer cleaning",
      "Appliance cleaning",
      "Floor deep cleaning",
      "Window and track cleaning",
      "Ready-to-move condition"
    ],
    price: "From $300",
    duration: "5-7 hours"
  },
  {
    id: "spring",
    icon: Sun,
    title: "Spring Cleaning",
    description: "Refresh your home with a seasonal clean.",
    details: "Perfect for a seasonal refresh, includes a deep clean of high-use areas to rejuvenate your living space.",
    image: "https://images.unsplash.com/photo-1556911220-e15b29be8c8f",
    benefits: [
      "Seasonal deep cleaning",
      "Decluttering assistance",
      "Window and blind cleaning",
      "Outdoor area cleaning",
      "Cabinet organization",
      "Air vent cleaning"
    ],
    price: "From $280",
    duration: "4-6 hours"
  },
  {
    id: "housekeeping",
    icon: Briefcase,
    title: "Housekeeping Services",
    description: "Regular help to keep your home in order.",
    details: "Provides ongoing support for household tasks like laundry, organizing, and routine cleaning to keep your home running smoothly.",
    image: "https://images.unsplash.com/photo-1582735689369-4fe89db7114c",
    benefits: [
      "Regular scheduled cleaning",
      "Laundry and ironing",
      "Bed making and linen change",
      "Kitchen organization",
      "Basic home maintenance",
      "Customized cleaning plans"
    ],
    price: "From $90",
    duration: "2-4 hours"
  }
];