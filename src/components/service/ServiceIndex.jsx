import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { FiArrowUpRight } from "react-icons/fi";
import { HeaderSection } from "@/components/common/HeaderSection";
import { ArrowButton } from "@/components/common/ArrowButton";
import { Link } from "@/i18n/routing";
import { bgMainDarkGradient } from "@/lib/reuseClass";
import { serviceAssets } from "@/lib/services";

export const ServiceIndex = async () => {
  const t = await getTranslations("servicePage");
  const services = t.raw("items");

  return (
    <>
      <section className="p-4 font-nunito">
        <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-neutral-900 via-main to-neutral-900 px-6 py-24 text-white md:px-12 md:py-32">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-goYellow/70 blur-[110px]" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-white/15 blur-[110px]" />

          <div className="relative z-10 max-w-4xl">
            <p className="mb-5 w-fit rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
              {t("hero.eyebrow")}
            </p>
            <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
              {t("hero.title")}
            </h1>
            <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/80 md:text-base">
              {t("hero.description")}
            </p>
            <div className="mt-8 w-fit">
              <ArrowButton
                isAnchor
                label={t("hero.cta")}
                path="https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+ingin+konsultasi+layanan+Go+Space&type=phone_number&app_absent=0"
                variant="light"
              />
            </div>
          </div>
        </div>
      </section>

      <section className="margin">
        <HeaderSection
          title={t("sections.title")}
          desc={t("sections.description")}
        />

        <div className="grid gap-5 md:grid-cols-2 xl:grid-cols-4">
          {services.map((service) => {
            const asset = serviceAssets[service.slug];

            return (
              <Link
                key={service.slug}
                href={`/service/${service.slug}`}
                className={`group relative min-h-[360px] overflow-hidden rounded-3xl p-6 transition duration-500 md:hover:-translate-y-4 ${bgMainDarkGradient}`}
              >
                <div className="absolute -right-10 -top-10 h-40 w-40 rounded-full bg-goYellow blur-[80px]" />
                <div className="relative z-10 flex h-full flex-col justify-between">
                  <div className="flex justify-between">
                    <Image
                      src={asset.imageSrc}
                      width={180}
                      height={180}
                      alt={service.title}
                      className={`h-36 transition duration-500 group-hover:scale-105 ${
                        service.slug === "virtual-office"
                          ? "w-44 rounded-2xl object-cover"
                          : "w-auto object-contain"
                      }`}
                    />
                    <span className="flex h-10 w-10 items-center justify-center rounded-full bg-main text-white transition group-hover:bg-neutral-900 dark:bg-white dark:text-neutral-900">
                      <FiArrowUpRight />
                    </span>
                  </div>

                  <div>
                    <h2 className="text-2xl font-bold">{service.title}</h2>
                    <p className="mt-3 text-sm leading-relaxed text-neutral-700 transition-colors group-hover:text-white dark:text-white/75 dark:group-hover:text-neutral-900">
                      {service.shortDescription}
                    </p>
                    <p className="mt-6 text-sm font-bold">
                      {t("sections.learnMore")}
                    </p>
                  </div>
                </div>
              </Link>
            );
          })}
        </div>
      </section>
    </>
  );
};
