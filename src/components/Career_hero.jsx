// import * as React from "react";
import React from "react";
import "../Styles/Career_hero.css"
import RotatingParagraphs from "./RotatingParagraphs";
const Career_hero = () => {
    return (


        <>
        
<div className="flex flex-col items-center pb-20 bg-black">
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
      <div className="mt-40 w-full max-w-[1241px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col grow mt-11 max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-start px-5 text-4xl">
                <div class="spectov">
                  AI Marketing
                </div>
                <div className="mt-3 text-white">Optimized Reach</div>
              </div>
              <div className="px-2.5 pt-2.5 mt-6 text-xl leading-10 text-blue-600 max-md:mr-2.5 max-md:max-w-full">
                DOML is a digital media agency powered by AI technology
                providing real time,{" "}
                <span className="font-bold text-blue-600">
                  data-driven insights{" "}
                </span>
                on your business and audience. The mission of DOML is to create
                the best experiences for companies through intelligent insights,
                powerful analytics and{" "}
                <span className="font-bold text-blue-600">
                  strategic execution
                </span>
                .
              </div>
              <div className="flex flex-col justify-center p-2.5 mt-6 max-md:max-w-full">
                <div className="shrink-0 h-px max-md:max-w-full" />
              </div>
              <div className="flex flex-col justify-center px-9 py-2.5 mt-6 max-w-full text-xl text-white rounded-3xl border-cyan-400 border-solid border-[0.777px] w-[219px] max-md:px-5">
                <div className="flex gap-4 py-1">
                  <div className="flex-auto my-auto">Learn more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/06fbcceb09c3643a78f491e3d820724ea0228ce9735fa1dfe67d3e899ff70dbd?apiKey=9a257399887b42c7b87198aa88395e96&"
                    className="shrink-0 aspect-square w-[19px]"
                  />
                </div>
              </div>
            </div>
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/2d69584c61efd7c5f75b982f3c8f729eb22852d4dcd9c74380ef4b0c8c1e0a6e?apiKey=9a257399887b42c7b87198aa88395e96&"
              className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
        </div>
      </div>
      <div className="mt-44 w-full max-w-[1273px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="flex flex-col w-6/12 max-md:ml-0 max-md:w-full">
            <img
              loading="lazy"
              srcSet="https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=100 100w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=200 200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=400 400w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=800 800w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=1200 1200w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=1600 1600w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&width=2000 2000w, https://cdn.builder.io/api/v1/image/assets/TEMP/e538c3387357881fc20af0eefe3390acbfd5c9cc3770455388eeff5f708449e9?apiKey=9a257399887b42c7b87198aa88395e96&"
              className="w-full aspect-square max-md:mt-10 max-md:max-w-full"
            />
          </div>
          <div className="flex flex-col ml-5 w-6/12 max-md:ml-0 max-md:w-full">
            <div className="flex flex-col self-stretch my-auto max-md:mt-10 max-md:max-w-full">
              <div className="flex flex-col self-start px-5 text-4xl">
                <div class="spectov">
                  AI Marketing
                </div>
                <div className="mt-3 text-white">Optimized Reach</div>
              </div>
              <div className="px-2.5 pt-2.5 mt-6 text-xl leading-10 text-blue-600 max-md:mr-2.5 max-md:max-w-full">
                It's all about getting your message in front of the right
                audience and creating those valuable{" "}
                <span className="font-bold text-blue-600">relationships</span>.
                Learn More about how DOML can help you do just that - all with a
                simple, easy-to-use platform.
              </div>
              <div className="flex flex-col justify-center p-2.5 mt-6 max-md:max-w-full">
                <div className="shrink-0 h-px max-md:max-w-full" />
              </div>
              <div className="flex flex-col justify-center px-9 py-2.5 mt-6 max-w-full text-xl text-white rounded-3xl border-cyan-400 border-solid border-[0.777px] w-[219px] max-md:px-5">
                <div className="flex gap-4 py-1">
                  <div className="flex-auto my-auto">Learn more</div>
                  <img
                    loading="lazy"
                    src="https://cdn.builder.io/api/v1/image/assets/TEMP/845fbff86283eb157f23f21eb389bc4a12fa29c03cf8dbe173491a1ba5a6b704?apiKey=9a257399887b42c7b87198aa88395e96&"
                    className="shrink-0 aspect-square w-[19px]"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>


       
      </div>
      <RotatingParagraphs/>
       {/*                          
       
       
                --------------------------         other section   -------------------------------  
       
       
       */}
      
     
    </div>
        
        </>
    );
    };
    
export default Career_hero;


