// Timeline.js

import React, { useState, useEffect, useRef } from 'react';
import { VerticalTimeline, VerticalTimelineElement } from 'react-vertical-timeline-component';
import 'react-vertical-timeline-component/style.min.css';
import "../Styles/Timeline.css";
import gsap from 'gsap';

const Timeline = () => {
  const [isPinned, setPinned] = useState(false);
  const timelineRef = useRef(null);

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 200) { // Adjust the scroll threshold as needed
        setPinned(true);
      } else {
        setPinned(false);
      }
    };

    window.addEventListener('scroll', handleScroll);

    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  useEffect(() => {
    const timeline = timelineRef.current;

    gsap.to(timeline, {
      duration: 0.5,
      y: isPinned ? 100 : 0, // Adjust the pinned position as needed
      ease: 'power2.out'
    });

  }, [isPinned]);

  return (
    <div className="timeline-container">
      <VerticalTimeline ref={timelineRef}>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 class="headertimiline">Comprehensive Training Program </h3>
          <p class="texttimeline">Embark on your journey with our intensive training program, designed to equip you with essential skills across various courses. Upon completion, you will undergo an interview and project review. Successful candidates will then be selected for a prestigious paid internship.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 class="headertimiline"> Global Certification and Goodies</h3>
          <p class="texttimeline">Receive a globally recognized certification and a selection of exclusive goodies. Spectov, in partnership with Microsoft, is committed to providing top-tier services and ensuring you receive the best in industry standards.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 class="headertimiline">Paid Internship Opportunity </h3>
          <p class="texttimeline">Secure a paid internship with a stipend of up to ₹10,000. With a 100% chance of landing this opportunity, you will gain invaluable experience and further develop your professional skills in a real-world setting.</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <h3 class="headertimiline">Full-Time Employment Potential</h3>
          <p class="texttimeline">Impress us with your dedication and exceptional work during your internship, and you will be considered for a full-time position at Spectov. We are always on the lookout for talented individuals to join our team permanently.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
