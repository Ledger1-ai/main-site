"use client";

import { Check, Layers, Sliders, Sparkles, TrendingUp, Target, Shield, Zap, Users, Brain } from "lucide-react";
import { useBrandTheme } from "@/components/providers/brand-theme-provider";

export function AboutSection() {
  const { currentTheme } = useBrandTheme();

  return (
    <section id="vision" className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 py-24 bg-[#020609]">
      <div
        className="glass-pane rounded-3xl ring-1 p-8 md:p-12 backdrop-blur-md"
        style={{
          backgroundColor: `${currentTheme.color}0D`, // 5% opacity
          borderColor: `${currentTheme.color}33`, // 20% opacity
          boxShadow: `0 0 40px ${currentTheme.color}1A` // 10% opacity
        }}
      >
        <h2 className="text-3xl md:text-4xl font-bold tracking-tight text-white mb-2">Democratizing the Ontology</h2>
        <div
          className="text-[11px] uppercase tracking-wider opacity-80 font-mono mb-8 flex items-center gap-2"
          style={{ color: currentTheme.color }}
        >
          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.color }} />
          MISSION_STATUS: ACTIVE
        </div>

        <div className="prose prose-invert max-w-none space-y-6 text-lg leading-relaxed" style={{ color: `${currentTheme.color}99` }}>
          <p>
            <span className="text-white font-semibold">Intelligence is power.</span> For too long, the Fortune 500 has hoarded the world's most advanced ontologies—digital twins that allow them to model, predict, and control markets with god-like efficiency. Companies like Palantir built the weapons for Wall Street.
          </p>
          <p>
            <span className="text-white font-semibold">We built the weapon for you.</span> BasaltHQ is not just "software". It is a pre-packaged, AI-driven Ontology designed specifically for Main Street. We have taken the same comprehensive "Object-Action-Decision" architecture used by trillion-dollar asset managers and compressed it into an accessible, autonomous operating system.
          </p>
          <p>
            By digitizing your reality into <span className="font-mono text-sm" style={{ color: currentTheme.color }}>Objects</span>, <span className="font-mono text-sm" style={{ color: currentTheme.color }}>Actions</span>, and <span className="font-mono text-sm text-slate-200">Decisions</span>, we give you the same analytical supremacy. Whether you are running a restaurant chain, a retail empire, or a service fleet, the Main Street Ontology levels the battlefield.
          </p>
        </div>

        <div className="mt-12 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4">
          <div
            className="group rounded-xl p-6 border transition-all hover:-translate-y-1"
            style={{
              backgroundColor: `${currentTheme.color}0D`,
              borderColor: `${currentTheme.color}33`
            }}
          >
            <div className="mb-4 inline-flex p-2 rounded-lg" style={{ backgroundColor: `${currentTheme.color}1A`, color: currentTheme.color }}>
              <Target className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Anti-Fragile</h3>
            <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>Built to withstand market volatility through superior intelligence.</p>
          </div>

          <div
            className="group rounded-xl p-6 border transition-all hover:-translate-y-1"
            style={{
              backgroundColor: `${currentTheme.color}0D`,
              borderColor: `${currentTheme.color}33`
            }}
          >
            <div className="mb-4 inline-flex p-2 rounded-lg" style={{ backgroundColor: `${currentTheme.color}1A`, color: currentTheme.color }}>
              <Brain className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">AI Supremacy</h3>
            <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>Autonomous agents that out-think and out-execute the competition.</p>
          </div>

          <div
            className="group rounded-xl p-6 border transition-all hover:-translate-y-1"
            style={{
              backgroundColor: `${currentTheme.color}0D`,
              borderColor: `${currentTheme.color}33`
            }}
          >
            <div className="mb-4 inline-flex p-2 rounded-lg" style={{ backgroundColor: `${currentTheme.color}1A`, color: currentTheme.color }}>
              <Shield className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">Sovereignty</h3>
            <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>Ownership of your data, your relationships, and your future.</p>
          </div>

          <div
            className="group rounded-xl p-6 border transition-all hover:-translate-y-1"
            style={{
              backgroundColor: `${currentTheme.color}0D`,
              borderColor: `${currentTheme.color}33`
            }}
          >
            <div className="mb-4 inline-flex p-2 rounded-lg" style={{ backgroundColor: `${currentTheme.color}1A`, color: currentTheme.color }}>
              <Users className="h-5 w-5" />
            </div>
            <h3 className="text-base font-bold text-white mb-2">The Resistance</h3>
            <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>Join the network of independent businesses building the new economy.</p>
          </div>
        </div>
      </div>
    </section>
  );
}
