export const personal = {
  name: 'Golla Aishwarya',
  title: 'Generative AI & Senior Data Engineer',
  phone: '+1 (901) 6102101',
  email: 'aishunaidug@gmail.com',
  location: 'United States',
  github: 'https://github.com/aishunaidug-genAI',
  linkedin: 'https://linkedin.com/in/aishwarya-golla',
};

export const summary = `Generative AI Engineer with 4+ years of experience architecting, integrating, and operationalizing LLM-powered solutions and agentic AI systems for enterprise data environments. Deep expertise in RAG pipelines, multi-agent frameworks, prompt engineering, and LLMOps — deploying production-ready GenAI applications using LangChain, LangGraph, OpenAI GPT-4, and Hugging Face across AWS, Azure, and GCP. Strong foundation in data engineering (ETL/ELT, Snowflake, dbt, Apache Airflow) enables seamless integration of GenAI capabilities into scalable data pipelines and analytical workflows. Proven track record delivering measurable business impact through automation, intelligent decision-making, and AI-driven data quality and reporting systems.`;

export const experience = [
  {
    company: 'Mastercard',
    role: 'Generative AI & Senior Data Engineer',
    period: 'Jan 2026 – Present',
    location: 'St. Louis, MO',
    bullets: [
      'Architected and deployed LLM-powered data pipeline orchestration using LangChain and Azure OpenAI GPT-4, enabling natural language-driven ETL configuration and reducing pipeline setup time by 45%.',
      'Built a production RAG system integrating GPT-4 with a ChromaDB vector store over internal financial documents, enabling semantic search and context-aware fraud pattern analysis for risk analytics teams.',
      'Integrated Azure OpenAI into production data workflows for automated anomaly detection, root cause analysis, and plain-language incident reporting — reducing MTTR by 35%.',
      'Implemented LLMOps practices using MLflow and LangSmith for prompt versioning, model tracking, evaluation metrics, and hallucination monitoring across all LLM-integrated services.',
      'Designed and enforced data governance, audit logging, and lineage tracking using Azure Purview and Great Expectations across all AI and ETL pipeline assets.',
      'Automated CI/CD for GenAI pipelines via Azure DevOps and GitHub Actions, including LLM evaluation gates and regression testing for model outputs.',
    ],
  },
  {
    company: 'Anthem Elevance Health',
    role: 'AI/ML Data Engineer',
    period: 'Feb 2025 – Dec 2025',
    location: 'St. Louis, MO',
    bullets: [
      'Built a healthcare document intelligence RAG system using LangChain, GPT-3.5-turbo, and FAISS vector store, enabling semantic Q&A over clinical notes, payer policies, and Medicaid reports.',
      'Developed few-shot and chain-of-thought prompt engineering frameworks for clinical data extraction — extracting structured entities (diagnoses, procedures, billing codes) from unstructured healthcare text.',
      'Integrated Hugging Face BioBERT embeddings for domain-specific healthcare document classification, achieving 89% accuracy in automated clinical report routing.',
      'Designed AWS-native GenAI pipelines using Lambda, Bedrock, and S3 for serverless LLM inference, processing 50,000+ healthcare records daily with HIPAA-compliant data handling.',
      'Reduced report generation time by 40% by combining dbt transformation models with GPT-4-powered narrative generation for automated healthcare operational reports.',
    ],
  },
  {
    company: 'United India Insurance Co. Ltd.',
    role: 'ML & Data Engineer',
    period: 'Aug 2022 – Dec 2023',
    location: 'Bengaluru, India',
    bullets: [
      'Built ML-powered fraud detection pipelines using TensorFlow, BigQuery ML, and Google AI Platform, training models on 10M+ insurance transaction records with 94% precision for fraud classification.',
    ],
  },
];

export const skills = [
  {
    category: 'AI / LLM',
    icon: '🤖',
    items: ['LangChain', 'LangGraph', 'OpenAI GPT-4', 'GPT-3.5-turbo', 'Hugging Face', 'BioBERT', 'AWS Bedrock', 'Vertex AI', 'RAG Pipelines', 'Multi-Agent Systems', 'Prompt Engineering', 'LLMOps'],
  },
  {
    category: 'Data Engineering',
    icon: '⚙️',
    items: ['Snowflake', 'dbt', 'Apache Airflow', 'ETL/ELT', 'BigQuery', 'Azure Data Factory', 'Great Expectations', 'Azure Purview'],
  },
  {
    category: 'Cloud Platforms',
    icon: '☁️',
    items: ['AWS (Lambda, S3, Bedrock)', 'Azure (OpenAI, Purview, DevOps)', 'Google Cloud (Vertex AI, BigQuery ML)'],
  },
  {
    category: 'Vector Databases',
    icon: '🗄️',
    items: ['ChromaDB', 'FAISS'],
  },
  {
    category: 'ML & Monitoring',
    icon: '📊',
    items: ['TensorFlow', 'MLflow', 'LangSmith', 'Plotly'],
  },
  {
    category: 'Languages & Frameworks',
    icon: '💻',
    items: ['Python', 'SQL', 'FastAPI', 'Streamlit'],
  },
  {
    category: 'DevOps & CI/CD',
    icon: '🔄',
    items: ['GitHub Actions', 'Azure DevOps', 'Docker'],
  },
];

export const projects = [
  {
    title: 'Healthcare RAG Intelligence Platform',
    github: 'https://github.com/aishwaryagolla/healthcare-rag-assistant',
    tags: ['LangChain', 'GPT-4', 'ChromaDB', 'FastAPI', 'Streamlit', 'AWS S3'],
    bullets: [
      'Built a production-grade RAG system ingesting clinical PDFs and payer policy documents from AWS S3 into ChromaDB using OpenAI embeddings, enabling natural language Q&A with GPT-4 and source citation.',
      'Implemented LangChain ConversationalRetrievalChain with conversation memory, FastAPI backend, and Streamlit UI — achieving 92% retrieval relevance on domain-specific healthcare queries.',
    ],
  },
  {
    title: 'LLM-Powered ETL Pipeline Optimizer',
    github: 'https://github.com/aishwaryagolla/llm-etl-pipeline-optimizer',
    tags: ['LangChain', 'GPT-4', 'Snowflake', 'dbt', 'Airflow'],
    bullets: [
      'Developed an LLM agent converting natural language business questions into optimized Snowflake SQL using LangChain + GPT-4, reducing analyst query time by 60%.',
      'Built a schema drift detector using GPT-4 structured output to auto-generate dbt model updates and Snowflake ALTER TABLE SQL, and an Airflow failure diagnosis agent for root cause analysis.',
    ],
  },
  {
    title: 'Multi-Agent Financial Risk Analyzer',
    github: 'https://github.com/aishwaryagolla/multi-agent-financial-analyzer',
    tags: ['LangGraph', 'GPT-4', 'Pandas', 'Plotly', 'Multi-Agent'],
    bullets: [
      'Architected a LangGraph multi-agent pipeline with three specialized agents — Data Analyst, Risk Assessor, and Report Generator — collaborating to automate financial risk analysis on uploaded datasets.',
      'Each agent uses GPT-4 with custom tool sets: Pandas for data processing, quantitative risk models (VaR, Sharpe, max drawdown), and board-ready executive report generation with Plotly.',
    ],
  },
];

export const certifications = [
  { name: 'AWS Certified Data Engineer – Associate', issuer: 'Amazon Web Services', icon: '☁️' },
  { name: 'Microsoft Certified: Azure Data Engineer Associate', issuer: 'Microsoft (Azure OpenAI & AI Services)', icon: '🔷' },
  { name: 'Google Professional Data Engineer', issuer: 'Google Cloud (Vertex AI, BigQuery ML)', icon: '🌐' },
  { name: 'LangChain for LLM Application Development', issuer: 'DeepLearning.AI / Coursera', icon: '🔗' },
  { name: 'Building Systems with the ChatGPT API', issuer: 'DeepLearning.AI / Coursera', icon: '🤖' },
];

export const achievements = [
  { metric: '35%', label: 'MTTR Reduction', detail: 'Integrating GPT-4 root cause analysis into Mastercard production data pipelines, cutting resolution time from hours to minutes.' },
  { metric: '92%', label: 'RAG Retrieval Accuracy', detail: 'Healthcare domain Q&A processing 10,000+ clinical documents at sub-2-second response times.' },
  { metric: '40%', label: 'ETL Throughput Gain', detail: 'LLM-assisted schema drift detection and auto-generated dbt model updates eliminated manual intervention for schema changes.' },
  { metric: '94%', label: 'Fraud Detection Precision', detail: 'ML models on 10M+ records at United India Insurance, reducing fraudulent claim processing by 28%.' },
];

export const education = [
  {
    school: 'University of Memphis',
    degree: 'Master of Science – Management Information Systems',
    period: 'Dec 2025',
    location: 'Memphis, TN',
  },
  {
    school: 'VR Siddhartha Engineering College',
    degree: 'Bachelor of Technology – Information Technology',
    period: 'Apr 2023',
    location: 'India',
  },
];
