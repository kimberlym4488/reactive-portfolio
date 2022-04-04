import React from "react";
// import profilePic from

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
    fontWeight: "normal",
  },
  light: {
    fontWeight: "200",
  },
};

function AboutMe( handlePageChange) {
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
            determined self-starter with a love for technology.{" "}
            <span style={styles.light}>
              {" "}
              I love learning new things and overcoming a challenge. My
              experience with various software programs and working on a team
              has helped me to become a well-rounded, experienced, and reliable
              teammate.{" "}
            </span>
           
            <br></br>
            <br></br>

            <span style={styles.span}>Real world experience: </span>Full-stack
            developer who can resolve the pain points.<br/>
            <span style={styles.light}>
              I've published and enhanced live apps using: <br />
              <span style={styles.tech}>React</span>
              <br />
              <span style={styles.tech}>Express</span>
              <br />
              <span style={styles.tech}>Node</span>
              <br />
              <span style={styles.tech}>MongoDB/Mongoose</span>
              <br />
              <span style={styles.tech}>Handlebars</span>
              <br />
              <span style={styles.tech}>Sequelize</span>
              <br></br>
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
              highlights my clean, functional, and fun designs using CSS
              (Bootstrap, Bulma Frameworks) and in-line HTML/JSX styling.
            </span>
          </p>

          <div className="d-flex col-sm-12 col-md-12 col-lg-6 col-xl-6 lh-lg justify-content-center align-items-center py-4">
            <div className="row justify-content-center align-items-center">
              <div className="text-center col-6 align-items-center display-5 ">
                <h4>I</h4>
                <h4>love</h4>
                <h4>to</h4>
                <h4 style={styles.span}>create</h4>
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
