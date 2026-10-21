// All site content lives here. Edit this file; components do not need to change.
//
// Public-safety rule for internal (Novartis) work: describe the problem shape, the
// patterns and rounded/relative outcomes only. No internal system names, no data
// volumes from sensitive sources, no access-control or detection internals.
// Numbers used below are the ones already printed in the public resume PDF.

import type { Site } from '../types/Site';

export const site: Site = {
  seo: {
    title: 'Bhavya Verma · AI engineering and data science',
    description: 'AI engineering and data science at Novartis Risk & Compliance. I help teams turn manual workflows into AI systems they can trust.',
    url: 'https://bhavyaverma1.netlify.app',
    image: '/images/og.png',
  },

  person: {
    name: 'Bhavya Verma',
    role: 'AI Engineering & Data Science · Novartis Risk & Compliance',
    headline: 'I help teams turn manual workflows into AI systems they can trust.',
    location: 'Hyderabad, India · Open to work worldwide',
    photo: {
      src: '/images/avatar.jpg',
      webp: '/images/avatar.webp',
      alt: 'Portrait of Bhavya Verma',
    },
  },

  links: [
    { kind: 'email', label: 'Email', url: 'mailto:bhavyaverma1699@gmail.com' },
    { kind: 'linkedin', label: 'LinkedIn', url: 'https://www.linkedin.com/in/bhavyaverma1/' },
    { kind: 'github', label: 'GitHub', url: 'https://github.com/bhavyaverma1' },
    { kind: 'resume', label: 'Resume (PDF)', url: '/Bhavya_Verma_Resume.pdf' },
    { kind: 'twitter', label: 'Twitter', url: 'https://twitter.com/_vermabhavya' },
    { kind: 'medium', label: 'Medium', url: 'https://medium.com/@bhavya17142' },
  ],

  featured: [
    {
      id: 'nl-analytics-agent',
      title: 'Natural-language analytics agent',
      context: 'Novartis',
      summary: 'Agentic text-to-SQL assistant that lets business users query governed compliance data in plain English, with per-user access guardrails.',
      problem: 'Business users needed answers from governed compliance data whose question sets vary by country, time period and activity type.',
      built: 'A multi-stage agent pipeline (categorise → clarify → plan → run SQL) that corrects its own SQL from execution errors, splits multi-part questions into sub-queries, and enforces per-user data access in the query layer.',
      outcome: 'Self-service, SQL-grounded answers with charts. Extended from one data domain to three through a pluggable data-source layer, with request tracing and user feedback built in.',
      stack: ['Python', 'FastAPI', 'React/TypeScript', 'Azure OpenAI', 'Snowflake'],
      internal: true,
    },
    {
      id: 'audit-control-testing',
      title: 'Automated audit control testing',
      context: 'Novartis',
      summary: 'LLM pipeline that tests ~700 anti-corruption audit questions across 30 controls. Cited verdicts, benchmarked against human reviewers.',
      problem: 'Anti-corruption control testing covers ~700 audit questions across 30 controls, each checked against document attachments, transaction data and policy.',
      built: 'A pipeline that compiles each audit question into testable sub-checks and grounds every verdict in five sources (OCR’d attachments, transaction feeds, policy and control handbooks) using strict JSON-schema LLM calls, a cross-source contradiction rule and recall-first calibration.',
      outcome: 'Pass / Fail / N-A verdicts with cited evidence, benchmarked against historical human-reviewer decisions on recall, precision and critical-violation detection.',
      stack: ['Python', 'Azure OpenAI', 'Azure Document Intelligence', 'Snowflake'],
      internal: true,
    },
    {
      id: 'global-local-config',
      title: 'Global-to-local config sync',
      context: 'Novartis',
      summary: 'LLM matcher with a verifier loop and accuracy evals that syncs global workflow changes to 77 country configs. ~90% less manual effort.',
      problem: 'Every global change to a compliance workflow had to be copied by hand into 77 country-specific configuration files: about six weeks of work for three people.',
      built: 'A tiered matcher (exact → fuzzy → LLM-as-judge → no match) with guards against meaning flips such as “must” vs “must not”, and a verifier loop in which an LLM auditor flags dropped or invented rows, deterministic fixes are applied and the result is re-checked. Hard cases fail over to a second model.',
      outcome: 'About 1.5 weeks with one person instead of six weeks with three (~90% less effort), with per-sheet accuracy measured against human reference files.',
      stack: ['Python', 'Azure OpenAI', 'AWS Bedrock'],
      internal: true,
    },
    {
      id: 'rag-framework',
      title: 'RAG framework for compliance assistants',
      context: 'Novartis',
      summary: 'Tool-calling RAG framework with hybrid search and feedback telemetry, behind three deployed compliance assistants.',
      problem: 'Compliance teams in several jurisdictions needed policy assistants that cite their sources and that subject-matter experts can tune without an engineer.',
      built: 'A tool-calling RAG framework with hybrid retrieval (keyword + vector + semantic rerank), session and feedback telemetry, and an in-app prompt editor. A streaming risk-review agent on the same base checks project documents against a nine-domain risk taxonomy.',
      outcome: 'Powers three deployed assistants across jurisdictions and policy domains, with usage and answer quality tracked from the telemetry.',
      stack: ['Python', 'FastAPI', 'React/TypeScript', 'Azure AI Search', 'Azure OpenAI', 'Snowflake'],
      internal: true,
    },
    {
      id: 'vehicle-routing',
      title: 'Route optimisation for field crews',
      context: 'BlackCoffer · 2023',
      summary: 'OR-Tools route planning for installation crews. 25% less travel, 30% better on-time performance.',
      problem: 'A blinds installation company (Stan Bond SA) needed better scheduling and routing for its field crews.',
      built: 'A capacitated vehicle-routing (CVRP) model with Google OR-Tools for planning installation routes and schedules.',
      outcome: 'Travel time and distance down 25%; on-time performance up 30%.',
      stack: ['Python', 'Google OR-Tools'],
      link: { label: 'Code on GitHub', url: 'https://github.com/bhavyaverma1/Vehicle-Routing-Problem' },
    },
    {
      id: 'ieso-forecasting',
      title: 'Energy price forecasting',
      context: 'BlackCoffer · 2022–2023',
      summary: 'Fuel-price forecasting (LSTM / GRU) on a GCP data pipeline. 50% faster data processing.',
      problem: 'Forecast fuel prices from IESO power-market data, which first had to be fetched and stored reliably.',
      built: 'An end-to-end pipeline that loads IESO data into BigQuery on GCP, plus LSTM, GRU and ANN forecasting models and a Looker Studio dashboard.',
      outcome: 'Data processing time cut by 50%.',
      stack: ['Python', 'LSTM / GRU', 'Google BigQuery', 'GCP', 'Looker Studio'],
      link: { label: 'Code on GitHub', url: 'https://github.com/bhavyaverma1/IESO-Price-Forecasting' },
    },
  ],

  more: [
    {
      title: 'Audit-intelligence dashboard',
      context: 'Novartis',
      summary: 'Clusters audit observations by meaning and over time to surface recurring themes, then writes an executive briefing grounded in computed metrics.',
    },
    {
      title: 'Forecasting HSE metrics with Chronos',
      context: 'Novartis',
      summary: 'Benchmarked a time-series foundation model against statistical baselines; forecast MAPE from 139% to 25%.',
    },
    {
      title: 'Policy consolidation engine',
      context: 'Novartis',
      summary: 'Finds overlapping and subset policy documents with retrieval and chunk-coverage analysis to support keep / drop / merge decisions.',
    },
    {
      title: 'Record linkage for missing reporting IDs',
      context: 'Novartis',
      summary: 'Fuzzy-matching candidate generation followed by LLM adjudication between vendor and CRM records.',
    },
    {
      title: 'Snake species detection',
      context: 'IIIT Delhi',
      summary: 'CNN image classifier (DenseNet, Inception V3, ResNet) to help identify snakes in snake-bite treatment.',
      link: { label: 'GitHub', url: 'https://github.com/bhavyaverma1/snek' },
    },
    {
      title: 'Smart sign-language gloves',
      context: 'IIIT Delhi',
      summary: 'Real-time American Sign Language-to-speech with wearable gloves, tested with users from several NGOs.',
    },
    {
      title: 'Speech recognition for regional languages',
      context: 'IIIT Delhi',
      summary: 'Course project combining deep neural networks and hidden Markov models.',
      link: { label: 'GitHub', url: 'https://github.com/bhavyaverma1/Automatic-Speech-Recognition' },
    },
  ],

  experience: [
    {
      company: 'Novartis',
      title: 'Data Analytics and Insights Specialist, Risk & Compliance',
      period: 'Jul 2024 – present',
      highlight: '15+ GenAI and ML applications shipped to production.',
    },
    {
      company: 'BlackCoffer',
      title: 'Data Scientist',
      period: 'Aug 2022 – Apr 2024',
    },
    {
      company: '',
      title: 'Freelance Data Scientist',
      period: 'Oct 2021 – Jul 2022',
    },
    {
      company: 'Autodesk',
      title: 'Software Engineering Intern',
      period: 'Jun 2021 – Sep 2021',
    },
  ],

  education: [
    {
      school: 'IIIT Delhi',
      degree: 'B.Tech, Electronics & Communication Engineering',
      period: '2017 – 2021',
    },
  ],

  tools: [
    {
      label: 'AI',
      items: [
        'Agents & tool calling', 'RAG', 'LLM evals', 'Guardrails', 'Human-in-the-loop',
        'Document extraction', 'Observability',
      ],
    },
    {
      label: 'ML & data',
      items: [
        'Anomaly & drift detection', 'Entity resolution', 'Forecasting', 'Python', 'SQL',
        'PyTorch', 'Snowflake', 'Databricks', 'AWS', 'Azure', 'Docker', 'Kubernetes',
      ],
    },
  ],

  workWithMe: {
    body: 'Open to AI engineer and data science roles anywhere, and to focused projects on LLM features that need to be reliable.',
  },

  footerNote: 'Views are my own, not Novartis’s.',

  analytics: {
    googleAnalyticsId: 'G-YJ73BX984Z',
  },
};
