import Image from "next/image";
import { getTranslations } from "next-intl/server";
import { GoArrowUpRight } from "react-icons/go";
import { IoMdCheckmarkCircleOutline } from "react-icons/io";
import { ArrowButton } from "@/components/common/ArrowButton";
import { Link } from "@/i18n/routing";
import { serviceAssets } from "@/lib/services";

export const ServiceDetail = async ({ slug }) => {
  const t = await getTranslations("servicePage");
  const service = t.raw("items").find((item) => item.slug === slug);
  const asset = serviceAssets[slug];

  return (
    <>
      <section className="p-4 font-nunito">
        <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-neutral-900 via-main to-neutral-900 p-6 text-white md:p-12">
          <div className="absolute -right-16 -top-20 h-72 w-72 rounded-full bg-goYellow/70 blur-[110px]" />
          <div className="absolute -bottom-24 left-10 h-72 w-72 rounded-full bg-white/15 blur-[110px]" />

          <div className="relative z-10 grid min-h-[560px] items-end gap-10 md:grid-cols-[1fr_0.8fr]">
            <div>
              <Link
                href="/service"
                className="mb-8 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md transition hover:bg-white/20"
              >
                {t("detail.back")}
              </Link>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                {service.title}
              </h1>
              <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/80 md:text-base">
                {service.shortDescription}
              </p>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-white/10 p-6 shadow-2xl backdrop-blur-md">
              <Image
                src={asset.imageSrc}
                width={360}
                height={360}
                alt={service.title}
                className="mx-auto h-72 w-auto object-contain"
                priority
              />
            </div>
          </div>
        </div>
      </section>

      <section className="margin">
        <div className="grid gap-8 lg:grid-cols-[0.85fr_1.15fr]">
          <div>
            <p className="mb-4 w-fit rounded-full bg-main/10 px-4 py-2 text-sm font-bold text-main dark:bg-white/10 dark:text-white">
              {t("detail.overview")}
            </p>
            <h2 className="text-3xl font-bold md:text-5xl">{service.title}</h2>
            <p className="mt-5 text-sm leading-relaxed text-neutral-600 dark:text-gray-300 md:text-base">
              {service.description}
            </p>

            <div className="mt-8 flex flex-col gap-3 sm:flex-row">
              <ArrowButton
                isAnchor
                label={t("detail.cta")}
                path="https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+ingin+konsultasi+layanan+Go+Space&type=phone_number&app_absent=0"
                variant="dark"
              />
              <ArrowButton
                isAnchor
                label={t("detail.external")}
                path={asset.externalUrl}
                variant="light"
              />
            </div>
          </div>

          <div className="grid gap-5">
            <div className="rounded-3xl bg-neutral-200/70 p-6 dark:bg-neutral-800">
              <h3 className="text-2xl font-bold">{t("detail.benefits")}</h3>
              <ul className="mt-5 space-y-3">
                {service.benefits.map((item) => (
                  <li key={item} className="flex gap-3 text-sm">
                    <IoMdCheckmarkCircleOutline className="mt-0.5 shrink-0 text-xl text-main dark:text-goYellow" />
                    <span className="text-neutral-700 dark:text-gray-200">
                      {item}
                    </span>
                  </li>
                ))}
              </ul>
            </div>

            <div className="rounded-3xl bg-neutral-900 p-6 text-white">
              <h3 className="text-2xl font-bold">{t("detail.process")}</h3>
              <div className="mt-5 grid gap-3">
                {service.process.map((item, index) => (
                  <div
                    key={item}
                    className="flex gap-4 rounded-2xl bg-white/10 p-4"
                  >
                    <span className="flex h-8 w-8 shrink-0 items-center justify-center rounded-full bg-white text-sm font-bold text-neutral-900">
                      {index + 1}
                    </span>
                    <p className="text-sm text-white/80">{item}</p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>

      <section className="margin pt-0">
        <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-main to-neutral-900 p-8 text-white md:p-12">
          <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-goYellow blur-[100px]" />
          <div className="relative z-10 grid gap-6 md:grid-cols-[1fr_auto] md:items-end">
            <div>
              <h2 className="text-3xl font-bold md:text-5xl">
                {t("detail.ctaTitle")}
              </h2>
              <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
                {t("detail.ctaDescription")}
              </p>
            </div>
            <GoArrowUpRight className="hidden text-6xl md:block" />
          </div>
        </div>
      </section>
    </>
  );
};
