import Anim from "./Anim";
import { PROJECTS } from "../data/portfolioData";
import proj1 from "../images/proj1.jpg";
import proj2 from "../images/proj2.jpg";
import proj3 from "../images/proj3.jpg";
import proj4 from "../images/proj4.png"
import LiquidTitle from "./LiquidTitle";
const projImages = [proj1, proj2, proj3, proj4];

export default function Projects() {
  return (
    <div className="sec-wrap" id="projects">
      <div className="sec-inner">

        <Anim>
          <div className="sec-eye">04 — What I've Built</div>
          {/* <h2 className="sec-title">Projects</h2> */}
          <LiquidTitle text="Projects" />
          <p className="sec-sub">
            Full-stack web applications built end-to-end during my internship at Luminar Technolab.
          </p>
        </Anim>

        <div className="proj-grid">
          {PROJECTS.map((project, i) => (
            <Anim key={project.title} delay={`anim-d${(i % 2) + 1}`}>
              <div className="proj-card">
                {projImages[i] ? (
                  <div className="proj-preview">
                    <img src={projImages[i]} alt={project.title} className="proj-preview-img" />
                  </div>
                ) : (
                  <div className="proj-icon">{project.icon}</div>
                )}
                <div className="proj-title">{project.title}</div>
                <div className="proj-desc">{project.desc}</div>
                <div className="proj-tech">
                  {project.tech.map((tag) => (
                    <span className="ttag" key={tag}>{tag}</span>
                  ))}
                </div>
              </div>
            </Anim>
          ))}
        </div>

      </div>
    </div>
  );
}