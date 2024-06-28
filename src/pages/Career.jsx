import CareerCard from "../components/CareerCard";
import { Navbar } from "../components/";
import ctestimg from "../assets/careerCardTestImage.png";
import Timeline from "../components/Timeline";
import Demo from "../components/Demo";

import Career_hero from "../components/Career_hero";
import CareerNavbar from "../components/CareerNavbar";

let careers = [
	{
		id: 0,
	  title: "SpectoV Special",
	  price:6500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	  
	},
	{
	  id: 1,
	  title: "Artificial Intelligence ",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 2,
	  title: "Augmented Reality",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 3,
	  title: "Logic Building and DSA",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 4,
	  title: "DSA And Web ",
	  price:4000,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
	  id: 5,
	  title: "DSA And AI",
	  price:4000,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
	{
		id: 6,
		title: "Full Stack Development",
		price:2500,
		subtitle: "Learn Full Stack Development",
		content: "Learn Full Stack Development content",
		img: ctestimg,
	},
	{
	  id: 7,
	  title: "App Development",
	  price:2500,
	  subtitle: "Artificial Intelligence and Machine Learning",
	  content: "Artificial Intelligence and Machine Learning",
	  img: ctestimg,
	},
  ];

  

export default function CareerPage() {
  return (
    <div style={{ backgroundColor: 'black' }}>
    <CareerNavbar/>
    <Career_hero />
    <Timeline />

      {/* add componnet here  */}

      {/* harshanth , your work will chnage below code  */}
      {/* thanks this helps a lot */}

      <div>
        <h1 className="ml-5 mt-32 text-4xl font-bold text-white md:ml-24">
          Careers At SpectoV
        </h1>
        <div className="special h-full w-[96%] pt-4 pl-10">
          <div className="border-stone-600 bg-[#192027] h-1/2 m-2 flex w-[4/5] flex-col justify-between text-wrap rounded-2xl border-[1px] border-solid p-5 sm:w-[98%]">
            <div>
              <img className="h-fit rounded-md" src={ctestimg} alt="" />
              <h1 className="text-md ml-2 pt-8 font-bold text-white md:text-3xl">
                Special
              </h1>
              <h2 className="ml-2 pt-2 text-sm text-white md:text-xl">
                This is special course or something idk
              </h2>
              <p className="ml-2 w-full text-wrap break-words pr-5 pt-2 text-xs text-white md:text-xs">
                blah blah blah blah blah special
              </p>
            </div>
            <div className="w-full flex items-center justify-center">
              <a className="mt-2 flex h-16 w-1/2 items-center justify-center rounded-xl bg-blue-600 text-white">
                Apply here
              </a>
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
            content={career.content}
            img={career.img}
          />

        ))}
      </div>
    </div>
  );
}
