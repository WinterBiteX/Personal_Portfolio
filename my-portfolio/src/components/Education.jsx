import Anim from "./Anim";
import { EDUCATION } from "../data/portfolioData";
import collegeImg from "../images/college-removebg-preview.png";
import schoolImg from "../images/school.png";
import LiquidTitle from "./LiquidTitle";
const eduImages = [collegeImg, schoolImg];

export default function Education() {
  return (
    <div className="sec-wrap" id="education">
      <div className="sec-inner">

        <Anim>
          <div className="sec-eye">02 — Academic Background</div>
          <LiquidTitle text="Education" />
          <p className="sec-sub">
            Academic foundation in Computer Science &amp; Engineering that shaped my technical skill set.
          </p>
        </Anim>

        <div className="edu-grid">
          {EDUCATION.map((item, i) => (
            <Anim key={item.degree} delay={`anim-d${i + 1}`}>
              <div className="edu-card">
                <div className="edu-top">
                  <img src={eduImages[i]} alt={item.degree} className="edu-icon-img" />
                  <span className="edu-date">{item.date}</span>
                </div>
                <div className="edu-degree">{item.degree}</div>
                <div className="edu-field">{item.field}</div>
                <div className="edu-uni">{item.uni}</div>
                <div className="edu-score">📊 {item.score}</div>
              </div>
            </Anim>
          ))}
        </div>

      </div>
    </div>
  );
}