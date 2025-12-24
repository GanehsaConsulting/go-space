"use client";

import { useRef, useState } from "react";
import { GoArrowUpRight } from "react-icons/go";
import { FcGoogle } from "react-icons/fc";
import { RiChatSmile2Fill } from "react-icons/ri";
import { HiVolumeUp, HiVolumeOff } from "react-icons/hi";
import { FaPlay, FaPause } from "react-icons/fa";
import { HeaderSection } from "./common/HeaderSection";
import { Button } from "./ui/button";

const testimonials = [
  {
    rating: 5,
    text: "Pelayanan nya ramah, harga nyaterjangkau, kuota jam ruang meetingnya banyak, sgt recommended👍",
    name: "muhammad adji novantri",
  },
  {
    rating: 5,
    text: "mantap meeting room nya ada yg smooking room, resepsionisnya juga ramah",
    name: "Melia wati",
  },
  {
    rating: 5,
    text: "salah satu virtual office dengan harga paling affordable apalagi dengan lokasi nya yang strategis di mampang, jaksel. sangat recommended",
    name: "M Faisal Ilham",
  },
];

export function ClientReview() {
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
        title="Client Reviews"
        desc="Apa pendapat/testimoni dari mereka setelah memakai dan menggunakkan ruang meeting dari Go Space"
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
              aria-label={isPlaying ? "Pause video" : "Play video"}
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
              aria-label={isMuted ? "Unmute video" : "Mute video"}
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
          {testimonials.map((testimonial, index) => (
            <div
              key={index}
              className="relative overflow-hidden bg-neutral-200 group hover:bg-blue-100 transition duration-300 cursor-pointer rounded-t-3xl rounded-bl-2xl"
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
                  "{testimonial.text}"
                </p>
                {/* Author Info */}
                <div className="flex items-center gap-3">
                  <div className="rounded-full bg-gray-300 flex items-center justify-center text-gray-600 p-1.5">
                    <FcGoogle className="text-2xl" />
                  </div>
                  <div>
                    <p className="font-semibold text-xs">{testimonial.name}</p>
                    <p className="text-xs text-neutral-500">
                      Review On Google Maps
                    </p>
                  </div>
                </div>
              </div>

              <div className="absolute right-0 bottom-0">
                <div className="bg-white rounded-out-rt-2xl" ></div>
                <div className="bg-white rounded-out-bl-2xl" ></div>
                <div className=" ps-2 pt-2 rounded-tl-3xl bg-white">
                  <div className="bg-neutral-700 text-white group-hover:bg-neutral-900 group-hover:text-white p-2 rounded-full">
                    <GoArrowUpRight className="text-lg" />
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      {/* bottominfo */}
      <div className="flex items-center justify-between text-neutral-700 mt-6">
        <div className="flex items-center gap-4 text-sm">
          <p>
            Mayoritas klien puas setelah <br /> menggunakkan Ruang Meeting Go
            Space
          </p>
          <RiChatSmile2Fill className="text-xl" />
          <div>
            <div className="space-x-1">
              <span className="text-yellow-500">★★★★★</span>
              <span>5.0</span>
            </div>
            <div>Based on 17 Reviews</div>
          </div>
        </div>
        \
        <Button className={"rounded-full py-6 px-2 ps-4"}>
          <div>View all reviews</div>
          <div className="bg-white bg-neutral-800 text-neutral-900 p-2 rounded-full">
            <GoArrowUpRight className="text-lg" />
          </div>
        </Button>
      </div>
    </section>
  );
}
