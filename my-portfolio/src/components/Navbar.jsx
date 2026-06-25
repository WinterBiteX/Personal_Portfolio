import { NAV_ITEMS, PERSON } from "../data/portfolioData";

export default function Navbar({ active, goTo }) {
  return (
    <nav className="nav">
      <div className="nav-logo" onClick={() => goTo("hero")}>
        <span>{"{ "}</span>Code<span> That Flies. </span>Systems<span> That Think. {"}"}</span>
      </div>
      <ul className="nav-links">
        {NAV_ITEMS.map(([label, id]) => (
          <li key={id}>
            <a
              className={active === id ? "active" : ""}
              href={`#${id}`}
              onClick={(e) => { e.preventDefault(); goTo(id); }}
            >
              {label}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}