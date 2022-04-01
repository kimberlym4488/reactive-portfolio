/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./styles.css";

function NavBar() {
  const [show, setShow] = useState(false);

  const styles = {
    navbarBrand: {
      "font-family": "montez",
      "font-size": "2rem",
    },
  };
  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" style={styles.navbarBrand} href="#home">
            Kim Moran
          </a>
          <button
            className="navbar-toggler"
            type="button"
            aria-expanded="false"
            aria-label="Toggle navigation"
            onClick={() => setShow(!show)}
          >
            <span className="navbar-toggler-icon"></span>
          </button>
          <div
            className="collapse navbar-collapse"
            style={show ? { display: "block" } : { display: "none" }}
          >
            <div className="navbar-nav ">
              {/* About me w/flip animation */}
              <a
                className="nav-link active"
                aria-current="page"
                alt="home"
                href="#"
              >
                <div
                  className="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper">
                    <div className="front">Bio</div>
                    <div className="back">About Me</div>
                  </div>
                </div>
              </a>
              {/* Projects w/flip animation */}
              <a className="nav-link" aria-current="page" alt="home" href="#">
                <div
                  className="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper">
                    <div className="front">Projects</div>
                    <div className="back">My work</div>
                  </div>
                </div>
              </a>
              {/* Contact w/flip animation */}
              <a className="nav-link" aria-current="page" alt="home" href="#">
                <div
                  className="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper">
                    <div className="front">Contact</div>
                    <div className="back">Let's chat!</div>
                  </div>
                </div>
              </a>
              {/* Resume w/flip animation */}
              <a
                className="nav-link"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1jq-LPG-bwbaqS0QZSue9M8P5RvPQI5RN/view?usp=sharing",
                    "_blank"
                  )
                }
                aria-current="page"
                alt="resume"
                href="#"
              >
                <div
                  className="flip-container"
                  ontouchstart="this.classList.toggle('hover');"
                >
                  <div className="flipper">
                    <div className="front">Resume</div>
                    <div className="back">View</div>
                  </div>
                </div>
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
