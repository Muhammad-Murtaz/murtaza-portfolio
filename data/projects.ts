import type { Project } from "@/types"

export const projects: Project[] = [
  {
    id: "gethirevault",
    title: "GetHireVault - AI Career Platform",
    description: "Production-grade AI career SaaS with 8 intelligent tools, multi-agent orchestration, and real-time ATS scoring.",
    longDescription: "A production AI-powered career platform featuring 8 intelligent tools: ATS-optimized resume builder, cover letter generator, voice mock interviews, skills-gap analysis, job matching, career-path planning, and more. Built with a multi-agent architecture: LangChain for structured output chaining, LangGraph for supervisor-orchestrated agent pipelines, and LangSmith for production tracing and observability. Features RAGAS-based hallucination detection, deterministic scoring algorithms, and Redis-backed semantic caching. Tools share a common agent infrastructure rather than running as isolated pipelines.",
    media: [
      { type: "video", src: "/videos/gethirevault.mp4" },
      { type: "image", src: "/images/gethirevault.jfif" },
    ],
    techStack: ["Next.js 15", "LangChain", "LangGraph", "LangSmith", "RAGAS", "Supabase Auth", "Supabase", "Drizzle ORM", "DeepInfra", "Deepgram", "Upstash Redis"],
    demoUrl: "https://www.gethirevault.com/",
    featured: true,
  },
  {
    id: "ai-travel-chatbot",
    title: "AI Travel Chatbot",
    description: "Multi-agent travel planning SaaS with real-time flight, hotel, and itinerary generation powered by LangGraph.",
    longDescription: "An intelligent travel planning platform that leverages multi-agent orchestration to provide personalised travel recommendations, real-time flight and hotel booking, and dynamic itinerary generation.",
    media: [
      { type: "video", src: "/videos/ai-trip-planner.mp4" },
      { type: "image", src: "/images/ai_trip_planner.png" },
    ],
    techStack: ["LangGraph", "FastAPI", "Next.js", "AWS Bedrock", "Llama 3.1 70B", "Pinecone", "PostgreSQL"],
    githubUrl: "https://github.com/Muhammad-Murtaz/AI-Trip-Planner-Saas-Agent",
    featured: true,
  },
  {
    id: "ai-course-generator",
    title: "AI Course & Video Generator",
    description: "LangGraph supervisor-orchestrated course generation with RAG pipelines, RAGAS quality gating, and elastic video rendering.",
    longDescription: "A LangGraph supervisor-orchestrated RAG pipeline that generates complete educational courses from natural language prompts. Features multi-tenant Pinecone knowledge isolation, RAGAS quality gating (faithfulness >= 0.85), RedisVL semantic caching for 40% cost reduction, and elastic video rendering with Remotion + Deepgram word-level timestamps.",
    media: [
      { type: "video", src: "/videos/ai-course-generator.mp4" },
      { type: "image", src: "/images/ai_video_course_generator.png" },
    ],
    techStack: ["LangGraph", "Next.js 15", "FastAPI", "LangChain", "Remotion", "Deepgram", "RAGAS", "Redis"],
    githubUrl: "https://github.com/Muhammad-Murtaz/AI-Video-Course-Generator-New",
    featured: false,
  },
  {
    id: "ai-career-assistant",
    title: "AI Career Assistant Platform",
    description: "Multi-agent career platform with LlamaIndex RAG, structured output chains, and deterministic scoring.",
    longDescription: "A comprehensive career assistant that leverages LlamaIndex for RAG, structured output chains for data extraction, and deterministic scoring algorithms for ATS compatibility analysis. Features multi-agent orchestration for resume analysis, job matching, and interview preparation.",
    media: [
      { type: "video", src: "/videos/ai_career_recommneder.mp4" },
      { type: "image", src: "/images/ai_career_coach.jpg" },
    ],
    techStack: ["LangChain", "LlamaIndex", "LangGraph", "NestJS", "Next.js", "Gemini AI", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/Muhammad-Murtaz/ai-career-coach-agent",
    featured: false,
  },
  {
    id: "healthcare-ai-platform",
    title: "Healthcare Conversational AI Platform",
    description: "HIPAA-compliant conversational AI with fine-tuned LLMs, NER, and RAG achieving 92% retrieval accuracy.",
    longDescription: "Built end-to-end conversational AI using fine-tuned LLMs, NER, and intent classification for patient engagement - processing 50K+ monthly interactions with 4.6/5 satisfaction rating. Integrated RAG pipeline over healthcare knowledge base with 92% retrieval accuracy using Ragas evaluation; implemented HIPAA-compliant data handling with encryption and audit logs.",
    media: [
      { type: "image", src: "/images/agentic_rag.png" },
    ],
    techStack: ["LLM Fine-Tuning", "NER", "FastAPI", "RAG", "DeepEval", "Ragas", "HIPAA"],
    featured: false,
  },
  {
    id: "voice-medical-assistant",
    title: "Voice Medical Assistant - MediSynapse",
    description: "HIPAA-compliant voice AI assistant combining RAG, computer vision, and speech recognition.",
    longDescription: "Developed HIPAA-compliant voice AI assistant combining RAG, computer vision, and speech recognition with custom TTS for hands-free medical workflow automation. Reduced manual clinical tasks by 45% through intelligent voice-driven interaction and document retrieval with real-time streaming responses.",
    media: [
      { type: "image", src: "/images/ai_career_coach.jpg" },
    ],
    techStack: ["Whisper ASR", "RAG", "Vision", "TTS", "HIPAA", "FastAPI"],
    featured: false,
  },
  {
    id: "llm-fine-tuning-pipeline",
    title: "LLM Fine-Tuning Pipeline",
    description: "Production-grade fine-tuning pipeline using LoRA/QLoRA with benchmark visualisation and model registry.",
    longDescription: "A robust pipeline for fine-tuning LLMs with LoRA and QLoRA, featuring automated benchmarking, model comparison, and Hugging Face model registry integration.",
    media: [
      { type: "image", src: "/images/agentic_rag.png" },
    ],
    techStack: ["Llama 3", "LoRA", "QLoRA", "Unsloth", "Hugging Face", "Axolotl", "W&B", "MLflow"],
    githubUrl: "https://github.com/Muhammad-Murtaz/agentic-rag",
    featured: false,
  },
]
