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
    { title: "Full Stack Developer", description: "Description for Paragraph 1 afdfasdddddddddddddddertegsregergegregsggerergdfsdddddddddddddddddddddddddddddd", image:fullstack},
    { title: "Competitve Programmer", description: "Description for Paragraph 2",image:cp },
    { title: "Artificial Intelligence", description: "Description for Paragraph 3" ,image:ai},
    { title: "App Dev", description: "Description for Paragraph 4",image:appdev },
    { title: "AR/VR", description: "Description for Paragraph 5",image:arvr }
  ];

  return (
    <div className="mt-24 w-full max-w-[1288px] max-md:mt-10 max-md:max-w-full">
        <div className="flex gap-5 max-md:flex-col max-md:gap-0">
          <div className="codehelp-container">
            <div className="left-section">
              <h2 className="who-are-we">Who are We</h2>
              <h1 className="main-title">Empowering Coders, Enabling Dreams</h1>
              <p className="description">
                Unveil the essence of CodeHelp: a community-driven platform dedicated to empowering coders of all levels. 
                Discover who we are and how we're shaping the future of coding education.
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