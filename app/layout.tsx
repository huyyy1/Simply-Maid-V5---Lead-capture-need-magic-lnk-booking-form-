import type { Metadata } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@/components/theme-provider";
import { MainNav } from "@/components/layout/main-nav";
import { Footer } from "@/components/layout/footer";
import { Toaster } from "@/components/ui/sonner";
import { ErrorBoundary } from "@/components/error-boundary";
import { cn } from "@/lib/utils";
import "./globals.css";

const inter = Inter({ 
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
});

export const metadata: Metadata = {
  metadataBase: new URL(process.env.NEXT_PUBLIC_APP_URL || "https://simplymaid.com"),
  title: {
    default: "Simply Maid - Sydney's Most Trusted Cleaning Service",
    template: "%s | Simply Maid"
  },
  description: "Book a clean in Sydney in 60 seconds. Simply Maid is Sydney's most-loved cleaning service—trusted by 15,000+ happy customers.",
  keywords: ["Cleaning Service", "House Cleaning", "Sydney", "Domestic Cleaning"],
  authors: [{ name: "Simply Maid" }],
  openGraph: {
    type: "website",
    locale: "en_AU",
    url: "https://simplymaid.com",
    title: "Simply Maid - Sydney's Most Trusted Cleaning Service",
    description: "Book a clean in Sydney in 60 seconds. Simply Maid is Sydney's most-loved cleaning service—trusted by 15,000+ happy customers.",
    siteName: "Simply Maid"
  },
  twitter: {
    card: "summary_large_image",
    title: "Simply Maid - Sydney's Most Trusted Cleaning Service",
    description: "Book a clean in Sydney in 60 seconds. Simply Maid is Sydney's most-loved cleaning service—trusted by 15,000+ happy customers.",
    creator: "@simplymaid"
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  verification: {
    google: process.env.NEXT_PUBLIC_GOOGLE_SITE_VERIFICATION,
  },
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning>
      <head>
        <meta name="darkreader-lock" />
        <script 
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                function getThemePreference() {
                  if (typeof localStorage !== 'undefined' && localStorage.getItem('theme')) {
                    return localStorage.getItem('theme');
                  }
                  return window.matchMedia('(prefers-color-scheme: dark)').matches ? 'dark' : 'light';
                }
                
                const theme = getThemePreference();
                
                if (theme === 'dark') {
                  document.documentElement.classList.add('dark');
                }

                window.matchMedia('(prefers-color-scheme: dark)').addEventListener('change', (e) => {
                  if (!localStorage.getItem('theme')) {
                    if (e.matches) {
                      document.documentElement.classList.add('dark');
                    } else {
                      document.documentElement.classList.remove('dark');
                    }
                  }
                });
              })();
            `,
          }}
        />
      </head>
      <body className={cn(
        "min-h-screen bg-background font-sans antialiased",
        inter.variable
      )}>
        <ErrorBoundary>
          <ThemeProvider
            attribute="class"
            defaultTheme="system"
            enableSystem
            disableTransitionOnChange
            storageKey="simply-maid-theme"
          >
            <div className="relative flex min-h-screen flex-col">
              <MainNav />
              <main className="flex-1">
                {children}
              </main>
              <Footer />
            </div>
            <Toaster />
          </ThemeProvider>
        </ErrorBoundary>
      </body>
    </html>
  );
}