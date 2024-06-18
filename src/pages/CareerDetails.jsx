import React from "react";
import { useParams } from "react-router-dom";
import ctestimg from "../assets/careerCardTestImage.png";
import { Link } from "react-router-dom";
let careers = [
  {
    id: 0,
    title: "Full Stack Development",
    subtitle: "Learn Full Stack Development",
    content: "Learn Full Stack Development content",
    img: ctestimg,
  },
  {
    id: 1,
    title: "Artificial Intelligence and Machine Learning",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 2,
    title: "AR VR",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 3,
    title: "Logic Building and DSA",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 4,
    title: "Integrated 4+1",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 5,
    title: "Integrated 4+2",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
  {
    id: 6,
    title: "SpectoV Special",
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ctestimg,
  },
];

export default function CareerDetails() {
  const { item } = useParams();
  const career = careers.find((c) => c.id === parseInt(item));

  if (!career) {
    return <p>Career not found</p>;
  }

  return (
    <div className="items-center md:flex md:p-10">
          <Link
        className="absolute bg-blue-400 p-4 top-3 rounded-xl m-4 text-white"
        to={`/careers`}
      >
        Go Back
      </Link>
      <img className="w-full rounded-md md:w-1/2" src={career.img} alt="" />
      <div className="md:flex md:flex-col">
        <h1 className="p-5 pl-2 text-3xl font-bold text-black md:pl-5 md:text-4xl">
          {career.title}
        </h1>
        <h2 className="pl-2 text-xl text-black md:pl-5 md:text-xl">
          {career.subtitle}
        </h2>
        <p className="p-5 text-md w-full text-wrap break-words pr-5 pt-2 md:text-xs">
          {career.content}
        </p>
        <a
          className="ml-4 mt-2 block h-16 w-48 items-center justify-center rounded-xl bg-blue-600 py-4 text-center text-white"
          href="https://www.example.com"
        >
          Learn More
        </a>
      </div>
    </div>
  );
}
