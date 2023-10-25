import React from "react";
import "../components/main.css";
import Type from "./Type";
import { Fade, AttentionSeeker } from "react-awesome-reveal";
import Resume from "../assets/files/MSOTORESUME.pdf";

const Main = () => {
  return (
    <Fade>
      <main className="main" id="main">
        <div className="main-container">
          <h1>
            <span className="purple">HELLO!</span> <Type />
          </h1>
          <Fade delay={1500}>
            <AttentionSeeker delay={2000} effect="pulse">
              <a href={Resume} target="blank">
                <button className="button">
                  Click here to download my resume
                </button>
              </a>
            </AttentionSeeker>
          </Fade>
        </div>
      </main>
    </Fade>
  );
};

export default Main;
