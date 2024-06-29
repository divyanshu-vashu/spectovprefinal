import React from "react";
import "../Styles/Testimonials.css";
import microsoft from "../assets/company/microsoft_logo.jpg";
import vnest from "../assets/company/vnest_logo.jpg";
import fortis from "../assets/company/fortis_logo.jpg";
import startupwala from "../assets/company/startupwala_logo.jpg";

const Testimonials = () => {
  const customers = [microsoft, vnest, fortis, startupwala]; // Add your customer images here
  const reviews = [
    {
      name: "John Doe",
      rating: 5,
      text: "Great service, highly recommended!",
    },
    {
      name: "Jane Smith",
      rating: 4,
      text: "Very good experience overall.",
    },
    {
      name: "Mike Johnson",
      rating: 5,
      text: "Excellent support and great quality.",
    },
  ];

  return (
    <div className="testimonial_container">
      <div className="testimonial_title">Our Valuable Clients</div>
      <div className="review_container">
        <div className="testimonial_customers">
          <div className="marquee">
            <div className="marquee_content">
              {customers.map((customer, index) => (
                <div key={index} className="testimonial_card">
                  <img src={customer} alt={`Customer ${index + 1}`} />
                </div>
              ))}
              {customers.map((customer, index) => (
                <div key={index + customers.length} className="testimonial_card">
                  <img src={customer} alt={`Customer ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className="testimonial_reviews">
          <div className="marquee reverse">
            <div className="marquee_content">
              {reviews.map((review, index) => (
                <div key={index} className="review_card">
                  <div className="review_avatar"></div>
                  <div className="review_content">
                    <div className="review_name">{review.name}</div>
                    <div className="review_rating">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                    <div className="review_text">{review.text}</div>
                  </div>
                </div>
              ))}
              {reviews.map((review, index) => (
                <div key={index + reviews.length} className="review_card">
                  <div className="review_avatar"></div>
                  <div className="review_content">
                    <div className="review_name">{review.name}</div>
                    <div className="review_rating">
                      {"★".repeat(review.rating)}
                      {"☆".repeat(5 - review.rating)}
                    </div>
                    <div className="review_text">{review.text}</div>
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

export default Testimonials;
