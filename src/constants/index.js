import {
  mobile,
  backend,
  creator,
  web,
  javascript,
  typescript,
  html,
  css,
  reactjs,
  redux,
  tailwind,
  nodejs,
  mongodb,
  git,
  figma,
  docker,
  meta,
  circle,
  tesla,
  shopify,
  carrent,
  jobit,
  tripguide,
  threejs,
} from "../assets";

export const navLinks = [
  {
    id: "about",
    title: "About",
  },
  {
    id: "contact",
    title: "Contact",
  },
];

const services = [
  {
    title: "3D Solutions",
    icon: web,
  },
  {
    title: "Virtual Reality",
    icon: mobile,
  },
  {
    title: "Augmented Reality",
    icon: backend,
  },
  {
    title: "Artificial Intelligence",
    icon: creator,
  },
];

const technologies = [
  {
    name: "HTML 5",
    icon: html,
  },
  {
    name: "CSS 3",
    icon: css,
  },
  {
    name: "JavaScript",
    icon: javascript,
  },
  {
    name: "TypeScript",
    icon: typescript,
  },
  {
    name: "React JS",
    icon: reactjs,
  },
  {
    name: "Redux Toolkit",
    icon: redux,
  },
  {
    name: "Tailwind CSS",
    icon: tailwind,
  },
  {
    name: "Node JS",
    icon: nodejs,
  },
  {
    name: "MongoDB",
    icon: mongodb,
  },
  {
    name: "Three JS",
    icon: threejs,
  },
  {
    name: "git",
    icon: git,
  },
  {
    name: "figma",
    icon: figma,
  },
  {
    name: "docker",
    icon: docker,
  },
];

const experiences = [
  {
    title: "Founded",
    company_name: "SpectoV",
    icon: circle,
    iconBg: "#383E56",
    date: "Feb 2024",
    points: [
      "Innovative AR/VR Solutions: SpectoV pioneers transformative AR/VR tech, enhancing experiences.",
      "Empowering Accessibility: SpectoV breaks barriers, enabling full engagement in AR/VR",
      "Vision for a Connected Future: SpectoV connects people, transcends limits, fosters empathy.",
      "Community Collaboration: SpectoV invites partnerships for an inclusive AR/VR future.",
    ],
  },
  {
    title: "The first product by SpectoV",
    company_name: "DefXV",
    icon: circle,
    iconBg: "#383E56",
    date: "March 2024",
    points: [
      "DefXV revolutionizes AR assistive tech, revealing limitless possibilities.",
      "DefXV: SpectoV's innovation pushes AR tech boundaries, shaping the future",
      "DefXV offers an extraordinary AR journey, transcending boundaries of perception.",
      "Join SpectoV and witness the transformative power of DefXV",
    ],
  },
  {
    title: "Seed Funding Triumph",
    company_name: "by VNest",
    icon: circle,
    iconBg: "#383E56",
    date: "April 2024",
    points: [
      "Milestone Unlocked: SpectoV secures seed funding from VNest, VIT Chennai, propelling DefXV forward",
      "The Breakdown: With a generous infusion of 10 lakh rupees and 6% equity exchange, SpectoV's collaboration with VNest signifies shared belief in DefXV's vision.",
      "Fueling Innovation: The funding accelerates DefXV's journey from vision to prototype, driving SpectoV's mission to revolutionize AR and VR assistive technologies",
      "Gratitude Overflowing: SpectoV extends heartfelt thanks to VNest, VIT Chennai, and supporters for their belief and encouragement, vital to our success.",
    ],
  },
];

const testimonials = [
  {
    testimonial:
      "I thought it was impossible to make a website as beautiful as our product, but Rick proved me wrong.",
    name: "Sara Lee",
    designation: "CFO",
    company: "Acme Co",
    image: "https://randomuser.me/api/portraits/women/4.jpg",
  },
  {
    testimonial:
      "I've never met a web developer who truly cares about their clients' success like Rick does.",
    name: "Chris Brown",
    designation: "COO",
    company: "DEF Corp",
    image: "https://randomuser.me/api/portraits/men/5.jpg",
  },
  {
    testimonial:
      "After Rick optimized our website, our traffic increased by 50%. We can't thank them enough!",
    name: "Lisa Wang",
    designation: "CTO",
    company: "456 Enterprises",
    image: "https://randomuser.me/api/portraits/women/6.jpg",
  },
];

const projects = [
  {
    name: "Guardian Activated",
    description:
      "Punch, swing, grab and stretch out your arms with the confidence of knowing you're clear of all obstructions.",

    image: carrent,
    source_code_link: "https://github.com/",
  },
  {
    name: "Share the experience",
    description:
      "Bring friends into battle or collaborate on a presentation. Cast directly to an enabled TV or phone using the our software app.",

    image: jobit,
    source_code_link: "https://github.com/",
  },
  {
    name: "Safety with passthrough",
    description:
      "Set up Guardian by using your controller to trace a virtual boundary around a safe play area in your physical space.",

    image: tripguide,
    source_code_link: "https://github.com/",
  },
];

export { services, technologies, experiences, testimonials, projects };
