import React from "react";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { projects } from "../constants";
import { fadeIn, textVariant } from "../utils/motion";

const ProjectCard = ({ index, name, description, image }) => {
  return (
    <motion.div
      variants={fadeIn("up", "spring", index * 0.5, 0.75)}
      className="w-full sm:w-[360px] bg-tertiary rounded-2xl p-5 flex flex-col items-center"
    >
      <div className="relative h-[230px] w-full mb-5">
        <img
          src={image}
          alt="project_image"
          className="h-full w-full rounded-2xl object-cover"
        />
        <div className="card-img_hover absolute inset-0 m-3 flex justify-end"></div>
      </div>

      <div className="flex flex-col items-center">
        <h3 className="text-[24px] font-bold text-white text-center">{name}</h3>
        <p className="mt-2 text-[14px] text-[#dddbe7] text-center">{description}</p>
      </div>
    </motion.div>
  );
};

const Works = () => {
  return (
    <div className="py-10 px-4 md:px-8 lg:px-16">
      <motion.div variants={textVariant()} className="flex justify-center">
        <h2 className={`${styles.sectionHeadText} text-center`}>Features Of SpectoV</h2>
      </motion.div>

      <motion.p
        variants={fadeIn("", "", 0.1, 1)}
        className="mt-3 max-w-3xl text-[17px] leading-[30px] text-secondary mx-auto text-center"
      >
        Welcome to our product showcase! It's a carefully curated collection
        of features that highlight the innovative solutions and cutting-edge
        technology we bring to the table.
      </motion.p>

      <div className="mt-10 flex flex-wrap gap-7 justify-center">
        {projects.map((project, index) => (
          <ProjectCard key={`project-${index}`} index={index} {...project} />
        ))}
      </div>
    </div>
  );
};

export default Works;
