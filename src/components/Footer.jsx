import React, { useEffect, useRef } from 'react';
import Typed from 'typed.js';
import '../Styles/Footer.css';

const Footer = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const strings = ['#YouTube', '#Instagram', '#Twitter', '#LinkedIn'];
    const colors = ['youtube', 'instagram', 'twitter', 'linkedin'];

    const typed = new Typed(typedEl.current, {
      strings: strings.map((string, index) => `<span class="${colors[index]}">${string}</span>`),
      typeSpeed: 50,
      backSpeed: 50,
      loop: true,
    });

    return () => {
      typed.destroy();
    };
  }, []);

  return (
    <>
      <section className="access">
        <div className="footer-container text-black bg-white">
          <h1 className="h1">Join us on</h1>
          <p className="type"><span ref={typedEl} /></p>
          <div className="footer-socialmedia">
            <div className="footer-socialmedia-link">
              <a href="https://www.youtube.com/@SpectoV" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/wired/64/000000/youtube.png" alt="YouTube" />
                <p className="pt-3">YouTube</p>
              </a>
            </div>
            <div className="footer-socialmedia-link">
              <a href="https://www.instagram.com/spectov_official/" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/dotty/64/000000/instagram.png" alt="Instagram" />
                <p className="pt-3">Instagram</p>
              </a>
            </div>
            <div className="footer-socialmedia-link">
              <a href="https://wa.me/917042860263" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/wired/64/000000/whatsapp.png" alt="Whatsapp" />
                <p className="pt-3">Whatsapp</p>
              </a>
            </div>
            <div className="footer-socialmedia-link">
              <a href="https://www.linkedin.com/company/specto-v/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
                <img src="https://img.icons8.com/ios/64/000000/linkedin.png" alt="LinkedIn" />
                <p className="pt-3">LinkedIn</p>
              </a>
            </div>
          </div>
        </div>
      </section>

      <footer className="page-footer font-small indigo text-black bg-white">
        <div className="footer-copyright text-center py-3">
          © 2024 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> SpectoV, Inc. All Rights Reserved</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
