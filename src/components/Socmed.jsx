"use client";

import React, { useState, useEffect } from "react";
import { useTranslations } from "next-intl";
import { HeaderSection } from "./common/HeaderSection";
import { FaInstagram } from "react-icons/fa6";
import { Button } from "./ui/button";
import { Reels } from "./modals/Reels";

const reelsVideo = [
  {
    src: "/assets/videos/go-space-nesya.mp4",
    igUrl: "https://www.instagram.com/reel/DOIuUSzkv4o",
  },
  {
    src: "/assets/videos/go-space-gilang.mp4",
    igUrl: "https://www.instagram.com/reel/DOKujxCEupr",
  },
  {
    src: "/assets/videos/go-space-gepoy.mp4",
    igUrl: "https://www.instagram.com/reel/DSe0wPSkkPZ",
  },
];

export const Socmed = () => {
  const t = useTranslations("socmed");
  const videos = reelsVideo.map((video, index) => ({
    ...video,
    alt: t.raw("videos")[index],
  }));
  const [selectedVideo, setSelectedVideo] = useState(null);
  const [isModalOpen, setIsModalOpen] = useState(false);

  // lock scroll
  useEffect(() => {
    if (isModalOpen) {
      const original = document.body.style.overflow;
      document.body.style.overflow = "hidden";
      return () => {
        document.body.style.overflow = original;
      };
    }
  }, [isModalOpen]);

  const openModal = (video) => {
    setSelectedVideo(video);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setTimeout(() => setSelectedVideo(null), 300);
  };

  return (
    <>
      <section className="margin">
        <HeaderSection
          title={t("title")}
          desc={t("description")}
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {videos.map((item, idx) => (
            <div
              key={idx}
              onClick={() => openModal(item)}
              className="relative rounded-2xl cursor-pointer overflow-hidden rounded-main aspect-[12/16] hover:scale-[1.03] transition-transform duration-300"
            >
              <video
                src={item.src}
                autoPlay
                loop
                muted
                playsInline
                className="w-full h-full object-cover"
              />

              {/* gradient */}
              <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-black/10 to-transparent" />

              {/* IG icon */}
              <div className="absolute top-3 right-3 bg-black/50 p-2 rounded-full">
                <FaInstagram className="text-white text-xl" />
              </div>
            </div>
          ))}
        </div>
        
        <div className="mt-11 flex justify-center" >
            <Button className={"rounded-full text-white bg-linear-to-tr py-6 px-5 text-sm from-[#FCD06A] via-[#DD2A7B] to-[#8034B0] "} >
                <span> <FaInstagram/> </span>
                <span>{t("follow")}</span>
            </Button>
        </div>
      </section>

     {/* MODAL */}
      <Reels
        open={isModalOpen}
        video={selectedVideo}
        onClose={closeModal}
      />

      <style jsx>{`
        @keyframes scaleIn {
          from {
            opacity: 0;
            transform: scale(0.9) translateY(20px);
          }
          to {
            opacity: 1;
            transform: scale(1) translateY(0);
          }
        }
        .animate-scaleIn {
          animation: scaleIn 0.35s ease-out both;
        }
      `}</style>
    </>
  );
};
