import type { ExperienceItem } from './types'
import puckaiLogo from '../assets/logo/puckai_logo.png'
import hriLogo from '../assets/logo/Honda_99PLabs_logo.png'
import fan2seeLogo from '../assets/logo/fan2see_logo.png'

export const experience: ExperienceItem[] = [
  {
    role: 'Founder & AI/ML Engineer',
    org: 'PuckAI',
    location: 'Amherst, MA',
    period: 'May 2025 – Present',
    logo: puckaiLogo,
    summary:
      'I built and launched PuckAI to give hockey fans and scouts one place to research NHL players and prospects, and I run it myself: scrapers, ETL, models, serving, auth, and deployment.',
    points: [
      'Shipped PuckAI Scout, a RAG chatbot over 7,643 AI-generated scouting reports that blends vector and keyword search (pgvector HNSW, Postgres full-text) with Voyage AI reranking.',
      "Set up a 78-query retrieval benchmark before tuning anything; ranking quality rose 42% (NDCG@10 0.482 to 0.686). The biggest jump came from sending team and league questions through SQL filters, since embeddings could not tell a player's current team.",
      'Learned early that prompting alone let the LLM invent statistics, so every number now comes from the data pipeline and a validator checks each report before it goes live (all 7,643 passed, 0 quarantined).',
      'Traced answers about the wrong player to five separate name-matching leaks and closed them. Those answers went from 9 to 0, and clean answers from 67% to 80% on a 132-question set.',
      'Extended Scout into a LangGraph agent with web search and YouTube highlights. On a 26-question eval it picked the right tools every time with no unrequested searches, and it rejected all 14 wrong-player videos.',
      'Trained a three-stage XGBoost model on 481,000 pre-NHL seasons across 1,295 leagues to predict which prospects make the NHL (held-out ROC-AUC 0.977).',
    ],
    tech: [
      'Next.js',
      'FastAPI',
      'PostgreSQL + pgvector',
      'RAG',
      'LangGraph',
      'XGBoost',
      'Voyage AI',
      'Supabase',
      'OpenTelemetry',
    ],
    links: [
      {
        label: 'Engineering write-up',
        href: 'https://github.com/shigenogoro/PuckAI-Engineering',
      },
    ],
  },
  {
    role: 'AI Researcher (Extern)',
    org: 'Honda Research Institute (HRI) & 99P Labs',
    location: 'Amherst, MA',
    period: 'Feb 2026 – May 2026',
    logo: hriLogo,
    summary:
      'Researched repo-level Graph-RAG for code understanding, advised by Prof. Andrew McCallum (UMass).',
    points: [
      'Built Hindsight with the team, a retrieval layer that pairs BM25 with graph traversal over a repository graph built from the AST, so a model can follow dependencies across files.',
      'With Qwen3-32B it put the correct file first for 53.5% of DeepCodeBench queries, ahead of BM25 (45.4%) and an adapted LocAgent (42.3%).',
      'Designed the evaluation (Fact Recall, Acc@k, LLM-judged answers) and ran ablations across Llama-3.1-8B, Qwen3-8B, and Qwen3-32B on DeepCodeBench and LocBench.',
    ],
    tech: ['Graph-RAG', 'Knowledge Graphs', 'AST Indexing', 'BM25', 'Python'],
    links: [
      {
        label: 'Blog: Hindsight on 99P Labs',
        href: 'https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766',
      },
    ],
  },
  {
    role: 'Co-Founder & Full-Stack Engineer',
    org: 'Fan2see',
    location: 'Taipei, Taiwan',
    period: 'Apr 2021 – Apr 2022',
    logo: fan2seeLogo,
    summary:
      'Co-founded a personalized video-message platform connecting fans with their favorite stars, built on a PERN + AWS stack.',
    points: [
      'Launched the first version on Bubble.io, then rebuilt it on React, Node.js, Express, and PostgreSQL once it outgrew no-code.',
      'Cut media-processing time 25% by moving transforms into an async AWS Lambda/S3 pipeline, and grew to hundreds of active users at about 30% month over month.',
    ],
    tech: ['React', 'Node.js', 'PostgreSQL', 'AWS'],
  },
]
