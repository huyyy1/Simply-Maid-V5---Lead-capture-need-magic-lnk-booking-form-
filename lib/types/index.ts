// Core types used across the application
export interface User {
  id: string;
  email: string;
  firstName: string;
  lastName: string;
  phone?: string;
  role: "customer" | "cleaner" | "admin";
  status: "active" | "inactive" | "suspended";
  createdAt: Date;
  updatedAt: Date;
}

export interface Session {
  user: User;
  token: string;
  expiresAt: Date;
}

export interface AuthError {
  code: string;
  message: string;
  status: number;
}

export interface BookingDetails {
  id: string;
  userId: string;
  serviceId: string;
  locationId: string;
  bedrooms: number;
  bathrooms: number;
  status: "pending" | "confirmed" | "completed" | "cancelled";
  scheduledDate: Date | null;
  totalPrice: number;
  notes?: string;
  createdAt: Date;
  updatedAt: Date;
}

export interface Service {
  id: string;
  name: string;
  slug: string;
  description: string;
  basePrice: number;
  duration: string;
  image: string;
  benefits: string[];
}

export interface Location {
  id: string;
  name: string;
  slug: string;
  description: string;
  image: string;
  isActive: boolean;
}

export interface Review {
  id: string;
  userId: string;
  serviceId: string;
  rating: number;
  content: string;
  createdAt: Date;
}

export interface FormData {
  bedrooms: string;
  bathrooms: string;
  cleanType: string;
  location: string;
  email: string;
  name: string;
  mobile: string;
}

export interface ValidationResult {
  isValid: boolean;
  error: string | null;
}

// Shared component props
export interface BaseProps {
  className?: string;
  children?: React.ReactNode;
}

export interface WithTitle extends BaseProps {
  title: string;
  description?: string;
}

// Animation variants
export const fadeIn = {
  initial: { opacity: 0 },
  animate: { opacity: 1 },
  exit: { opacity: 0 },
  transition: { duration: 0.3 }
};

export const slideUp = {
  initial: { opacity: 0, y: 20 },
  animate: { opacity: 1, y: 0 },
  exit: { opacity: 0, y: -20 },
  transition: { duration: 0.5 }
};

export const stagger = {
  container: {
    initial: {},
    animate: {
      transition: {
        staggerChildren: 0.1,
        delayChildren: 0.3
      }
    }
  },
  item: {
    initial: { opacity: 0, y: 20 },
    animate: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.5
      }
    }
  }
};