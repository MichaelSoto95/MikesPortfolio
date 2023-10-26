import { useEffect } from "react";
import "../components/projects.css";
import { Fade } from "react-awesome-reveal";
import { useNavigate } from "react-router";

const Projects = () => {
  const navigate = useNavigate();

  // useEffect(() => {
  //   navigate(0);
  // }, [navigate]);
  return (
    <Fade>
      <div className="main-projects">
        <h1>Projects</h1>
        <div className="project-container">
          <div className="projects">
            <h2>QR code generator app </h2>
            <p>
              This application creates an QR code based on the text you type.
              Its was made with react.
            </p>
            <a href="https://mikes-qr-generator.netlify.app" target="blank">
              <button className="button">Click to see</button>{" "}
            </a>
          </div>
          <div className="projects">
            <h2> Form with required fields </h2>
            <p>This proyect showcases form validation using Jquery</p>
            <a
              href="https://form-validation-jquery.netlify.app/"
              target="blank">
              <button className="button">Click to see</button>{" "}
            </a>
          </div>
          <div className="projects">
            <h2>Store application with cart </h2>
            <p>
              This proyect showcases shopping cart like capabilities.Im using
              axios as to fetch data from an API. Also I use various react hooks
              such as useState,useEffect and useContext.
            </p>
            <a href="https://mikes-react-store.netlify.app" target="blank">
              <button className="button">Click to see</button>
            </a>
          </div>
        </div>
      </div>
    </Fade>
  );
};

export default Projects;
