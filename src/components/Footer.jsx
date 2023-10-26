import React from "react";
import "../components/footer.css";
import {
  FaInstagram as Insta,
  FaGithub as Git,
  FaLinkedin as Linked,
  FaFile as ResumeIcon,
} from "react-icons/fa";
import Logo from "../assets/images/logo.svg";
import Resume from "../assets/files/MSOTORESUME.pdf";

const Footer = () => {
  const year = new Date().getFullYear();
  return (
    <div className="footer">
      <div className="logo-container">
        <img src={Logo} alt="" height="25px" />{" "}
        <h3>Michael.Soto &copy; {year}</h3>
      </div>
      <div className="social">
        <a href="" className="social-icon" target="blank">
          <Insta />
        </a>
        <a
          href="https://github.com/MichaelSoto95"
          className="social-icon"
          target="blank">
          <Git />
        </a>
        <a
          href="https://www.linkedin.com/in/michael-soto-7789a1263/"
          className="social-icon"
          target="blank">
          <Linked />
        </a>
        <a href={Resume} className="social-icon" download="MSOTORESUME">
          <ResumeIcon />
        </a>
      </div>
    </div>
  );
};

export default Footer;
