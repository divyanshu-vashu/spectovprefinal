import sankalp from "../assets/sankalp.png";
import DVideo from "../assets/Bridging Silence, Building Connections.mp4"
import DVideoMobile from "../assets/SpectovM.mp4"; 
import React, { useState, useEffect } from "react";
    

// import msimg from '../assets/MS_Startups_Celebration_Badge_Light.png'
const Sankalp = () => {
    const [videoSrc, setVideoSrc] = useState(DVideo);
  
    useEffect(() => {
      const handleResize = () => {
        if (window.matchMedia('(max-width: 768px)').matches) {
          setVideoSrc(DVideoMobile);
        } else {
          setVideoSrc(DVideo);
        }
      };
  
      handleResize(); 
      window.addEventListener('resize', handleResize); 
  
      return () => {
        window.removeEventListener('resize', handleResize); 
      };
    }, []);
  return (
    <>
    <div className="container mx-auto p-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <img src={sankalp} alt="Sankalp image" className="mt-9 rounded-lg w-full max-w-full object-contain" style={{ borderRadius: '15px' }} />
      </div>
      <div className="container mx-auto p-12" style={{ display: "flex", justifyContent: "center", alignItems: "center" }}>
            <video src={videoSrc} controls autoPlay loop muted className="mt-2 rounded-lg w-full max-w-full object-contain " style={{ borderRadius: '15px' }} />
      </div>
    
    </>
  )
}

export default Sankalp