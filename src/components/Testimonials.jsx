import React from 'react';
import '../Styles/Testimonials.css';
import customer1 from '../assets/company/meta.png'; 
import customer2 from '../assets/company/shopify.png'; 
import customer3 from '../assets/company/starbucks.png'; 
import customer4 from '../assets/company/tesla.png'; 
import review1 from '../assets/product.webp'; 

const Testimonials = () => {
  const customers = [customer1, customer2, customer3, customer4]; // Add your customer images here
  const reviews = [review1, review1, review1, review1, review1, review1]; // Add your review images here

  return (
    <div className='testimonial_container'>
      <div className='testimonial_title'>
        Our Valuable Clients
      </div>
      <div className='review_container'>
        <div className='testimonial_customers'>
          <div className='marquee'>
            <div className='marquee_content'>
              {customers.map((customer, index) => (
                <div key={index} className='testimonial_card'>
                  <img src={customer} alt={`Customer ${index + 1}`} />
                </div>
              ))}
              {customers.map((customer, index) => (
                <div key={index} className='testimonial_card'>
                  <img src={customer} alt={`Customer ${index + 1}`} />
                </div>
              ))}
            </div>
          </div>
        </div>
        <div className='testimonial_reviews'>
          <div className='marquee reverse'>
            <div className='marquee_content'>
              {reviews.map((review, index) => (
                <div key={index} className='testimonial_card'>
                  <img src={review} alt={`Review ${index + 1}`} />
                </div>
              ))}
              {reviews.map((review, index) => (
                <div key={index + reviews.length} className='testimonial_card'>
                  <img src={review} alt={`Review ${index + 1}`} />
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
