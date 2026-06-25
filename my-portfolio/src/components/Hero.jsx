import { PERSON, STATS } from "../data/portfolioData";
import profileImg from "../images/pro.jpg";

export default function Hero({ goTo }) {
  return (
    <section id="hero">
      <div className="hero-glow" />
      <div className="hero-glow2" />
      <div className="hero">

        {/* LEFT  — contains text content */}
        <div className="hero-left">
          <div className="hero-tag">
            <span className="pulse" />
            {PERSON.tagline}
          </div>

          <h1 className="hero-name">
            {/* {PERSON.name.split(" ")[0]}<br />
            <span className="v">{PERSON.name.split(" ").slice(1).join(" ")}</span> */}
            <span className="first">Abhiram</span>
            <span className="v">S Kumar</span>
          </h1>

          <p className="hero-role">{PERSON.role}</p>

          {PERSON.description.split("\n\n").map((para, i) => (
            <p key={i} className="hero-desc">
              {i === 0 ? (
                <>
                  I am a Software Developer with dual expertise in <strong>Python Full-Stack Development</strong> and <strong>AI-powered UAV Systems</strong>. I began my career building scalable web applications using Python, Django and with clean, responsive UIs and secure backend integration.
                </>
              ) : (
                <>
                  Currently, I work as a <strong>UAV Software Developer at Aakash Aerospace Pvt. Ltd.</strong>, where I design and deploy real-time computer vision systems on edge hardware (NVIDIA Jetson), build end-to-end video streaming pipelines, and develop mission-critical monitoring dashboards for autonomous drone platforms — bringing the same full-stack discipline into the world of <strong>AI and aerospace</strong>.
                </>
              )}
            </p>
          ))}

          <div className="cta-row">
            <a className="btn-p" href="#contact" onClick={(e) => { e.preventDefault(); goTo("contact"); }}>
              Get in touch →
            </a>
            <a className="btn-o" href="#projects" onClick={(e) => { e.preventDefault(); goTo("projects"); }}>
              View projects
            </a>
          </div>

          <div className="stats-row">
            {STATS.map(({ num, label }) => (
              <div key={label}>
                <div className="stat-n">{num}</div>
                <div className="stat-l">{label}</div>
              </div>
            ))}
          </div>
        </div>

        {/* RIGHT — contains profile photo */}
        {/* <div className="profile-slot">
          <div className="profile-ring-outer">
            <div className="profile-inner">
              <img src={profileImg} alt={PERSON.name} />
            </div>
          </div>
        </div> */}
        <div className="profile-slot">
            <img src={profileImg} alt={PERSON.name} className="profile-bg-img" />
        </div>

      </div>
    </section>
  );
}