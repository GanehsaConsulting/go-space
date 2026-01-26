"use client";

import { useEffect } from "react";
import { createPortal } from "react-dom";
import { ArrowButton } from "../common/ArrowButton";

export const Reels = ({ open, video, onClose }) => {
  // esc close
  useEffect(() => {
    if (!open) return;

    const handleEsc = (e) => {
      if (e.key === "Escape") onClose();
    };

    window.addEventListener("keydown", handleEsc);
    return () => window.removeEventListener("keydown", handleEsc);
  }, [open, onClose]);

  if (!open || !video) return null;

  return createPortal(
    <div className="fixed inset-0 z-[9999] flex items-center justify-center bg-black/40 backdrop-blur-sm">
      <div className="relative w-full max-w-sm mx-4 animate-scaleIn">
        {/* close */}
        <div className="flex justify-end mb-3">
          <button
            onClick={onClose}
            className="bg-red-500/70 backdrop-blur-md text-white hover:bg-white/10 py-2 px-3.5 rounded-full"
          >
            ✕
          </button>
        </div>

        <div className="overflow-hidden rounded-main bg-black rounded-3xl">
          <video
            src={video.src}
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
            path={video.igUrl}
            variant={"dark"}
          />
        </div>
      </div>

      {/* backdrop click */}
      <div className="absolute inset-0 -z-10" onClick={onClose} />

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
    </div>,
    document.body
  );
};
