import React from "react";
import img from "../assets/logo.png";
import {
  AiFillInstagram,
  AiFillGithub,
  AiOutlineArrowUp,
  AiFillLinkedin,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img} alt="Founder" />

        <h2>Rahul Kumar Mishra</h2>
        <p>
          Aspiring Full Stack Developer | Passionate about MERN Stack | Seeking
          Opportunities.
        </p>
      </div>
      <aside>
        <h2>Social Media</h2>

        <article>
          <a
            href="https://www.linkedin.com/in/rahul-mishra-4304b3164"
            target={"blank"}
          >
            <AiFillLinkedin />
          </a>
          <a href="https://instagram.com/_i.rahulmishra" target={"blank"}>
            <AiFillInstagram />
          </a>
          <a href="https://github.com/rahulmishra96" target={"blank"}>
            <AiFillGithub />
          </a>
        </article>
      </aside>
      <a href="#home">
        <AiOutlineArrowUp />
      </a>
    </footer>
  );
};

export default Footer;
