import { useState } from "react";
import { NAV_ITEMS } from "../data/portfolioData";

export default function Navbar({ active, goTo }) {
  const [open, setOpen] = useState(false);

  return (
    <>
      <nav className="nav">
        <div className="nav-logo" onClick={() => goTo("hero")}>
          <span>{"{ "}</span>Code<span> That Flies. </span>Systems<span> That Think. {"}"}</span>
        </div>
        <ul className="nav-links">
          {NAV_ITEMS.map(([label, id]) => (
            <li key={id}>
              <a className={active === id ? "active" : ""} href={`#${id}`} onClick={(e) => { e.preventDefault(); goTo(id); setOpen(false); }}>
                {label}
              </a>
            </li>
          ))}
        </ul>
        <div className="nav-hamburger" onClick={() => setOpen(!open)}>
          <span />
          <span />
          <span />
        </div>
      </nav>
      {open && (
        <div className="mobile-menu">
          {NAV_ITEMS.map(([label, id]) => (
            <a key={id} className={active === id ? "active" : ""} href={`#${id}`} onClick={(e) => { e.preventDefault(); goTo(id); setOpen(false); }}>
              {label}
            </a>
          ))}
        </div>
      )}
    </>
  );
}