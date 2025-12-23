"use client";

import React from "react";
import { FocusCards } from "@/components/ui/focus-cards";

export function WorksSection() {
  const projects = [
    {
      title: "PDF Analyzer",
      src: "https://images.unsplash.com/photo-1497633762265-9d179a990aa6?q=80&w=2426&auto=format&fit=crop",
      category: "AI & Full Stack",
      description:
        "AI-powered web app with ChatGPT integration, AWS S3 storage, Pinecone semantic search, and OCR capabilities. 45% increase in user engagement.",
      link: "#",
    },
    {
      title: "Used Car Price Valuation",
      src: "https://images.unsplash.com/photo-1449965408869-eaa3f722e40d?q=80&w=2340&auto=format&fit=crop",
      category: "Machine Learning",
      description:
        "Python-based ML system using Linear Regression and Decision Trees to predict vehicle prices with exploratory data analysis and model evaluation.",
      link: "#",
    },
    {
      title: "Custom AI Chatbot for EXLAB",
      src: "https://images.unsplash.com/photo-1531746790731-6c087fecd65a?q=80&w=2340&auto=format&fit=crop",
      category: "AI Development",
      description:
        "Engineered and deployed using OpenAI API and webhooks, automating student advising workflows and supporting 300+ users.",
      link: "#",
    },
    {
      title: "3D Printer System Optimization",
      src: "https://images.unsplash.com/photo-1614624532983-4ce03382d63d?q=80&w=2532&auto=format&fit=crop",
      category: "Hardware Engineering",
      description:
        "Optimized hardware workflows with structured diagnostic testing and firmware updates, reducing device failures by 40%.",
      link: "#",
    },
    {
      title: "Spam Email Detection",
      src: "https://images.unsplash.com/photo-1557200134-90327ee9fafa?q=80&w=2340&auto=format&fit=crop",
      category: "Machine Learning",
      description:
        "Built classification models for spam detection using Python, achieving high accuracy through feature engineering and model tuning.",
      link: "#",
    },
    {
      title: "Portfolio Website",
      src: "https://images.unsplash.com/photo-1467232004584-a241de8bcf5d?q=80&w=2340&auto=format&fit=crop",
      category: "Web Development",
      description:
        "Modern portfolio site built with Next.js, TypeScript, and Tailwind CSS featuring Swiss design principles and smooth animations.",
      link: "#",
    },
  ];

  return (
    <section
      id="work"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Subtle gradient */}
      <div className="absolute inset-0 bg-gradient-radial from-white/[0.02] via-transparent to-transparent" />

      <div className="swiss-container relative z-10">
        {/* Section header */}
        <div className="mb-16 md:mb-24">
          <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
            <div>
              <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 block mb-4">
                Selected Works
              </span>
              <h2 className="font-harmond text-5xl md:text-6xl lg:text-7xl font-bold tracking-tight text-white">
                Projects
              </h2>
            </div>

            <p className="font-nohemi text-base md:text-lg text-white/50 max-w-md">
              A curated selection of projects that showcase my expertise in
              creating exceptional digital experiences.
            </p>
          </div>

          {/* Divider */}
          <div className="mt-8 h-px bg-gradient-to-r from-white/20 via-white/5 to-transparent" />
        </div>

        {/* Projects grid */}
        <FocusCards cards={projects} />

        {/* View all link */}
        <div className="mt-16 flex justify-center">
          <a
            href="#"
            className="group inline-flex items-center gap-3 font-nohemi text-sm uppercase tracking-widest text-white/60 hover:text-white transition-colors duration-300"
            data-cursor-hover
          >
            <span>View All Projects</span>
            <svg
              className="w-4 h-4 transition-transform duration-300 group-hover:translate-x-1"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth={2}
                d="M17 8l4 4m0 0l-4 4m4-4H3"
              />
            </svg>
          </a>
        </div>
      </div>
    </section>
  );
}
