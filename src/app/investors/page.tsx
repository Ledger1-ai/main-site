"use client";

import React, { useState, useEffect } from "react";
import Link from "next/link";
import Image from "next/image";
import { ArrowRight, TrendingUp, Activity, Users, Globe, Zap, BarChart3, ShieldCheck, Cpu, Target, Network, Layers, Brain, DollarSign } from "lucide-react";
import { useBrandTheme } from "@/components/providers/brand-theme-provider";
import { EcosystemFlywheel } from "@/components/visualizations/flywheel";
import { MarketChart } from "@/components/visualizations/market-chart";
import { GrowthChart } from "@/components/visualizations/growth-chart";

// Helper Component for the Feature Section
function ProductSection({ offering, index }: { offering: any, index: number }) {
    const isEven = index % 2 === 0;
    const [currentSlide, setCurrentSlide] = useState(0);

    // Auto-advance slides every 5 seconds
    useEffect(() => {
        const interval = setInterval(() => {
            setCurrentSlide((prev) => (prev + 1) % offering.slides.length);
        }, 5000);
        return () => clearInterval(interval);
    }, [offering.slides.length]);

    return (
        <section id={offering.id} className="py-24 relative overflow-hidden">
            {/* Background elements */}
            <div className="absolute inset-0 pointer-events-none">
                <div className={`absolute top-1/2 ${isEven ? 'right-0' : 'left-0'} w-1/2 h-full -translate-y-1/2 opacity-5 blur-[100px] rounded-full`}
                    style={{ backgroundColor: offering.color }} />
            </div>

            <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
                <div className={`flex flex-col ${isEven ? 'lg:flex-row' : 'lg:flex-row-reverse'} gap-16 items-center`}>

                    {/* Visual Side (Logo + Slide Deck) */}
                    <div className="flex-1 w-full">
                        <div className="bg-black/40 backdrop-blur-xl border border-white/10 rounded-3xl p-8 md:p-12 shadow-2xl relative overflow-hidden group">
                            {/* Glow border effect */}
                            <div className="absolute inset-0 border-2 rounded-3xl opacity-20 pointer-events-none" style={{ borderColor: offering.color }} />

                            {/* LOGO */}
                            <div className="relative w-full h-24 mb-12 flex items-center justify-start">
                                <Image
                                    src={offering.logo}
                                    alt={offering.name}
                                    width={300}
                                    height={100}
                                    className="object-contain object-left"
                                />
                            </div>

                            {/* SLIDE DECK VISUAL */}
                            <div className="relative aspect-video bg-black/50 rounded-2xl border border-white/5 overflow-hidden flex flex-col p-8">
                                {offering.slides.map((slide: any, idx: number) => (
                                    <div key={idx}
                                        className={`absolute inset-0 p-8 flex flex-col justify-center transition-all duration-700 ease-in-out ${currentSlide === idx ? 'opacity-100 translate-x-0' : 'opacity-0 translate-x-full'}`}>
                                        <div className="mb-4 inline-flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 w-fit">
                                            <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: offering.color }} />
                                            <span className="text-xs font-mono uppercase tracking-widest text-white/70">Slide {idx + 1}</span>
                                        </div>
                                        <h4 className="text-3xl font-bold text-white mb-4 leading-tight">{slide.title}</h4>
                                        <p className="text-lg text-muted-foreground">{slide.text}</p>
                                    </div>
                                ))}

                                {/* Progress Bar for Slides */}
                                <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/10">
                                    <div className="h-full transition-all duration-300 ease-linear"
                                        style={{
                                            width: `${((currentSlide + 1) / offering.slides.length) * 100}%`,
                                            backgroundColor: offering.color
                                        }} />
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Content Side (Description + Metrics) */}
                    <div className="flex-1 space-y-8">
                        <div>
                            <div className="text-sm font-mono font-bold tracking-widest uppercase mb-4" style={{ color: offering.color }}>
                                {offering.tag}
                            </div>
                            <h3 className="text-4xl font-bold mb-6 text-white leading-tight text-transparent bg-clip-text bg-gradient-to-r from-white to-white/60">
                                {offering.slogan}
                            </h3>
                            <p className="text-xl text-muted-foreground leading-relaxed mb-8">
                                {offering.description}
                            </p>

                            {/* Market Opportunity Block */}
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 relative overflow-hidden">
                                <div className="absolute top-0 left-0 w-1 h-full" style={{ backgroundColor: offering.color }}></div>

                                <h4 className="text-sm font-bold uppercase tracking-wider mb-4 text-white flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4" style={{ color: offering.color }} /> Market Thesis
                                </h4>
                                <p className="text-sm text-gray-400 leading-relaxed mb-6">
                                    {offering.marketOpportunity}
                                </p>

                                {/* TAM / SAM / SOM Grid */}
                                <div className="grid grid-cols-3 gap-2 border-t border-white/10 pt-4">
                                    <div className="text-center">
                                        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">TAM</div>
                                        <div className="text-lg font-bold text-white">{offering.tam}</div>
                                        <div className="text-[10px] text-white/40">Total Addressable</div>
                                    </div>
                                    <div className="text-center border-l border-white/10">
                                        <div className="text-[10px] font-mono uppercase tracking-wider text-muted-foreground mb-1">SAM</div>
                                        <div className="text-lg font-bold text-white">{offering.sam}</div>
                                        <div className="text-[10px] text-white/40">Serviceable Avail.</div>
                                    </div>
                                    <div className="text-center border-l border-white/10">
                                        <div className="text-[10px] font-mono uppercase tracking-wider mb-1" style={{ color: offering.color }}>SOM</div>
                                        <div className="text-lg font-bold text-white">{offering.som}</div>
                                        <div className="text-[10px] text-white/40">Obtainable</div>
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* METRICS GRID */}
                        <div className="grid grid-cols-1 sm:grid-cols-3 gap-4">
                            {offering.metrics.map((metric: any, idx: number) => (
                                <div key={idx} className="bg-white/5 border border-white/10 rounded-2xl p-4 hover:bg-white/10 transition-colors">
                                    <div className="flex items-center gap-2 mb-2 opacity-70">
                                        <metric.icon className="w-4 h-4" />
                                        <span className="text-xs font-medium uppercase tracking-wider">{metric.label}</span>
                                    </div>
                                    <div className="text-2xl font-bold font-mono text-white">{metric.value}</div>
                                </div>
                            ))}
                        </div>

                        {/* CTA */}
                        <div className="pt-4">
                            <a href={offering.href} target="_blank" rel="noopener noreferrer"
                                className="inline-flex items-center gap-2 text-lg font-bold hover:gap-4 transition-all"
                                style={{ color: offering.color }}>
                                View Full Specifications <ArrowRight className="w-5 h-5" />
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default function InvestorsPage() {
    const { currentTheme } = useBrandTheme();

    const offerings = [
        {
            id: "core",
            name: "BasaltERP",
            slogan: "The Backbone of Cognitive Operations",
            logo: "/BasaltERPWide.png",
            description: "The structural core of the cognitive enterprise. Unified inventory, procurement, and financial truth. It eliminates data silos by providing a single source of truth for all operational data.",
            marketOpportunity: "The global ERP market is ripe for disruption by autonomous systems. Legacy ERPs act as passive systems of record. BasaltERP transitions the enterprise to a 'system of agency,' where maintaining inventory levels and financial reconciliation happens without human intervention.",
            tam: "$96B",
            sam: "$42B",
            som: "$2.1B",
            slides: [
                { title: "Unified Inventory", text: "Real-time tracking across all networked nodes, syncing warehouse data with edge POS systems instantly." },
                { title: "Financial Truth", text: "Automated reconciliation and audit trails that reduce accounting overhead by 90%." },
                { title: "Supply Chain AI", text: "Predictive restocking algorithms that prevent stockouts before they happen." }
            ],
            metrics: [
                { label: "Inventory Acc.", value: "99.9%", icon: ShieldCheck },
                { label: "Auto-rate", value: "85%", icon: Zap },
                { label: "Active Nodes", value: "12k+", icon: Globe },
            ],
            color: "#119dff", // BasaltHQ Blue
            href: "https://erp.basalthq.com",
            tag: "STRUCTURAL TRUTH"
        },
        {
            id: "graph",
            name: "BasaltCRM",
            slogan: "Predictive Relationships, Automated Growth",
            logo: "/BasaltCRMWide.png",
            description: "Relational graph intelligence. Mapping customer sentiment and automating sales outreach. It transforms static customer lists into dynamic relationship graphs.",
            marketOpportunity: "Traditional CRMs are data graveyards requiring manual entry. The future is graph-based relationship management that automatically updates via semantic analysis of communication flow. BasaltCRM captures the value lost in the 'last mile' of customer interaction.",
            tam: "$118B",
            sam: "$65B",
            som: "$1.8B",
            slides: [
                { title: "Sentiment Graph", text: "360° view of customer interactions, analyzing sentiment from emails, calls, and chats." },
                { title: "Auto-Outreach", text: "AI agents handling initial sales contact, qualifying leads before handing off to humans." },
                { title: "Churn Prediction", text: "Identifying at-risk accounts with 92% accuracy based on usage patterns." }
            ],
            metrics: [
                { label: "Lead Conv.", value: "+45%", icon: TrendingUp },
                { label: "Sentiment", value: "Real-time", icon: Activity },
                { label: "Interactions", value: "1.5M/d", icon: Users },
            ],
            color: "#2bfff8", // Cyan
            href: "https://crm.basalthq.com",
            tag: "RELATIONAL LAYER"
        },
        {
            id: "cms",
            name: "BasaltCMS",
            slogan: "Universal Integration, Infinite Reach",
            logo: "/BasaltCMSWide.png",
            description: "Universal integration layer. Connecting e-commerce, AI agents, and social platforms. It serves as the headless nervous system for content delivery.",
            marketOpportunity: "As commerce becomes increasingly omnichannel—spanning web, mobile, social, and VR—legacy CMS architectures struggle to keep up. BasaltCMS capitalizes on the headless revolution, offering a single content hub that pushes consistent brand experiences instantly to any device.",
            tam: "$25B",
            sam: "$8.5B",
            som: "$450M",
            slides: [
                { title: "Headless Power", text: "API-first content delivery to any frontend, from mobile apps to smart kiosks." },
                { title: "Omnichannel", text: "Unified product data across all marketplaces (Amazon, Shopify, TikTok)." },
                { title: "Dynamic Personalization", text: "Content that adapts in real-time to user behavior and segment." }
            ],
            metrics: [
                { label: "Uptime", value: "99.99%", icon: BarChart3 },
                { label: "API Requests", value: "500M+", icon: Zap },
                { label: "Apps", value: "150+", icon: Cpu },
            ],
            color: "#ff6b00", // Orange
            href: "/cms",
            tag: "INTEGRATION HUB"
        },
        {
            id: "onyx",
            name: "BasaltOnyx",
            slogan: "Intelligence That Actions Itself",
            logo: "/BasaltOnyxWide.png",
            description: "Intelligence layer. Predictive analytics and autonomous logic for the cognitive enterprise. It makes decisions, not just charts.",
            marketOpportunity: "Business intelligence is evolving from descriptive ('what happened?') to prescriptive ('what should we do?') and finally to autonomous ('do it for me'). BasaltOnyx occupies this high-value frontier, providing the inference engine for the self-operating enterprise.",
            tam: "$210B",
            sam: "$55B",
            som: "$3.2B",
            slides: [
                { title: "Predictive Logic", text: "Forecasting demand with high precision using proprietary ensemble models." },
                { title: "Autonomous Ops", text: "Self-healing workflows that detect and resolve logistical bottlenecks automatically." },
                { title: "Strategic Simulation", text: "Running millions of enterprise scenarios to optimize resource allocation." }
            ],
            metrics: [
                { label: "Accuracy", value: "99.2%", icon: Target },
                { label: "Logic Nodes", value: "50k+", icon: Network },
                { label: "Ops/Sec", value: "10T+", icon: Brain },
            ],
            color: "#b24dff", // Purple
            href: "/onyx",
            tag: "INTELLIGENCE LAYER"
        },
        {
            id: "interface",
            name: "BasaltEcho",
            slogan: "Talk to Your Business, It Listens",
            logo: "/BasaltEchoWide.png",
            description: "Semantic interface and voice agents. Natural language command and control for the entire suite. Talk to your business.",
            marketOpportunity: "Voice is the ultimate low-friction interface. As natural language processing hits human-level parity, the keyboard becomes a constraint. BasaltEcho positions itself as the 'OS for Business,' allowing operators to control complex logistics, run reports, and manage fleets purely through conversation.",
            tam: "$85B",
            sam: "$28B",
            som: "$1.5B",
            slides: [
                { title: "Voice Command", text: "Natural language control of complex systems. 'Show me Q3 revenue' -> Done." },
                { title: "Intent Detection", text: "Context-aware action execution that understands disparate business vernacular." },
                { title: "Agent Swarms", text: "Deploying temporary voice agents for customer support surges." }
            ],
            metrics: [
                { label: "Interactions", value: "250k+", icon: Activity },
                { label: "Intent Acc.", value: "98%", icon: ShieldCheck },
                { label: "Actions", value: "1M+", icon: Zap },
            ],
            color: "#ffc029", // Yellow
            href: "https://echo.basalthq.com",
            tag: "SEMANTIC AGENTS"
        },
        {
            id: "layer",
            name: "BasaltSurge",
            slogan: "Settlement at the Speed of Light",
            logo: "/BasaltSurgeWide.png",
            description: "Transaction settlement layer. Instant, secure crypto and fiat value transfer. The bedrock of economic finality.",
            marketOpportunity: "The friction of legacy banking—T+2 settlement days, 3% interchange fees—is a tax on the global economy. BasaltSurge captures this inefficiency as value, offering near-instant, near-zero cost settlement. As programmable money becomes standard, Surge provides the rails for the automated economy.",
            tam: "$150B",
            sam: "$40B",
            som: "$1.2B",
            slides: [
                { title: "Instant Settlement", text: "<2s finality for all transaction types, eliminating T+2 delays." },
                { title: "Zero Fraud", text: "Cryptographically secured value transfer with immutable audit trails." },
                { title: "Cross-Border", text: "Seamless multi-currency settlement without correspondent banking fees." }
            ],
            metrics: [
                { label: "Monthly Vol", value: "$50M+", icon: BarChart3 },
                { label: "Settlement", value: "<2s", icon: Zap },
                { label: "Gas Saved", value: "$2M+", icon: TrendingUp },
            ],
            color: "#35ff7c", // Green
            href: "https://surge.basalthq.com",
            tag: "SETTLEMENT"
        }
    ];

    return (
        <div className="min-h-screen bg-background text-foreground overflow-hidden">

            {/* Hero Section */}
            <section className="relative px-4 sm:px-6 lg:px-8 py-32 text-center md:py-48 flex flex-col items-center justify-center min-h-[80vh]">
                <div className="absolute top-0 left-1/2 -translate-x-1/2 w-[120%] h-[120%] max-w-7xl opacity-20 blur-[120px] rounded-full pointer-events-none"
                    style={{ background: `radial-gradient(circle, ${currentTheme.color} 0%, transparent 60%)` }} />

                <div className="relative z-10 animate-fade-in-up">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border bg-black/50 backdrop-blur-md mb-8" style={{ borderColor: `${currentTheme.color}44` }}>
                        <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: currentTheme.color }}>Investor Relations</span>
                    </div>

                    <h1 className="text-6xl md:text-8xl font-bold tracking-tight mb-8 bg-clip-text text-transparent bg-gradient-to-br from-white via-white to-white/40 drop-shadow-2xl">
                        Cognitive Enterprise<br />Architecture
                    </h1>

                    <p className="text-xl md:text-2xl text-muted-foreground max-w-3xl mx-auto mb-12 leading-relaxed">
                        BasaltHQ is not just software. It is a living ontology that thinks, adapts, and settles transactions at the speed of thought.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 justify-center">
                        <a href="https://theutilitycompany.co/nexus" target="_blank" rel="noopener noreferrer"
                            className="px-8 py-4 rounded-full font-bold text-black transition-all hover:scale-105 hover:shadow-[0_0_30px_rgba(255,255,255,0.3)] flex items-center gap-2"
                            style={{ backgroundColor: currentTheme.color }}>
                            Access Investor Nexus <ArrowRight className="w-5 h-5" />
                        </a>
                        <Link href="#core" className="px-8 py-4 rounded-full font-bold border hover:bg-white/5 transition-colors flex items-center gap-2">
                            Explore Ontology
                        </Link>
                    </div>
                </div>
            </section>

            {/* Flywheel / Ecosystem Section */}
            <section className="py-24 relative border-y border-white/5 bg-black/40 backdrop-blur-sm">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col lg:flex-row items-center gap-16">
                        <div className="flex-1 text-left">
                            <h2 className="text-4xl font-bold mb-6 text-white">The Self-Reinforcing<br />Feedback Loop</h2>
                            <p className="text-lg text-muted-foreground mb-8">
                                Our modular architecture creates a compounding value engine. Data from ERP feeds the Graph, which empowers Agents to execute actions, settling instantly on the Ledger.
                            </p>
                            <div className="p-6 rounded-xl border border-white/10 bg-white/5 mb-8">
                                <h3 className="text-sm font-bold uppercase tracking-wider mb-2 text-white flex items-center gap-2">
                                    <TrendingUp className="w-4 h-4 text-emerald-500" /> Ecosystem Market Thesis
                                </h3>
                                <p className="text-sm text-gray-400">
                                    Disparate SaaS tools create data silos that stifle growth. The longitudinal value of BasaltHQ lies in the unification of these layers. By owning the full stack—from inventory (ERP) to relationship (CRM) to transaction (Surge)—we create an unbreakable data feedback loop that becomes more intelligent with every transaction, creating a natural monopoly on business insight for our merchants.
                                </p>
                            </div>
                            <ul className="space-y-4">
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-emerald-500/10 border border-emerald-500/20 text-emerald-500"><Layers className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold text-white">Unified Truth</div>
                                        <div className="text-sm text-muted-foreground">Inventory and financial data in one place.</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-pink-500/10 border border-pink-500/20 text-pink-500"><Network className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold text-white">Relational Intelligence</div>
                                        <div className="text-sm text-muted-foreground">Understanding context between entities.</div>
                                    </div>
                                </li>
                                <li className="flex items-start gap-4">
                                    <div className="p-2 rounded-lg bg-violet-500/10 border border-violet-500/20 text-violet-500"><Zap className="w-5 h-5" /></div>
                                    <div>
                                        <div className="font-bold text-white">Instant Settlement</div>
                                        <div className="text-sm text-muted-foreground">Frictionless value transfer.</div>
                                    </div>
                                </li>
                            </ul>
                        </div>
                        <div className="flex-1 w-full flex justify-center">
                            <EcosystemFlywheel />
                        </div>
                    </div>
                </div>
            </section>

            {/* Market Opportunity Section */}
            <section className="py-32 relative">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="text-center mb-16">
                        <h2 className="text-4xl font-bold mb-4">Market Opportunity</h2>
                        <p className="text-muted-foreground max-w-2xl mx-auto">Capturing the digital transformation of the main street economy.</p>
                    </div>
                    <MarketChart />
                </div>
            </section>

            {/* Growth Trajectory Section */}
            <section className="py-32 relative bg-gradient-to-b from-transparent to-black/50 border-t border-white/5">
                <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
                    <div className="flex flex-col md:flex-row justify-between items-end mb-16 gap-8">
                        <div>
                            <h2 className="text-4xl font-bold mb-4">Network Growth</h2>
                            <p className="text-muted-foreground max-w-2xl">Projected node adoption and network effects over the next 5 years.</p>
                        </div>
                        <div className="text-right">
                            <div className="text-5xl font-bold text-white mb-1">500k+</div>
                            <div className="text-sm font-mono tracking-widest uppercase opacity-60">Nodes by 2028</div>
                        </div>
                    </div>
                    <GrowthChart />
                </div>
            </section>


            {/* Detailed Product Showcases */}
            <div className="space-y-0">
                {offerings.map((offering, index) => (
                    <ProductSection key={offering.id} offering={offering} index={index} />
                ))}
            </div>

            {/* Final CTA */}
            <section className="relative max-w-6xl mx-auto px-4 sm:px-6 lg:px-8 text-center pb-32">
                <div className="relative rounded-[3rem] overflow-hidden border border-white/10 bg-black/40 backdrop-blur-2xl p-16 md:p-24">
                    <div className="absolute inset-0 opacity-30"
                        style={{ background: `linear-gradient(135deg, ${currentTheme.color}44 0%, transparent 100%)` }} />

                    <div className="relative z-10">
                        <Target className="w-16 h-16 mx-auto mb-8 animate-pulse" style={{ color: currentTheme.color }} />
                        <h2 className="text-4xl md:text-6xl font-bold mb-8 text-white">Ready to Shape the Future?</h2>
                        <div className="flex flex-col md:flex-row items-center justify-center gap-6">
                            <a
                                href="https://theutilitycompany.co/nexus"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="px-10 py-5 rounded-full text-lg font-bold text-black transition-transform hover:scale-105 shadow-xl hover:shadow-2xl"
                                style={{ backgroundColor: currentTheme.color, boxShadow: `0 0 40px ${currentTheme.color}66` }}
                            >
                                Enter Investor Nexus
                            </a>
                            <div className="text-sm text-muted-foreground md:max-w-xs text-left">
                                Access restricted data room, financial projections, and governance documentation.
                            </div>
                        </div>
                    </div>
                </div>
            </section>

        </div>
    );
}
