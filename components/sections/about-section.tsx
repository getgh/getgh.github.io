"use client";

import React, { memo } from "react";
import { EncryptedText } from "@/components/ui/encrypted-text";
import { cn } from "@/lib/utils";

// Simple CSS-based glow text
const GlowText = memo(function GlowText({
  children,
  className,
}: {
  children: React.ReactNode;
  className?: string;
}) {
  return (
    <span
      className={cn(
        "relative inline-block transition-all duration-300",
        "hover:text-white",
        className
      )}
      style={{
        textShadow: 'none',
      }}
      onMouseEnter={(e) => {
        (e.target as HTMLElement).style.textShadow = '0 0 20px rgba(255,255,255,0.4)';
      }}
      onMouseLeave={(e) => {
        (e.target as HTMLElement).style.textShadow = 'none';
      }}
      data-cursor-hover
    >
      {children}
    </span>
  );
});

export function AboutSection() {
  const skills = [
    "Python",
    "JavaScript",
    "TypeScript",
    "React",
    "Next.js",
    "PostgreSQL",
    "AWS Cloud",
    "Docker",
    "Git",
    "NumPy",
    "C",
  ];

  return (
    <section
      id="about"
      className="relative min-h-screen w-full py-32 md:py-48 bg-black"
    >
      {/* Grid background */}
      <div className="absolute inset-0 bg-grid-white opacity-[0.02]" />

      <div className="swiss-container relative z-10">
        <div className="swiss-grid">
          {/* Section label */}
          <div className="col-span-4 md:col-span-2 lg:col-span-3 mb-12 md:mb-0">
            <span className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40">
              About
            </span>
            <div className="mt-4 w-12 h-px bg-white/20" />
          </div>

          {/* Main content */}
          <div className="col-span-4 md:col-span-6 lg:col-span-9">
            {/* Encrypted header */}
            <h2 className="font-harmond text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-bold tracking-tight text-white mb-8">
              <EncryptedText
                text="The Creative Mind"
                encryptedClassName="text-white/30"
                revealedClassName="text-white"
                revealDelayMs={40}
              />
            </h2>

            {/* Bio paragraphs */}
            <div className="space-y-6 font-nohemi text-lg md:text-xl leading-relaxed text-white/60 max-w-3xl">
              <p>
                I&apos;m a Computer Science student at{" "}
                <GlowText className="text-white">
                  Georgia State University
                </GlowText>{" "}
                with a 3.8 GPA, passionate about building innovative solutions that combine AI, cloud technologies, and modern web development.
              </p>

              <p>
                Currently working as a{" "}
                <GlowText className="text-white">Makerspace Technologist at GSU&apos;s EXLAB</GlowText>,{" "}
                I&apos;ve engineered custom AI chatbots, optimized hardware workflows, and maintained 3D printing systems while supporting 300+ students in their creative endeavors.
              </p>
            </div>

            {/* Skills grid */}
            <div className="mt-16">
              <h3 className="font-nohemi text-xs font-medium uppercase tracking-[0.3em] text-white/40 mb-6">
                Technologies
              </h3>
              <div className="flex flex-wrap gap-3">
                {skills.map((skill) => (
                  <span
                    key={skill}
                    className={cn(
                      "px-4 py-2 rounded-full border border-white/10 bg-white/5",
                      "font-nohemi text-sm text-white/70",
                      "hover:border-white/30 hover:bg-white/10 hover:text-white",
                      "transition-all duration-300"
                    )}
                    data-cursor-hover
                  >
                    {skill}
                  </span>
                ))}
              </div>
            </div>

            {/* Stats */}
            <div className="mt-16 grid grid-cols-2 md:grid-cols-4 gap-8">
              {[
                { value: "3.8", label: "GPA" },
                { value: "2026", label: "Expected Graduation" },
                { value: "300+", label: "Students Supported" },
                { value: "AWS", label: "Certified" },
              ].map((stat) => (
                <div key={stat.label} className="text-center md:text-left">
                  <div className="font-harmond text-4xl md:text-5xl font-bold text-white">
                    {stat.value}
                  </div>
                  <div className="font-nohemi text-xs uppercase tracking-widest text-white/40 mt-2">
                    {stat.label}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
}
