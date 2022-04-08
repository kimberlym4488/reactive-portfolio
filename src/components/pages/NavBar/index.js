/* eslint-disable jsx-a11y/anchor-is-valid */
import React, { useState } from "react";
import "./styles.css";

function NavBar({ currentPage, handlePageChange }) {
  const [show, setShow] = useState(false);

  const styles = {
    navbarBrand: {
      "fontFamily": "montez",
      "fontSize": "2rem",
      "marginLeft":"1rem"
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
            className="navbar-toggler mx-2"
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
                className={
                  currentPage === "Home" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                alt="home"
                href="#aboutMe"
                onClick={() => handlePageChange("AboutMe")}
              >
                <div
                  className="flip-container1"
                  onTouchStart={() => this.classList.toggle('hover')}
                >
                  <div className="flipper1">
                    <div className="front1">Bio</div>
                    <div className="back1">About Me</div>
                  </div>
                </div>
              </a>
              {/* Projects w/flip animation */}
              <a
                className={
                  currentPage === "Projects" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                alt="projects"
                href="#projects"
                onClick={() => handlePageChange("Projects")}
              >
                <div
                  className="flip-container1"
                  onTouchStart={() => this.classList.toggle('hover')}
                >
                  <div className="flipper1">
                    <div className="front1">Projects</div>
                    <div className="back1">My work</div>
                  </div>
                </div>
              </a>
              {/* Contact w/flip animation */}
              <a
                className={
                  currentPage === "ContactForm" ? "nav-link active" : "nav-link"
                }
                aria-current="page"
                alt="home"
                href="#contactForm"
                onClick={() => handlePageChange("ContactForm")}
              >
                <div
                  className="flip-container1"
                  onTouchStart={() => this.classList.toggle('hover')}
                >
                  <div className="flipper1">
                    <div className="front1">Contact</div>
                    <div className="back1">Let's chat!</div>
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
                  className="flip-container1"
                  onTouchStart={() => this.classList.toggle('hover')}
                >
                  <div className="flipper1">
                    <div className="front1">Resume</div>
                    <div className="back1">View</div>
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
