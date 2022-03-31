import React from "react";
// import profilePic from

const styles = {
  aboutMe: {
    backgroundColor: "#009ecc",
    color: "white",
  },

  text: {
    backgroundColor: "transparent",
    color: "black",
  },

  profilePic: {
    height: "100px",
    width: "auto",
  },
};

function MainBio() {
  return (
    <>
      <section className="Website-Frame aboutMe">
        <div className="card text-center" style={styles.text}>
          <div className="card-header" id="aboutMe">
            About me
          </div>
          <div className="card-body">
            <img
              src={`${process.env.PUBLIC_URL}/Kim-profile-pic.jpg`}
              className="card-img-top profilePic"
              style={styles.profilePic}
              alt="myPic"
            ></img>
            <h5 className="card-title" style={styles.aboutMe}>
              I love to create
            </h5>
            <p className="card-text">
              I'm a creative problem solver with a love for technology. I love
              learning new things and overcoming a challenge. My experience with
              various software programs and working on a team has helped me to
              become a well-rounded, experienced, and reliable teammate.
            </p>
          </div>
        </div>
      </section>
    </>
  );
}

export default MainBio;
