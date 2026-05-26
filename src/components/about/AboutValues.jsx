import { useTranslations } from "next-intl";
import { FaHandshake, FaRegLightbulb } from "react-icons/fa6";
import { HiOutlineBuildingOffice2 } from "react-icons/hi2";
import { MdOutlineVerified } from "react-icons/md";
import { HeaderSection } from "@/components/common/HeaderSection";
import { bgNeutralGradient } from "@/lib/reuseClass";

const valueIcons = [
  <HiOutlineBuildingOffice2 key="office" />,
  <FaRegLightbulb key="idea" />,
  <MdOutlineVerified key="verified" />,
  <FaHandshake key="handshake" />,
];

export const AboutValues = () => {
  const t = useTranslations("about.values");
  const values = t.raw("items").map((value, index) => ({
    ...value,
    icon: valueIcons[index],
  }));

  return (
    <section className="bg-neutral-200/70 py-16 dark:bg-linear-to-br dark:from-neutral-800 dark:to-neutral-900">
      <div className="px-8 sm:px-17 md:px-24">
        <HeaderSection
          title={t("title")}
          desc={t("description")}
        />

        <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-4">
          {values.map((value) => (
            <div
              key={value.title}
              className={`group relative min-h-72 overflow-hidden rounded-3xl p-5 transition duration-500 ${bgNeutralGradient}`}
            >
              <div className="absolute -right-8 -top-8 h-32 w-32 rounded-full bg-main/40 blur-[70px]" />
              <div className="relative z-10 flex h-full flex-col justify-between">
                <div className="w-fit rounded-full bg-white p-4 text-3xl text-main shadow dark:bg-black dark:text-white">
                  {value.icon}
                </div>
                <div>
                  <h3 className="text-xl font-bold">{value.title}</h3>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-700 transition-colors group-hover:text-white dark:text-white/75 dark:group-hover:text-neutral-900">
                    {value.desc}
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
