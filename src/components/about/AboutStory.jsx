import Image from "next/image";
import { useTranslations } from "next-intl";
import { HeaderSection } from "@/components/common/HeaderSection";
import { bgMainDarkGradient } from "@/lib/reuseClass";

export const AboutStory = () => {
  const t = useTranslations("about.story");
  const storyCards = t.raw("cards");

  return (
    <section className="margin">
      <HeaderSection
        title={t("title")}
        desc={t("description")}
      />

      <div className="grid gap-5 lg:grid-cols-[0.95fr_1.05fr]">
        <div className="relative min-h-[430px] overflow-hidden rounded-[36px] bg-neutral-900">
          <Image
            src="/assets/spaces/room-6-3.png"
            alt="Go Space meeting room"
            fill
            className="object-cover"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-black/85 via-black/20 to-transparent" />
          <div className="absolute bottom-0 p-6 text-white md:p-8">
            <p className="mb-3 w-fit rounded-full bg-white/15 px-4 py-2 text-xs font-semibold backdrop-blur-md">
              {t("eyebrow")}
            </p>
            <h2 className="max-w-xl text-3xl font-bold md:text-4xl">
              {t("headline")}
            </h2>
          </div>
        </div>

        <div className="grid gap-4">
          {storyCards.map((card, index) => (
            <div
              key={card.title}
              className={`group relative overflow-hidden rounded-3xl p-6 transition duration-500 ${bgMainDarkGradient}`}
            >
              <div className="absolute -right-8 -top-10 h-32 w-32 rounded-full bg-goYellow blur-[70px]" />
              <div className="relative z-10 flex h-full flex-col justify-between gap-8">
                <span className="w-fit rounded-full bg-white px-4 py-2 text-sm font-bold text-neutral-900 dark:bg-black dark:text-white">
                  0{index + 1}
                </span>
                <div>
                  <h3 className="text-2xl font-bold">{card.title}</h3>
                  <p className="mt-3 max-w-xl text-sm leading-relaxed text-neutral-700 transition-colors group-hover:text-white dark:text-white/75 dark:group-hover:text-neutral-800">
                    {card.desc}
                  </p>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
