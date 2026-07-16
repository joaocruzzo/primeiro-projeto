import {
    HeroSection,
    CallToAction,
    FeatureSection,
    SupportSection,
    CustomerStorySection
} from "@/templates/landing-page/sections"

export const LandingPage = () => {
    return (
        <article className="flex flex-col">
            <HeroSection />
            <FeatureSection />
            <SupportSection />
            <CustomerStorySection />
            <CallToAction />
        </article>
    )
}