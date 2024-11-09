import { type ClassValue, clsx } from "clsx";
import { twMerge } from "tailwind-merge";

// Core theme tokens
export const tokens = {
  colors: {
    brand: {
      primary: {
        light: "hsl(267, 83%, 60%)", // #7E57C2
        dark: "hsl(267, 70%, 75%)",
        gradient: "linear-gradient(135deg, hsl(267, 83%, 60%) 0%, hsl(267, 70%, 75%) 100%)"
      },
      secondary: {
        light: "hsl(339, 100%, 65%)", // #FF4E8E
        dark: "hsl(339, 100%, 75%)",
        gradient: "linear-gradient(135deg, hsl(339, 100%, 65%) 0%, hsl(339, 100%, 75%) 100%)"
      }
    },
    semantic: {
      success: "hsl(150, 84%, 45%)",
      warning: "hsl(35, 95%, 60%)",
      error: "hsl(350, 84%, 60%)",
      info: "hsl(195, 85%, 45%)"
    }
  },
  typography: {
    fonts: {
      heading: "var(--font-inter)",
      body: "var(--font-inter)",
      mono: "var(--font-jetbrains-mono)"
    },
    sizes: {
      xs: "0.75rem",
      sm: "0.875rem",
      base: "1rem",
      lg: "1.125rem",
      xl: "1.25rem",
      "2xl": "1.5rem",
      "3xl": "1.875rem",
      "4xl": "2.25rem",
      "5xl": "3rem",
      "6xl": "3.75rem"
    },
    weights: {
      normal: "400",
      medium: "500",
      semibold: "600",
      bold: "700",
      extrabold: "800"
    }
  },
  spacing: {
    section: {
      sm: "py-12",
      base: "py-16",
      lg: "py-24",
      xl: "py-32"
    },
    container: {
      sm: "px-4",
      base: "px-6",
      lg: "px-8"
    }
  },
  animation: {
    durations: {
      fastest: "100ms",
      faster: "150ms",
      fast: "200ms",
      normal: "300ms",
      slow: "400ms",
      slower: "500ms",
      slowest: "700ms"
    },
    easings: {
      productive: {
        in: "cubic-bezier(0.4, 0.0, 1, 1)",
        out: "cubic-bezier(0.0, 0.0, 0.2, 1)",
        inOut: "cubic-bezier(0.4, 0.0, 0.2, 1)"
      },
      expressive: {
        in: "cubic-bezier(0.4, 0.14, 1, 1)",
        out: "cubic-bezier(0, 0, 0.3, 1)",
        inOut: "cubic-bezier(0.4, 0.14, 0.3, 1)"
      }
    }
  }
} as const;

// Utility functions
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

export function getToken<T extends keyof typeof tokens>(category: T, token: keyof typeof tokens[T]): typeof tokens[T][keyof typeof tokens[T]] {
  return tokens[category][token];
}

export function getColor(path: string): string {
  const [category, shade] = path.split(".");
  return tokens.colors.brand[category as keyof typeof tokens.colors.brand][
    shade as keyof typeof tokens.colors.brand.primary
  ];
}

export function getSemanticColor(type: keyof typeof tokens.colors.semantic): string {
  return tokens.colors.semantic[type];
}

export function getAnimationDuration(duration: keyof typeof tokens.animation.durations): string {
  return tokens.animation.durations[duration];
}

export function getAnimationEasing(
  category: keyof typeof tokens.animation.easings,
  type: keyof typeof tokens.animation.easings.productive
): string {
  return tokens.animation.easings[category][type];
}

// Animation presets
export const animations = {
  fadeIn: {
    initial: { opacity: 0 },
    animate: { opacity: 1 },
    exit: { opacity: 0 },
    transition: { duration: 0.3, ease: tokens.animation.easings.productive.out }
  },
  slideUp: {
    initial: { opacity: 0, y: 20 },
    animate: { opacity: 1, y: 0 },
    exit: { opacity: 0, y: -20 },
    transition: { duration: 0.5, ease: tokens.animation.easings.productive.out }
  },
  stagger: {
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
          duration: 0.5,
          ease: tokens.animation.easings.productive.out
        }
      }
    }
  },
  hover: {
    scale: 1.02,
    transition: {
      duration: 0.2,
      ease: tokens.animation.easings.productive.out
    }
  },
  tap: {
    scale: 0.98,
    transition: {
      duration: 0.1,
      ease: tokens.animation.easings.productive.out
    }
  }
};