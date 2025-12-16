"use client";

import { useState } from "react";
import Image from "next/image";
import { cn } from "@/lib/utils";
import { BookOpen, Shield } from "lucide-react";

export function BookSelector() {
    const [selected, setSelected] = useState<"nma" | "gclb">("nma");

    return (
        <div className="w-full max-w-4xl mx-auto mt-16 px-4">
            {/* Book Selection Row */}
            <div className="flex flex-col md:flex-row justify-center items-center gap-8 md:gap-16 mb-12">
                {/* Book 1: NMA */}
                <button
                    onClick={() => setSelected("nma")}
                    className={cn(
                        "group relative transition-all duration-300 transform",
                        selected === "nma" ? "scale-110 z-10" : "scale-95 opacity-60 hover:opacity-100"
                    )}
                >
                    <div className={cn(
                        "absolute inset-0 blur-2xl rounded-lg transition-all duration-500",
                        selected === "nma" ? "bg-teal-500/30" : "bg-transparent group-hover:bg-teal-500/10"
                    )} />
                    <img
                        src="/books/cover_nma_square.jpeg"
                        alt="Neuromimetic Architecture"
                        className={cn(
                            "relative w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-2xl transition-all duration-300 border-2",
                            selected === "nma" ? "border-teal-500 shadow-teal-500/20" : "border-transparent"
                        )}
                    />
                    <div className={cn(
                        "absolute -bottom-8 left-0 right-0 text-center transition-all duration-300",
                        selected === "nma" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    )}>
                        <span className="text-teal-400 font-mono text-xs tracking-widest uppercase">Select Doctrine</span>
                    </div>
                </button>

                {/* Book 2: GCLB */}
                <button
                    onClick={() => setSelected("gclb")}
                    className={cn(
                        "group relative transition-all duration-300 transform",
                        selected === "gclb" ? "scale-110 z-10" : "scale-95 opacity-60 hover:opacity-100"
                    )}
                >
                    <div className={cn(
                        "absolute inset-0 blur-2xl rounded-lg transition-all duration-500",
                        selected === "gclb" ? "bg-red-500/30" : "bg-transparent group-hover:bg-red-500/10"
                    )} />
                    <img
                        src="/books/cover_gclb_square.jpeg"
                        alt="Growing Companies Like Brains"
                        className={cn(
                            "relative w-48 h-48 md:w-64 md:h-64 rounded-lg shadow-2xl transition-all duration-300 border-2",
                            selected === "gclb" ? "border-red-500 shadow-red-500/20" : "border-transparent"
                        )}
                    />
                    <div className={cn(
                        "absolute -bottom-8 left-0 right-0 text-center transition-all duration-300",
                        selected === "gclb" ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2"
                    )}>
                        <span className="text-red-400 font-mono text-xs tracking-widest uppercase">Select Manual</span>
                    </div>
                </button>
            </div>

            {/* Description Panel */}
            <div className="relative min-h-[160px] bg-black/40 border border-cyan-900/30 rounded-2xl p-8 backdrop-blur overflow-hidden">
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-5 pointer-events-none" />

                {selected === "nma" ? (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <Shield className="w-5 h-5 text-teal-400" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Theory</h3>
                        </div>
                        <p className="text-lg text-cyan-100/80 leading-relaxed">
                            <strong className="text-white">Neuromimetic Architecture</strong> lays the mathematical and biological foundation. It proves why hierarchical systems face a thermodynamic collapse point and defines the <span className="text-teal-400">4 Principles of Neuro-Mimetic Design</span> required to build antifragile systems.
                        </p>
                    </div>
                ) : (
                    <div className="relative z-10 animate-in fade-in slide-in-from-bottom-4 duration-300">
                        <div className="flex items-center gap-3 mb-4">
                            <BookOpen className="w-5 h-5 text-red-500" />
                            <h3 className="text-xl font-bold text-white uppercase tracking-wider">The Manual</h3>
                        </div>
                        <p className="text-lg text-red-100/80 leading-relaxed">
                            <strong className="text-white">Growing Companies Like Brains</strong> is the tactical implementation guide. It strips away the theory to provide a step-by-step roadmap for <span className="text-red-400">Tri-Phasic Morphogenesis</span>—transforming your organization from a static hierarchy into a learning organism.
                        </p>
                    </div>
                )}
            </div>
        </div>
    );
}
