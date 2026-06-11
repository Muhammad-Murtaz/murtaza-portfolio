import type { Project } from "@/types"

export const projects: Project[] = [
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
    description: "Automated course creation platform using AI for scriptwriting, video generation, and voiceover synthesis.",
    longDescription: "A full-stack platform that automatically generates educational courses with AI-written scripts, Remotion-rendered videos, and Deepgram-synthesised voiceovers.",
    media: [
      { type: "video", src: "/videos/ai-course-generator.mp4" },
      { type: "image", src: "/images/ai_video_course_generator.png" },
    ],
    techStack: ["Next.js 15", "FastAPI", "LangChain", "Remotion", "Deepgram", "AWS", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/Muhammad-Murtaz/AI-Video-Course-Generator-New",
    featured: false,
  },
  {
    id: "ai-career-assistant",
    title: "AI Career Assistant Platform",
    description: "Intelligent career coaching platform with AI-driven resume analysis, job matching, and interview preparation.",
    longDescription: "A comprehensive career assistant that leverages LLMs and RAG for personalised career guidance, resume optimisation, and interview coaching.",
    media: [
      { type: "image", src: "/images/ai_career_coach.jpg" },
    ],
    techStack: ["LangChain", "LlamaIndex", "NestJS", "Next.js", "Gemini AI", "PostgreSQL", "Redis"],
    githubUrl: "https://github.com/Muhammad-Murtaz/ai-career-coach-agent",
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
