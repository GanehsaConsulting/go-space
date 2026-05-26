import { getTranslations, setRequestLocale } from "next-intl/server";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { Navbar } from "@/components/common/Navbar";
import { ServiceIndex } from "@/components/service/ServiceIndex";

export async function generateMetadata({ params }) {
  const { locale } = await params;
  const t = await getTranslations({ locale, namespace: "servicePage.metadata" });

  return {
    title: t("title"),
    description: t("description"),
  };
}

export default async function ServicePage({ params }) {
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
        <ServiceIndex />
      </AnimateOnScroll>
    </main>
  );
}
