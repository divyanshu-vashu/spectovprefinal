import React from 'react';

const CareerNavbar = () => {
  return (
    <>
      <div className="flex justify-center items-center p-2.5 w-full text-base text-neutral-100">
        <div className="flex gap-5 justify-between w-full max-w-[1194px] max-md:flex-wrap max-md:max-w-full max-md:gap-3">
          <a href="/" className="flex gap-0 items-center whitespace-nowrap max-md:flex-wrap">
            <img
              loading="lazy"
              src="logo.svg"
              className="shrink-0 w-[35px]"
              alt="logo"
            />
            <span className="ml-2 text-base md:text-lg lg:text-xl ">SpectoV</span>
          </a>
          <div className="flex gap-3.5 items-center max-md:gap-1">
            <a href="/login" className="flex justify-center items-center p-2 text-base md:text-lg lg:text-xl ">
              <div>Sign in</div>
            </a>
            <a href="/signup" className="flex justify-center items-center p-2.5 text-base md:text-lg lg:text-xl border border-solid border-neutral-400 rounded-lg">
              <div>Sign up</div>
            </a>
          </div>
        </div>
      </div>
    </>
  );
};

export default CareerNavbar;
