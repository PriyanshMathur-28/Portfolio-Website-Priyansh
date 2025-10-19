import "./portfolio.css";
import Work from "./work";

const Portfolio = () => {
  return (
    <section className="work section" id="portfolio">
      <span className="section_subtitle">
        Projects on GitHub ➡️{" "}
        <a 
          href="https://github.com/PriyanshMathur-28" 
          target="_blank" 
          rel="noopener noreferrer"
          className="github-link"
        >
          GitHub
        </a>
      </span>
      <Work />
    </section>
  );
}

export default Portfolio;
