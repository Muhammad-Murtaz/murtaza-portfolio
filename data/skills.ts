import type { SkillCategory } from "@/types"

export const skillCategories: SkillCategory[] = [
  {
    category: "Python & Frameworks",
    icon: "python",
    skills: ["Python", "FastAPI", "Flask", "Pydantic", "SQLAlchemy", "Celery", "Pytest", "asyncio"],
  },
  {
    category: "AI Agents & Orchestration",
    icon: "bot",
    skills: ["LangChain", "LangGraph", "LangSmith", "LlamaIndex", "CrewAI", "AutoGen", "Multi-Agent Orchestration", "Tool Integration", "Stateful Memory", "Human-in-the-Loop"],
  },
  {
    category: "LLMs & Generative AI",
    icon: "sparkles",
    skills: ["GPT-4", "Llama 3", "Claude", "Gemini", "Mistral", "OpenAI API", "Anthropic API", "Prompt Engineering"],
  },
  {
    category: "LLM Fine-Tuning",
    icon: "sliders",
    skills: ["LoRA", "QLoRA", "Unsloth", "Axolotl", "Hugging Face", "TRL", "SFT Trainer", "DPO"],
  },
  {
    category: "RAG & Retrieval",
    icon: "search",
    skills: ["Pinecone", "Weaviate", "ChromaDB", "Qdrant", "LlamaIndex", "Haystack", "Embeddings", "Hybrid Search"],
  },
  {
    category: "LLM Evaluation",
    icon: "gauge",
    skills: ["DeepEval", "RAGAS", "LangFuse", "MLflow", "Phoenix", "W&B", "Confidence", "BLEU/ROUGE"],
  },
  {
    category: "ML & Deep Learning",
    icon: "network",
    skills: ["TensorFlow", "PyTorch", "Keras", "Scikit-learn", "XGBoost", "NumPy", "Pandas", "OpenCV"],
  },
  {
    category: "Speech & Voice AI",
    icon: "mic",
    skills: ["Whisper", "TTS", "Deepgram", "ElevenLabs", "Voice Activity Detection", "Speech-to-Text"],
  },
  {
    category: "Cloud & MLOps",
    icon: "cloud",
    skills: ["AWS", "GCP", "Docker", "Kubernetes", "Terraform", "GitHub Actions", "CI/CD", "Serverless"],
  },
  {
    category: "Databases & Infra",
    icon: "database",
    skills: ["PostgreSQL", "MongoDB", "Redis", "Elasticsearch", "RabbitMQ", "Kafka", "Nginx", "GraphQL"],
  },
  {
    category: "Frontend",
    icon: "code",
    skills: ["Next.js", "React", "TypeScript", "Tailwind CSS", "Streamlit", "Gradio", "WebSocket", "REST API"],
  },
  {
    category: "Security & APIs",
    icon: "shield",
    skills: ["JWT", "OAuth2", "RBAC", "Data Encryption", "Rate Limiting", "HIPAA", "PCI DSS", "API Gateway"],
  },
]
