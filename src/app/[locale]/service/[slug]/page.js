import { getTranslations, setRequestLocale } from "next-intl/server";
import { notFound } from "next/navigation";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { Navbar } from "@/components/common/Navbar";
import { ServiceDetail } from "@/components/service/ServiceDetail";
import { VirtualOfficeService } from "@/components/service/VirtualOfficeService";
import { isServiceSlug, serviceSlugs } from "@/lib/services";

export function generateStaticParams() {
  return serviceSlugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }) {
  const { locale, slug } = await params;
  const t = await getTranslations({ locale, namespace: "servicePage" });
  const service = t.raw("items").find((item) => item.slug === slug);

  if (!service) {
    return {};
  }

  return {
    title: service.title,
    description: service.shortDescription,
  };
}

export default async function ServiceDetailPage({ params }) {
  const { locale, slug } = await params;
  setRequestLocale(locale);

  if (!isServiceSlug(slug)) {
    notFound();
  }

  return (
    <main className="relative">
      <Navbar />
      <AnimateOnScroll
        once={false}
        animation="blurInUp"
        duration={0.5}
        delay={0}
      >
        {slug === "virtual-office" ? (
          <VirtualOfficeService />
        ) : (
          <ServiceDetail slug={slug} />
        )}
      </AnimateOnScroll>
    </main>
  );
}
