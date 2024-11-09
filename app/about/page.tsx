import { Suspense, lazy } from "react";
import { Metadata } from "next";
import { MainLayout } from "@/components/layouts/main-layout";
import { SectionSkeleton } from "@/components/skeletons/section-skeleton";

const HeroSection = lazy(() => import("@/components/sections/about/hero-section").then(mod => ({ default: mod.HeroSection })));
const StorySection = lazy(() => import("@/components/sections/about/story-section").then(mod => ({ default: mod.StorySection })));
const IkigaiSection = lazy(() => import("@/components/sections/about/ikigai-section").then(mod => ({ default: mod.IkigaiSection })));
const TimelineSection = lazy(() => import("@/components/sections/about/timeline-section").then(mod => ({ default: mod.TimelineSection })));
const DifferenceSection = lazy(() => import("@/components/sections/about/difference-section").then(mod => ({ default: mod.DifferenceSection })));
const TestimonialsSection = lazy(() => import("@/components/sections/about/testimonials-section").then(mod => ({ default: mod.TestimonialsSection })));
const TeamSection = lazy(() => import("@/components/sections/about/team-section").then(mod => ({ default: mod.TeamSection })));
const CTASection = lazy(() => import("@/components/sections/about/cta-section").then(mod => ({ default: mod.CTASection })));

export const metadata: Metadata = {
  title: "About Simply Maid - Our Story & Mission",
  description: "Learn about Simply Maid's journey, values, and the team behind Sydney's most trusted cleaning service. Founded in 2015, we're building a company with purpose.",
};

export default function AboutPage() {
  return (
    <MainLayout>
      <Suspense fallback={<SectionSkeleton />}>
        <HeroSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <StorySection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <IkigaiSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TimelineSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <DifferenceSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TestimonialsSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <TeamSection />
      </Suspense>
      <Suspense fallback={<SectionSkeleton />}>
        <CTASection />
      </Suspense>
    </MainLayout>
  );
}