
export interface Project {
  id: string;
  title: string;
  category: "Process Optimization" | "Predictive Modeling" | "Knowledge Management" | "MLOps" | "Computer Vision" | "NLP";
  techStack: string[];
  insight: string;
  description: string;
  challenge: string;
  solution: string;
  impact: string[];
  repoUrl?: string;
  demoUrl?: string;
  featured: boolean;
}

export const projects: Project[] = [
  {
    id: "insulin-optimization",
    title: "Insulin Manufacturing Optimization",
    category: "Process Optimization",
    techStack: ["Python", "JMP Pro", "Minitab", "Pandas", "Scikit-learn", "DOE", "PLS Regression"],
    insight: "Yield: +15% | Variability: -40%",
    description: "Improved yield and consistency in insulin production through DOE and statistical modeling.",
    challenge: "Insulin production processes exhibited significant batch-to-batch variability, impacting yield, quality, and manufacturing efficiency. The complexity of biological systems and numerous process parameters made optimization challenging.",
    solution: "Conducted comprehensive analysis of 100+ batches, designed DOE experiments, and applied multivariate modeling to identify critical parameters.",
    impact: [
      "15% improvement in average insulin yield",
      "40% reduction in batch-to-batch variability",
      "Annual savings of $2M+ through improved yield",
      "Identified 5 critical process parameters",
    ],
    featured: true,
  },
  {
    id: "ai-knowledge-system",
    title: "AI-Powered Manufacturing Knowledge System",
    category: "NLP",
    techStack: ["LLaMA 2", "Python", "LangChain", "ChromaDB", "FastAPI", "React", "Sentence Transformers"],
    insight: "Accuracy: 90% | Time: -99%",
    description: "RAG-based querying system for SOPs and process documents using LLaMA.",
    challenge: "Manufacturing teams struggled to quickly find relevant information across hundreds of SOPs, batch records, and technical documents.",
    solution: "Built a Retrieval-Augmented Generation (RAG) system with semantic chunking and custom relevance scoring.",
    impact: [
      "Reduced information retrieval time from hours to seconds",
      "90% accuracy in answering manufacturing questions",
      "500+ daily queries from manufacturing team",
      "Accelerated training for 20+ new employees",
    ],
    featured: true,
  },
  {
    id: "pk-pd-prediction",
    title: "PK/PD Prediction Model",
    category: "Predictive Modeling",
    techStack: ["Python", "Scikit-learn", "XGBoost", "SHAP", "Pandas", "SciPy", "Plotly"],
    insight: "Accuracy: 85% | Savings: $5M+",
    description: "Predicting study outcomes using particle size data and GLM analysis.",
    challenge: "Late-stage failures in PK/PD studies were costly and time-consuming.",
    solution: "Developed predictive models using particle size distribution data and formulation parameters, interpreted via SHAP values.",
    impact: [
      "85% accuracy in predicting PK/PD study outcomes",
      "Prevented 3 late-stage failures in first year",
      "Saved $5M+ in avoided study costs",
      "Reduced development timeline by 6 months",
    ],
    featured: true,
  },
  {
    id: "real-time-monitoring",
    title: "Real-Time Process Monitoring System",
    category: "Predictive Modeling",
    techStack: ["Python", "TensorFlow", "Streamlit", "PostgreSQL", "InfluxDB", "Docker", "MSPC"],
    insight: "Failures: -60% | Early Warning: 4-6h",
    description: "Early warning system for process deviations using multivariate statistical process control.",
    challenge: "Traditional end-of-batch quality testing meant defects were discovered too late.",
    solution: "Connected 50+ process sensors and implemented multivariate statistical process control with predictive ML models.",
    impact: [
      "Reduced batch failures by 60%",
      "Early detection of deviations 4-6 hours before quality impact",
      "Saved $3M annually through reduced waste",
    ],
    featured: false,
  },
  {
    id: "process-capability",
    title: "Process Capability Improvement",
    category: "Process Optimization",
    techStack: ["JMP", "Minitab", "Python", "SPC", "Six Sigma"],
    insight: "Cpk: 1.1 -> 1.8",
    description: "Systematic improvement of critical process parameters to reduce regulatory risk.",
    challenge: "Several critical process parameters had Cpk values below 1.33.",
    solution: "Used root cause analysis and DOE studies to optimize parameter settings and implement control plans.",
    impact: [
      "Improved average Cpk from 1.1 to 1.8",
      "Achieved Cpk > 1.33 for all critical parameters",
      "Reduced process variation by 45%",
    ],
    featured: false,
  },
  {
    id: "cell-culture-optimization",
    title: "Cell Culture Process Optimization",
    category: "Process Optimization",
    techStack: ["Python", "R", "JMP", "DOE", "RSM"],
    insight: "Density: +25% | Duration: -2 Days",
    description: "Optimization of cell culture processes to improve productivity.",
    challenge: "Cell culture processes required optimization to improve productivity while maintaining product quality.",
    solution: "Executed factorial and response surface experiments integrated with metabolic profiling.",
    impact: [
      "25% increase in cell density",
      "30% improvement in specific productivity",
      "Reduced culture duration by 2 days",
    ],
    featured: false,
  },
  {
    id: "mlops-platform",
    title: "Data Infrastructure & MLOps Platform",
    category: "MLOps",
    techStack: ["Python", "Docker", "Kubernetes", "MLflow", "Airflow", "GitLab CI/CD", "PostgreSQL"],
    insight: "Deployed: 15+ Models",
    description: "Systematic approach to deployment, monitoring, and maintenance of ML models.",
    challenge: "Lack of infrastructure was creating technical debt and sustainability issues for ML models.",
    solution: "Built automated data pipelines, model registry, and containerized deployment framework.",
    impact: [
      "Deployed 15+ models into production",
      "Reduced deployment time from weeks to days",
      "Automated retraining pipelines for 8 models",
    ],
    featured: false,
  },
];
