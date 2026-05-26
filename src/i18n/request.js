import { hasLocale } from "next-intl";
import { getRequestConfig } from "next-intl/server";
import { routing } from "./routing";

export default getRequestConfig(async ({ requestLocale }) => {
  const requested = await requestLocale;
  const locale = hasLocale(routing.locales, requested)
    ? requested
    : routing.defaultLocale;
  const commonMessages = (await import(`../messages/${locale}/common.json`))
    .default;
  const homeMessages = (await import(`../messages/${locale}/home.json`))
    .default;
  const aboutMessages = (await import(`../messages/${locale}/about.json`))
    .default;
  const servicesMessages = (await import(`../messages/${locale}/services.json`))
    .default;

  return {
    locale,
    messages: {
      ...commonMessages,
      ...homeMessages,
      ...aboutMessages,
      ...servicesMessages,
    },
  };
});
