import React, { useEffect, useRef } from "react";
import Typed from "typed.js";
// import './Footer.css'; // Assuming you have a CSS file for styling

const Footer = () => {
  const typedEl = useRef(null);

  useEffect(() => {
    const strings = ["#YouTube", "#Instagram", "#Twitter", "#LinkedIn"];
    const colors = ["youtube", "instagram", "twitter", "linkedin"];

    const typed = new Typed(typedEl.current, {
      strings: strings.map(
        (string, index) => `<span class="${colors[index]}">${string}</span>`,
      ),
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
        <div className="footer-container bg-white text-black">
          <h1 className="h1">Join us on</h1>
          <p className="type">
            <span ref={typedEl} />
          </p>
          <div className="footer-socialmedia">
            <div className="footer-socialmedia-link">
              <img
                src="https://img.icons8.com/wired/64/000000/youtube.png"
                alt="YouTube"
              />
              <p className="pt-3">YouTube</p>
            </div>
            <div className="footer-socialmedia-link">
              <img
                src="https://img.icons8.com/dotty/64/000000/instagram.png"
                alt="Instagram"
              />
              <p className="pt-3">Instagram</p>
            </div>
            <div className="footer-socialmedia-link">
              <img
                src="https://img.icons8.com/wired/64/000000/x.png"
                alt="Twitter"
              />
              <p className="pt-3">Twitter</p>
            </div>
            <div className="footer-socialmedia-link">
              <img
                src="https://img.icons8.com/ios/64/000000/linkedin.png"
                alt="LinkedIn"
              />
              <p className="pt-3">LinkedIn</p>
            </div>
          </div>
        </div>
      </section>

      <footer className="page-footer font-small indigo bg-white text-black">
        <div className="text-md-left container text-center">
          <div className="row">
            <div className="col-md-3 footerbox footer-logo mx-auto">
              <ul className="list-unstyled">
                <img src="./logo.svg" alt="" />
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />
            <div className="col-md-3 footerbox mx-auto">
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                GIFT CARDS
              </p>
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                STUDENT DISCOUNT
              </p>
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                MILITARY DISCOUNT
              </p>
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                FIND A STORE
              </p>
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                SIGN UP FOR EMAIL
              </p>
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                BECOME A MEMBER
              </p>
              <p className="font-weight-bold text-uppercase mb-3 mt-3">
                SITE FEEDBACK
              </p>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 footerbox mx-auto">
              <p className="font-weight-bold text-uppercase mb-4 mt-3">
                GET HELP
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">Order Status</a>
                </li>
                <li>
                  <a href="#!">Shipping and Delivery</a>
                </li>
                <li>
                  <a href="#!">Returns</a>
                </li>
                <li>
                  <a href="#!">Payment Options</a>
                </li>
                <li>
                  <a href="#!">Contact Us</a>
                </li>
              </ul>
            </div>

            <hr className="clearfix w-100 d-md-none" />

            <div className="col-md-3 footerbox mx-auto">
              <p className="font-weight-bold text-uppercase mb-4 mt-3">
                ABOUT NIKE
              </p>
              <ul className="list-unstyled">
                <li>
                  <a href="#!">News</a>
                </li>
                <li>
                  <a href="#!">Careers</a>
                </li>
                <li>
                  <a href="#!">Investors</a>
                </li>
                <li>
                  <a href="#!">Purpose</a>
                </li>
                <li>
                  <a href="#!">CA Supply Chains Act</a>
                </li>
              </ul>
            </div>
          </div>
        </div>

        <div className="footer-copyright py-3 text-center">
          © 2024 Copyright:
          <a href="https://mdbootstrap.com/education/bootstrap/">
            {" "}
            SpectoV, Inc. All Rights Reserved
          </a>
        </div>
      </footer>
    </>
  );
};

export default Footer;
