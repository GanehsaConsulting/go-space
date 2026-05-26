import { setRequestLocale } from "next-intl/server";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { Navbar } from "@/components/common/Navbar";
import { HomeBanner } from "@/components/HomeBanner";
import { Services } from "@/components/Services";

export default async function Home({ params }) {
  const { locale } = await params;
  setRequestLocale(locale);

  return (
    <main className="relative">
      <Navbar />

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <HomeBanner />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <Services />
      </AnimateOnScroll>
    </main>
  );
}
