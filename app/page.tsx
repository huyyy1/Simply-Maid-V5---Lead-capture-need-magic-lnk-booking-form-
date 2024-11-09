import { Suspense, lazy } from "react";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";

const HeroSection = lazy(() => import("@/components/sections/home/hero-section").then(mod => ({ default: mod.HeroSection })));
const RecentlyCleaned = lazy(() => import("@/components/sections/home/recently-cleaned").then(mod => ({ default: mod.RecentlyCleaned })));
const CleaningServices = lazy(() => import("@/components/sections/home/cleaning-services").then(mod => ({ default: mod.CleaningServices })));
const CleaningServicesTabs = lazy(() => import("@/components/sections/home/cleaning-services-tabs").then(mod => ({ default: mod.CleaningServicesTabs })));
const BestRatedCleaners = lazy(() => import("@/components/sections/home/best-rated-cleaners").then(mod => ({ default: mod.BestRatedCleaners })));
const ServingLocations = lazy(() => import("@/components/sections/home/serving-locations").then(mod => ({ default: mod.ServingLocations })));
const HowItWorksSection = lazy(() => import("@/components/sections/home/how-it-works-section").then(mod => ({ default: mod.HowItWorksSection })));
const ComparisonSection = lazy(() => import("@/components/sections/home/comparison-section").then(mod => ({ default: mod.ComparisonSection })));
const FAQSection = lazy(() => import("@/components/sections/home/faq-section").then(mod => ({ default: mod.FAQSection })));
const FinalCTASection = lazy(() => import("@/components/sections/home/final-cta-section").then(mod => ({ default: mod.FinalCTASection })));

export default function HomePage() {
  return (
    <main className="flex min-h-screen flex-col">
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <RecentlyCleaned />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CleaningServices />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorksSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CleaningServicesTabs />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <BestRatedCleaners />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ServingLocations />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <ComparisonSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FinalCTASection />
      </Suspense>
    </main>
  );
}