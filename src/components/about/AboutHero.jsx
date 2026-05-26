import Image from "next/image";
import { useTranslations } from "next-intl";
import { Link } from "@/i18n/routing";
import { GoArrowUpRight } from "react-icons/go";
import { MdOutlineLocationOn } from "react-icons/md";
import { ArrowButton } from "@/components/common/ArrowButton";
import { Button } from "@/components/ui/button";
import { bgNeutralGradientReverse } from "@/lib/reuseClass";

export const AboutHero = () => {
  const t = useTranslations("about.hero");
  const common = useTranslations("common");
  const heroStats = t.raw("stats");

  return (
    <section className="p-4 font-nunito">
      <div className="relative overflow-hidden rounded-[40px] min-h-[calc(100vh-2rem)] bg-neutral-900 text-white">
        <Image
          src="/assets/banner-image-main.jpg"
          alt="Go Space virtual office interior"
          fill
          priority
          className="object-cover opacity-55"
        />
        <div className="absolute inset-0 bg-linear-to-br from-black/90 via-black/65 to-main/60" />
        <div className="absolute -top-16 -right-16 h-64 w-64 rounded-full bg-goYellow/70 blur-[100px]" />
        <div className="absolute -bottom-20 left-10 h-72 w-72 rounded-full bg-main/70 blur-[110px]" />

        <div className="relative z-10 flex min-h-[calc(100vh-2rem)] flex-col justify-between p-6 md:p-10">
          <div className="flex items-center justify-between gap-4">
            <Link href="/" className="inline-flex items-center gap-3">
              <Image
                src="/assets/go-logo.png"
                alt="Go Space"
                width={130}
                height={52}
                className="h-12 w-auto brightness-1000"
              />
              <span className="hidden text-xs font-semibold text-white/80 sm:block">
                {common("brandSubtitle")
                  .split("\n")
                  .map((line) => (
                    <span key={line} className="block">
                      {line}
                    </span>
                  ))}
              </span>
            </Link>

            <Button
              asChild
              className={`rounded-full px-5 py-6 text-sm ${bgNeutralGradientReverse}`}
            >
              <Link href="/#pricing">
                {t("pricing")} <GoArrowUpRight />
              </Link>
            </Button>
          </div>

          <div className="grid items-end gap-8 md:grid-cols-[1.15fr_0.85fr]">
            <div className="max-w-4xl">
              <div className="mb-5 inline-flex items-center gap-2 rounded-full border border-white/20 bg-white/10 px-4 py-2 text-sm font-semibold backdrop-blur-md">
                <MdOutlineLocationOn className="text-goYellow" />
                {t("location")}
              </div>

              <h1 className="text-5xl font-semibold leading-tight tracking-tight md:text-7xl">
                {t("title")}
              </h1>

              <p className="mt-6 max-w-2xl text-sm font-semibold leading-relaxed text-white/80 md:text-base">
                {t("description")}
              </p>

              <div className="mt-8 flex flex-col gap-3 sm:flex-row">
                <ArrowButton
                  isAnchor
                  label={t("consult")}
                  path="https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+ingin+tahu+lebih+lanjut+tentang+Go+Space&type=phone_number&app_absent=0"
                  variant="light"
                />
                <ArrowButton
                  isAnchor
                  label={t("explore")}
                  path="/#spaces"
                  target="_self"
                  variant="basic"
                />
              </div>
            </div>

            <div className="rounded-[32px] border border-white/15 bg-white/10 p-4 shadow-2xl backdrop-blur-md">
              <div className="grid gap-3">
                {heroStats.map((stat) => (
                  <div
                    key={stat.label}
                    className="rounded-3xl bg-white/90 p-5 text-neutral-900 dark:bg-neutral-900/90 dark:text-white"
                  >
                    <p className="text-2xl font-bold">{stat.value}</p>
                    <p className="mt-1 text-sm text-neutral-600 dark:text-white/70">
                      {stat.label}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};
