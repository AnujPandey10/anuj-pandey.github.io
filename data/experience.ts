
export interface Experience {
  id: string;
  role: string;
  company: string;
  period: string;
  location: string;
  description: string;
  achievements: string[];
  techStack: string[];
  type: "work" | "education";
}

export const experiences: Experience[] = [
  {
    id: "wockhardt",
    role: "Data Scientist",
    company: "Wockhardt Ltd.",
    period: "Nov 2024 - Present",
    location: "Maharashtra, India",
    description: "Spearheading the integration of AI/ML and computational biology to accelerate biosimilar development and enhance R&D operational efficiency.",
    achievements: [
      "Developed SOP assistant application powered by LLMs",
      "Automated critical R&D processes, improving productivity",
      "Engineered Kex2 enzyme mutants using ML, reducing costs",
      "Optimized upstream and refolding processes using ML predictions",
    ],
    techStack: ["Python", "LLMs", "Machine Learning", "Computational Biology", "JMP"],
    type: "work",
  },
  {
    id: "wesoftek",
    role: "Back End Developer (Intern)",
    company: "Wesoftek Solutions",
    period: "Jul 2024 - Oct 2024",
    location: "Gurugram, India",
    description: "Designed and developed high-performance APIs for enterprise management systems.",
    achievements: [
      "Developed Vehicle, Visitor, and Asset Management Systems",
      "Designed scalable database architectures",
      "Implemented secure authentication mechanisms",
    ],
    techStack: ["C#", "ASP.NET Core", "SQL", "API Development"],
    type: "work",
  },
  {
    id: "iit-kgp",
    role: "MTech in Data Science (Equivalent)",
    company: "IIT Kharagpur",
    period: "2022 - 2024",
    location: "Kharagpur, India",
    description: "Advanced training in data science, machine learning, and computational approaches.",
    achievements: [
      "Specialized in Advanced ML & Deep Learning",
      "Focused on Process Engineering & Optimization",
    ],
    techStack: ["Python", "SQL", "Data Analysis", "Machine Learning"],
    type: "education",
  },
  {
    id: "svp-tech",
    role: "BTech",
    company: "SVP University",
    period: "2018 - 2022",
    location: "Meerut, India",
    description: "Strong foundation in engineering principles with focus on agricultural and biological systems. CGPA: 8.24/10.0.",
    achievements: [
      "NSS Volunteer (3 years)",
      "NCC Senior Cadet (3 years)",
    ],
    techStack: ["Engineering Fundamentals"],
    type: "education",
  },
];
