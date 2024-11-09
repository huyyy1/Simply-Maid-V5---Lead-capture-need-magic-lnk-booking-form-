"use client";

import { Suspense, lazy } from "react";
import { MainLayout } from "@/components/layouts/main-layout";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";

const HeroSection = lazy(() => import("@/components/sections/cleaning-jobs/hero-section").then(mod => ({ default: mod.HeroSection })));
const StatsBanner = lazy(() => import("@/components/sections/cleaning-jobs/stats-banner").then(mod => ({ default: mod.StatsBanner })));
const FreedomSection = lazy(() => import("@/components/sections/cleaning-jobs/freedom-section").then(mod => ({ default: mod.FreedomSection })));
const EarningsBentoGrid = lazy(() => import("@/components/sections/cleaning-jobs/earnings-bento-grid").then(mod => ({ default: mod.EarningsBentoGrid })));
const IkigaiSection = lazy(() => import("@/components/sections/cleaning-jobs/ikigai-section").then(mod => ({ default: mod.IkigaiSection })));
const LookingForBentoGrid = lazy(() => import("@/components/sections/cleaning-jobs/looking-for-bento-grid").then(mod => ({ default: mod.LookingForBentoGrid })));
const HowItWorksSection = lazy(() => import("@/components/sections/cleaning-jobs/how-it-works-section").then(mod => ({ default: mod.HowItWorksSection })));
const SuccessStories = lazy(() => import("@/components/sections/cleaning-jobs/success-stories").then(mod => ({ default: mod.SuccessStories })));
const GrowthChampionBentoGrid = lazy(() => import("@/components/sections/cleaning-jobs/growth-champion-bento-grid").then(mod => ({ default: mod.GrowthChampionBentoGrid })));
const TestimonialsSection = lazy(() => import("@/components/sections/cleaning-jobs/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })));
const FAQSection = lazy(() => import("@/components/sections/cleaning-jobs/faq-section").then(mod => ({ default: mod.FAQSection })));
const CTASection = lazy(() => import("@/components/sections/cleaning-jobs/cta-section").then(mod => ({ default: mod.CTASection })));

export default function CleaningJobsPage() {
  return (
    <MainLayout>
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <StatsBanner />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FreedomSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <EarningsBentoGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <IkigaiSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <LookingForBentoGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <HowItWorksSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <SuccessStories />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <GrowthChampionBentoGrid />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <FAQSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
    </MainLayout>
  );
}