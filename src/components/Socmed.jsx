"use client";

import React, { useState, useEffect } from "react";
import { HeaderSection } from "./common/HeaderSection";
import { FaInstagram } from "react-icons/fa6";
import { ArrowButton } from "./common/ArrowButton";
import { Button } from "./ui/button";

const reelsVideo = [
  {
    src: "/assets/videos/go-space-nesya.mp4",
    alt: "Go Space Trailer",
    igUrl: "https://www.instagram.com/reel/DOIuUSzkv4o",
  },
  {
    src: "/assets/videos/go-space-gilang.mp4",
    alt: "Go Space Co Working Space",
    igUrl: "https://www.instagram.com/reel/DOKujxCEupr",
  },
  {
    src: "/assets/videos/go-space-gepoy.mp4",
    alt: "Go Space Meeting Room",
    igUrl: "https://www.instagram.com/reel/DSe0wPSkkPZ",
  },
];

export const Socmed = () => {
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
          title={"Follow Us On IG"}
          desc={
            "Ikuti official instagram kami untuk mendapatkan update terbaru seputar Go Space"
          }
        />

        {/* GRID */}
        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
          {reelsVideo.map((item, idx) => (
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
                <span>Follow on Instagram</span>
            </Button>
        </div>
      </section>

      {/* MODAL */}
      {isModalOpen && selectedVideo && (
        <div className="fixed  inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
          <div className="relative w-full max-w-sm mx-4 animate-scaleIn">
            {/* close */}
            <div className="flex justify-end mb-3" >
              <button
                onClick={closeModal}
                className="bg-red-500/70 backdrop-blur-md text-white hover:bg-white/10 py-2 px-3.5 rounded-full"
              >
                ✕
              </button>
            </div>

            <div className="overflow-hidden rounded-main bg-black rounded-3xl">
              <video
                src={selectedVideo.src}
                autoPlay
                loop
                muted
                controls
                className="w-full h-[75vh] object-cover"
              />
            </div>

            <div className="w-full flex justify-center items-center mt-5">
              <ArrowButton
                label={"Open on instagram"}
                isAnchor={true}
                path={selectedVideo.igUrl}
                variant={"dark"}
              />
            </div>
          </div>

          {/* backdrop click */}
          <div className="absolute inset-0 -z-10" onClick={closeModal} />
        </div>
      )}

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
