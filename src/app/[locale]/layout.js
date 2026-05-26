import { hasLocale, NextIntlClientProvider } from "next-intl";
import { getMessages, setRequestLocale } from "next-intl/server";
import { Geist, Geist_Mono, DM_Sans } from "next/font/google";
import { notFound } from "next/navigation";
import { Footer } from "@/components/common/Footer";
import { ThemeProvider } from "@/components/common/ThemeProvider";
import { routing } from "@/i18n/routing";
import "../globals.css";

const geistSans = Geist({
  variable: "--font-geist-sans",
  subsets: ["latin"],
});

const nunito = DM_Sans({
  variable: "--font-nunito",
  subsets: ["latin"],
  display: "swap",
});

const geistMono = Geist_Mono({
  variable: "--font-geist-mono",
  subsets: ["latin"],
});

export const metadata = {
  title: {
    default: "Go Space | Virtual Office by Ganesha Consulting",
    template: "%s | Go Space",
  },
  description: "Layanan Virtual Office termurah di Jakarta Selatan",
  keywords: [
    "virtual office",
    "virtual office jakarta",
    "alamat bisnis",
    "sewa virtual office",
    "ganesha consulting",
    "go space",
  ],
  authors: [{ name: "Ganesha Consulting" }],
  creator: "Ganesha Consulting",
  publisher: "Go Space",
  metadataBase: new URL("https://gospace.id"),
};

export function generateStaticParams() {
  return routing.locales.map((locale) => ({ locale }));
}

export default async function LocaleLayout({ children, params }) {
  const { locale } = await params;

  if (!hasLocale(routing.locales, locale)) {
    notFound();
  }

  setRequestLocale(locale);
  const messages = await getMessages();

  return (
    <html lang={locale} suppressHydrationWarning>
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.className} antialiased`}
      >
        <ThemeProvider defaultTheme="light">
          <NextIntlClientProvider messages={messages}>
            {children}
            <Footer />
          </NextIntlClientProvider>
        </ThemeProvider>
      </body>
    </html>
  );
}
