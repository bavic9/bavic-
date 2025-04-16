import React from "react";
import Tilt from "react-tilt";
import { motion } from "framer-motion";

import { styles } from "../styles";
import { services } from "../constants";
import { SectionWrapper } from "../hoc";
import { fadeIn, textVariant } from "../utils/motion";
import Tech from "./Tech";

const ServiceCard = ({ index, title, icon }) => (
  <Tilt className="xs:w-[250px] w-full">
    <motion.div
      variants={fadeIn("right", "spring", index * 0.5, 0.75)}
      className="w-full bg-[#011221] p-[1px] rounded-[20px]"
    >
      <div
        options={{
          max: 45,
          scale: 1,
          speed: 450,
        }}
        className="bg-tertiary rounded-[20px] py-5 px-12 min-h-[280px] flex justify-evenly items-center flex-col"
      >
        <img
          src={icon}
          alt="web-development"
          className="w-16 h-16 object-contain"
        />

        <h3 className="text-white text-[20px] font-bold text-center">
          {title}
        </h3>
      </div>
    </motion.div>
  </Tilt>
);

const About = () => {
  return (
    <>
      <div className=" lg:w-[60vw] mx-auto my-20 lg:my-20">
        <motion.div variants={textVariant()}>
          <p className={styles.sectionSubText}>Introduction</p>
          <h2 className={styles.sectionHeadText}>Overview.</h2>
        </motion.div>

        <motion.p
          variants={fadeIn("", "", 0.1, 1)}
          className="mt-4 text-text text-sm md:text-base leading-[30px]"
        >
          I'm a passionate software developer with strong proficiency
          in TypeScript and JavaScript, and deep experience working
          with frameworks like Next.js, React, Node.js, and Three.js.
          I thrive on learning quickly and collaborating with clients
          to build scalable, high-performance, and user-friendly solutions
          that address real-world challenges. Let’s team up to bring your
          ideas to life!
        </motion.p>

        <div className="mt-20 flex flex-col lg:flex-row items-center justify-between gap-10">
          {services.map((service, index) => (
            <ServiceCard key={service.title} index={index} {...service} />
          ))}
        </div>
      </div>
      <div className="lg:w-[80%] m-auto">
        <Tech />
      </div>
    </>
  );
};

export default SectionWrapper(About, "about");
