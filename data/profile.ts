
export interface Skill {
  category: string;
  skills: string[];
}

export const skills: Skill[] = [
  {
    category: "Domain Expertise",
    skills: [
      "Pharmaceutical Manufacturing",
      "Insulin & Peptide Production",
      "Bioprocess Development",
      "Process Analytical Technology (PAT)",
      "Quality by Design (QbD)",
      "Regulatory Compliance (FDA, ICH)",
      "Good Manufacturing Practice (GMP)",
      "Process Validation",
    ],
  },
  {
    category: "Statistical Methods",
    skills: [
      "Design of Experiments (DOE)",
      "Response Surface Methodology",
      "Multivariate Data Analysis",
      "Statistical Process Control (SPC)",
      "Process Capability Analysis",
      "Regression Modeling",
      "Hypothesis Testing",
      "Risk Assessment",
    ],
  },
  {
    category: "Machine Learning & AI",
    skills: [
      "Supervised Learning",
      "Feature Engineering",
      "Model Selection & Validation",
      "Ensemble Methods (XGBoost)",
      "Neural Networks",
      "Time Series Analysis",
      "Explainable AI (SHAP)",
      "MLOps & Deployment",
    ],
  },
  {
    category: "Programming & Tools",
    skills: [
      "Python",
      "R",
      "SQL",
      "Scikit-learn / TensorFlow",
      "Pandas / NumPy",
      "Matplotlib / Plotly",
      "JMP / Minitab",
      "Git / GitHub",
    ],
  },
  {
    category: "Advanced Techniques",
    skills: [
      "RAG Systems",
      "Large Language Models (LLMs)",
      "Vector Databases",
      "Natural Language Processing",
      "Document Analysis",
      "Knowledge Management",
      "Process Mining",
      "Digital Twins",
    ],
  },
];

export const profile = {
  name: "Anuj Pandey",
  title: "Data Scientist | AI Engineer",
  tagline: "Applying AI, machine learning, and computational biology to accelerate innovation in biotechnology.",
  bio: `I'm a Data Scientist at Wockhardt Ltd., specializing in applying AI, machine learning, and computational biology to accelerate innovation in biotechnology and pharmaceutical research. My work sits at the fascinating intersection of data science, biology, and pharmaceutical manufacturing.`,
  philosophy: `"Good models come from good understanding of the process, not just algorithms."`,
  stats: {
    yearsExperience: 2,
    projectsCompleted: 15,
    modelsDeployed: 8,
    articlesPublished: 4,
  },
  socials: {
    linkedin: "https://www.linkedin.com/in/anuj-pandey9/",
    github: "https://github.com/anuj-pandey",
    email: "mailto:contact@anujpandey.com", // Placeholder
  },
};
