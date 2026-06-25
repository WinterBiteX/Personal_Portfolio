import { useEffect, useRef } from "react";
import Anim from "./Anim";
import { SKILLS_LANG, SKILLS_FW, TOOLS, PROTOCOLS } from "../data/portfolioData";
import LiquidTitle from "./LiquidTitle";
// ── contains the animated progress bar ──────────────────────────────────────
function SkillBar({ n, p }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const fill = el.querySelector(".sk-fill");
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          fill.style.width = p + "%";
          obs.disconnect();
        }
      },
      { threshold: 0.4 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, [p]);

  return (
    <div className="sk-item" ref={ref}>
      <div className="sk-top">
        <span className="sk-name">{n}</span>
        <span className="sk-pct">{p}%</span>
      </div>
      <div className="sk-bar">
        <div className="sk-fill" />
      </div>
    </div>
  );
}


export default function Skills() {
  return (
    <div className="sec-wrap alt" id="skills">
      <div className="sec-inner">

        <Anim>
          <div className="sec-eye">05 — Technical Skills</div>
          {/* <h2 className="sec-title">Skills</h2> */}
          <LiquidTitle text="Skills" />
          <p className="sec-sub">Languages, frameworks, and tools I reach for every day.</p>
        </Anim>

        <div className="sk-cols">

          {/* Left column — contains progress bars */}
          <Anim delay="anim-d1">
            <div className="sk-gtitle">Languages</div>
            <div className="sk-rows">
              {SKILLS_LANG.map((s) => <SkillBar key={s.n} {...s} />)}
            </div>

            <div className="sk-gtitle">Frameworks &amp; Libraries</div>
            <div className="sk-rows">
              {SKILLS_FW.map((s) => <SkillBar key={s.n} {...s} />)}
            </div>
          </Anim>

          {/* Right column — contains pill tags */}
          <Anim delay="anim-d2">
            <div className="sk-gtitle">Tools &amp; Platforms</div>
            <div className="tools">
              {TOOLS.map((t) => (
                <span className="tpill" key={t}>{t}</span>
              ))}
            </div>

            <div className="sk-gtitle">Protocols &amp; Streaming</div>
            <div className="tools">
              {PROTOCOLS.map((t) => (
                <span className="tpill hi" key={t}>{t}</span>
              ))}
            </div>
          </Anim>

        </div>
      </div>
    </div>
  );
}