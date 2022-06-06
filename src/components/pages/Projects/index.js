import React from "react";
import portfolioItems from "../../../data/portfolio.json";

const styles = {
  text: {
    backgroundColor: "rgb(241, 244, 245,1)",
    color: "black",
  },

  frame: {
    position: "relative",
    paddingBottom: "56.25%",
    height: 0,
  },

  iFrame: {
    position: "absolute",
    top: 0,
    left: 0,
    width: "100%",
    height: "100%",
  },

  cardHolder: {
    background: "rgb(13, 202, 240)",
    background:
      "linear-gradient(75deg, rgba( 13, 202, 240,.1) 50%, rgba(255,255,255,1) 50%)",
  },

  span: {
    fontWeight: "bold",
    color: "rgba(13, 202, 240,1)",
  },
  project: {
    color: "black",
    width: "90%",
  },
  buttonPrimary: {
    color: "white",
  },
  light: {
    fontWeight: "400",
  },
  tech: {
    fontWeight: "400",
    fontStyle: "italic",
  },
};

const Projects = () => {
  return (
    <>
      <div style={styles.text}>
        <div className=" text-center py-4">Projects</div>
      </div>

      <div className="row" style={styles.cardHolder}>
        <div className="text-center py-4 gy-4 display-5">
          <h4>My</h4>
          <h4>passion</h4>
          <h4 style={styles.span}>projects</h4>
        </div>
        <div className="row d-flex align-items-center justify-content-center">
          {portfolioItems.map(
            ({ id, title, video, href, repo, work, about, tech }) => (
              <>
                <div className=" d-flex row col-md-6 col-xl-6 col-xxl-6 px-4">
                  <div style={styles.project}>
                    <p className="fw-bold fs-5">{title}</p>
                    <h6 className="lh-lg" style={styles.light}>
                      <span className="fw-bold ">My work: </span>
                      {work}
                    </h6>
                    <h6 className="lh-lg" style={styles.light}>
                      {about}
                    </h6>
                    <h7 style={styles.tech}>{tech}</h7>
                  </div>
                  <br />
                  <div className="btn-group w-50 my-4">
                    <a
                      href={href}
                      target="_blank"
                      style={styles.buttonPrimary}
                      type="button"
                      className="btn btn-info"
                      rel="noreferrer"
                    >
                      Experience
                    </a>

                    <a
                      href={repo}
                      target="_blank"
                      type="button"
                      className="btn btn-outline-info"
                      rel="noreferrer"
                    >
                      Repo
                    </a>
                  </div>
                </div>

                <div className="col-md-6 col-xl-6 col-xxl-6 py-4 my-4">
                  <div className="card card-body shadow-sm">
                    <div
                      className="frame"
                      key={id}
                      style={styles.frame}
                      onClick={() => {}}
                    >
                      <iframe
                        title={title}
                        src={video}
                        frameborder="0"
                        webkitallowfullscreen="true"
                        mozallowfullscreen="true"
                        allowfullscreen="true"
                        style={styles.iFrame}
                      ></iframe>
                    </div>
                  </div>
                </div>
                <hr></hr>
              </>
            )
          )}
        </div>
      </div>
    </>
  );
};

export default Projects;
