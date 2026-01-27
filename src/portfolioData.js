// Portfolio data for all sections
export const projects = [

  {
    title: "DIES Website (2025)",
    description: "Built a full-stack CRM based  web app for Doha Industrial Engineering Services (DIES) to manage their web presence, showcase their services, and handle client inquiries effectively.",
    // reason: "",
    tech: ["NEXT.JS", "Strapi", "Three.js"],
    contribution: "Team project",
    links: {
    demo: "https://diesmain.vercel.app",
    },
    image: "./projects/dies.png",
    why : null,
    challenges: "Integrating CDN for media assets and optimizing 3D models for web."

  },
{
    title: "Enrols.in (2024)",
    description: "Built a full-stack web app to manage course enrollments of educational institutions for the startup Enrols.",
    reason: "Prototyping a solution for managing course enrollments.",
    tech: ["NEXT.JS", "Django", "PostgreSQL"],
    contribution: "Team project",
    links: {
      demo: "https://enrols.in",
    },
    image: "./projects/enrols.png",
    challenges: "Integrating complex relational data models.",
    learned: "Advanced ORM techniques, full-stack integration."
  },
  {
    title: "CSEA Website (2024)",
    description: "Built a full-stack website for the organization Computer Science and Engineering Association (CSEA) of NIT Calicut to manage events, showcase projects, and facilitate member interactions.",
    reason: "Handling real-world organizational needs.",
    tech: ["NEXT.JS", "StrapiJS", "Framer motion"],
    contribution: "Project Lead",
    links: {
      demo: "https://assoc.cse.nitc.ac.in",
      github: "https://github.com/csea-nitc/csea-website-frontend"
    },
    image: "./projects/csea.png",
    challenges: null,
    learned: null
  },
//   {
//     title: "Code Notes",
//     description: "A markdown-based note-taking app for developers.",
//     reason: "Needed a simple, code-friendly note tool.",
//     tech: ["React", "Node.js", "MongoDB"],
//     contribution: "Solo project",
//     links: {
//       demo: "#",
//       github: "#"
//     },
//     image: null,
//     challenges: "Syncing notes in real-time.",
//     learned: "WebSocket integration, markdown parsing."
//   },
//   {
//     title: "LeetHide",
//     description: "Chrome extension that hides problem tags and difficulty to reduce bias while practicing.",
//     reason: "Improve focus when practicing algorithms.",
//     tech: ["TypeScript", "Chrome Extension API"],
//     contribution: "Author",
//     links: { demo: "#", github: "#" },
//     image: null,
//     challenges: "Ensuring compatibility across site updates.",
//     learned: "Extension manifest v3, content scripts, cross-origin considerations."
//   },
//   {
//     title: "Pixel Cat",
//     description: "A playful extension that shows pixel-art cursors and subtle UI tweaks.",
//     reason: "Experiment with delightful micro-interactions.",
//     tech: ["JavaScript", "CSS"],
//     contribution: "Author",
//     links: { demo: "#", github: "#" },
//     image: null,
//     challenges: "Performance optimizations for animations.",
//     learned: "Animation performance and UX considerations."
//   },
];

export const skills = {
  Languages: ["JavaScript", "Python", "C++"],
  Frameworks: ["React", "Node.js", "Express", "Next.js"],
  Tools: ["Git", "Docker", "PostgreSQL", "Firebase"],
  Concepts: ["REST APIs", "Auth", "DB design", "OS basics"]
};

export const experience = [

    {
        "role": "Project Intern",
        "organization": "Oracle India ",
        "logo": "/logos/oracle.png",
        "duration": "May 2025 – Jul 2025",
        "location": "Bangalore, India",
        "highlights": [
            "Developed features for Oracle Cloud Infrastructure",
            "Collaborated with cross-functional teams",
            "Built custom UI components for Oracle Health "
        ],
        "tech": ["React", "TypeScript", "GraphQL", "Oracle Cloud"],
        "type": "Internship"
     },

//   {
//     "role": "Tech Head",
//     "organization": "Literary & Debating Club, NIT Calicut",
//     "logo": "/logos/lnd.svg",
//     "duration": "Oct 2024 – Present",
//     "location": "Campus",
//     "highlights": [
//       "Led technical initiatives for club platforms",
//       "Built and maintained internal tools",
//       "Collaborated with editorial and media teams"
//     ],
//     "tech": ["React", "Tailwind", "Git", "Netlify"],
//     "type": "Leadership"
//   },
    {
    "role": "Webmaster",
    "organization": "Computer Science and Engineering Association, NIT Calicut",
    "logo": "/logos/csea.png",
    "duration": "Oct 2024 – Present",
    "location": "Campus",
    "highlights": [
        "Managed and updated the association's website",
        "Implemented new features to enhance user experience",
        "Coordinated with other departments for content integration"
    ],
    "tech": ["React", "Tailwind", "Git", "Netlify"],
    "type": "Leadership"
  },
  {
    "role": "Student Intern",
    "organization": "Intecsol",
    "logo": "/logos/intecsol.png",
    "duration": "Sep 2024 – Dec 2024",
    "location": "Remote",
    "highlights": [
      "Worked with LLM-based applications",
      "Developed full-stack web features",
      "Assisted in research-oriented tooling"
    ],
    "tech": ["MERN", "LLMs", "PostgreSQL"],
    "type": "Internship"
  }

];


export const contact = {
  email: {
    label:"vinitkeshri4171@gmail.com",
    link: "vinitkeshri4171@gmail.com"
  },
  github: {
    label: "github.com/vinitkesh",
    link: "https://github.com/vinitkesh",
  },
  linkedin: {
    label: "linkedin@vinitkeshri",
    link: "https://www.linkedin.com/in/vinitkeshri/",
  },
  twitter: {
    label: "Twitter",
    link: "https://x.com/vinitkeshri6",
  },
  portfolio: {
    label: "Portfolio",
    link: "https://www.vinitkeshri.com",
  },
  resume: {
    label: "Resume",
    link: "./resume.pdf"
  },
  location: "Kerala, India",
  availability: "Open to internships & collaborations"
};
