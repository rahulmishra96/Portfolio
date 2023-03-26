import React from "react";
import img from "../assets/logo.png";
import {
  AiFillYoutube,
  AiFillInstagram,
  AiFillGithub,
  AiOutlineArrowUp,
} from "react-icons/ai";
const Footer = () => {
  return (
    <footer>
      <div>
        <img src={img} alt="Founder" />

        <h2>Rahul Mishra</h2>
        <p>Motivation is temporary but discipline last forever</p>
      </div>
      <aside>
        <h2>Social Media</h2>

        <article>
          <a href="https://youtube.com" target={"blank"}>
            <AiFillYoutube />
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
