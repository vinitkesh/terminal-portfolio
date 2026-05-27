// Portfolio data for all sections
export const projects = [

  {
    title: "DIES Website (2025)",
    description: "Architected a scalable web platform for Doha Industrial and Engineering Services using Next.js and Strapi headless CMS, implementing server-side rendering and incremental static regeneration for stronger content delivery. Deployed a Three.js product visualization system with 60fps rendering, integrated Mux CDN for adaptive video streaming, and reduced initial load time by 38%.",
    // reason: "",
    tech: ["NEXT.JS", "Strapi", "Three.js", "Mux CDN"],
    hiddenSkills: ["TypeScript", "3D Model Optimization", "CDN Integration", "React", "Node.js", "Framer Motion", "SEO", "CSS", "JavaScript", "SSR", "ISR", "CI/CD"],
    contribution: "SDE Consultant - built production web infrastructure, CMS workflows, and deployment automation",
    links: {
    demo: "https://diesmain.vercel.app",
    },
    image: "./projects/dies.png",
    why : null,
    challenges: "Optimizing 3D product visualization, CDN-backed media delivery, and automated deployment pipelines while preserving visual fidelity."

  },
  {
    title: "Enrols.in (2024)",
    description: "Built a full-stack web app to manage course enrollments of educational institutions for the startup Enrols.",
    reason: "Prototyping a solution for managing course enrollments.",
    tech: ["NEXT.JS", "Django", "PostgreSQL"],
    hiddenSkills: ["Data Modeling", "Python", "Framer Motion", "Python", "CSS", "TypeScript", "React", "Node.js", "JavaScript"],
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
    description: "Built and maintained the Computer Science and Engineering Association website for NIT Calicut, supporting event operations, project showcases, member interactions, and association content workflows.",
    reason: "Handling real-world organizational needs.",
    tech: ["NEXT.JS", "Strapi", "Framer motion",],
    hiddenSkills: ["SEO", "CSS", "React", "Node.js", "TypeScript", "JavaScript"],
    contribution: "Project Lead",
    links: {
      demo: "https://assoc.cse.nitc.ac.in",
      github: "https://github.com/csea-nitc/csea-website-frontend"
    },
    image: "./projects/csea.png",
    challenges: null,
    learned: null
  },
  {
    title: "SFC Orchestration Simulator for LEO Satellite Networks",
    description: "Co-authored undergraduate research on NFV orchestration for LEO satellite networks, achieving 9.58% energy reduction and 77% service acceptance under carrier-grade latency constraints below 100ms. Implemented simulation and benchmarking pipelines to model a 960-satellite constellation and process 1,500+ service requests.",
    reason: "Research project focused on optimized VNF placement in dynamic satellite networks.",
    tech: ["Python", "NetworkX", "NumPy", "Docker", "Firestore"],
    hiddenSkills: ["NFV", "LEO Satellite Networks", "Simulation", "Benchmarking", "VNF Placement", "Algorithms", "QoS"],
    contribution: "Research contributor",
    links: {},
    image: null,
    challenges: "Designing resource-aware VNF migration algorithms that reduced overhead by 40% while maintaining strict QoS constraints.",
    learned: "Network simulation, optimization benchmarking, and carrier-grade latency tradeoffs."
  },
  {
    title: "SiteSense (Hackathon Project)",
    description: "Built a real-time worksite monitoring system using YOLO-based computer vision over RTSP video streams for automated attendance tracking and safety anomaly detection. Designed a FastAPI backend with RBAC-enabled REST APIs and integrated a Next.js dashboard with WebSocket updates for live monitoring.",
    reason: "State-level TechPulse Hackathon project; won 1st Runner-Up and AI Wizard Award.",
    tech: ["Next.js", "FastAPI", "YOLO", "FFmpeg", "WebSocket"],
    hiddenSkills: ["Computer Vision", "RTSP", "RBAC", "REST APIs", "Real-time Dashboards", "Python", "TypeScript"],
    contribution: "Hackathon project contributor",
    links: {},
    image: null,
    challenges: "Processing live video streams and pushing real-time safety and attendance updates to monitoring dashboards.",
    learned: "Computer vision pipelines, WebSocket updates, and production-style API design under hackathon constraints."
  },
];

export const otherProjects = [
  {
    title: "Code Notes",
    description: "A markdown-based note-taking app for developers.",
    reason: "Needed a simple, code-friendly note tool.",
    tech: ["React", "Node.js", "MongoDB"],
    hiddenSkills: ["JavaScript", "CSS"],
    contribution: "Solo project",
    links: {
      demo: "#",
      github: "#"
    },
    image: null,
    challenges: "Syncing notes in real-time.",
    learned: "WebSocket integration, markdown parsing."
  },
  {
    title: "LeetHide",
    description: "Chrome extension that hides problem tags and difficulty to reduce bias while practicing.",
    reason: "Improve focus when practicing algorithms.",
    tech: ["TypeScript", "Chrome Extension API"],
    hiddenSkills: ["JavaScript"],
    contribution: "Author",
    links: { demo: "#", github: "#" },
    image: null,
    challenges: "Ensuring compatibility across site updates.",
    learned: "Extension manifest v3, content scripts, cross-origin considerations."
  },
  {
    title: "Pixel Cat",
    description: "A playful extension that shows pixel-art cursors and subtle UI tweaks.",
    reason: "Experiment with delightful micro-interactions.",
    tech: ["JavaScript", "CSS"],
    hiddenSkills: ["Sprite Sheets", "JavaScript", "CSS"],
    contribution: "Author",
    links: { demo: "#", github: "#" },
    image: null,
    challenges: "Performance optimizations for animations.",
    learned: "Animation performance and UX considerations."
  }
];

export const skills = {
  Languages: ["JavaScript", "TypeScript", "Python", "Java", "C++", "C"],
  Frameworks: ["React", "Node.js", "Express", "NEXT.JS", "Django", "FastAPI", "Micronaut", "Strapi", "TailwindCSS"],
  Tools: ["PostgreSQL", "MongoDB", "Docker", "GitHub Actions", "Git", "Postman", "Linux", "Codex", "Cursor", "Claude Code"],
  Concepts: ["REST APIs", "Auth", "DB design", "GraphQL", "CI/CD", "RBAC", "Computer Vision", "LLMs"]
};

export const experience = [

    {
        "role": "Project Intern",
        "organization": "Oracle India ",
        "logo": "/logos/oracle.png",
        "duration": "May 2025 - Jul 2025",
        "location": "Bangalore, India",
        "highlights": [
            "Developed MDS assessment integrations using Terra React components and Redux Toolkit state management to streamline long-term care facility data visualization.",
            "Automated digitization of Care Area Assessment workflows for 20+ trigger types using a template-driven architecture, reducing manual configuration overhead.",
            "Built custom UI components for Oracle Health within proprietary healthcare infrastructure."
        ],
        "tech": ["React", "TypeScript", "GraphQL", "Oracle Cloud", "Redux Toolkit"],
        "hiddenSkills": ["JavaScript", "CSS", "Terra React", "Healthcare", "Data Visualization", "Template-driven Architecture"],
        "type": "Internship"
     },
     {
        "role": "SDE Consultant",
        "organization": "Pentadots",
        "logo": "/logos/intecsol.png",
        "duration": "Jul 2025 - Jan 2026",
        "location": "Remote",
        "highlights": [
            "Architected a scalable web platform for Doha Industrial and Engineering Services using Next.js and Strapi headless CMS with server-side rendering and incremental static regeneration.",
            "Deployed a Three.js product visualization system achieving 60fps rendering performance and integrated Mux CDN for adaptive video streaming.",
            "Reduced initial load time by 38% and built admin CMS workflows plus CI/CD deployment automation with automated testing and continuous deployment pipelines."
        ],
        "tech": ["Next.js", "Strapi", "Three.js", "Mux CDN", "CI/CD"],
        "hiddenSkills": ["TypeScript", "React", "SSR", "ISR", "Automated Testing", "CMS Workflows"],
        "type": "Consulting"
     },
     {
        "role": "SDE Intern",
        "organization": "Apvin Labs",
        "logo": "/logos/intecsol.png",
        "duration": "Dec 2024 - Feb 2025",
        "location": "Remote",
        "highlights": [
            "Engineered a subscription management dashboard for a B2B telemedicine platform serving 14+ partner hospitals.",
            "Implemented payment status tracking, patient assignment, and role-based access control using React, Redux, Node.js, and MongoDB.",
            "Designed and integrated REST APIs for doctor subscriptions and patient records, enabling clinic admins to assign 150+ patients across multiple healthcare providers."
        ],
        "tech": ["React", "Redux", "Node.js", "MongoDB", "REST APIs"],
        "hiddenSkills": ["Healthcare", "RBAC", "Subscription Management", "Express", "JavaScript"],
        "type": "Internship"
     },

//   {
//     "role": "Tech Head",
//     "organization": "Literary & Debating Club, NIT Calicut",
//     "logo": "/logos/lnd.svg",
//     "duration": "Oct 2024 - Present",
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
    "duration": "Oct 2024 - Present",
    "location": "Campus",
    "highlights": [
        "Developed and maintained CSEA websites for NIT Calicut.",
        "Supported association event operations, hackathons, technical events, and content workflows.",
        "Coordinated with other departments for content integration and member-facing updates."
    ],
    "tech": ["React", "Tailwind", "Netlify", "Next.js", "Strapi"],
    "type": "Leadership"
  },
  {
    "role": "Student Intern",
    "organization": "Intecsol",
    "logo": "/logos/intecsol.png",
    "duration": "Sep 2024 - Dec 2024",
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

export const otherExperience = [
  {
    "role": "Frontend Head",
    "organization": "Ragam'26",
    "logo": "/logos/csea.png",
    "duration": "2025 - 2026",
    "location": "Campus",
    "highlights": [
      "Led a cross-functional team of 8 developers to architect and deploy a festival platform using Next.js and TypeScript.",
      "Served 20,000+ concurrent users with 99.7% uptime and sub-2s page load time.",
      "Processed 5,000+ ticket transactions worth INR 50+ lakhs."
    ],
    "tech": ["Next.js", "TypeScript", "React"],
    "hiddenSkills": ["Leadership", "Performance Optimization", "Payments", "High-traffic Systems"],
    "type": "Leadership"
  },
  {
    "role": "Tech Head",
    "organization": "Tathva'24",
    "logo": "/logos/csea.png",
    "duration": "2024",
    "location": "Campus",
    "highlights": [
      "Managed a team of 6 engineers to develop a responsive festival web application using Next.js.",
      "Optimized frontend performance to achieve a 90+ Lighthouse score.",
      "Handled 1000+ concurrent users during peak registration traffic spikes."
    ],
    "tech": ["Next.js", "React", "Performance Optimization"],
    "hiddenSkills": ["Leadership", "Lighthouse", "Frontend Architecture"],
    "type": "Leadership"
  },
  {
    "role": "Secretary",
    "organization": "Google DSC",
    "logo": "/logos/csea.png",
    "duration": "2024 - Present",
    "location": "Campus",
    "highlights": [
      "Led the club team in developing projects.",
      "Organized technical workshops and technology events for the campus developer community."
    ],
    "tech": ["Leadership", "Workshops", "Community"],
    "hiddenSkills": ["Developer Communities", "Event Operations"],
    "type": "Leadership"
  },
  {
    "role": "Tech Head",
    "organization": "Literary & Debating Club, NIT Calicut",
    "logo": "/logos/lnd.svg",
    "duration": "Oct 2024 - Present",
    "location": "Campus",
    "highlights": [
      "Led technical initiatives for club platforms",
      "Built and maintained internal tools",
      "Collaborated with editorial and media teams"
    ],
    "tech": ["React", "Tailwind", "Netlify"],
    "type": "Leadership"
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
    link: "/docs/Vinit_Keshri.pdf"
  },
  location: "Kerala, India",
  availability: "Open to internships & collaborations"
};
