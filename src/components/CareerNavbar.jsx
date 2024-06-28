import React from 'react'

// import msimg from '../assets/MS_Startups_Celebration_Badge_Light.png'
const CareerNavbar = () => {
  return (
    <>
        <div className="flex justify-center items-center self-stretch p-2.5 w-full text-base text-neutral-100 max-md:px-5 max-md:max-w-full">
      <div className="flex gap-5 justify-between w-full max-w-[1194px] max-md:flex-wrap max-md:max-w-full">
        <a href="/" className="flex gap-0 items-center px-px whitespace-nowrap max-md:flex-wrap">
            <img
             loading="lazy"
             src="logo.svg"
             className="shrink-0 self-stretch my-auto max-w-full aspect-[3] w-[100px]"
             style={{ right: 0 }}
            />
            <span className="ml-2">SpectoV</span>
        </a>

          <div className="flex gap-3.5 pr-px pl-20 my-auto max-md:flex-wrap max-md:pl-5">
            
          <a href="/login" className="flex justify-center p-2">
            <div>Sign in</div>
        </a>
        <a href="/signup" className="flex flex-col justify-center self-start">
            <div className="justify-center p-2.5 rounded-lg border border-solid border-neutral-400">
                 Sign up
             </div>
        </a>

        </div>
        </div>
        </div>
       
    
    </>
  )
}

export default CareerNavbar




