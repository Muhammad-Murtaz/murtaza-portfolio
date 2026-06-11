import type { Metadata } from "next"
import { Inter, Syne } from "next/font/google"
import "./globals.css"

const inter = Inter({
  subsets: ["latin"],
  variable: "--font-inter",
  display: "swap",
})

const syne = Syne({
  subsets: ["latin"],
  variable: "--font-syne",
  display: "swap",
})

export const metadata: Metadata = {
  title: "Muhammad Murtaza | Senior Python AI Engineer",
  description:
    "Senior Python AI Engineer with 4+ years building production AI agents, LLM systems, and RAG pipelines. Available for remote roles.",
  keywords: [
    "AI Engineer", "Python", "LangChain", "LLM", "RAG", "Machine Learning",
    "Deep Learning", "FastAPI", "Next.js", "Portfolio",
  ],
  openGraph: {
    title: "Muhammad Murtaza | Senior Python AI Engineer",
    description:
      "Senior Python AI Engineer with 4+ years building production AI agents, LLM systems, and RAG pipelines.",
    type: "website",
    locale: "en_US",
  },
  twitter: {
    card: "summary_large_image",
    title: "Muhammad Murtaza | Senior Python AI Engineer",
    description:
      "Senior Python AI Engineer with 4+ years building production AI agents, LLM systems, and RAG pipelines.",
  },
  robots: {
    index: true,
    follow: true,
  },
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${syne.variable} antialiased`}
      suppressHydrationWarning
    >
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link
          href="https://fonts.googleapis.com/css2?family=JetBrains+Mono:wght@400;500&display=swap"
          rel="stylesheet"
        />
      </head>
      <body className="min-h-screen bg-black text-slate-100 font-sans">
        {children}
      </body>
    </html>
  )
}
