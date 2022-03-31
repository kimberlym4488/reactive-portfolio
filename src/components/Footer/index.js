
import "./styles.css";

function Footer() {
  return (
    <>
      <footer class="text-center p-3">
        <p class = "footer-icons">
          <a
            alt = "github"
            class="bi bi-github p-1"
            href="https://github.com/kimberlym4488/"
            target="_blank"
            rel="noreferrer"
          >Github</a>

          <a

            class="bi bi-envelope-open-heart p-1"
            href="mailto:kmorandev@gmail.com"
            target="_blank"
            rel="noreferrer"
          >Email</a>

          <a
            class="bi bi-linkedin p-1"

            href="https://www.linkedin.com/in/kim-moran-82158371"
            target="_blank"
            alt = "LinkedIn"
            rel="noreferrer"
          >LinkedIn</a>
        </p>
      </footer>
    </>
  );
}

export default Footer;
