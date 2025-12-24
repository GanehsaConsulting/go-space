import { HomeBanner } from "@/components/HomeBanner";
import { PriceList } from "@/components/PriceList";
import { Spaces } from "@/components/Spaces";
import { WhyUs } from "@/components/WhyUs";
import { getPackages } from "@/lib/getPackages";
import Image from "next/image";

export default async function Home() {

  const packages = await getPackages()

  return (
    <main>
      <HomeBanner/>
      <WhyUs/>
      <Spaces/>
      <PriceList data={packages} />
    </main>
  );
}