import { getTranslations, setRequestLocale } from "next-intl/server";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { Navbar } from "@/components/common/Navbar";
import { AboutCTA } from "@/components/about/AboutCTA";
import { AboutExperience } from "@/components/about/AboutExperience";
import { AboutHero } from "@/components/about/AboutHero";
import { AboutStory } from "@/components/about/AboutStory";
import { AboutValues } from "@/components/about/AboutValues";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "about.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

const animatedSections = [
  <AboutStory key="story" />,
  <AboutValues key="values" />,
  <AboutExperience key="experience" />,
  <AboutCTA key="cta" />,
];

export default async function AboutPage({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative">
      <Navbar />
      <AboutHero />

      {animatedSections.map((section, index) => (
        <AnimateOnScroll
          key={section.key}
          once={false}
          animation="blurInUp"
          duration={0.5}
          delay={index * 0.05}
        >
          {section}
        </AnimateOnScroll>
      ))}
    </main>
  );
}
