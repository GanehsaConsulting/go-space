import { ClientReview } from "@/components/ClientReview";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { Navbar } from "@/components/common/Navbar";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { HomeBanner } from "@/components/HomeBanner";
import { PriceList } from "@/components/PriceList";
import { Services } from "@/components/Services";
import { Socmed } from "@/components/Socmed";
import { Spaces } from "@/components/Spaces";
import { WhyUs } from "@/components/WhyUs";
import { getPackages } from "@/lib/getPackages";

export default async function Home() {
  const packages = await getPackages();

  return (
    <main className="relative" >
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
        <WhyUs />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <Spaces />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <PriceList data={packages} />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <ClientReview />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <Services />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <Socmed />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <FAQ />
      </AnimateOnScroll>

      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        <Contact />
      </AnimateOnScroll>
    </main>
  );
}

