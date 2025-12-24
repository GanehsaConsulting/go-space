import React from "react";
// import { HeaderSection } from "./common/HeaderSection";
import { SlLocationPin } from "react-icons/sl";
import { Button } from "./ui/button";
import { MdKeyboardArrowRight, MdKeyboardArrowLeft } from "react-icons/md";

export const WhyUs = () => {
  const data = [
    {
      title: "Strategic Location",
      description:
        "Our virtual offices are situated in prime locations in Jakarta Selatan, providing your business with a prestigious address that enhances credibility and accessibility.",
      icon: <SlLocationPin />,
    },
    {
      title: "Affordable Pricing",
      description:
        "We offer competitive pricing plans that cater to businesses of all sizes, ensuring you get the best value for your investment without compromising on quality or services.",
      icon: <SlLocationPin />,
    },
    {
      title: "Comprehensive Services",
      description:
        "From mail handling to call forwarding, our virtual office solutions come with a range of services designed to support your business operations seamlessly.",
      icon: <SlLocationPin />,
    },
    {
      title: "Flexible Solutions",
      description:
        "Our virtual office packages are customizable to meet your specific business needs, allowing you to scale services as your company grows.",
      icon: <SlLocationPin />,
    },
    {
      title: "Professional Support",
      description:
        "Our dedicated support team is always ready to assist you with any inquiries or issues, ensuring a smooth and hassle-free experience.",
      icon: <SlLocationPin />,
    },
  ];

  return (
    <section className=" bg-neutral-200/70 py-12">
      <div className="px-24 flex flex-col md:flex-row justify-between items-start md:items-center mb-12 gap-6">
        <div>
          <h2 className="text-4xl md:text-5xl font-bold text-gray-900 mb-4">
            Why Choose Us?
          </h2>
          <p className="text-gray-600 max-w-md text-start">
            Discover why Go Space stands out as the premier choice for virtual
            office solutions in Jakarta Selatan.
          </p>
        </div>
        <div className="flex items-center gap-3">
          <button
            className={
              "bg-white text-neutral-500 hover:bg-neutral-900 hover:text-white rounded-full p-3"
            }
          >
            <MdKeyboardArrowLeft className="text-3xl" />
          </button>

          <button
            className={
              "bg-white text-neutral-500 hover:bg-neutral-900 hover:text-white rounded-full p-3"
            }
          >
            <MdKeyboardArrowRight className="text-3xl" />
          </button>
        </div>
      </div>

      <div className="relative w-full" >
        <div className="flex gap-4 overflow-x-auto scrollbar-hide hide-scrollbar snap-x snap-mandatory scroll-smooth">
          {data.map((item, index) => (
            <div
              key={index}
              className="bg-white hover:bg-neutral-800 flex flex-col justify-between p-4 rounded-2xl w-70 h-80 cursor-pointer group  "
            >
              <div>
                <div className="bg-neutral-900 text-white group-hover:bg-white group-hover:text-neutral-900 w-fit p-3 rounded-full text-3xl transition duration-300 ">
                  {item.icon}
                </div>
              </div>
              <div className="group-hover:text-white">
                <p className="mb-3 font-bold text-xl  ">{item.title}</p>
                <p className="text-sm">{item.description}</p>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};
