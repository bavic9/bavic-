import React from "react";

import { BallCanvas } from "./canvas";
import { SectionWrapper } from "../hoc";
import { technologies } from "../constants";
import { styles } from "../styles";
import { motion } from "framer-motion";
import { fadeIn, textVariant } from "../utils/motion";



const Tech = () => {
  return (
    <>
      <div className="lg:w-[60vw] m-auto">
        <motion.div variants={textVariant()}>
          <h2 className={styles.sectionHeadText}>Technologies.</h2>
        </motion.div>
        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-text text-sm md:text-base leading-[30px]"
        >
          I specialize in modern frontend technologies like React, Next.js,
          and Tailwind CSS to build fast, responsive, and scalable user
          interfaces. I also work with JavaScript and TypeScript for clean,
          maintainable code, and leverage tools like Framer Motion, Redux,
          and API integration to bring dynamic, interactive experiences to
          life.
        </motion.p>
      </div>
      <div className="flex flex-row flex-wrap justify-center gap-10 mt-12">
        {technologies.map((technology) => (
          <div className="w-28 h-28" key={technology.name}>
            <BallCanvas icon={technology.icon} />
          </div>
        ))}
      </div>
    </>
  );
};

export default SectionWrapper(Tech, "");
