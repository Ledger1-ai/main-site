"use client";

import { Box, Activity, Brain, Server, Share2, Workflow, Database, Zap, Cpu } from "lucide-react";
import { useBrandTheme } from "@/components/providers/brand-theme-provider";

export function OntologyExplainer() {
  const { currentTheme } = useBrandTheme();

  return (
    <section className="py-24 bg-[#020609] relative overflow-hidden border-t border-white/5">

      {/* Background Ambience */}
      <div
        className="absolute top-0 left-1/4 w-96 h-96 rounded-full blur-[100px] opacity-10 transition-colors duration-1000"
        style={{ backgroundColor: currentTheme.color }}
      />
      <div
        className="absolute bottom-0 right-1/4 w-96 h-96 rounded-full blur-[100px] opacity-5 transition-colors duration-1000"
        style={{ backgroundColor: currentTheme.color }}
      />

      <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">

        {/* Header */}
        <div className="text-center mb-24 relative z-10">
          <div
            className="inline-flex items-center gap-2 mb-4 font-mono text-xs tracking-[0.2em] uppercase transition-colors duration-500"
            style={{ color: currentTheme.color }}
          >
            <div
              className="w-2 h-2 rounded-full animate-ping"
              style={{ backgroundColor: currentTheme.color }}
            />
            System_Status: Online
          </div>
          <h2 className="text-3xl md:text-5xl font-bold text-white tracking-tight mb-6">
            Construct Your <span className="transition-colors duration-500" style={{ color: currentTheme.color }}>Digital Twin</span>
          </h2>
          <p className="text-lg text-muted-foreground/60 max-w-2xl mx-auto">
            The BasaltHQ Ontology is not just software. It is a living model of your business reality, composed of three fundamental atoms.
          </p>
        </div>

        {/* The Three Atoms */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 relative z-10">

          {/* 1. Objects */}
          <div
            className="group relative p-8 rounded-2xl bg-black/40 border backdrop-blur-sm hover:bg-white/5 transition-all duration-500 overflow-hidden"
            style={{ borderColor: `${currentTheme.color}30` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundImage: `linear-gradient(to bottom, ${currentTheme.color}10, transparent)` }}
            />

            {/* Radar Sweep Effect for Objects */}
            <div
              className="absolute top-[-50%] left-[-50%] w-[200%] h-[200%] animate-radar-spin opacity-30 pointer-events-none"
              style={{
                background: `conic-gradient(from 0deg, transparent 0deg, ${currentTheme.color}20 90deg, transparent 180deg)`
              }}
            />

            <div
              className="w-14 h-14 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: `${currentTheme.color}10`,
                borderColor: `${currentTheme.color}30`,
                color: currentTheme.color,
                boxShadow: `0 0 15px ${currentTheme.color}20`
              }}
            >
              <Database className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-mono">
              <span className="transition-colors duration-500" style={{ color: currentTheme.color }}>01.</span> LIVE_OBJECTS
            </h3>
            <p className="text-muted-foreground/50 text-sm leading-relaxed mb-6">
              Every asset, customer, and inventory item is a persistent digital object. Not a database row, but a living entity with state and history.
            </p>

            {/* Micro-Viz: Pulse Ring */}
            <div
              className="h-24 rounded-lg bg-black/40 border p-3 relative overflow-hidden flex items-center justify-center"
              style={{ borderColor: `${currentTheme.color}30` }}
            >
              <div className="relative">
                <div
                  className="absolute -inset-4 border rounded-full animate-pulse-ring"
                  style={{ borderColor: `${currentTheme.color}30` }}
                />
                <div
                  className="w-3 h-3 rounded-full shadow-lg"
                  style={{ backgroundColor: currentTheme.color, boxShadow: `0 0 10px ${currentTheme.color}` }}
                />
              </div>
              <div
                className="absolute top-3 right-3 text-[10px] font-mono transition-colors duration-500"
                style={{ color: currentTheme.color }}
              >
                ID: A7-X9
              </div>
              <div
                className="absolute bottom-0 left-0 right-0 h-10 bg-gradient-to-t to-transparent"
                style={{ backgroundImage: `linear-gradient(to top, ${currentTheme.color}10, transparent)` }}
              />
            </div>
          </div>

          {/* 2. Actions */}
          <div
            className="group relative p-8 rounded-2xl bg-black/40 border backdrop-blur-sm hover:bg-white/5 transition-all duration-500"
            style={{ borderColor: `${currentTheme.color}30` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundImage: `linear-gradient(to bottom, ${currentTheme.color}10, transparent)` }}
            />

            <div
              className="w-14 h-14 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: `${currentTheme.color}10`,
                borderColor: `${currentTheme.color}30`,
                color: currentTheme.color,
                boxShadow: `0 0 15px ${currentTheme.color}20`
              }}
            >
              <Zap className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-mono">
              <span className="transition-colors duration-500" style={{ color: currentTheme.color }}>02.</span> KINETIC_ACTIONS
            </h3>
            <p className="text-muted-foreground/50 text-sm leading-relaxed mb-6">
              Workflows that fire automatically. When an Object changes state, an Action is triggered instantly. No human latency.
            </p>

            {/* Micro-Viz: Loading Bar */}
            <div
              className="h-24 rounded-lg bg-black/40 border p-3 relative overflow-hidden flex items-center justify-center"
              style={{ borderColor: `${currentTheme.color}30` }}
            >
              <div
                className="w-full h-[5px] rounded-full overflow-hidden"
                style={{ backgroundColor: `${currentTheme.color}20` }}
              >
                <div
                  className="h-full rounded-full animate-loading-bar"
                  style={{ backgroundColor: currentTheme.color, boxShadow: `0 0 10px ${currentTheme.color}50` }}
                />
              </div>
            </div>
          </div>

          {/* 3. Decisions */}
          <div
            className="group relative p-8 rounded-2xl bg-black/40 border backdrop-blur-sm hover:bg-white/5 transition-all duration-500"
            style={{ borderColor: `${currentTheme.color}30` }}
          >
            <div
              className="absolute inset-0 bg-gradient-to-b to-transparent opacity-0 group-hover:opacity-100 transition-opacity"
              style={{ backgroundImage: `linear-gradient(to bottom, ${currentTheme.color}10, transparent)` }}
            />

            <div
              className="w-14 h-14 rounded-xl border flex items-center justify-center mb-6 group-hover:scale-110 transition-all duration-300"
              style={{
                backgroundColor: `${currentTheme.color}10`,
                borderColor: `${currentTheme.color}30`,
                color: currentTheme.color,
                boxShadow: `0 0 15px ${currentTheme.color}20`
              }}
            >
              <Brain className="w-7 h-7" />
            </div>

            <h3 className="text-xl font-bold text-white mb-2 font-mono">
              <span className="transition-colors duration-500" style={{ color: currentTheme.color }}>03.</span> DECISIONS
            </h3>
            <p className="text-muted-foreground/50 text-sm leading-relaxed mb-6">
              AI that reasons over your Objects and Actions to make autonomous decisions. The system suggests, you approve.
            </p>

            {/* Micro-Viz: Neural Grid Flicker */}
            <div
              className="h-24 rounded-lg bg-black/40 border p-3 relative overflow-hidden grid grid-cols-4 gap-2 content-center"
              style={{ borderColor: `${currentTheme.color}30` }}
            >
              {[0, 0.5, 1.2, 2.5, 0.3, 1.8, 0.9, 1.5].map((delay, i) => (
                <div
                  key={i}
                  className="h-3 rounded animate-flicker"
                  style={{
                    backgroundColor: `${currentTheme.color}20`,
                    animationDelay: `${delay}s`
                  }}
                />
              ))}
            </div>
          </div>

        </div>

      </div>
    </section>
  );
}
