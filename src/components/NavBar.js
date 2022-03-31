import React, { useState } from "react";

function NavBar() {
  const [show, setShow] = useState(false);

  return (
    <>
      <nav className="navbar navbar-expand-lg navbar-dark bg-dark">
        <div className="container-fluid">
          <a className="navbar-brand" href="#home">
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
            <div className="navbar-nav">
              <a className="nav-link active" aria-current="page" alt="home" href="#">
                Home
              </a>
              <a className="nav-link" href="#">
                Bio
              </a>
              <a className="nav-link" href="#">
                Pricing
              </a>
              <a
                class="nav-link"
                onClick={() =>
                  window.open(
                    "https://drive.google.com/file/d/1jq-LPG-bwbaqS0QZSue9M8P5RvPQI5RN/view?usp=sharing",
                    "_blank"
                  )
                }
              >
                Resume
              </a>
            </div>
          </div>
        </div>
      </nav>
    </>
  );
}

export default NavBar;
