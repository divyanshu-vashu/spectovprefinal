import React from 'react';
import '../Styles/RotatingParagraphs.css';
// import Background from 'three/examples/jsm/renderers/common/Background.js';
import fullstack from '../assets/fullstack.png'
import arvr from '../assets/arvr.png'
import appdev from '../assets/appdev.png'
import ai from '../assets/ai.png'
import cp from '../assets/cp.png'

const RotatingParagraphs = () => {
  const paragraphs = [
    { title: "Full Stack Developer", description: "Our Full Stack Development team at Spectov excels in creating robust and scalable web applications. With expertise in both front-end and back-end technologies, our developers build seamless and efficient systems. Whether it's developing responsive interfaces or designing complex server-side logic, we ensure that our solutions meet the highest standards of performance and usability", image:fullstack},
    { title: "Competitve Programmer", description: "At Spectov, our focus on Data Structures and Algorithms ensures that our solutions are optimized for efficiency and performance. Our specialists employ advanced DSA techniques to solve complex problems, enabling faster processing and more effective resource management. This foundational expertise is crucial for developing high-performance applications and systems",image:cp },
    { title: "Artificial Intelligence", description: "At Spectov, we leverage the power of Artificial Intelligence to transform data into actionable insights. Our AI team specializes in developing intelligent systems that can automate processes, enhance decision-making, and deliver personalized experiences. From machine learning models to natural language processing, we are at the forefront of AI innovation." ,image:ai},
    { title: "App Dev", description: "Spectov’s App Development team is dedicated to creating user-friendly and high-performing mobile and web applications. We cover the entire development lifecycle, from concept and design to deployment and maintenance. Our apps are built with the latest technologies and best practices, ensuring they are secure, scalable, and tailored to meet our clients' specific needs.",image:appdev },
    { title: "AR/VR", description: "Spectov is pioneering the future with cutting-edge AR and VR technologies. Our experts create immersive experiences that blend the physical and digital worlds. From virtual training simulations to augmented reality applications, we provide innovative solutions that redefine how users interact with technology",image:arvr }
  ];

  return (
    <div className="mt-24 w-full max-w-[1288px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="codehelp-container">
            <div className="left-section">
              <h2 className="who-are-we">Who are We</h2>
              <h1 className="main-title">Empowering Coders, Enabling Dreams</h1>
              <p className="description">
              At SpectoV Pvt Ltd, we are committed to creating an environment that fosters innovation, learning, and professional growth. Our training programs are designed to bridge the gap between academic learning and industry requirements, ensuring our interns are well-prepared to tackle real-world challenges.
              </p>
              <button className="connect-button">Let's Connect</button>
            </div>
            <div className="right-section">
              <div className="sliding-container">
                {paragraphs.map((paragraph, index) => (
                  <div key={index} className="feature mt-50">
                    <div className="icon"> <img src={paragraph.image} alt={paragraph.title} /></div>
                    <div>
                      <h3>{paragraph.title}</h3>
                      <p className='description-grey'>{paragraph.description}</p>
                    </div>
                  </div>
                ))}
                {paragraphs.map((paragraph, index) => (
                  <div key={`duplicate-${index}`} className="feature mt-50">
                    <div className="icon"> <img src={paragraph.image} alt={paragraph.title} /></div>
                    <div>
                      <h3>{paragraph.title}</h3>
                      <p className='description-grey'>{paragraph.description}</p>
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </div>
      </div>
  );
};

export default RotatingParagraphs;