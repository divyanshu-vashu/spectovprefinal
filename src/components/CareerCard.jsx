import React from "react";

export default function CareerCard(props) {
  return (
    <div className="border-grey bg-grey-200 m-2 flex h-fit w-72 flex-col justify-between text-wrap rounded-2xl border-2 border-solid p-5">
      <div>
        <img className="w-full rounded-md" src={props.img} alt="" />
        <h1 className="text-md ml-2 pt-8 font-bold text-black md:text-3xl">
          {props.title}
        </h1>
        <h2 className="ml-2 pt-2 text-sm text-black md:text-xl">
          {props.subtitle}
        </h2>
        <p className="ml-2 w-full text-wrap pt-2 break-words pr-5 text-xs md:text-xs">
          {props.content}
        </p>
      </div>
      <a
        href="https://example.com"
        className="mt-2 flex h-16 w-full items-center justify-center rounded-xl bg-blue-600 text-white"
      >
        Press to enroll
      </a>
    </div>
  );
}
