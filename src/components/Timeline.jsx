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
          <p>Lorem ipsum dolor sit amet consectetur adipisicing elit. Suscipit numquam labore itaque doloremque cum sunt nobis at aliquid dolor fugiat eveniet architecto quos, fugit saepe eaque recusandae expedita? Adipisci, animi!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Amet debitis ex inventore optio culpa fuga doloremque! Quia veritatis cum ipsa sint. Iusto neque animi magnam reiciendis perferendis cumque laudantium alias!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <p>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Dignissimos repudiandae natus possimus veritatis, quo voluptates similique saepe suscipit qui modi perspiciatis, iure aliquid porro error aspernatur quibusdam provident! Facilis, qui!</p>
        </VerticalTimelineElement>
        <VerticalTimelineElement
          className="vertical-timeline-element--work"
          contentStyle={{ background: 'rgb(233, 30, 99)', color: '#fff' }}
          contentArrowStyle={{ borderRight: '7px solid  rgb(33, 150, 243)' }}
          iconStyle={{ background: 'rgb(33, 150, 243)', color: '#fff' }}
        >
          <p>Lorem ipsum dolor, sit amet consectetur adipisicing elit. Minima animi fugiat velit odit facere suscipit dolorem obcaecati fuga voluptatum repellendus alias debitis deleniti consectetur maxime quo, accusamus consequuntur eligendi. Labore.</p>
        </VerticalTimelineElement>
      </VerticalTimeline>
    </div>
  );
};

export default Timeline;
