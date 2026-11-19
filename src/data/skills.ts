import type { SkillGroup } from './types'

export const skills: SkillGroup[] = [
  {
    category: 'Languages',
    skills: ['Python', 'TypeScript', 'JavaScript', 'SQL', 'Java', 'C/C++'],
  },
  {
    category: 'Machine Learning',
    skills: [
      'PyTorch',
      'XGBoost',
      'scikit-learn (GMM, Random Forest)',
      'Feature Engineering',
      'Probability Calibration',
      'Offline Evaluation & Ablations',
    ],
  },
  {
    category: 'LLMs & Retrieval',
    skills: [
      'RAG',
      'AI Agents (LangGraph)',
      'Model Context Protocol (MCP)',
      'Claude / OpenAI GPT / Gemini / Qwen3',
      'Fine-tuning (BART / BERT)',
      'pgvector / HNSW',
      'FAISS',
      'Voyage AI Embeddings',
      'BM25 / DPR / Contriever',
      'Knowledge Graphs / Graph-RAG',
    ],
  },
  {
    category: 'Full-Stack & Data',
    skills: [
      'FastAPI',
      'Node.js / Express',
      'React',
      'Next.js',
      'PostgreSQL',
      'Supabase',
      'SQLAlchemy / Pydantic',
      'Postgres Full-Text Search',
      'Pandas / NumPy',
    ],
  },
  {
    category: 'Cloud & DevOps',
    skills: [
      'AWS (Lambda, S3, EC2)',
      'Vercel',
      'Docker / Docker Compose',
      'CI/CD (GitHub Actions)',
      'OpenTelemetry',
      'Linux',
      'pytest',
    ],
  },
]
