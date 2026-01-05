// adjust responsiveness
import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-200">
      <section
        className="
          bg-neutral-800 text-white
          rounded-t-[40px] md:rounded-t-[60px]
          px-6 md:px-24 py-10
          grid gap-10
          grid-cols-1
          md:grid-cols-12
        "
      >
        {/* === BRAND === */}
        <div className="space-y-4 md:col-span-4">
          <Image
            src="/assets/go-logo.png"
            alt="logo go-space"
            width={300}
            height={80}
            className="w-28 md:w-30 brightness-1000"
          />

          <p className="font-semibold text-lg md:text-xl">
            PT Ganesha Multi Kreatif
          </p>

          <p className="max-w-sm text-sm text-white/80">
            Go Space by Ganesha Consulting. Alamat bisnis strategis, kredibilitas
            naik, biaya operasional lebih hemat.
          </p>
        </div>

        {/* === PAGE LINKS === */}
        <div className="md:col-span-2">
          <p className="font-semibold mb-6">Page</p>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-white/70 transition">
              Home
            </Link>
            <Link href="/" className="hover:text-white/70 transition">
              Spaces
            </Link>
            <Link href="/" className="hover:text-white/70 transition">
              Services
            </Link>
            <Link href="/" className="hover:text-white/70 transition">
              Contact
            </Link>
          </div>
        </div>

        {/* === CONTACT LINKS === */}
        <div className="md:col-span-2">
          <p className="font-semibold mb-6">Contact</p>
          <div className="flex flex-col gap-3 text-sm">
            <Link href="/" className="hover:text-white/70 transition">
              WhatsApp
            </Link>
            <Link href="/" className="hover:text-white/70 transition">
              Email
            </Link>
            <Link href="/" className="hover:text-white/70 transition">
              Instagram
            </Link>
            <Link href="/" className="hover:text-white/70 transition">
              LinkedIn
            </Link>
          </div>
        </div>

        {/* === MAP === */}
        <div className="md:col-span-4">
          <p className="font-semibold mb-6">Location</p>

          <div className="relative w-full aspect-[16/10] rounded-2xl overflow-hidden">
            <iframe
              className="absolute inset-0 w-full h-full border-0 dark:invert dark:contrast-75"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0610851090046!2d106.8279946!3d-6.255683299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20f6bfe9853dcfa3%3A0x2ccb583ad9c6ca1b!2sGoSpace%20Mampang!5e0!3m2!1sid!2sid!4v1766980240365!5m2!1sid!2sid"
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};
