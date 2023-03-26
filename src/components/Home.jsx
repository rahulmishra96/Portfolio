import React, { useRef } from "react";
import { animate, motion } from "framer-motion";
import TypeWriter from "typewriter-effect";
import { BsArrowUpRight, BsChevronDown } from "react-icons/bs";
import me from "../assets/logo.png";
const Home = ({ ratio }) => {
  const clientCount = useRef(null);
  const ProjectCount = useRef(null);
  const animationClientsCount = () => {
    animate(0, 100, {
      duration: 1,
      onUpdate: (v) => (clientCount.current.textContent = v.toFixed()),
    });
  };

  const animationProjectCount = () => {
    animate(0, 500, {
      duration: 1,
      onUpdate: (v) => (ProjectCount.current.textContent = v.toFixed()),
    });
  };

  const animations = {
    h1: {
      initial: {
        x: "-100%",
        opacity: 0,
      },
      whileInView: {
        x: "0%",
        opacity: 1,
      },
    },
    button: {
      initial: {
        y: "-100%",
        opacity: 0,
      },
      whileInView: {
        y: "0%",
        opacity: 1,
      },
    },
  };
  return (
    <div id="home">
      <section>
        <div>
          <motion.h1 {...animations.h1}>
            Hi, I Am <br /> Rahul Mishra
          </motion.h1>
          <TypeWriter
            options={{
              strings: ["A Developer", "A Designer", "A Creator"],
              autoStart: true,
              loop: true,
              cursor: "",
              wrapperClassName: "typewriterpara",
            }}
          />
          <div>
            <a href="mailto:rahulmishra9546@gmail.com">Hire Me</a>
            <a href="#work">
              Projects <BsArrowUpRight />
            </a>
          </div>
          <article>
            <p>
              +
              {ratio < 2 && (
                <motion.span
                  ref={clientCount}
                  whileInView={animationClientsCount}
                ></motion.span>
              )}
            </p>
            <span>Clients Worldwide</span>
          </article>
          <aside>
            <article>
              <p>
                +
                {ratio < 2 && (
                  <motion.span
                    ref={ProjectCount}
                    whileInView={animationProjectCount}
                  >
                    500
                  </motion.span>
                )}
              </p>
              <span>Projects Done</span>
            </article>

            <article data-special>
              <p>Contact</p>
              <span>rahulmishra9546@gmail.com</span>
            </article>
          </aside>
        </div>
      </section>
      <section>
        <img src={me} alt="Rahul" />
      </section>
      <BsChevronDown />
    </div>
  );
};

export default Home;
