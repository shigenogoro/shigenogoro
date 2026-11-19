import type { Project } from './types'
import puckaiPlayer from '../assets/photo/puckai_player.webp'
import puckaiProspect from '../assets/photo/puckai_prospect.webp'
import puckaiCompare from '../assets/photo/puckai_compare.webp'
import puckaiTeams from '../assets/photo/puckai_teams.webp'
import puckaiScoutAgent from '../assets/photo/puckai_scout_agent.webp'

export const projects: Project[] = [
  {
    name: 'PuckAI',
    tagline: 'NHL player and prospect analytics with a RAG chat and a tool-using agent',
    description:
      'I founded PuckAI to answer what I kept wondering at UMass Hockey games: could this player make the NHL, and how far could he go? I launched it as a public site in 2025.',
    impact:
      'Early users were my beer league teammates and classmates, and I sent it to UMass Hockey’s director of hockey operations.',
    highlights: [
      'Judging prospects needs a ground truth, so I first tiered every NHL skater by era-adjusted percentiles',
      'Then trained XGBoost on decades of junior, college, and minor-league seasons to predict each prospect’s NHL odds and tier',
      'Trades and playing style matter, so pgvector search finds look-alike players on an 8-dimension career profile',
      'Compare and Teams settle debates: who’s better, which team is stronger, and whether a prospect tracks like an NHL player',
      'Scout Agent began as a RAG chat over the scouting reports. It became a LangGraph agent that finds highlights for newer fans and searches the web for daily injury news',
    ],
    tech: [
      'Python',
      'Next.js',
      'FastAPI',
      'PostgreSQL + pgvector',
      'XGBoost',
      'LangGraph',
      'MCP',
      'OpenTelemetry',
    ],
    links: [
      {
        label: 'Engineering write-up',
        href: 'https://github.com/shigenogoro/PuckAI-Engineering',
      },
    ],
    showcase: {
      label: 'Player page',
      src: puckaiPlayer,
      alt: 'PuckAI player page for Cale Makar: tier, skill radar, season trajectory, scouting report, similar players, and the prospect model’s original projection',
      url: 'PuckAI · player page',
      caption: 'Player page: tier, skill radar, scouting report, and similar players.',
      note: 'Site offline since Nov 2026.',
      features: [
        {
          label: 'Prospects',
          src: puckaiProspect,
          url: 'PuckAI · prospect projection',
          alt: 'PuckAI prospect page for Vaclav Nestrasil: NHL probability, expected tier, outcome distribution, scouting report, and league percentiles by season',
          caption: 'Prospect page: chance of making the NHL, expected tier, and the scouting report.',
        },
        {
          label: 'Compare',
          src: puckaiCompare,
          url: 'PuckAI · compare players',
          alt: 'PuckAI comparison of Sidney Crosby and Connor McDavid: skill radar and trajectory over their NHL careers, then the same view for their prospect years',
          caption: 'Crosby vs McDavid, over their NHL careers and their prospect years.',
        },
        {
          label: 'Teams',
          src: puckaiTeams,
          url: 'PuckAI · team matchup',
          alt: 'PuckAI comparison of Vegas and Carolina: tier breakdown, aspect scores, team radars, and roster cards',
          caption: 'Vegas vs Carolina: roster tiers, team radars, and player cards.',
        },
        {
          label: 'Scout Agent',
          src: puckaiScoutAgent,
          url: 'PuckAI · Scout Agent',
          alt: 'Animated PuckAI Scout Agent run: it decides whether to search the web or YouTube, finds the player, searches the scouting reports, reads his file, writes the answer, and returns four YouTube highlights for Patrice Bergeron',
          caption: 'The Scout Agent working through a question, then showing checked highlight videos.',
        },
      ],
    },
    featured: true,
  },
  {
    name: 'Hindsight: Knowledge-Graph Code Retrieval',
    tagline: 'Repo-level Graph-RAG for code understanding',
    description:
      'Changing one function in a large codebase can break files that never mention it by name. Keyword search can’t find those, so our team at Honda Research Institute & 99P Labs built a retrieval layer that pairs BM25 with a walk over a graph of the repository’s files, classes, and functions.',
    impact:
      'It beat keyword search at finding the right file, and the gap was widest when the question gave no hint about location: 51.7% of DeepCodeBench questions against 38.8% for BM25.',
    highlights: [
      'Different questions need different context, so an LLM first labels each one as leading, lagging, or exploratory, and that label decides how the graph walk goes',
      'There was no settled way to build a repository graph, so we compared four: AST call graphs, RepoGraph, DKB, and CGM',
    ],
    tech: [
      'Python',
      'Graph-RAG',
      'BM25',
      'Knowledge Graphs',
      'AST Indexing',
      'LocAgent',
    ],
    links: [
      {
        label: 'Read the blog post',
        href: 'https://medium.com/99p-labs/hindsight-a-knowledge-graph-layer-for-navigating-large-codebases-6acf331c1766',
      },
    ],
  },
  {
    name: 'MAIN-RAG Judge Strategies',
    tagline: 'Simple thresholds vs an LLM judge for RAG filtering',
    description:
      'Retrieval hands the generator a lot of noise. MAIN-RAG filters it with an LLM judge and an adaptive threshold, and our team of five tested whether simpler rule-based thresholds work as well.',
    impact:
      'Mean+std, Otsu, and quantile thresholds matched the adaptive threshold on HotpotQA, FEVER, FiQA, and NQ. On HotpotQA with Mistral-7B, filtering raised the share of kept documents that contain the answer from 7.1% to 24.3%.',
    highlights: [
      'With no public code to start from, I wrote the baseline from scratch and ran its experiments: a Predictor-Judge-Generator pipeline that scores each document by the logit gap between the judge’s “Yes” and “No” tokens',
      'The harshest cutoff only works with a strong judge. With a weaker one it drops real evidence and F1 falls to 0.112',
    ],
    tech: ['Python', 'RAG', 'BM25 / DPR / Contriever', 'Hugging Face'],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/shigenogoro/main-rag-judge-strategies' },
    ],
  },
  {
    name: 'Timestamp-Aligned Summarization',
    tagline: 'Titled, timestamped chapters from a transcript alone',
    description:
      'Long meeting recordings are hard to skim, and most come with nothing but an auto-generated transcript. The goal was a clickable table of contents, with titled chapters and timestamps, built from the ASR transcript alone.',
    impact:
      'ROUGE-L 59.83 and BERTScore F1 91.44 on MeetingBank, with 80.43% of segments aligned to the right place on the timeline.',
    highlights: [
      'I split the problem into three steps that can be tested on their own: segment the transcript, title each segment with a fine-tuned BART, and map titles back to timestamps with a BERT-based classifier',
      'Found that fixed-length segments beat semantic boundaries when the only input is an ASR transcript (Temporal F1 65.35% at ±15 s on 972 VidChapters-7M videos)',
    ],
    tech: ['Python', 'PyTorch', 'BART', 'BERT', 'Hugging Face'],
    links: [
      { label: 'View on GitHub', href: 'https://github.com/shigenogoro/timestamp-aligned-summarization' },
    ],
  },
]
