"use client";

import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { RiChatSmile2Fill } from "react-icons/ri";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { FaPlay, FaPause } from "react-icons/fa";
import { useTranslations } from "next-intl";
import { HeaderSection } from "./common/HeaderSection";
import { Link } from "@/i18n/routing";
import { ArrowButton } from "./common/ArrowButton";

const testimonials = [
  {
    rating: 5,
    url: "https://maps.app.goo.gl/QmvBb6xQbYj4TpsL7",
  },
  {
    rating: 5,
    url: "https://maps.app.goo.gl/HQYuzSY6EPXbGqs49",
  },
  {
    rating: 5,
    url: "https://maps.app.goo.gl/SptHVgdVmrQadvnC8",
  },
];

export function ClientReview() {
  const t = useTranslations("clientReview");
  const localizedTestimonials = testimonials.map((testimonial, index) => ({
    ...testimonial,
    ...t.raw("testimonials")[index],
  }));
  const videoRef = useRef(null);
  const [isMuted, setIsMuted] = useState(true);
  const [isPlaying, setIsPlaying] = useState(true);

  const toggleMute = () => {
    if (videoRef.current) {
      videoRef.current.muted = !videoRef.current.muted;
      setIsMuted(!isMuted);
    }
  };

  const togglePlay = () => {
    if (videoRef.current) {
      if (isPlaying) {
        videoRef.current.pause();
      } else {
        videoRef.current.play();
      }
      setIsPlaying(!isPlaying);
    }
  };

  return (
    <section className="margin">
      <HeaderSection
        title={t("title")}
        desc={t("description")}
      />

      <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
        {/* Left side - Image/Video Section */}
        <div className="relative rounded-3xl overflow-hidden bg-black min-h-[400px] lg:min-h-full">
          <video
            ref={videoRef}
            src="/assets/videos/go-space-testi.mp4"
            className="absolute inset-0 w-full h-full object-cover"
            autoPlay
            loop
            muted
            playsInline
            preload="auto"
          />

          {/* Video Controls */}
          <div className="absolute bottom-4 right-4 flex gap-2">
            {/* Play/Pause Button */}
            <button
              onClick={togglePlay}
              className="bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label={isPlaying ? t("pauseVideo") : t("playVideo")}
            >
              {isPlaying ? (
                <FaPause className="text-neutral-800 text-sm" />
              ) : (
                <FaPlay className="text-neutral-800 text-sm ml-0.5" />
              )}
            </button>

            {/* Mute/Unmute Button */}
            <button
              onClick={toggleMute}
              className="bg-white/90 hover:bg-white p-3 rounded-full transition-all duration-200 shadow-lg"
              aria-label={isMuted ? t("unmuteVideo") : t("muteVideo")}
            >
              {isMuted ? (
                <HiVolumeOff className="text-neutral-800 text-lg" />
              ) : (
                <HiVolumeUp className="text-neutral-800 text-lg" />
              )}
            </button>
          </div>
        </div>

        {/* Right side - Testimonials */}
        <div className="flex flex-col gap-6 relative">
          {localizedTestimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-neutral-200 dark:bg-neutral-800 group hover:bg-blue-100 dark:hover:bg-blue-900 transition duration-300 rounded-t-3xl rounded-bl-2xl"
            >
              {/* atas */}
              <div className="p-5">
                {/* Star Rating */}
                <div className="flex gap-1 mb-4 text-yellow-500">
                  {[...Array(5)].map((_, i) => (
                    <span key={i}>
                      {i < Math.floor(testimonial.rating)
                        ? "★"
                        : i < testimonial.rating
                        ? "½"
                        : "☆"}
                    </span>
                  ))}
                </div>

                {/* Testimonial Text */}
                <p className="mb-6 text-sm leading-relaxed">
                  &ldquo;{testimonial.text}&rdquo;
                </p>
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-300 flex items-center justify-center text-gray-600 p-1.5">
                    <FcGoogle className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500 dark:text-gray-400">
                      {t("googleMaps")}
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 bottom-0">
                <div className="bg-white dark:bg-black rounded-out-rt-2xl"></div>
                <div className="bg-white dark:bg-black rounded-out-bl-2xl"></div>
                <div className=" ps-2 pt-2 rounded-tl-3xl bg-white dark:bg-black">
                  <Link href={testimonial?.url} target="_blank">
                    <div className="bg-main group-hover:bg-blue-300 text-white group-hover:text-white dark:group-hover:bg-blue-900 p-2 rounded-full">
                      <GoArrowUpRight className="text-lg" />
                    </div>
                  </Link>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottominfo */}
      <div className="flex items-center justify-between text-neutral-700 dark:text-gray-200 mt-6">
        <div className="hidden sm:flex items-center gap-4 text-sm">
          <p>
            {t("summary")}
          </p>
          <RiChatSmile2Fill className="text-xl" />
          <div>
            <div className="space-x-1">
              <span className="text-yellow-500">★★★★★</span>
              <span>5.0</span>
            </div>
            <div>{t("basedOn")}</div>
          </div>
        </div>
        
        <ArrowButton
          label={t("viewAll")}
          isAnchor={true}
          path={
            "https://www.google.com/maps/place/GoSpace+Mampang/@-6.2556833,106.8279946,17z/data=!4m18!1m9!3m8!1s0x20f6bfe9853dcfa3:0x2ccb583ad9c6ca1b!2sGoSpace+Mampang!8m2!3d-6.2556833!4d106.8279946!9m1!1b1!16s%2Fg%2F11yhqv_71y!3m7!1s0x20f6bfe9853dcfa3:0x2ccb583ad9c6ca1b!8m2!3d-6.2556833!4d106.8279946!9m1!1b1!16s%2Fg%2F11yhqv_71y?entry=ttu&g_ep=EgoyMDI1MTIwOS4wIKXMDSoKLDEwMDc5MjA2OUgBUAM%3D"
          }
          variant={"dark"}
        />
      </div>
    </section>
  );
}
