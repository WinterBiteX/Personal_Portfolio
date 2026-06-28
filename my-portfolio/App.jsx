import { useState, useEffect } from "react";
import "./src/styles/global.css";

import Navbar     from "./src/components/Navbar";
import Hero       from "./src/components/Hero";
import About      from "./src/components/About";
import Education  from "./src/components/Education";
import Experience from "./src/components/Experience";
import Projects   from "./src/components/Projects";
import Skills     from "./src/components/Skills";
import Contact    from "./src/components/Contact";

import { NAV_ITEMS } from "./src/data/portfolioData";

export default function App() {
  const [active, setActive] = useState("hero");

  const goTo = (id) => {
    setActive(id);
    document.getElementById(id)?.scrollIntoView({ behavior: "smooth", block: "start" });
    setTimeout(() => {}, 1000);
  };

  useEffect(() => {
    const ids = ["hero", ...NAV_ITEMS.map(([, id]) => id)];
    let isScrolling = false;
    let scrollTimer = null;

    const handler = () => {
        if (isScrolling) return;
        const scrollY = window.scrollY + window.innerHeight / 2;
        let current = ids[0];
        for (const id of ids) {
        const el = document.getElementById(id);
        if (el && el.offsetTop <= scrollY) current = id;
        }
        setActive(current);
    };

    window.addEventListener("scroll", handler, { passive: true });
    handler();
    return () => window.removeEventListener("scroll", handler);
    }, []);


  return (
    <>
      <Navbar   active={active} goTo={goTo} />
      <Hero     goTo={goTo} />
      <About    />
      <Education />
      <Experience />
      <Projects />
      <Skills   />
      <Contact  />
      <footer className="footer">
        Designed &amp; built by Abhiram S Kumar · 2025
      </footer>
    </>
  );
}