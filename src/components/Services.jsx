import React from "react";
import { motion } from "framer-motion";
import { AiFillChrome } from "react-icons/ai";
import { DiNodejs, DiReact } from "react-icons/di";

const Services = () => {
  const animations = {
    whileInView: {
      x: 0,
      y: 0,
      opacity: 1,
    },
    one: {
      opacity: 0,
      x: "-100%",
    },
    twoAndThree: {
      opacity: 0,
      y: "-100%",
    },
    four: {
      opacity: 0,
      x: "100%",
    },
  };

  return (
    <div id="services">
      <h2>Services</h2>
      <section>
        <motion.div
          className="serviceBox1"
          whileInView={animations.whileInView}
          initial={animations.one}
        >
          <h3>20+</h3>
          <p>Personal Project Experience</p>
        </motion.div>

        <motion.div
          className="serviceBox2"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
        >
          <DiReact />
          <span>FrontEnd Development</span>
        </motion.div>

        <motion.div
          className="serviceBox3"
          whileInView={animations.whileInView}
          initial={animations.twoAndThree}
          transition={{
            delay: 0.2,
          }}
        >
          <DiNodejs />
          <span>BackEnd Development</span>
        </motion.div>

        <motion.div
          className="serviceBox4"
          whileInView={animations.whileInView}
          initial={animations.four}
        >
          <AiFillChrome />
          <span>Full Stack Development</span>
        </motion.div>
      </section>
    </div>
  );
};

export default Services;
