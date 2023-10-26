import React from "react";
import "../components/about.css";
import Photo from "../assets/images/msoto.jpg";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router-dom";
const About = () => {
  const navigate = useNavigate();

  // refresh
  navigate(0);
  return (
    <Fade>
      <div className="main-about" id="main">
        <h1>About Me</h1>
        <div className="about-container">
          <div className="about-image">
            {" "}
            <img src={Photo} alt="msoto" height="300px" />
          </div>
          <div className="text-container">
            <p>
              Motivated young developer seeking employment in this industry.
              Bringing forth a motivated attitude and the desire to learn.
              Committed to utilizing my skills to further the mission of a
              company. Currently improving my javascript/React skills. Also
              learning techologies such as node js and Express for backend.
              <br />
            </p>
            <p>
              Looking forward to learn other technologies such as Angular and
              Node.js.
            </p>
            <p>
              Other than coding my hobbies are photography📷 ,guitar🎸 and
              Fitness💪.
            </p>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default About;
