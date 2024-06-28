// import * as React from "react";
import React from "react";
import "../Styles/Career_hero.css"
import RotatingParagraphs from "./RotatingParagraphs";
import Learninnovategrow from "./Learninnovategrow";
import CareerLIG from "./CareerLIG";
import CareerNavbar from "./CareerNavbar";
const Career_hero = () => {
    return (


        <>
        
        <div className="flex flex-col items-center pb-20 bg-black">
      


        {/*                           Career_hero page                    */}



      <div className="mt-24 w-full max-w-[1288px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-[57%] max-md:ml-0 max-md:w-full">
            <div className="flex flex-col px-5 mt-24 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col text-7xl max-md:max-w-full max-md:text-4xl">
                <div class="spectov" >
                  SpectoV{" "}
                </div>
                <div className="mt-3 text-white max-md:max-w-full max-md:text-4xl">
                  Training Program
                </div>
              </div>
              <div className="mt-12 text-2xl text-white max-md:mt-10 max-md:max-w-full">
                Bridging Silence, Building Connections
              </div>
              <div className="shrink-0 mt-12 h-px max-md:mt-10 max-md:max-w-full" />
              <a href="#course" className="flex items-center">
              <div className="flex gap-4 self-start px-9 py-3.5 mt-12 text-xl text-white rounded-3xl border-cyan-400 border-solid border-[0.777px] max-md:px-5 max-md:mt-10">
              
                <div className="grow my-auto">Get Started</div>
                <img
                  loading="lazy"
                  src="https://cdn.builder.io/api/v1/image/assets/TEMP/2b16b2c587a5fbb83cbe4ad4dccb7e59240b0cadde6fb42b32314bd26172f340?apiKey=9a257399887b42c7b87198aa88395e96&"
                  className="shrink-0 aspect-square w-[19px]"
                />
            
              </div>
              </a>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-[43%] max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/ecd6457dd4b370b5c0afd16ad379976724a79a6e00ea71b48f8ce086ae69a61d?apiKey=9a257399887b42c7b87198aa88395e96&"
              className="grow w-full aspect-[1.04] max-md:mt-7 max-md:max-w-full"
            />
          </div>
        </div>
      </div>


       {/*                                       microsoft section  */}


      {/* <div className="mt-20 text-xl text-center text-white max-md:mt-10 max-md:max-w-full">
        Proud to be patner with Microsoft
      </div> */}
      <img
        loading="lazy"
        src="ms.png"
        className="mt-10"
        // className="mt-10 w-full aspect-[5.26] max-w-[1237px] max-md:mt-10 max-md:max-w-full"
        style={{ width: 'full', height: 'auto' }}
      />


      {/*                                           two more section                 */}
      <div className="mt-20 text-xl text-center text-white max-md:mt-10 max-md:max-w-full">
        Trusted by the world’s most ambitious teams.
      </div>
      
      



       
      

      {/* <Learninnovategrow/> */}
      <CareerLIG/>
      <RotatingParagraphs/>
       {/*                          
       
       
                --------------------------         other section   -------------------------------  
       
       
       */}
      
     
    </div>
        
        </>
    );
    };
    
export default Career_hero;


