// Single source of truth for application constants
import { Shield, Clock, Award, Star, Heart, Users, DollarSign, TrendingUp, MapPin } from "lucide-react";

export const APP_CONFIG = {
  name: "Simply Maid",
  description: "Sydney's Most Trusted Cleaning Service",
  domain: "simplymaid.com.au",
  supportEmail: "support@simplymaid.com.au",
  socialLinks: {
    facebook: "https://facebook.com/simplymaid",
    instagram: "https://instagram.com/simplymaid",
    twitter: "https://twitter.com/simplymaid"
  }
} as const;

export const PRICING = {
  baseRates: {
    standard: 120,
    deep: 250,
    endOfLease: 350
  },
  hourlyRates: {
    standard: 35,
    deep: 45,
    endOfLease: 50
  },
  minimumHours: {
    standard: 2,
    deep: 4,
    endOfLease: 6
  }
} as const;

export const FEATURES = [
  {
    icon: Shield,
    title: "Secure payments",
    description: "Only release payment when the task is completed to your satisfaction"
  },
  {
    icon: Clock,
    title: "Flexible options",
    description: "Whether you need a one-time clean or regular housekeeping, we offer a range of services to fit your needs and budget."
  },
  {
    icon: DollarSign,
    title: "Honest value",
    description: "We never compromise on quality, even when we are offering competitive prices."
  }
] as const;

export const COMPANY_VALUES = [
  {
    icon: Heart,
    title: "People First",
    description: "Our cleaners, clients, and staff come first. We prioritize fair pay, recognition, and creating a culture where everyone feels respected and empowered."
  },
  {
    icon: Users,
    title: "Growing Together",
    description: "Simply Maid is more than just a cleaning service—it's a family. We focus on quality, care, and a personal touch."
  },
  {
    icon: Star,
    title: "Excellence",
    description: "Through training, support, and the right tools, we empower our cleaners to perform at their best."
  }
] as const;

export const NAVIGATION = {
  main: [
    { name: "Home", href: "/" },
    { name: "About", href: "/about" },
    { name: "Services", href: "/services" },
    { name: "Pricing", href: "/pricing" },
    { name: "Contact", href: "/contact" },
    { name: "Careers", href: "/cleaning-jobs" },
  ],
  legal: [
    { name: "Privacy Policy", href: "/privacy" },
    { name: "Terms of Service", href: "/terms" },
    { name: "Cookie Policy", href: "/cookies" },
    { name: "Sitemap", href: "/sitemap" },
  ],
} as const;

export const VALIDATION_MESSAGES = {
  required: {
    location: "Please enter your location",
    email: "Please enter your email",
    name: "Please enter your name",
    mobile: "Please enter your mobile number",
    bedrooms: "Please select number of bedrooms",
    bathrooms: "Please select number of bathrooms",
    cleanType: "Please select type of clean"
  },
  invalid: {
    location: "Please select an address from the suggestions",
    email: "Please enter a valid email address",
    name: "Name must be at least 2 characters",
    mobile: "Please enter a valid Australian mobile number"
  }
} as const;