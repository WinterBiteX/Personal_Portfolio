import Anim from "./Anim";
import { PERSON } from "../data/portfolioData";
import LiquidTitle from "./LiquidTitle";
export default function Contact() {
  return (
    <div className="sec-wrap" id="contact">
      <div className="sec-inner">

        <Anim>
          <div className="sec-eye">06 — Get In Touch</div>
          {/* <h2 className="sec-title">Contact</h2> */}
          <LiquidTitle text="Contact" />
          <div className="contact-box">
            <div className="c-title">Let's build something together.</div>
            <p className="c-sub">
              I'm always open to new opportunities, collaborations, or even just a good conversation about tech.
              Always happy to connect and chat!
            </p>

            <a className="btn-p" href={`https://mail.google.com/mail/?view=cm&to=${PERSON.email}`} target="_blank" rel="noopener noreferrer">
            ✉ Send me an email
            </a>

            <div className="c-links">
              <a className="c-link" href={PERSON.linkedin} target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M19 0H5C2.24 0 0 2.24 0 5v14c0 2.76 2.24 5 5 5h14c2.76 0 5-2.24 5-5V5c0-2.76-2.24-5-5-5zM8 19H5V8h3v11zM6.5 6.73A1.77 1.77 0 1 1 6.5 3.2a1.77 1.77 0 0 1 0 3.53zM20 19h-3v-5.6c0-3.37-4-3.12-4 0V19h-3V8h3v1.77C14.67 7.3 20 7.1 20 12.5V19z" />
                </svg>
                LinkedIn
              </a>

              <a className="c-link" href={PERSON.github} target="_blank" rel="noopener noreferrer">
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M12 0C5.37 0 0 5.37 0 12c0 5.3 3.44 9.8 8.2 11.38.6.11.82-.26.82-.58v-2.02c-3.34.73-4.04-1.61-4.04-1.61-.54-1.38-1.33-1.75-1.33-1.75-1.09-.74.08-.73.08-.73 1.2.08 1.84 1.23 1.84 1.23 1.07 1.83 2.8 1.3 3.49 1 .11-.78.42-1.3.76-1.6-2.67-.3-5.47-1.33-5.47-5.93 0-1.31.47-2.38 1.24-3.22-.14-.3-.54-1.52.11-3.18 0 0 1-.32 3.3 1.23a11.5 11.5 0 0 1 3-.4c1.02 0 2.04.13 3 .4 2.28-1.55 3.29-1.23 3.29-1.23.65 1.66.24 2.88.12 3.18.77.84 1.23 1.91 1.23 3.22 0 4.61-2.81 5.63-5.48 5.92.43.37.82 1.1.82 2.22v3.29c0 .32.21.7.83.58C20.56 21.8 24 17.3 24 12 24 5.37 18.63 0 12 0z" />
                </svg>
                GitHub
              </a>

              <a className="c-link" href={`tel:${PERSON.phone}`}>
                <svg width="15" height="15" viewBox="0 0 24 24" fill="currentColor">
                  <path d="M6.62 10.79a15.49 15.49 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.61 21 3 13.39 3 4c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.24 1.02l-2.21 2.2z" />
                </svg>
                {PERSON.phone}
              </a>
            </div>
          </div>
        </Anim>

      </div>
    </div>
  );
}