"use client";

import Image from "next/image";
import { ArrowRight, BookOpen, Brain, Cpu, Globe, Share2, Shield, Zap, RefreshCw, Layers, GitMerge } from "lucide-react";
import { Footer } from "@/components/layout/footer";
import { BookSelector } from "@/components/manifesto/book-selector";
import { Book3D } from "@/components/manifesto/book-3d";
import { useBrandTheme } from "@/components/providers/brand-theme-provider";

export default function ManifestoPage() {
    const { currentTheme } = useBrandTheme();

    return (
        <div className="min-h-screen bg-[#020609] text-white overflow-x-hidden">

            {/* Hero Section */}
            <section className="relative pt-32 pb-24 px-4 sm:px-6 lg:px-8 border-b overflow-hidden"
                style={{ borderColor: `${currentTheme.color}33` }}>
                {/* Background Grids - Animated */}
                <div className="absolute inset-0 bg-[size:50px_50px] opacity-30 fixed animate-[pulse_4s_ease-in-out_infinite]"
                    style={{
                        backgroundImage: `linear-gradient(${currentTheme.color}0D 1px, transparent 1px), linear-gradient(90deg, ${currentTheme.color}0D 1px, transparent 1px)`
                    }}
                />
                <div className="absolute inset-0 pointer-events-none"
                    style={{ background: `radial-gradient(circle at 50% 40%, ${currentTheme.color}26, transparent 70%)` }}
                />

                <div className="relative z-10 max-w-7xl mx-auto text-center">
                    <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border mb-8 animate-[pulse_2s_cubic-bezier(0.4,0,0.6,1)_infinite]"
                        style={{
                            backgroundColor: `${currentTheme.color}1A`,
                            borderColor: `${currentTheme.color}80`
                        }}>
                        <Shield className="w-4 h-4" style={{ color: currentTheme.color }} />
                        <span className="text-xs font-mono tracking-widest uppercase" style={{ color: currentTheme.color }}>Classified // L1_Doctrine // Eyes Only</span>
                    </div>

                    <h1 className="text-5xl md:text-8xl font-black tracking-tighter mb-8 uppercase glitch-text">
                        Neuromimetic <br />
                        <span className="text-transparent bg-clip-text" style={{ backgroundImage: `linear-gradient(to right, ${currentTheme.color}, ${currentTheme.color}80)` }}>
                            Architecture
                        </span>
                    </h1>

                    <p className="max-w-3xl mx-auto text-xl md:text-2xl leading-relaxed font-light" style={{ color: `${currentTheme.color}99` }}>
                        The static enterprise is dead. The future belongs to organizations that mimic the
                        <span className="text-white font-bold"> adaptive plasticity </span>
                        of the human brain.
                    </p>

                    {/* Interactive Book Selector */}
                    <BookSelector />

                </div>
            </section>

            {/* THE CAMPFIRE PROBLEM */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black">
                {/* Scanline Overlay */}
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-10 pointer-events-none"></div>

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: The Narrative */}
                    <div className="space-y-8">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] mb-4 uppercase flex items-center gap-2" style={{ color: currentTheme.color }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                                The Origin Story
                            </h2>
                            <h3 className="text-4xl font-extrabold text-white mb-6">
                                The <span style={{ color: currentTheme.color }}>Campfire Problem</span>
                            </h3>
                        </div>

                        <div className="prose prose-invert prose-lg border-l-2 pl-6" style={{ borderColor: `${currentTheme.color}40`, color: `${currentTheme.color}b3` }}>
                            <p>
                                For 290,000 years, humans coordinated in bands of ~150. Everyone knew everyone. Information flowed without friction around the campfire.
                            </p>
                            <p>
                                Then came agriculture. Cities. Nations. We scaled beyond <strong>Dunbar's Number</strong>. To survive, we invented a hack called <span className="text-white font-bold">Hierarchy</span>.
                            </p>
                            <p>
                                Hierarchy solved scale, but at a terrible cost: <strong>it suppresses information.</strong> Today, in a world of exponential complexity, the hierarchical corporation is hitting its thermodynamic limit. It cannot process data fast enough to survive.
                            </p>
                            <p className="font-bold italic" style={{ color: currentTheme.color }}>
                                "The human brain coordinates 86 billion neurons without a CEO. It is existence proof that massive non-hierarchical coordination is possible."
                            </p>
                        </div>
                    </div>

                    {/* Right: The Book Visual */}
                    <div className="relative flex justify-center py-20">
                        {/* Shadow underneath */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[200px] w-48 h-12 blur-3xl animate-[pulse_4s_ease-in-out_infinite]"
                            style={{ backgroundColor: `${currentTheme.color}99` }} />

                        <Book3D
                            coverImage="/books/cover_nma.jpeg"
                            title="Neuromimetic Architecture Manual"
                            color={currentTheme.color}
                            className="w-[320px] h-[480px]"
                        />
                    </div>
                </div>
            </section>

            {/* THE 4 DEVELOPMENTAL PRINCIPLES */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 border-t" style={{ backgroundColor: `${currentTheme.color}05`, borderColor: `${currentTheme.color}33` }}>
                <div className="max-w-5xl mx-auto">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] mb-4 uppercase" style={{ color: currentTheme.color }}>The Foundation</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                            The 4 Principles of <br /> <span style={{ color: currentTheme.color }}>Neuro-Mimetic Design</span>
                        </h3>
                        <p className="mt-4 max-w-2xl mx-auto" style={{ color: `${currentTheme.color}80` }}>
                            Extracted from <em>Neuromimetic Architecture</em>, Chapter 2.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 gap-8">
                        {/* Principle 1 */}
                        <div className="group p-8 bg-black/40 border rounded-xl transition-all hover:-translate-y-1 duration-300"
                            style={{ borderColor: `${currentTheme.color}40`, boxShadow: `0 0 0 transparent` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border transition-colors"
                                    style={{ borderColor: `${currentTheme.color}33`, backgroundColor: `${currentTheme.color}1A` }}>
                                    <Brain className="w-6 h-6" style={{ color: currentTheme.color }} />
                                </div>
                                <h4 className="text-xl font-bold text-white">01 // Self-Organization</h4>
                            </div>
                            <p className="leading-relaxed text-sm" style={{ color: `${currentTheme.color}99` }}>
                                Neurons are not placed by a master architect. They migrate based on local chemical gradients. In a Cognitive Enterprise, teams and resources differentiate based on <span className="text-white">Market Signal Gradients</span>, not top-down org charts.
                            </p>
                        </div>

                        {/* Principle 2 */}
                        <div className="group p-8 bg-black/40 border rounded-xl transition-all hover:-translate-y-1 duration-300"
                            style={{ borderColor: `${currentTheme.color}40` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border transition-colors"
                                    style={{ borderColor: `${currentTheme.color}33`, backgroundColor: `${currentTheme.color}1A` }}>
                                    <RefreshCw className="w-6 h-6" style={{ color: currentTheme.color }} />
                                </div>
                                <h4 className="text-xl font-bold text-white">02 // Plasticity</h4>
                            </div>
                            <p className="leading-relaxed text-sm" style={{ color: `${currentTheme.color}99` }}>
                                The brain rewires itself via <strong>Hebbian Learning</strong> ("neurons that fire together, wire together"). Your organization must automatically strengthen profitable connections and dissolve those that yield no value—without a meeting.
                            </p>
                        </div>

                        {/* Principle 3 */}
                        <div className="group p-8 bg-black/40 border rounded-xl transition-all hover:-translate-y-1 duration-300"
                            style={{ borderColor: `${currentTheme.color}40` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border transition-colors"
                                    style={{ borderColor: `${currentTheme.color}33`, backgroundColor: `${currentTheme.color}1A` }}>
                                    <GitMerge className="w-6 h-6" style={{ color: currentTheme.color }} />
                                </div>
                                <h4 className="text-xl font-bold text-white">03 // Redundancy & Degeneracy</h4>
                            </div>
                            <p className="leading-relaxed text-sm" style={{ color: `${currentTheme.color}99` }}>
                                Efficiency is brittle. The brain survives injury because of <strong>Degeneracy</strong>—structurally different components capable of performing the same outcome. We engineer overlapping capabilities to ensure survival under chaos.
                            </p>
                        </div>

                        {/* Principle 4 */}
                        <div className="group p-8 bg-black/40 border rounded-xl transition-all hover:-translate-y-1 duration-300"
                            style={{ borderColor: `${currentTheme.color}40` }}>
                            <div className="flex items-center gap-4 mb-6">
                                <div className="w-12 h-12 rounded-lg flex items-center justify-center border transition-colors"
                                    style={{ borderColor: `${currentTheme.color}33`, backgroundColor: `${currentTheme.color}1A` }}>
                                    <Layers className="w-6 h-6" style={{ color: currentTheme.color }} />
                                </div>
                                <h4 className="text-xl font-bold text-white">04 // Hierarchical Modularity</h4>
                            </div>
                            <p className="leading-relaxed text-sm" style={{ color: `${currentTheme.color}99` }}>
                                The brain has a hierarchy of <em>information processing</em>, not authority. Microcircuits form columns; columns form regions. We build nested, semi-autonomous modules that scale without creating bottlenecks.
                            </p>
                        </div>
                    </div>
                </div>
            </section>

            {/* TRI-PHASIC MORPHOGENESIS */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 relative bg-black overflow-hidden">
                <div className="absolute inset-0 bg-[size:40px_40px] opacity-20"
                    style={{ backgroundImage: `linear-gradient(45deg, ${currentTheme.color}0D 1px, transparent 1px)` }} />

                <div className="max-w-7xl mx-auto grid grid-cols-1 lg:grid-cols-2 gap-16 items-center">

                    {/* Left: The Abstract Visual */}
                    <div className="relative border bg-[#020609] rounded-xl overflow-hidden min-h-[500px] flex items-center justify-center group order-2 lg:order-1"
                        style={{ borderColor: `${currentTheme.color}4d`, boxShadow: `0 0 50px ${currentTheme.color}1A` }}>
                        <div className="absolute inset-0 bg-[size:40px_40px]"
                            style={{ backgroundImage: `linear-gradient(45deg, ${currentTheme.color}1A 1px, transparent 1px)` }} />

                        {/* Layered Animations */}
                        <div className="relative z-10 w-80 h-80">
                            {/* Outer Ring */}
                            <div className="absolute inset-0 border rounded-full animate-[spin_20s_linear_infinite]"
                                style={{ borderColor: `${currentTheme.color}1A` }} />
                            <div className="absolute inset-2 border border-dashed rounded-full animate-[spin_30s_linear_infinite_reverse]"
                                style={{ borderColor: `${currentTheme.color}33` }} />

                            {/* Middle Ring */}
                            <div className="absolute inset-12 border rounded-full animate-[spin_15s_linear_infinite]"
                                style={{ borderColor: `${currentTheme.color}1A` }} />
                            <div className="absolute inset-14 border-2 rounded-full flex items-center justify-center opacity-50"
                                style={{ borderColor: `${currentTheme.color}33` }}>
                                <div className="w-1 h-full animate-spin-slow" style={{ backgroundColor: `${currentTheme.color}33` }} />
                            </div>

                            {/* Inner Core */}
                            <div className="absolute inset-24 bg-black/30 backdrop-blur-sm rounded-full border flex items-center justify-center group-hover:scale-110 transition-transform duration-500"
                                style={{ borderColor: `${currentTheme.color}4d` }}>
                                <Brain className="w-16 h-16 animate-pulse" style={{ color: currentTheme.color }} />
                            </div>

                            {/* Floating Labels */}
                            <div className="absolute -right-8 top-10 bg-black/80 border px-3 py-1 text-[10px] rounded font-mono backdrop-blur animate-float"
                                style={{ borderColor: `${currentTheme.color}80`, color: currentTheme.color }}>
                                <span className="w-2 h-2 inline-block rounded-full mr-2 animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                                CORTEX.SYS: ONLINE
                            </div>
                            <div className="absolute -left-4 bottom-20 bg-black/80 border px-3 py-1 text-[10px] rounded font-mono backdrop-blur animate-[float_4s_ease-in-out_infinite_1s]"
                                style={{ borderColor: `${currentTheme.color}80`, color: currentTheme.color }}>
                                <span className="w-2 h-2 inline-block rounded-full mr-2 animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                                LIFECYCLE: ACTIVE
                            </div>
                        </div>
                    </div>
                    {/* Right: The Content */}
                    <div className="order-1 lg:order-2 space-y-12">
                        <div>
                            <h2 className="text-sm font-bold tracking-[0.2em] mb-4 uppercase flex items-center gap-2" style={{ color: currentTheme.color }}>
                                <span className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                                The Solution
                            </h2>
                            <h3 className="text-4xl font-extrabold text-white mb-6">
                                <span style={{ color: currentTheme.color }}>Tri-Phasic</span> Morphogenesis
                            </h3>
                            <p className="text-lg" style={{ color: `${currentTheme.color}b3` }}>
                                How do you actually build this? The manual prescribes a 3-stage transformation process, mirroring the development of the human cortex.
                            </p>
                        </div>

                        <div className="space-y-8 relative before:absolute before:left-[19px] before:top-4 before:bottom-4 before:w-[2px]"
                            style={{ color: `${currentTheme.color}b3` }}> {/* Using color to style pseudo element isn't direct, but border on parent div might work or inline styles on children */}
                            {/* Pseudo-element styling via style attribute is tricky; keep class color close or use distinct border div */}

                            {/* Phase I */}
                            <div className="relative pl-16 group">
                                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#020609] border flex items-center justify-center z-10 transition-all group-hover:scale-110"
                                    style={{ borderColor: `${currentTheme.color}80` }}>
                                    <span className="font-mono text-sm" style={{ color: currentTheme.color }}>I</span>
                                </div>
                                <h5 className="font-bold text-white text-xl mb-1 transition-colors" style={{ color: undefined }}>Phase I: The Germinal Zone</h5>
                                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: `${currentTheme.color}b3` }}>Software Automation</p>
                                <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>
                                    AI Agents act as <strong style={{ color: currentTheme.color }}>Neural Stem Cells</strong> for cognitive labor.
                                </p>
                            </div>

                            {/* Phase II */}
                            <div className="relative pl-16 group">
                                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#020609] border flex items-center justify-center z-10 transition-all group-hover:scale-110"
                                    style={{ borderColor: `${currentTheme.color}80` }}>
                                    <span className="font-mono text-sm" style={{ color: currentTheme.color }}>II</span>
                                </div>
                                <h5 className="font-bold text-white text-xl mb-1 transition-colors">Phase II: Economic Tokenization</h5>
                                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: `${currentTheme.color}b3` }}>Internal Capital Markets</p>
                                <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>
                                    Turning teams into profit centers connected by value flows, not budgets.
                                </p>
                            </div>

                            {/* Phase III */}
                            <div className="relative pl-16 group">
                                <div className="absolute left-0 top-1 w-10 h-10 rounded-full bg-[#020609] border flex items-center justify-center z-10 transition-all group-hover:scale-110"
                                    style={{ borderColor: `${currentTheme.color}80` }}>
                                    <span className="font-mono text-sm" style={{ color: currentTheme.color }}>III</span>
                                </div>
                                <h5 className="font-bold text-white text-xl mb-1 transition-colors">Phase III: The Cortical Plate</h5>
                                <p className="text-xs uppercase tracking-widest mb-2" style={{ color: `${currentTheme.color}b3` }}>Robotic Embodiment</p>
                                <p className="text-sm" style={{ color: `${currentTheme.color}80` }}>
                                    Terminally differentiated effectors executing physical actions in the real world.
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </section>

            {/* The Reader Friendly Version (CTA) */}
            <section className="py-32 px-4 sm:px-6 lg:px-8 border-t"
                style={{
                    background: `linear-gradient(to bottom, #020609, ${currentTheme.color}4d)`,
                    borderColor: `${currentTheme.color}4d`
                }}>
                <div className="max-w-7xl mx-auto flex flex-col md:flex-row-reverse items-center justify-between gap-16">

                    {/* Right: The Book Visual */}
                    <div className="flex-1 relative flex justify-center py-20">
                        {/* Shadow underneath */}
                        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 translate-y-[200px] w-56 h-16 blur-[60px] animate-[pulse_4s_ease-in-out_infinite]"
                            style={{ backgroundColor: `${currentTheme.color}66` }} />

                        <Book3D
                            coverImage="/books/cover_gclb.jpeg"
                            title="Growing Companies Like Brains"
                            color={currentTheme.color}
                            className="w-[320px] h-[480px]"
                        />
                    </div>

                    {/* Sales Copy */}
                    <div className="flex-1 space-y-8">
                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full border"
                            style={{ backgroundColor: `${currentTheme.color}1A`, borderColor: `${currentTheme.color}80` }}>
                            <BookOpen className="w-4 h-4" style={{ color: currentTheme.color }} />
                            <span className="text-xs font-mono tracking-widest uppercase" style={{ color: currentTheme.color }}>Field Manual // Declassified</span>
                        </div>

                        <h2 className="text-4xl md:text-5xl font-bold text-white leading-tight">
                            Growing Companies <br />
                            <span style={{ color: currentTheme.color }}>Like Brains</span>
                        </h2>

                        <p className="text-xl leading-relaxed" style={{ color: `${currentTheme.color}b3` }}>
                            The theory helps you understand the machine. The manual helps you <span className="text-white font-bold">build it</span>.
                            <br /><br />
                            This reader-friendly guide strips away the academic density and gives you the raw, tactical steps to re-engineer your company into a self-repairing, self-optimizing organism.
                        </p>

                        <ul className="space-y-4 font-mono text-sm" style={{ color: `${currentTheme.color}99` }}>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                                <span>Stop managing people. Start managing protocols.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse delay-75" style={{ backgroundColor: currentTheme.color }} />
                                <span>Eliminate operational latency.</span>
                            </li>
                            <li className="flex items-center gap-3">
                                <div className="w-2 h-2 rounded-full animate-pulse delay-150" style={{ backgroundColor: currentTheme.color }} />
                                <span>Scale complexity without scaling chaos.</span>
                            </li>
                        </ul>

                        <div className="pt-8 flex flex-col sm:flex-row gap-4">
                            <a
                                href="https://www.amazon.com/dp/B0G71WFSHK"
                                target="_blank"
                                rel="noopener noreferrer"
                                className="group inline-flex items-center justify-center gap-3 rounded-lg px-8 py-4 text-white font-bold text-lg hover:scale-105 transition-all"
                                style={{
                                    backgroundColor: currentTheme.color,
                                    boxShadow: `0 0 20px ${currentTheme.color}66`
                                }}
                            >
                                ORDER ON AMAZON <ArrowRight className="w-5 h-5 group-hover:translate-x-1 transition-transform" />
                            </a>
                            <span className="text-xs flex items-center justify-center" style={{ color: `${currentTheme.color}4d` }}>
                                <Globe className="w-3 h-3 mr-1" />
                                WORLDWIDE SHIPPING AVAILABLE
                            </span>
                        </div>
                    </div>

                </div>
            </section>

            {/* THE NEURAL LINK: BASALTHQ INTEGRATION */}
            <section className="py-24 px-4 sm:px-6 lg:px-8 bg-black relative overflow-hidden"
                style={{ borderTopWidth: '1px', borderColor: `${currentTheme.color}4d` }}>
                <div className="absolute inset-0 bg-[size:30px_30px] opacity-20"
                    style={{ backgroundImage: `linear-gradient(${currentTheme.color}0D 1px, transparent 1px), linear-gradient(90deg, ${currentTheme.color}0D 1px, transparent 1px)` }} />

                <div className="max-w-7xl mx-auto relative z-10">
                    <div className="text-center mb-16">
                        <h2 className="text-sm font-bold tracking-[0.2em] mb-4 uppercase" style={{ color: currentTheme.color }}>The Operating System</h2>
                        <h3 className="text-4xl md:text-5xl font-extrabold text-white">
                            The Digital <span style={{ color: currentTheme.color }}>Cortex</span>
                        </h3>
                        <p className="mt-4 max-w-2xl mx-auto text-lg" style={{ color: `${currentTheme.color}80` }}>
                            Theory is useless without tooling. Ledger1 is the only ERP suite architected specifically to implement Tri-Phasic Morphogenesis.
                        </p>
                    </div>

                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Modules - Dynamic */}
                        {/* We use a map here ideally, but copying the structure with style overrides is safer given line count limitation */}
                        {[
                            { icon: Cpu, name: "BasaltERP", sub: "HIPPOCAMPUS (Memory)", desc: 'The single source of truth. Stores "State Vectors" of every object, ensuring <strong>Zero Latency</strong> access to data.', color: currentTheme.color },
                            { icon: Share2, name: "BasaltCRM", sub: "AMYGDALA (Social)", desc: 'Maps the social graph of customers, identifying <strong>Profit Gradients</strong> via emotional and transactional analysis.', color: currentTheme.color },
                            { icon: Brain, name: "BasaltEcho", sub: "BROCA'S AREA (Speech)", desc: 'Interprets unstructured natural language (voice/text) and translates it into structured <strong>Ontological Actions</strong>.', color: currentTheme.color },
                            { icon: Zap, name: "BasaltSurge", sub: "VASCULAR (Resource)", desc: 'Ensures liquidity (oxygen) reaches the value-added clusters, automating <strong>Capital Reallocation</strong>.', color: currentTheme.color },
                            { icon: Layers, name: "BasaltCMS", sub: "WERNICKE'S AREA (Meaning)", desc: 'The semantic knowledge store. Organizes unstructured corporate wisdom into retrievable, context-aware <strong>Intelligence</strong>.', color: currentTheme.color, soon: true },
                            { icon: Shield, name: "BasaltVault", sub: "PREFRONTAL CORTEX (Control)", desc: 'Multi-signature smart contract accounts. The executive function that enforces <strong>Governance Protocols</strong> and asset security.', color: currentTheme.color, soon: true }
                        ].map((mod, i) => (
                            <div key={i} className="p-6 border rounded-xl backdrop-blur transition-all group relative overflow-hidden hover:scale-[1.02]"
                                style={{
                                    borderColor: `${currentTheme.color}80`,
                                    backgroundColor: `${currentTheme.color}1A`,
                                }}>
                                {mod.soon && (
                                    <div className="absolute top-3 right-3 px-2 py-0.5 border rounded text-[9px] font-mono uppercase tracking-wider"
                                        style={{
                                            backgroundColor: `${currentTheme.color}80`,
                                            borderColor: `${currentTheme.color}4d`,
                                            color: 'white'
                                        }}>Coming Soon</div>
                                )}
                                <div className="h-10 w-10 rounded-lg flex items-center justify-center mb-4 border group-hover:scale-110 transition-transform"
                                    style={{
                                        backgroundColor: `${currentTheme.color}33`,
                                        borderColor: `${currentTheme.color}4d`
                                    }}>
                                    <mod.icon className="w-5 h-5" style={{ color: currentTheme.color }} />
                                </div>
                                <h4 className="text-lg font-bold text-white mb-1">{mod.name}</h4>
                                <p className="text-[10px] font-mono w-full mb-3 border-b pb-2"
                                    style={{ color: currentTheme.color, borderColor: `${currentTheme.color}33` }}>{mod.sub}</p>
                                <div className="text-xs leading-relaxed" style={{ color: `${currentTheme.color}b3` }} dangerouslySetInnerHTML={{ __html: mod.desc }} />
                            </div>
                        ))}
                    </div>
                </div>
            </section>

            {/* WAR ROOM FOOTER */}
            <section className="py-20 border-t relative overflow-hidden"
                style={{
                    backgroundColor: `${currentTheme.color}1A`, // Darker background
                    borderColor: `${currentTheme.color}80`
                }}>
                <div className="absolute inset-0 bg-[url('https://grainy-gradients.vercel.app/noise.svg')] opacity-20 pointer-events-none"></div>
                <div className="absolute top-0 inset-x-0 h-px opacity-50"
                    style={{ backgroundImage: `linear-gradient(to right, transparent, ${currentTheme.color}, transparent)` }} />

                <div className="max-w-4xl mx-auto text-center relative z-10 px-4">
                    <h2 className="text-3xl md:text-5xl font-black text-white uppercase mb-8">
                        The Doctrine is Clear. <br />
                        <span style={{ color: currentTheme.color }}>The Choice is Yours.</span>
                    </h2>
                    <p className="text-xl mb-10 leading-relaxed" style={{ color: `${currentTheme.color}cc` }}>
                        You can continue to run a 19th-century hierarchy in a 21st-century world. Or you can evolve. The tools are here. The manual is here.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-6 justify-center">
                        <a
                            href="/get-started"
                            className="bg-white px-8 py-4 rounded font-bold text-lg hover:bg-gray-100 transition-colors flex items-center justify-center gap-2"
                            style={{ color: currentTheme.color }}
                        >
                            INITIATE UPGRADE <ArrowRight className="w-5 h-5" />
                        </a>
                        <a
                            href="https://www.amazon.com/dp/B0G71WFSHK"
                            target="_blank"
                            rel="noopener noreferrer"
                            className="border text-white px-8 py-4 rounded font-bold text-lg transition-colors flex items-center justify-center gap-2"
                            style={{
                                backgroundColor: `${currentTheme.color}4d`,
                                borderColor: currentTheme.color
                            }}
                        >
                            READ THE MANUAL
                        </a>
                    </div>
                </div>
            </section>
        </div>
    );
}
