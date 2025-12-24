import Image from "next/image";
import Link from "next/link";

export const Footer = () => {
  return (
    <footer className="bg-neutral-200" >
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
            <Link href="/" className="hover:text-white/70 duration-200" >Home</Link>
            <Link href="/" className="hover:text-white/70 duration-200" >Spaces</Link>
            <Link href="/" className="hover:text-white/70 duration-200" >Services</Link>
            <Link href="/" className="hover:text-white/70 duration-200" >Contact</Link>
          </div>
        </div>
        <div className="flex flex-col items-start">
          <p className="font-semibold">Contact</p>
          <div className="flex flex-col gap-2 mt-7">
            <Link href="/" className="hover:text-white/70 duration-200" >Home</Link>
            <Link href="/" className="hover:text-white/70 duration-200" >Spaces</Link>
            <Link href="/" className="hover:text-white/70 duration-200" >Services</Link>
            <Link href="/" className="hover:text-white/70 duration-200" >Contact</Link>
          </div>
        </div>
        <div className="col-span-5">
          <p className="font-semibold mb-6">Location</p>
          <iframe className="rounded-2xl w-full" src="https://maps.app.goo.gl/1m8CFrrJbYpYsbZK7" frameborder="0"></iframe>
        </div>
      </section>
    </footer>
  );
};
