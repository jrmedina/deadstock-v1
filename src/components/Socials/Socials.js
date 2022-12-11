import React from "react";
import { AiOutlineGithub } from "react-icons/ai";
import { AiFillLinkedin } from "react-icons/ai";
import "./Socials.css";

const Socials = () => {
  return (
    <div className="Footer">
      <a
        className="linkedinAnchor"
        href="https://www.linkedin.com/in/joshua-medina/"
      >
        <AiFillLinkedin className="img" />
      </a>

      <a className="githubAnchor" href="https://github.com/jrmedina/deadstock">
        <AiOutlineGithub className="img" />
      </a>
    </div>
  );
};

export default Socials;
