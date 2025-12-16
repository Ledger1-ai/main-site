"use client";

import { useState } from "react";
import { Activity, AlertTriangle, ArrowRight, Brain, Database, GitBranch, Layers, Lock, RefreshCw, Zap } from "lucide-react";

const scenarios = [
    {
        id: "supply",
        title: "Supply Chain Shock",
        oldWay: {
            headline: "The Mechanical Fail",
            description: "Static ERPs rely on manual entry. When a supplier dulls, the system waits for a human to update a row. Latency accumulates. By the time the dashboard is red, it's too late.",
            steps: ["Supplier delays shipment", "Email sent to Purchasing", "Purchasing updates Excel", "ERP batch update (Overnight)", "Production halts (2 Days Later)"],
            icon: <Database className="w-8 h-8 text-gray-500" />
        },
        newWay: {
            headline: "The Biological Reflex",
            description: "The Ontology treats the supplier as a sensory node. The delay is a 'Pain Signal'. The system creates an Action Potential that automatically re-routes orders to secondary suppliers instantly.",
            steps: ["Supplier Node: Latency Detected", "Reflex Arc: Trigger 'Re-Route'", "Action: Multi-Vendor API Call", "Decision: Order Placed (300ms)", "Production: Uninterrupted"],
            icon: <Brain className="w-8 h-8 text-teal-400" />
        }
    },
    {
        id: "market",
        title: "Market Mutation",
        oldWay: {
            headline: "Schema Lock",
            description: "A competitor launches a subscription model. Your ERP is hard-coded for 'One-Time Purchase'. Engineering needs 6 months to migrate the database schema.",
            steps: ["New Business Model Needed", "Schema Migration Planned", "Codebase Refactor", "QA Testing", "Deploy (6 Months Later)"],
            icon: <Lock className="w-8 h-8 text-gray-500" />
        },
        newWay: {
            headline: "Neuroplasticity",
            description: "Objects in the Ontology are fluid. You simply define a new Relationship ('Subscribes_To') between Customer and Product. The graph updates instantly. No migrations.",
            steps: ["New Relationship Defined", "Edge Created: 'Subscribes_To'", "Billing Logic Attached", "Deploy (Immediate)", "Revenue Capture"],
            icon: <GitBranch className="w-8 h-8 text-teal-400" />
        }
    },
    {
        id: "customer",
        title: "Customer Sentiment",
        oldWay: {
            headline: "The Silo",
            description: "Support Tickets live in Zendesk. Sales data lives in Salesforce. The two brains never talk. You upset a VIP customer because the agent didn't know they spent $1M last year.",
            steps: ["VIP Complains on Ticket", "Agent Sees 'Open Ticket'", "Agent Denies Refund", "VIP Churns", "Sales Rep Find Out (Too Late)"],
            icon: <Layers className="w-8 h-8 text-gray-500" />
        },
        newWay: {
            headline: "Unified Consciousness",
            description: "There is only one Truth. The 'Customer Object' holds all state. The 'Support Action' has access to 'Sales Decisions'. The system warns the agent: 'High-Value Target'.",
            steps: ["VIP Node: Negative Sentiment", "Global State Check: LTV > $1M", "Decision Protocol: 'Auto-Approve Refund'", "Action: Issue Credit", "Retention Secured"],
            icon: <Zap className="w-8 h-8 text-red-500" />
        }
    }
];

export function ProtocolExplorer() {
    const [activeScenario, setActiveScenario] = useState(0);

    return (
        <section className="py-24 px-4 sm:px-6 lg:px-8 bg-[#020609] border-t border-cyan-900/30">
            <div className="max-w-7xl mx-auto">

                <div className="text-center mb-16">
                    <h2 className="text-sm font-bold text-red-500 tracking-[0.2em] mb-4 uppercase">Interactive Simulation</h2>
                    <h3 className="text-4xl md:text-5xl font-extrabold text-white mb-6">
                        See the <span className="text-teal-400">Difference</span>
                    </h3>
                    <p className="text-xl text-cyan-100/60 max-w-2xl mx-auto">
                        Don't just read the theory. Simulate the operational difference between a standard Mechanical Enterprise and a Neuromimetic one.
                    </p>
                </div>

                {/* Tab Navigation */}
                <div className="flex flex-wrap justify-center gap-4 mb-16 relative z-50">
                    {scenarios.map((scenario, idx) => (
                        <button
                            key={scenario.id}
                            onClick={() => setActiveScenario(idx)}
                            className={`px-6 py-4 rounded-lg border text-sm font-bold tracking-wider uppercase transition-all duration-300 flex items-center gap-3 cursor-pointer ${activeScenario === idx
                                ? "bg-teal-950/50 border-teal-500 text-teal-300 shadow-[0_0_20px_rgba(20,184,166,0.2)]"
                                : "bg-cyan-950/10 border-cyan-900/50 text-cyan-600 hover:border-cyan-700 hover:text-cyan-400"
                                }`}
                        >
                            {activeScenario === idx && <Activity className="w-4 h-4 animate-pulse" />}
                            {scenario.title}
                        </button>
                    ))}
                </div>

                {/* Comparison Engine */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-8 relative">

                    {/* Connecting Bolt */}
                    <div className="hidden lg:flex absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 z-10 w-12 h-12 bg-[#020609] rounded-full border border-cyan-800 items-center justify-center">
                        <ArrowRight className="w-6 h-6 text-cyan-600" />
                    </div>

                    {/* Old Way (Mechanical) */}
                    <div className="relative p-8 rounded-2xl border border-red-900/30 bg-red-950/5 flex flex-col group">
                        <div className="absolute top-0 right-0 p-4 opacity-10">
                            <AlertTriangle className="w-32 h-32" />
                        </div>

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-red-950/50 rounded-lg border border-red-900/50">
                                {scenarios[activeScenario].oldWay.icon}
                            </div>
                            <div>
                                <span className="block text-xs text-red-500/50 font-mono tracking-widest uppercase">Legacy Protocol</span>
                                <h4 className="text-2xl font-bold text-red-500/80">{scenarios[activeScenario].oldWay.headline}</h4>
                            </div>
                        </div>

                        <p className="text-red-200/50 mb-8 leading-relaxed h-24">
                            {scenarios[activeScenario].oldWay.description}
                        </p>

                        <div className="space-y-3 bg-black/20 p-6 rounded-lg border border-red-900/20 font-mono text-xs text-red-300/60">
                            {scenarios[activeScenario].oldWay.steps.map((step, i) => (
                                <div key={i} className="flex items-center gap-3 opacity-60">
                                    <span className="text-red-900">0{i + 1}</span>
                                    <span>{step}</span>
                                    {i === scenarios[activeScenario].oldWay.steps.length - 1 && (
                                        <span className="ml-auto text-red-500 font-bold">FAIL</span>
                                    )}
                                </div>
                            ))}
                        </div>
                    </div>

                    {/* New Way (Biological) */}
                    <div className="relative p-8 rounded-2xl border border-teal-500/30 bg-teal-950/10 flex flex-col shadow-[0_0_50px_rgba(20,184,166,0.05)]">

                        <div className="flex items-center gap-4 mb-6 relative z-10">
                            <div className="p-3 bg-teal-950/50 rounded-lg border border-teal-500/50 shadow-[0_0_15px_rgba(20,184,166,0.2)]">
                                {scenarios[activeScenario].newWay.icon}
                            </div>
                            <div>
                                <span className="block text-xs text-teal-400 font-mono tracking-widest uppercase">Neuromimetic Protocol</span>
                                <h4 className="text-2xl font-bold text-white">{scenarios[activeScenario].newWay.headline}</h4>
                            </div>
                        </div>

                        <p className="text-cyan-100/80 mb-8 leading-relaxed h-24">
                            {scenarios[activeScenario].newWay.description}
                        </p>

                        <div className="space-y-3 bg-teal-950/30 p-6 rounded-lg border border-teal-500/30 font-mono text-xs text-teal-200">
                            {scenarios[activeScenario].newWay.steps.map((step, i) => (
                                <div key={i} className={`flex items-center gap-3 animate-in slide-in-from-left duration-500 delay-${i * 100} fade-in fill-mode-forwards`}>
                                    <span className="text-teal-600">0{i + 1}</span>
                                    <span className={i === scenarios[activeScenario].newWay.steps.length - 1 ? "text-teal-300 font-bold" : ""}>
                                        {step}
                                    </span>
                                    {i < scenarios[activeScenario].newWay.steps.length - 1 && (
                                        <ArrowRight className="ml-auto w-3 h-3 text-teal-800" />
                                    )}
                                </div>
                            ))}
                        </div>

                        {/* Pulse Overlay */}
                        <div className="absolute inset-0 border border-teal-500/10 rounded-2xl animate-pulse-glow pointer-events-none" />
                    </div>

                </div>

            </div>
        </section>
    );
}
