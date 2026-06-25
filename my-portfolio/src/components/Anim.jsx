// Wraps any content with a scroll-triggered fade-up animation
import { useEffect, useRef } from "react";

export default function Anim({ children, delay = "" }) {
  const ref = useRef(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;
    const obs = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          el.classList.add("anim-in");
          obs.disconnect();
        }
      },
      { threshold: 0.08 }
    );
    obs.observe(el);
    return () => obs.disconnect();
  }, []);

  return (
    <div ref={ref} className={`anim ${delay}`}>
      {children}
    </div>
  );
}