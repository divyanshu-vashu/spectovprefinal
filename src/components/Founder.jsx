import React from "react";
import FounderImage from "../assets/FounderImage.png";
import { motion } from "framer-motion";
import { slideIn } from "../utils/motion";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

export default function Founder() {
  const settings = {
    infinite: true,
    dots: true,
    speed: 500,
    slidesToShow: 1,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 2000,
    pauseOnHover: true,
  };

  return (
    <motion.div
      variants={slideIn("right", "tween", 0.2, 1)}
      className="h-[350px] md:h-[550px] xl:h-auto xl:flex-1"
    >
      <Slider {...settings} className="mb-20 ml-10 w-4/5 md:ml-48">
        <div className="relative h-fit w-full rounded-3xl bg-indigo-950 text-white md:flex md:h-[30rem]">
          <img
            className="object-contain md:h-full md:w-1/2"
            src={FounderImage}
            alt="John Doe"
          />
          <div className="flex h-full w-full items-center md:absolute md:left-0 md:top-0">
            <div className="p-10 md:ml-[50%] md:w-1/2">
              <h1 className="mb-5 text-5xl">Vanshmani Jha</h1>
              <h3 className="mb-5 text-3xl">Founder of SpectoV</h3>
              <p>
                Founding SpectoV was my bold step to revolutionize virtual
                reality and enhance human experiences. Despite challenges, I
                built a dynamic, collaborative workspace, valuing every team
                member. SpectoV’s rapid growth in VR solutions and strategic
                partnerships showcases our determination and innovation. We’re
                excited about the future and pushing VR boundaries further.
              </p>
            </div>
          </div>
        </div>
        <div className="relative h-fit w-full rounded-3xl bg-indigo-950 text-white md:flex md:h-[30rem]">
          <div className="ml-8 mt-8 aspect-square h-full w-fit md:h-full md:w-1/2">
            <img
              className="rounded-full object-contain"
              src="/shivang.jpeg"
              alt="John Doe"
            />
          </div>
          <div className="flex h-full w-full items-center md:absolute md:left-0 md:top-0">
            <div className="p-10 md:ml-[50%] md:w-1/2">
              <h1 className="mb-5 text-5xl">Shivang</h1>
              <h3 className="mb-5 text-3xl">Director of SpectoV</h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="relative h-fit w-full rounded-3xl bg-indigo-950 text-white md:flex md:h-[30rem]">
          <div className="ml-8 mt-8 h-fit w-fit md:h-96 md:w-1/2">
            <img
              className="w-4/5 rounded-full md:w-2/4"
              src="/52792.jpg"
              alt="John Doe"
            />
          </div>
          <div className="flex h-full w-full items-center md:absolute md:left-0 md:top-0">
            <div className="p-10 md:ml-[50%] md:w-1/2">
              <h1 className="mb-5 text-2xl md:text-3xl">
                Dr.Vijayaprabakaran K{" "}
              </h1>
              <h3 className="mb-5 text-lg md:text-3xl">
                Board Member of SpectoV
              </h3>
              <p></p>
            </div>
          </div>
        </div>
        <div className="relative h-fit w-full rounded-3xl bg-indigo-950 text-white md:flex md:h-[30rem]">
          <div className="ml-16 mt-16 aspect-square w-full md:ml-8 md:mt-8 md:h-full md:w-1/2">
            <img
              className="w-4/5 rounded-full md:w-2/4"
              src="/anj.jpg"
              alt="John Doe"
            />
          </div>
          <div className="flex h-full w-full items-center md:absolute md:left-0 md:top-0">
            <div className="p-10 md:ml-[50%] md:w-1/2">
              <h1 className="mb-5 text-5xl">Anjaneya </h1>
              <h3 className="mb-5 text-3xl">Director of SpectoV</h3>
              <p>
                Lorem, ipsum dolor sit amet consectetur adipisicing elit. Sed
                placeat minima dolor quisquam doloribus rem adipisci dolorem
                temporibus ipsum nulla itaque, illo deserunt iure consectetur
                fuga ut veniam quis voluptatum?
              </p>
            </div>
          </div>
        </div>
      </Slider>
    </motion.div>
  );
}
