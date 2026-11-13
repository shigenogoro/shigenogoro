## Hi, I'm Sheng-Kai (Kyle) Wen 👋

I'm an AI/ML Engineer with an M.S. in Computer Science from **UMass Amherst** (2026). I build LLM and
retrieval systems, measure them, and run them in production.

🌐 **Portfolio: [shigenogoro.github.io/profile](https://shigenogoro.github.io/profile/)**

### 🛠️ Technical Skills

- **Languages:** Python, TypeScript, JavaScript, SQL, Java, C/C++
- **Machine Learning:** PyTorch, XGBoost, feature engineering, model evaluation, label-leakage & calibration debugging
- **Generative AI & LLMs:** RAG, grounded generation & output validation, AI agents (LangGraph, MCP servers), fine-tuning (BART / LongT5 / BERT), LLM-as-judge evaluation
- **Retrieval & IR:** pgvector / HNSW / FAISS, hybrid dense + lexical retrieval, Reciprocal Rank Fusion, reranking, NDCG / MRR / Recall@K
- **Data & Backend:** multi-stage ETL, Pandas, NumPy, FastAPI, PostgreSQL, Supabase, Next.js, Vercel, CI/CD (GitHub Actions), OpenTelemetry

### 🔬 Research & Projects

**🏒 [PuckAI](https://www.thepuckai.com)**: ask anything about a hockey player, from an NHL star to a 17-year-old in juniors, and get an answer backed by real data. I built it, launched it, and run it on my own.
- **Scouting chat.** Answers from 7,643 scouting reports I generated. Every number in them had to pass a checker before it was published, so the chat can't make up stats.
- **Scout Agent.** When the reports are too old to know (an injury this week, a brand-new draft pick), it searches the web and pulls highlight videos, and it checks each video really shows the right player before showing it.
- **Prospect model.** Predicts which teenagers will make the NHL, trained on 48 years of junior, college, and minor-league seasons.
- [How it's built →](https://github.com/shigenogoro/PuckAI-Engineering)

**🧭 [Hindsight](https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766)** (Honda Research Institute & 99P Labs): ask "what breaks if I change this?" in a large codebase and get pointed to the right files. It searches a knowledge graph built from the code itself, and it finds the right file first more often than keyword search.

**🧹 [MAIN-RAG Judge Strategies](https://github.com/shigenogoro/main-rag-judge-strategies)**: RAG systems retrieve a lot of noise. This project asks whether a simple statistical cutoff can decide which documents to keep as well as an LLM judge can. It can, with no extra model call per document.

**🎬 [Timestamp-Aligned Summarization](https://github.com/shigenogoro/timestamp-aligned-summarization)**: turns a long meeting recording into a clickable table of contents, with titled chapters and timestamps, from the transcript alone.

### 📫 Connect With Me

- [LinkedIn](https://www.linkedin.com/in/sheng-kai-wen/)
- ✉️ gorowen56@gmail.com

---

<sub>This repo is the source for the portfolio site. Development notes: [docs/](docs/README.md).</sub>
