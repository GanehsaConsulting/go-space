import { useTranslations } from "next-intl";
import { ArrowButton } from "@/components/common/ArrowButton";

export const AboutCTA = () => {
  const t = useTranslations("about.cta");

  return (
    <section className="margin pt-0">
      <div className="relative overflow-hidden rounded-[40px] bg-linear-to-br from-main to-neutral-900 p-8 text-white md:p-12">
        <div className="absolute -right-12 -top-12 h-56 w-56 rounded-full bg-goYellow blur-[100px]" />
        <div className="absolute -bottom-16 left-10 h-56 w-56 rounded-full bg-white/20 blur-[100px]" />

        <div className="relative z-10 grid gap-8 md:grid-cols-[1fr_auto] md:items-end">
          <div>
            <p className="mb-4 w-fit rounded-full bg-white/15 px-4 py-2 text-sm font-semibold">
              {t("eyebrow")}
            </p>
            <h2 className="max-w-3xl text-3xl font-bold md:text-5xl">
              {t("title")}
            </h2>
            <p className="mt-4 max-w-2xl text-sm leading-relaxed text-white/75">
              {t("description")}
            </p>
          </div>

          <ArrowButton
            isAnchor
            label={t("button")}
            path="https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Go+Space&type=phone_number&app_absent=0"
            variant="light"
          />
        </div>
      </div>
    </section>
  );
};
