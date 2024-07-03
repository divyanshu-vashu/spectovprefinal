import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import Timeline from "../components/Timeline";
import Demo from "../components/Demo";

import Career_hero from "../components/Career_hero";
import CareerNavbar from "../components/CareerNavbar";

import ai from "../assets/aibanner.png";
import appdev from "../assets/app_devBanner.png";
import ar from "../assets/arbanner.png";
import combodsaai from "../assets/combo_dsa_ai.png";
import combodsaweb from "../assets/combo_dsa_web.png";
import dsa from "../assets/dsabanner.png";
import fullstack from "../assets/fullstackbanner.png";
import special from "../assets/specialbanner.png";

let careers = [
  {
    id: 0,
    title: "SpectoV Special",
    price: 6500,
    subtitle:
      "combo of dsa , web dev ,AI , ,App dev our premium program  ar vr ",
    content: "Artificial Intelligence and Machine Learning",
    img: special,
  },
  {
    id: 1,
    title: "Artificial Intelligence ",
    price: 2500,
    subtitle: "Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: ai,
  },
  {
    id: 2,
    title: "Augmented Reality",
    price: 3000,
    subtitle: "Learn Blender, Learn how ar vr is made ",

    content: "Artificial Intelligence and Machine Learning",
    img: ar,
  },
  {
    id: 3,
    title: "Logic Building and DSA",
    price: 2500,
    subtitle: "This course in c++",
    content: "",
    img: dsa,
  },
  {
    id: 4,
    title: "DSA And Full Stack Dev",
    price: 4000,
    subtitle: "This course is combo of dsa and full stack Mern dev",
    content: "",
    img: combodsaweb,
  },
  {
    id: 5,
    title: "DSA And Artificial Int",
    price: 4000,
    subtitle:
      "This course is combo of DSA and Artificial Intelligence and Machine Learning",
    content: "Artificial Intelligence and Machine Learning",
    img: combodsaai,
  },
  {
    id: 6,
    title: "Full Stack Development",
    price: 2500,
    subtitle:
      "Learn Full Stack Development and Learn With Industry Experience ",
    content: "Learn Full Stack Development content",
    img: fullstack,
  },
  {
    id: 7,
    title: "App Development",
    price: 2500,
    subtitle: "Learn Flutter , Learn App Dev with Industry Leader",
    content: "Artificial Intelligence and Machine Learning",
    img: appdev,
  },
];

export default function CareerPage() {
  return (
    <div style={{ backgroundColor: "black" }}>
      <CareerNavbar />
      <Career_hero />
      <Timeline />

      {/* add componnet here  */}

      {/* harshanth , your work will chnage below code  */}
      {/* thanks this helps a lot */}

      <div>
        <h1 className="ml-5 mt-32 text-4xl font-bold text-white md:ml-24">
          Careers At SpectoV
        </h1>
        <div className="w-full flex justify-center">
			<div className="special h-full w-fit pl-10 pt-4 mt-8">
			  <div className="m-2 flex h-1/2 w-4/5 flex-col justify-between text-wrap rounded-2xl border-[1px] border-solid border-stone-600 bg-[#192027] p-5 sm:w-[98%]">
				<div>
				  <img className="h-fit rounded-md" src={special} alt="" />
				  <h1 className="text-md ml-2 pt-8 font-bold text-white md:text-3xl">
					Special
				  </h1>
				  <h2 className="ml-2 pt-2 text-sm text-white md:text-xl">
					This brings you the bunder of skill and happiness ; 
				  </h2>
				  <p className="ml-2 w-full text-wrap break-words pr-5 pt-2 text-xs text-white md:text-xs">
					If you are part of spectov special means , You means alot !!! We trained you from industry experience person and fundamental of our company 
				  </p>
				</div>
				<div className="flex w-full items-center justify-center">
				  <a className="mt-2 flex h-16 w-1/2 items-center justify-center rounded-xl bg-blue-600 text-white">
					Apply here
				  </a>
				</div>
			  </div>
			</div>
		</div>
      </div>
      <h1 className="ml-5 mt-16 text-4xl font-bold text-white md:ml-24">
        Our Other courses
      </h1>
      <div className="w-100 m-10 mb-0 ml-5 flex flex-wrap pb-10 text-white md:ml-20">
        {careers.map((career) => (
          <CareerCard
            key={career.id}
            item={career.id}
            title={career.title}
            // subtitle={career.subtitle}
            // content={career.content}
            img={career.img}
          />
        ))}
      </div>
    </div>
  );
}
