import React from "react";
// styles
const styles = {
  text: {
    backgroundColor: "rgb(13, 202, 240,.8)",
    color: "white",
  },

  profilePic: {
    width: "70%",
    height: "auto",
    margin: "2rem",
  },
  cardBody: {
    background: "rgb(241, 244, 245)",
    background:
      "linear-gradient(95deg, rgba(241, 244, 245,.5) 50%, rgba(255,255,255,1) 50%)",
  },
  span: {
    fontWeight: "bold",
    color: "#77949E",
  },

  tech: {
    color: "rgb(13,202,240)",
  },
  light: {
    fontWeight: "400",
    fontSize: ".9rem",
  },
};
// jsx
function AboutMe({ currentPage, handlePageChange }) {
  return (
    <>
      <section className="Website-Frame aboutMe ">
        <div style={styles.text}>
          <div className="text-center py-4">About me</div>
        </div>
        <div
          className="card-body d-flex row justify-content-center align-items-center py-5"
          style={styles.cardBody}
        >
          <p className="card-text col-sm-12 col-md-12 col-lg-6 col-xl-6 lh-lg px-4">
            <span style={styles.span}>A little about me: </span> Creative,
            curious, determined self-starter with a love for tech. <br></br>
            <br></br>
            <span style={styles.light}>
              {" "}
              I am curious and passionate about learning new things and
              overcoming a challenge. The teams I've worked on have described me
              as a caring, helpful, and reliable teammate.{" "}
            </span>
            <br></br>
            <br></br>
            <span style={styles.span}>Real world experience: </span>Full-stack
            developer who sees the big picture.
            <br></br>
            <br></br>
            <span style={styles.light}>
              I've published and enhanced live apps using: <br />
              <span style={styles.tech}>React</span>
              <br />
              <span style={styles.tech}>Express</span>
              <br />
              <span style={styles.tech}>Node</span>
              <br />
              <span style={styles.tech}>mySQL/Sequelize</span>
              <br />
              <span style={styles.tech}>MongoDB/Mongoose</span>
              <br />
              <span style={styles.tech}>GraphQL/Apollo Server</span>
              <br />
              <span style={styles.tech}>Handlebars</span>
              <br />
              <br></br>
              My
              <a
                href="#projects"
                className="text-decoration-none"
                alt="projects"
                onClick={() => handlePageChange("Projects")}
              >
                <span style={styles.span}> portfolio </span>
              </a>
              highlights my clean, responsive front-end designs using CSS
              (Material UI, Bootstrap, Bulma Frameworks) in-line HTML/JSX
              styling.
            </span>
          </p>

          <div className="d-flex col-sm-12 col-md-12 col-lg-6 col-xl-6 lh-lg justify-content-center align-items-center py-4">
            <div className="row justify-content-center align-items-center">
              <div className="text-center col-6 align-items-center display-5 ">
                <h4>full</h4>
                <h4>stack</h4>
                <h4>web</h4>
                <h4 style={styles.span}>dev</h4>
              </div>
              <div className="col-6 ">
                <img
                  src={`${process.env.PUBLIC_URL}/Kim-profile-pic.jpg`}
                  className="card-img-top profilePic"
                  style={styles.profilePic}
                  alt="myPic"
                ></img>
              </div>
            </div>
          </div>
        </div>
      </section>
    </>
  );
}

export default AboutMe;
