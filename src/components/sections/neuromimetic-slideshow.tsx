"use client";

import { useState, useEffect } from "react";
import { ArrowRight, Brain, Network, Zap, Pause, Play, ChevronRight, ChevronLeft } from "lucide-react";

const slides = [
    {
        id: 1,
        icon: <Brain className="w-12 h-12 text-teal-400" />,
        title: "Language Defines Reality",
        headline: "Why 'Jargon' Matters",
        text: "In static systems, a 'Customer' is just a row in a database. In a Neuromimetic Ontology, concepts are living entities. Naming something accurately—defining its Objects, Actions, and Decisions—is the first step to controlling it.",
        visual: "static-vs-dynamic"
    },
    {
        id: 2,
        icon: <Network className="w-12 h-12 text-red-500" />,
        title: "Biological Business",
        headline: "Your Enterprise is Alive",
        text: "Markets don't follow rigid SQL schemas. They mutate. Your system must evolve at the speed of the market. Our architecture mimics the plasticity of a neural network, allowing new connections to form instantly without rewriting code.",
        visual: "bio-network"
    },
    {
        id: 3,
        icon: <Zap className="w-12 h-12 text-cyan-300" />,
        title: "Speed of Thought",
        headline: "Latency is Death",
        text: "When data is siloed, decisions lag. By unifying your business logic into a single Ontology, action potentials travel instantly from sensation (Market Signal) to reaction (Supply Chain Adjustment). This is the cognitive advantage.",
        visual: "speed-trigger"
    }
];

export function NeuromimeticSlideshow() {
    const [current, setCurrent] = useState(0);
    const [isPlaying, setIsPlaying] = useState(true);
    const [progress, setProgress] = useState(0);

    // Auto-advance logic
    useEffect(() => {
        let interval: NodeJS.Timeout;
        let progressInterval: NodeJS.Timeout;

        if (isPlaying) {
            progressInterval = setInterval(() => {
                setProgress(prev => {
                    if (prev >= 100) return 0;
                    return prev + 1;
                });
            }, 50); // Updates every 50ms for smooth bar

            interval = setInterval(() => {
                setCurrent(prev => (prev + 1) % slides.length);
                setProgress(0);
            }, 5000); // 5 seconds per slide
        }

        return () => {
            clearInterval(interval);
            clearInterval(progressInterval);
        };
    }, [isPlaying, current]);

    // Reset progress when manually changing slide
    const changeSlide = (index: number) => {
        setCurrent(index);
        setProgress(0);
    };

    return (
        <section className="py-24 bg-[#020609] relative overflow-hidden border-b border-cyan-900/20">

            {/* Background Ambience */}
            <div className="absolute inset-0 bg-[radial-gradient(circle_at_50%_50%,rgba(20,184,166,0.05),transparent_70%)] pointer-events-none" />

            <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8 relative z-10">

                {/* Header */}
                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] mb-4 uppercase">System Philosophy</h2>
                    <h3 className="text-3xl md:text-5xl font-extrabold text-white">
                        Why the <span className="text-teal-400">Ontology</span> Matters
                    </h3>
                </div>

                {/* Main Slide Container */}
                <div
                    className="relative bg-cyan-950/20 border border-cyan-800/30 backdrop-blur-md rounded-3xl overflow-hidden min-h-0 md:min-h-[400px] flex flex-col md:flex-row group hover:border-teal-500/30 transition-colors duration-500"
                    onMouseEnter={() => setIsPlaying(false)}
                    onMouseLeave={() => setIsPlaying(true)}
                >

                    {/* Progress Bar (Global Top) */}
                    <div className="absolute top-0 left-0 w-full h-1 bg-cyan-900/50">
                        <div
                            className="h-full bg-red-500/80 transition-all duration-75 ease-linear"
                            style={{ width: `${progress}%` }}
                        />
                    </div>

                    {/* Left: Text Content */}
                    <div className="flex-1 p-6 md:p-12 flex flex-col justify-center relative z-20 min-h-[320px] md:min-h-0">
                        {slides.map((slide, idx) => (
                            <div
                                key={slide.id}
                                className={`transition-all duration-500 md:absolute md:inset-0 md:p-12 flex flex-col justify-center ${idx === current ? 'opacity-100 relative' : 'opacity-0 absolute inset-0 pointer-events-none'}`}
                            >
                                <div className="flex items-center gap-3 md:gap-4 mb-4 md:mb-6 flex-wrap">
                                    <div className="p-2 md:p-3 rounded-lg bg-cyan-950/50 border border-cyan-800/50">
                                        {slide.icon}
                                    </div>
                                    <span className="text-cyan-200/50 font-mono text-xs md:text-sm tracking-widest uppercase">
                                        Protocol 0{slide.id} // {slide.title}
                                    </span>
                                </div>

                                <h4 className="text-2xl md:text-4xl font-bold text-white mb-4 md:mb-6 leading-tight">
                                    {slide.headline}
                                </h4>

                                <p className="text-base md:text-lg text-cyan-100/70 leading-relaxed mb-6 md:mb-8">
                                    {slide.text}
                                </p>

                                <div className="flex items-center gap-4">
                                    <a href="/manifesto" className="text-red-400 font-bold text-sm tracking-wide group-hover:text-red-300 flex items-center gap-2 hover:translate-x-1 transition-transform">
                                        READ MANIFESTO <ArrowRight className="w-4 h-4" />
                                    </a>
                                </div>
                            </div>
                        ))}
                    </div>

                    {/* Right: Abstract Visualization Panel */}
                    <div className="flex-1 bg-cyan-900/10 border-t md:border-t-0 md:border-l border-cyan-800/30 relative overflow-hidden flex items-center justify-center min-h-[250px] md:min-h-[300px]">
                        {/* Grid Overlay */}
                        <div className="absolute inset-0 bg-[linear-gradient(rgba(20,184,166,0.1)_1px,transparent_1px),linear-gradient(90deg,rgba(20,184,166,0.1)_1px,transparent_1px)] bg-[size:20px_20px] opacity-20" />

                        {/* Dynamic Visuals based on Slide */}
                        {current === 0 && (
                            <div className="relative w-64 h-64 border border-teal-500/30 rounded-lg flex items-center justify-center animate-pulse-glow">
                                <div className="absolute top-0 -left-12 bg-black/50 text-cyan-300 font-mono text-xs p-2 border border-cyan-700 rounded">
                                    "Customer_ID": 1024
                                </div>
                                <div className="absolute bottom-12 -right-8 bg-black/50 text-red-400 font-mono text-xs p-2 border border-red-700 rounded">
                                    ERROR: Schema_Lock
                                </div>
                                <div className="text-white font-bold tracking-widest opacity-50">STATIC_DB</div>
                            </div>
                        )}

                        {current === 1 && (
                            <div className="relative w-full h-full flex items-center justify-center">
                                <div className="relative w-48 h-48">
                                    <div className="absolute inset-0 border-2 border-red-500/50 rounded-full animate-ping opacity-20" />
                                    <div className="absolute inset-4 border border-teal-400/50 rounded-full animate-spin duration-[10s]" />
                                    <Network className="absolute inset-0 m-auto w-16 h-16 text-white animate-pulse" />
                                    <div className="absolute top-0 left-1/2 w-px h-24 bg-gradient-to-b from-transparent to-teal-500" />
                                    <div className="absolute bottom-0 left-1/2 w-px h-24 bg-gradient-to-t from-transparent to-teal-500" />
                                </div>
                            </div>
                        )}

                        {current === 2 && (
                            <div className="relative w-full p-12">
                                <div className="flex justify-between items-center mb-4">
                                    <div className="w-3 h-3 bg-white rounded-full shadow-[0_0_10px_white]" />
                                    <div className="h-0.5 flex-1 bg-gradient-to-r from-white to-red-500 mx-4 relative overflow-hidden">
                                        <div className="absolute inset-y-0 left-0 w-12 bg-white blur-md animate-slide-right" />
                                    </div>
                                    <div className="w-3 h-3 bg-red-500 rounded-full shadow-[0_0_10px_red]" />
                                </div>
                                <div className="font-mono text-xs text-center text-cyan-200/50 mt-2">
                                    LATENCY: 0.00ms // SYNAPSE_FIRED
                                </div>
                            </div>
                        )}
                    </div>

                    {/* Controls */}
                    <div className="relative md:absolute bottom-0 md:bottom-6 right-0 md:right-6 z-30 flex items-center justify-center md:justify-end gap-3 py-4 md:py-0">
                        <button
                            onClick={() => changeSlide((current - 1 + slides.length) % slides.length)}
                            className="p-2 rounded-full bg-black/40 text-white hover:bg-teal-500/20 transition-colors border border-white/10"
                        >
                            <ChevronLeft className="w-5 h-5" />
                        </button>

                        <button
                            onClick={() => setIsPlaying(!isPlaying)}
                            className="p-2 rounded-full bg-black/40 text-white hover:bg-teal-500/20 transition-colors border border-white/10"
                        >
                            {isPlaying ? <Pause className="w-5 h-5" /> : <Play className="w-5 h-5" />}
                        </button>

                        <button
                            onClick={() => changeSlide((current + 1) % slides.length)}
                            className="p-2 rounded-full bg-black/40 text-white hover:bg-teal-500/20 transition-colors border border-white/10"
                        >
                            <ChevronRight className="w-5 h-5" />
                        </button>
                    </div>

                </div>

                {/* Slide Indicators */}
                <div className="flex justify-center mt-8 gap-3">
                    {slides.map((_, idx) => (
                        <button
                            key={idx}
                            onClick={() => changeSlide(idx)}
                            className={`h-1 rounded-full transition-all duration-300 ${idx === current ? 'w-12 bg-teal-400' : 'w-4 bg-cyan-900/50 hover:bg-cyan-800'}`}
                        />
                    ))}
                </div>

            </div>
        </section>
    );
}
