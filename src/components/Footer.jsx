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
            <a href="https://www.linkedin.com/company/specto-v/posts/?feedView=all" target="_blank" rel="noopener noreferrer">
              <img src="https://img.icons8.com/wired/64/000000/x.png" alt="Twitter" />
              <p className="pt-3">Twitter</p>
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
        {/* <div className="container text-center text-md-left">
          <div className="row">
            <div className="col-md-3 mx-auto footerbox footer-logo">
              <ul className="list-unstyled">
                <img src="./logo.svg" alt="" />
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 mx-auto footerbox">
              <p className="font-weight-bold text-uppercase mt-3 mb-3">GIFT CARDS</p>
              <p className="font-weight-bold text-uppercase mt-3 mb-3">STUDENT DISCOUNT</p>
              <p className="font-weight-bold text-uppercase mt-3 mb-3">MILITARY DISCOUNT</p>
              <p className="font-weight-bold text-uppercase mt-3 mb-3">FIND A STORE</p>
              <p className="font-weight-bold text-uppercase mt-3 mb-3">SIGN UP FOR EMAIL</p>
              <p className="font-weight-bold text-uppercase mt-3 mb-3">BECOME A MEMBER</p>
              <p className="font-weight-bold text-uppercase mt-3 mb-3">SITE FEEDBACK</p>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto footerbox">
              <p className="font-weight-bold text-uppercase mt-3 mb-4">GET HELP</p>
              <ul className="list-unstyled">
                <li><a href="#!">Order Status</a></li>
                <li><a href="#!">Shipping and Delivery</a></li>
                <li><a href="#!">Returns</a></li>
                <li><a href="#!">Payment Options</a></li>
                <li><a href="#!">Contact Us</a></li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 mx-auto footerbox">
              <p className="font-weight-bold text-uppercase mt-3 mb-4">ABOUT NIKE</p>
              <ul className="list-unstyled">
                <li><a href="#!">News</a></li>
                <li><a href="#!">Careers</a></li>
                <li><a href="#!">Investors</a></li>
                <li><a href="#!">Purpose</a></li>
                <li><a href="#!">CA Supply Chains Act</a></li>
              </ul>
            </div>
          </div>
        </div> */}

        <div className="footer-copyright text-center py-3">
          © 2024 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/"> SpectoV, Inc. All Rights Reserved</a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
