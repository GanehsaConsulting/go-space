import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-200">
      <section className="bg-neutral-800 rounded-t-[60px] px-24 py-8  text-white space-y-5 grid grid-cols-10 gap-10">
        <div className="space-y-4 col-span-3">
          <Image
            src={"/assets/go-logo.png"}
            alt="logo go-space"
            width={1000}
            height={100}
            className="w-25 brightness-1000"
          />
          <p className="font-semibold text-xl">PT Ganesha Multi Kreatif</p>
          <p className="max-w-xs text-sm">
            Go Space by Ganesha Consulting. Alamat bisnis strategis,
            kredibilitas naik, biaya operasional lebih hemat.
          </p>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold">Page</p>
          <div className="flex flex-col gap-2 mt-7">
            <Link href="/" className="hover:text-white/70 duration-200">
              Home
            </Link>
            <Link href="/" className="hover:text-white/70 duration-200">
              Spaces
            </Link>
            <Link href="/" className="hover:text-white/70 duration-200">
              Services
            </Link>
            <Link href="/" className="hover:text-white/70 duration-200">
              Contact
            </Link>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold">Contact</p>
          <div className="flex flex-col gap-2 mt-7">
            <Link href="/" className="hover:text-white/70 duration-200">
              Home
            </Link>
            <Link href="/" className="hover:text-white/70 duration-200">
              Spaces
            </Link>
            <Link href="/" className="hover:text-white/70 duration-200">
              Services
            </Link>
            <Link href="/" className="hover:text-white/70 duration-200">
              Contact
            </Link>
          </div>
        </div>
        <div className="col-span-5">
          <p className="font-semibold mb-6">Location</p>
          <div >
            <iframe
              className="w-full h-full dark:invert dark:contrast-75 object-cover rounded-2xl"
              src={
                "https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.0610851090046!2d106.8279946!3d-6.255683299999999!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x20f6bfe9853dcfa3%3A0x2ccb583ad9c6ca1b!2sGoSpace%20Mampang!5e0!3m2!1sid!2sid!4v1766980240365!5m2!1sid!2sid"
              }
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            />
          </div>
        </div>
      </section>
    </footer>
  );
};
