import React from "react";
import { HeaderSection } from "./common/HeaderSection";
import InstagramEmbed from "./InstagramEmbed";

export const Socmed = () => {
  return (
    <section>
      <HeaderSection
        title={"Follow Us On IG"}
        desc={
          "Ikuti official instagram kami untuk mendapatkan update terbaru seputar Go Space"
        }
        className={"px-24 pt-12"}
      />

      <div className="flex gap-4 px-4 sm:px-24 pb-20 overflow-x-auto scroll-smooth  scrollbar-hide hide-scrollbar">
        <InstagramEmbed url="https://www.instagram.com/reel/DOKujxCEupr/" />
        <InstagramEmbed url="https://www.instagram.com/p/DQyRFe9kimE/" />
        <InstagramEmbed url="https://www.instagram.com/reel/DSe0wPSkkPZ/" />
        <InstagramEmbed url="https://www.instagram.com/p/DRZUcnDkk6A/" />
        <InstagramEmbed url="https://www.instagram.com/reel/DR1nbUlEuEV/" />
        <InstagramEmbed url="https://www.instagram.com/p/DQG1x2WEp7o/" />
        <InstagramEmbed url="https://www.instagram.com/p/DTCmv97Ejtq/" />
        <InstagramEmbed url="https://www.instagram.com/p/DTPsmtbEsps/" />
      </div>
    </section>
  );
};
