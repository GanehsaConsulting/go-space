import { Geist, Geist_Mono, DM_Sans, Nunito_Sans } from "next/font/google";
import "./globals.css";
import { Footer } from "@/components/common/Footer";
import { ThemeProvider } from "next-themes";
import Head from "next/head";

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
  description:
    "Layanan Virtual Office termurah di Jakarta Selatan",
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

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body
        className={`${geistSans.variable} ${geistMono.variable} ${nunito.className} antialiased`}
      >
        <ThemeProvider attribute="class" defaultTheme="light" >  
          {children}

          <Footer />
        </ThemeProvider>
      </body>
    </html>
  );
}
