import Anim from "./Anim";
import { PERSON, INTERESTS } from "../data/portfolioData";
import LiquidTitle from "./LiquidTitle";
export default function About() {
  return (
    <div className="sec-wrap alt" id="about">
      <div className="sec-inner">

        <Anim>
          <div className="sec-eye">01 — Who I Am</div>
          {/* <h2 className="sec-title">About Me</h2> */}
          <LiquidTitle text="About Me" />
        </Anim>

        <div className="about-grid">

          {/* In theses left session contains Bio and interests*/}
          <Anim delay="anim-d1">
            <p className="about-p">
              I'm a <strong>self-motivated Software Developer</strong> with hands-on experience
              building AI-powered drone systems from the ground up. My work bridges computer vision,
              edge computing, and full-stack web development.
            </p>
            <p className="about-p">
              At Aakash Aerospace, I train and deploy <strong>YOLO-based detection models</strong> on
              NVIDIA Jetson hardware, build real-time video pipelines, and design mission monitoring
              UIs used in live autonomous UAV operations.
            </p>
            <p className="about-p">
              I also have a strong background in <strong>Python Django full-stack development</strong> —
              E-commerce platforms, food ordering systems, and game review website built during my
              internship at Luminar Technolab.
            </p>

            <div className="int-label">Areas of Interest</div>
            <div className="int-grid">
              {INTERESTS.map((item) => (
                <div className="int-item" key={item}>
                  <div className="int-dot" />
                  {item}
                </div>
              ))}
            </div>
          </Anim>

          {/* Right session contains info_cards*/}
          <Anim delay="anim-d2">
            <div className="info-cards">
              {[
                { l: "Location", v: PERSON.location },
                { l: "Email",    v: PERSON.email    },
                { l: "Phone",    v: PERSON.phone    },
              ].map(({ l, v }) => (
                <div className="icard" key={l}>
                  <div className="icard-l">{l}</div>
                  <div className="icard-v">{v}</div>
                </div>
              ))}

              <div className="icard">
                <div className="icard-l">Languages Spoken</div>
                <div className="lang-row">
                  {PERSON.languages.map((lang) => (
                    <span className="lbadge" key={lang}>{lang}</span>
                  ))}
                </div>
              </div>
            </div>
          </Anim>

        </div>
      </div>
    </div>
  );
}