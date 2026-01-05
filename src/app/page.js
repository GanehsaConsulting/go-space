import { ClientReview } from "@/components/ClientReview";
import { Navbar } from "@/components/common/Navbar";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { HomeBanner } from "@/components/HomeBanner";
import { PriceList } from "@/components/PriceList";
import { Spaces } from "@/components/Spaces";
import { WhyUs } from "@/components/WhyUs";
import { getPackages } from "@/lib/getPackages";

export default async function Home() {
  const packages = await getPackages();

  return (
    <>
      <Navbar />
      <HomeBanner />
      <WhyUs />
      <Spaces />
      <PriceList data={packages} />
      <ClientReview />
      <FAQ />
      <Contact />
    </>
  );
}
