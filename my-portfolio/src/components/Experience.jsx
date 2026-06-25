import Anim from "./Anim";
import { EXPERIENCE } from "../data/portfolioData";
import LiquidTitle from "./LiquidTitle";
export default function Experience() {
  return (
    <div className="sec-wrap alt" id="experience">
      <div className="sec-inner">

        <Anim>
          <div className="sec-eye">03 — Work History</div>
          {/* <h2 className="sec-title">Experience</h2> */}
          <LiquidTitle text="Experience" />
          <p className="sec-sub">
            Roles where I've worked  — from full-stack web applications to autonomous drones.
          </p>
        </Anim>

        <div className="exp-line">
          {EXPERIENCE.map((job, i) => (
            <Anim key={job.role} delay={`anim-d${i + 1}`}>
              <div className="exp-item">
                <div className="exp-dot" />
                <div className="exp-date">{job.date}</div>
                <div className="exp-role">{job.role}</div>
                <div className="exp-co">{job.company}</div>
                <ul className="exp-list">
                  {job.bullets.map((bullet, j) => (
                    <li key={j}>{bullet}</li>
                  ))}
                </ul>
              </div>
            </Anim>
          ))}
        </div>

      </div>
    </div>
  );
}