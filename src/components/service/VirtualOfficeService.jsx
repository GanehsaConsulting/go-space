import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GoArrowUpRight } from "react-icons/go";
import { ArrowButton } from "@/components/common/ArrowButton";
import AnimateOnScroll from "@/components/common/AnimateOnScroll";
import { ClientReview } from "@/components/ClientReview";
import { Contact } from "@/components/Contact";
import { FAQ } from "@/components/FAQ";
import { PriceList } from "@/components/PriceList";
import { Socmed } from "@/components/Socmed";
import { Spaces } from "@/components/Spaces";
import { WhyUs } from "@/components/WhyUs";
import { Link } from "@/i18n/routing";
import { getPackages } from "@/lib/getPackages";

const whatsappUrl =
  "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Virtual+Office+Go+Space&type=phone_number&app_absent=0";

export const VirtualOfficeService = async () => {
  const t = await getTranslations("servicePage.virtualOffice");
  const stats = t.raw("stats");
  const packages = await getPackages();
  const movedHomeSections = [
    <WhyUs key="why-us" />,
    <Spaces key="spaces" />,
    <PriceList key="pricing" data={packages} />,
    <ClientReview key="client-review" />,
    <Socmed key="socmed" />,
    <FAQ key="faq" />,
    <Contact key="contact" />,
  ];

  return (
    <>
      <section className="p-4 font-nunito">
        <div className="relative min-h-[680px] overflow-hidden rounded-[40px] text-white">
          <Image
            src="/assets/banner-image-main.jpg"
            alt="Go Space Virtual Office"
            fill
            className="object-cover"
            priority
          />
          <div className="absolute inset-0 bg-linear-to-t from-black via-black/60 to-black/20" />

          <div className="relative z-10 flex min-h-[680px] flex-col justify-between p-6 md:p-12">
            <Link
              href="/service"
              className="w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
            >
              {t("back")}
            </Link>

            <div className="max-w-4xl">
              <p className="mb-5 w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-main">
                {t("eyebrow")}
              </p>
              <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                {t("title")}
              </h1>
              <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/80 md:text-base">
                {t("description")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ArrowButton
                  isAnchor
                  label={t("primaryCta")}
                  path={whatsappUrl}
                  variant="light"
                />
                <ArrowButton
                  isAnchor
                  label={t("secondaryCta")}
                  path="/service/virtual-office#spaces"
                  target="_self"
                  variant="basic"
                />
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margin">
        <div className="grid gap-4 md:grid-cols-3">
          {stats.map((stat) => (
            <div
              key={stat.label}
              className="rounded-3xl bg-neutral-200/70 p-6 dark:bg-neutral-800"
            >
              <p className="text-2xl font-bold text-main dark:text-goYellow">
                {stat.value}
              </p>
              <p className="mt-2 text-sm text-neutral-600 dark:text-gray-300">
                {stat.label}
              </p>
            </div>
          ))}
        </div>
      </section>

      {movedHomeSections.map((section, index) => (
        <AnimateOnScroll
          key={section.key}
          once={false}
          animation="blurInUp"
          duration={0.5}
          delay={index * 0.03}
        >
          {section}
        </AnimateOnScroll>
      ))}

      <section className="margin pt-0">
        <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-main to-neutral-900 p-8 text-white md:p-12">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-goYellow blur-[100px]" />
          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">
                {t("ctaTitle")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
                {t("ctaDescription")}
              </p>
              <div className="mt-8 w-fit">
                <ArrowButton
                  isAnchor
                  label={t("primaryCta")}
                  path={whatsappUrl}
                  variant="light"
                />
              </div>
            </div>
            <GoArrowUpRight className="hidden text-6xl md:block" />
          </div>
        </div>
      </section>
    </>
  );
};
