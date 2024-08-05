// src/components/DonationPage.js

import React from 'react';
import Footer from './Footer'; 
import '../Styles/DonationPage.css';
import qrImage from '../assets/qr.png';

const DonationPage = () => {
  return (
    <div className="donation-page">
      <section className="poster-section">
        <div className="poster-content">
          <h1>Your donation today is an investment in a brighter future.</h1>
          <h3>Together, we can build a world where everyone has the opportunity to succeed, regardless of their circumstances. Let's create a legacy of hope, innovation, and positive change for generations to come.</h3>
        </div>
      </section>

      <section className="details-section">
        <div className="details-content">
          <div className="left-section">
            <img src={qrImage} alt="QR Code" className="qr-code" />
          </div>
          <div className="right-section">
            <h2>Why Donate?</h2>
            <ul>
              <li>Running Free Sankalp Batch</li>
              <ul>
                <li>Provide free education and resources to students from disadvantaged backgrounds.</li>
                <li>Empower the next generation with knowledge and skills.</li>
                <li>Support equal access to education for all.</li>
              </ul>
              <li>Developing The Produts For The Blind People</li>
              <ul>
                <li>Innovate and create accessible tools and technologies for the visually impaired.</li>
                <li>Enhance the quality of life for blind individuals through specialized products.</li>
                <li>Promote inclusivity and accessibility in everyday life.</li>
              </ul>
              <li>Support our company</li>
              <ul>
                <li>Partner with us in our journey towards creating a better world.</li>
              </ul>
            </ul>
          </div>
        </div>
      </section>

      <section className="build-with-us-section">
        <h2>Build With Us</h2>
        <p>
          Your support helps us expand our projects, conduct cutting-edge research,
          and contribute to causes that make a real difference. By donating, you
          enable us to continue our mission and make a meaningful impact.
        </p>
      </section>

      <Footer />
    </div>
  );
};

export default DonationPage;
