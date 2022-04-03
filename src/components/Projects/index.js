import React from "react";
import portfolioItems from "../data/portfolio.json";

const styles = {
  text: {
    backgroundColor: 'rgb(241, 244, 245,1)',
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
    background: "rgb(0, 165, 240)",
    background:
    "linear-gradient(75deg, rgba( 0, 165, 240,.03) 50%, rgba(255,255,255,1) 50%)",
  },

  span: {
    fontWeight: "bold",
    color: "rgba(0, 165, 240,1)",
  },
};

const Projects = () => {
  return (
    <>
      <div style={styles.text}>
        <div className=" text-center py-4">Projects</div>
      </div>

      <div
        className="row justify-content-space-between align-items-center "
        style={styles.cardHolder}
      >
        <div className="text-center py-4 gy-4 display-5">
          <h4>My</h4>
          <h4>passion</h4>
          <h4 style={styles.span}>projects</h4>
        </div>
        <div className="row">
          {portfolioItems.map(({ id, title, video, href, repo }) => (
            <>
              <div className="col-md-6 col-xl-6 col-xxl-6 text-center">
                <p>{title}</p>
                <div className="d-grid d-md-block gap-2">
                  <button className="btn btn-primary" type="button">
                    <a href={href} target="_blank" rel="noreferrer">
                      Experience
                    </a>
                  </button>
                  <button className="btn btn-outline-primary" type="button">
                    <a href={repo} target="_blank">
                      Repo
                    </a>
                  </button>
                </div>
              </div>

              <div className="col-md-6 col-xl-6 col-xxl-6  text-center ">
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
                      webkitallowfullscreen
                      mozallowfullscreen
                      allowfullscreen
                      style={styles.iFrame}
                    ></iframe>
                  </div>
                </div>
              </div>
            </>
          ))}
        </div>
      </div>
    </>
  );
};

export default Projects;
