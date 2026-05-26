export const serviceSlugs = [
  "virtual-office",
  "pendirian-pt",
  "pendirian-cv",
  "web-development",
];

export const serviceAssets = {
  "virtual-office": {
    imageSrc: "/assets/banner-image-main.jpg",
    externalUrl:
      "https://api.whatsapp.com/send/?phone=628871510044&text=Halo%2C+saya+tertarik+dengan+layanan+Virtual+Office+Go+Space&type=phone_number&app_absent=0",
  },
  "pendirian-pt": {
    imageSrc: "/assets/illustrations/pendirian-pt.svg",
    externalUrl: "https://www.ganeshaconsulting.co.id/pendirian-pt",
  },
  "pendirian-cv": {
    imageSrc: "/assets/illustrations/pendirian-cv.svg",
    externalUrl: "https://www.ganeshaconsulting.co.id/pendirian-cv",
  },
  "web-development": {
    imageSrc: "/assets/illustrations/website.svg",
    externalUrl: "https://www.ganeshaconsulting.co.id/web-development",
  },
};

export const isServiceSlug = (slug) => serviceSlugs.includes(slug);
