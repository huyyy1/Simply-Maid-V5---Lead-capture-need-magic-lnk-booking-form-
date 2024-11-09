import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Core utility functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// Formatting utilities
export function formatCurrency(amount: number): string {
  return new Intl.NumberFormat("en-AU", {
    style: "currency",
    currency: "AUD",
  }).format(amount);
}

export function formatDate(date: Date | string): string {
  return new Intl.DateTimeFormat("en-AU", {
    day: "numeric",
    month: "long",
    year: "numeric",
  }).format(new Date(date));
}

export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.startsWith("61") && cleaned.length > 2) {
    return "+61 " + cleaned.slice(2).replace(/(\d{3})(\d{3})?(\d{3})?/, "$1 $2 $3").trim();
  } 
  
  if (cleaned.startsWith("0") && cleaned.length > 1) {
    return "0" + cleaned.slice(1).replace(/(\d{3})(\d{3})?(\d{3})?/, "$1 $2 $3").trim();
  }
  
  return cleaned;
}

// Validation utilities
export function validateEmail(email: string): string | null {
  if (!email) return "Please enter your email";
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  if (!emailRegex.test(email)) return "Please enter a valid email address";
  return null;
}

export function validateMobile(phone: string): string | null {
  if (!phone) return "Please enter your mobile number";
  
  const cleaned = phone.replace(/\D/g, "");
  
  if (cleaned.startsWith("61")) {
    if (cleaned.length !== 11) return "Please enter a valid Australian mobile number";
  } else if (cleaned.startsWith("0")) {
    if (cleaned.length !== 10) return "Please enter a valid Australian mobile number";
  } else {
    return "Please enter a valid Australian mobile number";
  }
  
  if (!cleaned.startsWith("614") && !cleaned.startsWith("04")) {
    return "Please enter a valid mobile number starting with 04";
  }
  
  return null;
}

export function validateName(name: string): string | null {
  if (!name) return "Please enter your name";
  if (name.length < 2) return "Name must be at least 2 characters";
  if (!/^[a-zA-Z\s'-]+$/.test(name)) return "Please enter a valid name";
  return null;
}

// Performance utilities
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return function executedFunction(...args: Parameters<T>) {
    const later = () => {
      clearTimeout(timeout);
      func(...args);
    };
    clearTimeout(timeout);
    timeout = setTimeout(later, wait);
  };
}

export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return function executedFunction(...args: Parameters<T>) {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => inThrottle = false, limit);
    }
  };
}

// Type guards
export function isString(value: unknown): value is string {
  return typeof value === "string";
}

export function isNumber(value: unknown): value is number {
  return typeof value === "number" && !isNaN(value);
}

export function isObject(value: unknown): value is Record<string, unknown> {
  return typeof value === "object" && value !== null && !Array.isArray(value);
}

// Error handling
export function handleError(error: unknown): Error {
  if (error instanceof Error) return error;
  return new Error(isString(error) ? error : "An unknown error occurred");
}