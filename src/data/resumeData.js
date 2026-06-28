/* ============================================
   Resume Data — Single Source of Truth
   All content is sourced directly from the resume.
   ============================================ */

export const personalInfo = {
  name: "Aditya Pratap Singh",
  firstName: "Aditya",
  email: "adityapratapsinghthb@gmail.com",
  phone: "+91 8708024854",
  github: "https://github.com/Aditya05-spec",
  linkedin: "https://linkedin.com/in/Aditya",
  location: "Mohali, Punjab, India",
  roles: [
    "Full-Stack Software Engineer",
    "AI / ML Enthusiast",
    "Competitive Programmer",
    "Hackathon Winner",
  ],
  summary:
    "Full-Stack Software Engineer skilled in Java, Python, JavaScript, React.js, Node.js, and MongoDB. Experienced in building scalable REST APIs, deploying production applications, and implementing CI/CD pipelines in agile environments. Solved 800+ Data Structures & Algorithms problems on LeetCode with a rating of 1714. Proven ability to collaborate on technical design, product roadmaps, and operational excellence. Hackathon winner with an entrepreneurial mindset and passion for building customer-centric, high-quality software.",
};

export const stats = [
  { label: "DSA Problems", value: 800, suffix: "+", icon: "fas fa-code" },
  { label: "LeetCode Rating", value: 1714, suffix: "", icon: "fas fa-chart-line" },
  { label: "CGPA", value: 8.37, suffix: "", icon: "fas fa-graduation-cap", isDecimal: true },
  { label: "Hackathons Won", value: 1, suffix: "", icon: "fas fa-trophy" },
];

export const education = [
  {
    institution: "Chandigarh University",
    location: "Mohali, Punjab",
    degree: "Bachelor of Engineering (CSE – AI & ML)",
    score: "CGPA: 8.37",
    duration: "2024 – 2028",
    icon: "graduation-cap",
  },
  {
    institution: "Kendriya Vidyalaya No. 5",
    location: "Gwalior, Madhya Pradesh",
    degree: "Senior Secondary (PCM + Computer Science)",
    score: "77.9%",
    duration: "2023",
    icon: "school",
  },
];

export const experience = [
  {
    role: "Full Stack Developer Intern",
    company: "CU-TBI (Technology Business Incubator, Chandigarh University)",
    location: "Mohali, Punjab (On-site)",
    duration: "Jul 2025 – Jan 2026",
    achievements: [
      "Developed and deployed three production-ready full-stack web applications using React.js, Node.js, Express.js, and MongoDB.",
      "Designed scalable RESTful APIs and responsive user interfaces.",
      "Improved application performance by 25% through database indexing, query optimization, and API performance tuning.",
      "Integrated Firebase Authentication and third-party APIs for secure authentication, real-time synchronization, and cloud storage.",
      "Implemented CI/CD pipelines and assisted with deployment, monitoring, and production maintenance.",
    ],
  },
];

export const projects = [
  {
    title: "Concentria — Data Consent Monitor",
    tech: [
      "MongoDB", "React.js", "Node.js", "Express.js",
      "Firebase", "Chrome Extension APIs", "Tailwind CSS", "PWA",
    ],
    duration: "June 2025",
    description:
      "A privacy-focused Progressive Web App and Chrome Extension that monitors browser permission changes across 8+ categories in real time.",
    features: [
      "Built a privacy-focused Progressive Web App and Chrome Extension.",
      "Monitors browser permission changes across 8+ permission categories in real time.",
      "Created a categorized dashboard to visualize user consent activity.",
      "Used Firebase for secure storage and real-time synchronization.",
    ],
    github: "https://github.com/Aditya05-spec",
    live: null,
    icon: "fas fa-shield-halved",
    gradient: "from-violet-600/20 via-purple-500/20 to-fuchsia-500/20",
  },
  {
    title: "Heart Disease Prediction System",
    tech: ["Python", "Scikit-Learn", "Pandas", "NumPy", "Matplotlib"],
    duration: "May 2026",
    description:
      "A supervised machine learning pipeline for heart disease prediction achieving 89% accuracy using Random Forest with cross-validation.",
    features: [
      "Developed a supervised ML pipeline for heart disease prediction.",
      "Performed data preprocessing, feature engineering, and visualization.",
      "Compared multiple machine learning models for optimal accuracy.",
      "Achieved 89% prediction accuracy using Random Forest with cross-validation.",
    ],
    github: "https://github.com/Aditya05-spec/Heart-Disease-Prediction",
    live: null,
    icon: "fas fa-heartbeat",
    gradient: "from-rose-600/20 via-pink-500/20 to-red-500/20",
  },
  {
    title: "CodePilot AI",
    tech: ["React.js", "FastAPI", "LangGraph", "ChromaDB", "Ollama", "Docker"],
    duration: "April 2026",
    description:
      "A multi-agent AI system for repository analysis, automated code review, and documentation generation using RAG pipeline.",
    features: [
      "Built a multi-agent AI system for repository analysis and automated code review.",
      "Developed a Retrieval-Augmented Generation (RAG) pipeline using ChromaDB.",
      "Integrated GitHub APIs and LLMs to analyze repos and boost developer productivity.",
    ],
    github: "https://github.com/Aditya05-spec/CodePilot-AI",
    live: null,
    icon: "fas fa-robot",
    gradient: "from-cyan-600/20 via-blue-500/20 to-indigo-500/20",
  },
];

export const skills = {
  Languages: ["C", "C++", "Java", "Python", "JavaScript", "TypeScript", "SQL"],
  "AI / ML": ["Machine Learning", "Agentic AI", "RAG", "LangChain", "LangGraph", "Prompt Engineering"],
  Frontend: ["React.js", "Tailwind CSS"],
  Backend: ["Node.js", "Express.js", "Spring Boot", "FastAPI", "Firebase"],
  Databases: ["MongoDB", "Neo4j", "Qdrant", "ChromaDB", "Redis"],
  "Cloud & DevOps": ["GCP", "Docker", "Kubernetes", "Git", "CI/CD", "Linux"],
  Tools: ["VS Code", "Postman", "Google Colab", "Jupyter Notebook"],
  Fundamentals: ["DSA", "OOP", "DBMS", "OS", "REST APIs", "Microservices", "Agile / Scrum"],
};

/* ── Skills with proficiency levels for animated progress bars ── */
export const skillsWithProficiency = [
  {
    category: "Languages",
    icon: "fas fa-terminal",
    color: "from-violet-500 to-purple-500",       /* purple bar */
    barColor: "#A855F7",
    skills: [
      { name: "Java", level: 90 },
      { name: "C++", level: 88 },
      { name: "Python", level: 85 },
      { name: "JavaScript", level: 82 },
      { name: "TypeScript", level: 75 },
      { name: "SQL", level: 80 },
      { name: "C", level: 78 },
    ],
  },
  {
    category: "Backend",
    icon: "fas fa-server",
    color: "from-purple-500 to-fuchsia-500",       /* magenta bar */
    barColor: "#D946EF",
    skills: [
      { name: "Node.js / Express", level: 88 },
      { name: "Spring Boot", level: 78 },
      { name: "FastAPI", level: 80 },
      { name: "REST APIs", level: 90 },
      { name: "Firebase", level: 82 },
      { name: "Microservices", level: 75 },
    ],
  },
  {
    category: "Frontend",
    icon: "fas fa-palette",
    color: "from-cyan-400 to-blue-500",            /* cyan bar */
    barColor: "#22D3EE",
    skills: [
      { name: "React.js", level: 88 },
      { name: "Tailwind CSS", level: 85 },
      { name: "HTML / CSS", level: 90 },
    ],
  },
  {
    category: "Databases & Tools",
    icon: "fas fa-database",
    color: "from-amber-400 to-orange-500",          /* orange bar */
    barColor: "#F59E0B",
    skills: [
      { name: "MongoDB", level: 85 },
      { name: "Redis", level: 70 },
      { name: "Neo4j", level: 65 },
      { name: "Git / GitHub", level: 90 },
      { name: "Docker", level: 78 },
      { name: "Linux", level: 80 },
    ],
  },
  {
    category: "AI / ML",
    icon: "fas fa-brain",
    color: "from-emerald-400 to-teal-500",          /* green bar */
    barColor: "#34D399",
    skills: [
      { name: "Machine Learning", level: 80 },
      { name: "LangChain", level: 75 },
      { name: "LangGraph", level: 72 },
      { name: "RAG", level: 78 },
      { name: "Prompt Engineering", level: 82 },
    ],
  },
  {
    category: "Cloud & DevOps",
    icon: "fas fa-cloud",
    color: "from-sky-400 to-indigo-500",            /* blue bar */
    barColor: "#38BDF8",
    skills: [
      { name: "GCP", level: 72 },
      { name: "Docker", level: 78 },
      { name: "Kubernetes", level: 65 },
      { name: "CI/CD", level: 80 },
      { name: "Linux", level: 80 },
    ],
  },
];

/* ── Competitive Programming Profiles ── */
export const codingProfiles = {
  leetcode: {
    platform: "LeetCode",
    username: "adityapratapsingh",
    profileUrl: "https://leetcode.com/u/Aditya_09__/",
    rating: 1804,
    maxRating: 1804,
    problemsSolved: 800,
    rank: "Knight",
    icon: "fas fa-code",
    color: "#FFA116",
    stats: [
      { label: "Problems Solved", value: "800+" },
      { label: "Contest Rating", value: "1804" },
      { label: "Rank", value: "Knight" },
    ],
    /* Simulated rating history for the graph */
    ratingHistory: [1450, 1480, 1510, 1490, 1530, 1560, 1545, 1590, 1620, 1600, 1650, 1680, 1660, 1700, 1714],
  },
  codeforces: {
    platform: "Codeforces",
    username: "adityapratapsingh",
    profileUrl: "https://codeforces.com/profile/AlgoKnight_05",
    rating: 1210,
    maxRating: 1241,
    problemsSolved: 37,
    rank: "Pupil",
    icon: "fas fa-laptop-code",
    color: "#008000",
    stats: [
      { label: "Rating", value: "1239" },
      { label: "Max Rating", value: "1239" },
      { label: "Rank", value: "Pupil" },
    ],
    ratingHistory: [800, 850, 920, 980, 1020, 1050, 1080, 1100, 1130, 1150, 1180, 1200, 1220, 1235, 1239],
  },
};

export const achievements = [
  {
    title: "800+ DSA Problems",
    description: "Solved over 800 Data Structures & Algorithms problems on LeetCode.",
    icon: "fas fa-code",
  },
  {
    title: "LeetCode Rating: 1804",
    description: "Achieved a competitive LeetCode rating of 1714.",
    icon: "fas fa-chart-line",
  },
  {
    title: "Tekathon 4.0 Winner",
    description: "Winner — Tekathon 4.0 Hackathon, Chandigarh University (September 2025).",
    icon: "fas fa-trophy",
  },
  {
    title: "Code Fusion 2.0 Finalist",
    description: "Finalist — Code Fusion 2.0 Hackathon.",
    icon: "fas fa-medal",
  },
  {
    title: "Zinnovatio 2.0 Finalist",
    description: "Finalist — Zinnovatio 2.0 Hackathon.",
    icon: "fas fa-award",
  },
];
