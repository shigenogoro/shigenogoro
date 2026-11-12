import type { Project } from './types'
import puckaiPlayerPage from '../assets/photo/puckai_player_page_full.png'

export const projects: Project[] = [
  {
    name: 'PuckAI',
    tagline: 'Live NHL analytics platform with a RAG scouting chat and a tool-using agent',
    description:
      'A live platform that tiers, profiles, and projects NHL skaters across five decades (1968 to present): 6,184 players, 54,933 scored prospects, and 7,643 grounded scouting reports. A 14-stage ETL (nine-stage NHL core plus five-stage prospect extension) ingests NHL.com, all 63 NCAA Division I programs, and 11 HockeyTech leagues into PostgreSQL + pgvector. The serving layer adds era-adjusted tiering, a three-stage XGBoost prospect model, pgvector comparables, and sub-millisecond PrefixTrie autocomplete.',
    highlights: [
      '7,643 scouting reports, all validated and 0 quarantined. The LLM only narrates numbers the pipeline computed, and a deterministic validator checks every report before it is published',
      'RAG chatbot with hybrid pgvector HNSW + Postgres full-text search, Voyage embeddings, cross-encoder rerank, and a deterministic team/league router: NDCG@10 0.482 to 0.686 on a 78-query benchmark, and team/league queries 0.415/0.307 to 1.000',
      'Scout Agent: a LangGraph tool loop with Tavily web search and YouTube highlights, a two-layer fact check on web answers, an identity check on every video, an MCP server, and OpenTelemetry tracing. It picked the right tools on 26 of 26 test questions',
      'Three-stage XGBoost hurdle model on 481,000 pre-NHL season lines: reach NHL at ROC-AUC 0.977, durability head, and ordinal landing tier across 1,295 leagues',
      'Era-adjusted tiering with per-(season, position) z-scores so cross-era skaters rank on one ladder',
      'pgvector nearest-neighbor comparables on an 8-dimension career aspect vector',
    ],
    tech: [
      'Next.js',
      'FastAPI',
      'PostgreSQL + pgvector',
      'Supabase',
      'XGBoost',
      'Voyage AI',
      'LangGraph',
      'Vercel',
    ],
    links: [
      { label: 'Live Demo', href: 'https://www.thepuckai.com/' },
      {
        label: 'Engineering write-up',
        href: 'https://github.com/shigenogoro/PuckAI-Engineering',
      },
    ],
    showcase: {
      src: puckaiPlayerPage,
      alt: 'PuckAI player intelligence page for Cale Makar: tiering, radar chart, season trajectory, AI scouting report, pgvector comparables, and the prospect model’s original projection',
      url: 'thepuckai.com/8480069',
      caption:
        'Player intelligence page: era-adjusted tier, 8D radar, grounded scouting report, pgvector comparables, and the model’s pre-NHL call scored against what he became.',
    },
    featured: true,
  },
  {
    name: 'Hindsight: Git Intelligence Layer',
    tagline: 'Repo-level Graph-RAG for code understanding',
    description:
      'A Git intelligence layer that gives LLMs context from across a repository. It fuses BM25 lexical retrieval with intent-conditioned graph traversal over a heterogeneous repository graph (directory, file, class, and function nodes), built from AST-level call graphs and benchmarked on DeepCodeBench and LocBench.',
    highlights: [
      'Intent-conditioned traversal: an LLM labels each question leading, lagging, or exploratory to steer graph walks before retrieval',
      'Best file-level Acc@1 0.535 on DeepCodeBench with Qwen3-32B (+8.1 pts vs BM25, +11.2 pts vs adapted LocAgent; +12.9 pts with no location hint)',
      'Compared four graph-construction strategies (AST call graphs, RepoGraph, DKB, CGM) and built evaluation infrastructure for Fact Recall, Acc@k, and LLM-judged answer quality',
      'Grew out of repo-level Graph-RAG research at Honda Research Institute under Prof. Andrew McCallum',
    ],
    tech: [
      'Python',
      'Graph-RAG',
      'BM25',
      'Knowledge Graphs',
      'AST Indexing',
      'LocAgent',
      'FAISS',
    ],
    links: [
      {
        label: 'Read the blog post',
        href: 'https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766',
      },
    ],
  },
  {
    name: 'Multi-Agent RAG Filtering Pipeline',
    tagline: 'Alternative judge strategies for noise-robust retrieval',
    description:
      'A Predictor-Judge-Generator RAG pipeline (reimplemented MAIN-RAG from scratch, since no public implementation existed) that replaces the expensive LLM judge with lightweight rule-based thresholds. Each (query, document, answer) tuple is scored by the logit margin between the "Yes" and "No" tokens, then filtered to cut noisy context before generation.',
    highlights: [
      'Rule-based thresholds (mean+std, Otsu, quantile) matched the original adaptive-threshold results across HotpotQA, FEVER, FiQA, and NQ',
      'Filtering raised how often the kept documents contained the answer from 7.1% to 24.3% (HotpotQA, Mistral-7B) while cutting retained context from 20 to about 11 documents',
      'Found that the harshest cutoff works with a strong judge but breaks down with a weaker one, where dropped evidence sends F1 to 0.112',
      'Five-person ACM-format report for UMass CS646; I implemented the baseline and ran its experiments',
    ],
    tech: ['Python', 'RAG', 'BM25 / DPR / Contriever', 'Hugging Face'],
    links: [],
  },
  {
    name: 'Timestamp-Aligned Summarization',
    tagline: 'Chaptering ASR transcripts into titled, time-aligned segments',
    description:
      'A modular chaptering pipeline that segments ASR transcripts, generates per-segment titles with a fine-tuned BART, and aligns them back to the timeline with a BERT-based self-retrieval classifier. Evaluated on MeetingBank and a 972-video VidChapters-7M subset.',
    highlights: [
      'ROUGE-1 62.97 / ROUGE-2 52.31 / ROUGE-L 59.83 with BERTScore F1 91.44 on MeetingBank',
      '80.43% segment-alignment accuracy; Temporal F1 65.35% at ±15s',
      'Established that stable duration-based segments beat semantic boundary selection under ASR-only input',
    ],
    tech: ['Python', 'PyTorch', 'BART', 'BERT', 'Hugging Face'],
    links: [],
  },
]
