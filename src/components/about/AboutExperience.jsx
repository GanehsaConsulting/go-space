import Image from "next/image";
import { useTranslations } from "next-intl";
import { GoArrowUpRight } from "react-icons/go";

export const AboutExperience = () => {
  const t = useTranslations("about.experience");
  const highlights = t.raw("highlights");

  return (
    <section className="margin">
      <div className="grid gap-5 lg:grid-cols-12">
        <div className="rounded-[36px] bg-neutral-900 p-6 text-white md:p-8 lg:col-span-5">
          <div className="mb-10 flex h-12 w-12 items-center justify-center rounded-full bg-white text-2xl text-neutral-900">
            <GoArrowUpRight />
          </div>
          <h2 className="text-3xl font-bold md:text-5xl">
            {t("title")}
          </h2>
          <p className="mt-5 text-sm leading-relaxed text-white/75">
            {t("description")}
          </p>
        </div>

        <div className="relative min-h-[360px] overflow-hidden rounded-[36px] lg:col-span-7">
          <Image
            src="/assets/banner-image.png"
            alt="Go Space workspace"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/30 to-transparent" />
          <div className="absolute bottom-0 grid w-full gap-3 p-5 sm:grid-cols-2 md:p-7">
            {highlights.map((item) => (
              <div
                key={item}
                className="rounded-2xl border border-white/15 bg-white/10 p-4 text-sm font-semibold text-white backdrop-blur-md"
              >
                {item}
              </div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
