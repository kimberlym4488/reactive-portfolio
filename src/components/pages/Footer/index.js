import "./styleFooter.css";

function Footer() {
  return (
    <>
      <footer className="text-center py-4">
        <div className="container">
          <p className="footer-icons list-instyled list-inline text-center">
            <a
              alt="github"
              href="https://github.com/kimberlym4488/"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="flip-container list-inline-item"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="flipper">
                  <div className="front bi bi-github px-1 py-3"></div>
                  <div className="back">Github</div>
                </div>
              </div>
            </a>

            <a
              alt="email"
              href="mailto:kmorandev@gmail.com"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="flip-container list-inline-item"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="flipper">
                  <div className="front bi bi-envelope-open-heart px-1 py-3"></div>
                  <div className="back">Email</div>
                </div>
              </div>
            </a>

            <a
              alt="linkedin"
              href="https://www.linkedin.com/in/kim-moran-82158371"
              target="_blank"
              rel="noreferrer"
            >
              <div
                className="flip-container list-inline-item"
                ontouchstart="this.classList.toggle('hover');"
              >
                <div className="flipper">
                  <div className="front bi bi-linkedin px-1 py-3"></div>
                  <div className="back">LinkedIn</div>
                </div>
              </div>
            </a>
          </p>
        </div>
      </footer>
    </>
  );
}

export default Footer;
