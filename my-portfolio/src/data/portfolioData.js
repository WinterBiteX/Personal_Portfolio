export const PERSON = {
  name: "Abhiram S Kumar",
  role: "UAV Software Developer",
  tagline: "Open to new opportunities",
  description:
    "I am a Software Developer with dual expertise in Python Full-Stack Development and AI-powered UAV Systems. I began my career building scalable web applications using Python, Django and with clean, responsive UIs and secure backend integration.\n\nCurrently, I work as a UAV Software Developer at Aakash Aerospace Pvt. Ltd., where I design and deploy real-time computer vision systems on edge hardware (NVIDIA Jetson), build end-to-end video streaming pipelines, and develop mission-critical monitoring dashboards for autonomous drone platforms — bringing the same full-stack discipline into the world of AI and aerospace.",
  email: "abhiramskumar185@gmail.com",
  phone: "+91 8075637989",
  location: "Kollam, Kerala, India",
  linkedin: "https://linkedin.com/in/abhiram-s-kumar-130374320",
  github: "https://github.com/WinterBiteX",
  languages: ["Malayalam", "English", "Hindi"],
};

export const STATS = [
  { num: "1+", label: "Years Experience" },
  { num: "2", label: "Roles Held" },
  { num: "5+", label: "PLATFORMS" },
  { num: "B.Tech", label: "Computer science and Engineering" },
];

export const INTERESTS = [
  "AI & Machine Learning",
  "Computer Vision",
  "Drone / UAV Systems",
  "Embedded Systems",
  "IoT / ESP32",
  "Full-Stack Web Dev",
  "Edge Computing",
  "Arduino / RPi",
];

export const EDUCATION = [
  {
    degree: "Bachelor of Technology",
    field: "Computer Science & Engineering",
    uni: "APJ Abdul Kalam Technological University",
    date: "Aug 2019 – Jun 2023",
    score: "CGPA: 7.54 / 10",
  },
  {
    degree: "Higher Secondary (XII)",
    field: "Computer Science",
    uni: "Kerala State Board",
    date: "Jun 2018 – Mar 2019",
    score: "Percentage: 80.6%",
  },
];

export const EXPERIENCE = [
  {
    role: "UAV Software Developer",
    company: "Aakash Aerospace Pvt. Ltd.",
    date: "Oct 2025 – Present",
    bullets: [
      "Trained a custom YOLO-based model and deployed it on NVIDIA Jetson edge hardware for real-time object detection in autonomous UAV missions.",
      "Built a complete video streaming pipeline routing live detection feeds from Jetson through a VPS to a custom web UI for remote monitoring.",
      "Designed the mission monitoring UI from scratch — live video, detection overlays, and telemetry visualization.",
      "Implemented autonomous precision landing via ArUco marker detection, eliminating manual intervention.",
      "Built a real-time object tracking system integrated with a gimbal-mounted camera, with operator-defined target selection.",
      "Contributed to customizing the company's Ground Control Station (GCS) for mission-specific requirements.",
    ],
  },
  {
    role: "Python Full-Stack Developer Intern",
    company: "Luminar Technolab",
    date: "Jun 2024 – Feb 2025",
    bullets: [
      "Developed comprehensive web applications using Python Django with HTML, CSS, JavaScript, jQuery, and Bootstrap.",
      "Built an E-commerce Website for a furniture shop — category-wise browsing, shopping cart, and secure payment integration.",
      "Created a Restaurant Food Ordering Website with multi-cuisine menus, online ordering, and responsive design.",
      "Designed a Game Review Platform with genre categories, trailers, star ratings, Live Comments & Reviews, Favorites system, Search functionality and user authentication.",
      "Built a responsive Personal Portfolio Website using React.",
    ],
  },
];

export const PROJECTS = [
  {
    title: "E-Commerce Furniture Website",
    desc: "Complete e-commerce platform for a furniture shop — category-wise browsing (sofas, tables, desks, ottomans), shopping cart, order management, and secure payment gateway.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
  },
  {
    title: "Restaurant Food Ordering Website",
    desc: "Multi-cuisine food ordering site (Chinese, Japanese, Indian) with categorized menus, online ordering, secure payment, and a fully responsive UI.",
    tech: ["Python", "Django", "HTML", "CSS", "JavaScript", "Bootstrap", "SQLite"],
  },
  {
    title: "Game Review Platform",
    desc: "Dynamic game review hub with genre categories (Action, Adventure, Horror), trailers with comment sections, star ratings, search, favorites list, and user authentication.",
    tech: ["Python", "Django", "DRF", "JavaScript", "Bootstrap", "SQLite"],
  },
  {
    title: "Personal Portfolio Website",
    desc: "Responsive personal portfolio showcasing education, skills, experience, and projects in a visually engaging format — built with React",
    tech: ["HTML", "CSS", "JavaScript", "React", "Bootstrap"],
  },
];

export const SKILLS_LANG = [
  { n: "Python",      p: 95 },
  { n: "JavaScript",  p: 80 },
  { n: "HTML / CSS",  p: 95 },
];

export const SKILLS_FW = [
  { n: "Django",              p: 90 },
  { n: "PyTorch / TensorFlow", p: 90 },
  { n: "OpenCV",              p: 90 },
  { n: "React",               p: 70 },
];

export const TOOLS = [
  "YOLO", "NVIDIA Jetson", "Raspberry Pi", "Arduino", "ESP32",
  "MAVLink", "PX4", "ArduPilot", "GStreamer", "WebRTC",
  "Bootstrap", "jQuery", "Git", "SQLite","VPS"
];

export const PROTOCOLS = [
  "WebSocket", "GStreamer", "RTSP", "WebRTC",
  "MAVLink", "HTTP/REST", "UART", "I2C",
];

export const NAV_ITEMS = [
  ["About",      "about"],
  ["Education",  "education"],
  ["Experience", "experience"],
  ["Projects",   "projects"],
  ["Skills",     "skills"],
  ["Contact",    "contact"],
];