"use client";

import { useBrandTheme } from "@/components/providers/brand-theme-provider";
import {
  Shield,
  Lock,
  Eye,
  Globe,
  Zap,
  ArrowRight,
  CheckCircle2,
  Database,
  Server,
  Users,
  Clock,
  FileCheck,
  Search,
  Mail
} from "lucide-react";
import { useEffect, useState } from "react";

export default function PrivacyPage() {
  const { currentTheme } = useBrandTheme();
  const updated = "2026-01-01";
  const [activeSection, setActiveSection] = useState("introduction");

  const sections = [
    { id: "introduction", label: "Introduction", icon: Shield },
    { id: "taxonomy", label: "Data Taxonomy", icon: Database },
    { id: "tracking", label: "Cookies & Tracking", icon: Search },
    { id: "processing", label: "Legal Bases", icon: Zap },
    { id: "sharing", label: "Third-Party Sharing", icon: Users },
    { id: "transfers", label: "Transfers & Residency", icon: Server },
    { id: "retention", label: "Retention Policy", icon: Clock },
    { id: "security", label: "Armor Protocols", icon: Lock },
    { id: "regional", label: "Regional Rights", icon: Globe },
    { id: "governance", label: "Governance Office", icon: FileCheck },
  ];

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            setActiveSection(entry.target.id);
          }
        });
      },
      { rootMargin: "-20% 0% -35% 0%", threshold: 0 }
    );

    sections.forEach((s) => {
      const el = document.getElementById(s.id);
      if (el) observer.observe(el);
    });

    return () => observer.disconnect();
  }, []);

  const scrollTo = (id: string) => {
    const el = document.getElementById(id);
    if (el) {
      window.scrollTo({
        top: el.offsetTop - 120,
        behavior: "smooth",
      });
    }
  };

  return (
    <div className="min-h-screen bg-[#020609] text-white selection:bg-primary/30">
      {/* Hero Section */}
      <section className="relative pt-40 pb-24 overflow-hidden border-b border-white/5">
        <div className="absolute inset-0 bg-[url('/grid.svg')] opacity-[0.03] pointer-events-none" />
        <div
          className="absolute top-0 left-1/2 -translate-x-1/2 w-full h-[500px] opacity-20 pointer-events-none"
          style={{
            background: `radial-gradient(circle at center, ${currentTheme.color}33 0%, transparent 70%)`
          }}
        />

        <div className="relative mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col md:flex-row md:items-end justify-between gap-8">
            <div className="max-w-3xl">
              <div
                className="inline-flex items-center gap-2 px-3 py-1 rounded-full mb-6 font-mono text-[10px] tracking-[0.2em] border transition-colors duration-500"
                style={{
                  backgroundColor: `${currentTheme.color}10`,
                  borderColor: `${currentTheme.color}30`,
                  color: currentTheme.color
                }}
              >
                <Lock className="h-3 w-3" />
                <span>DATA_GOVERNANCE_PROTOCOL_V4.0_FINAL</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
                Privacy <span style={{ color: currentTheme.color }}>Policy</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                The definitive framework for cognitive data stewardship, cryptographic integrity, and organizational transparency.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end font-mono text-[10px] tracking-widest text-muted-foreground">
              <span>LAST_REVISION: {updated}</span>
              <span className="mt-1">ISO_27001_ALIGNED</span>
            </div>
          </div>
        </div>
      </section>

      {/* Main Content Layout */}
      <section className="relative py-24">
        <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
          <div className="flex flex-col lg:flex-row gap-16">

            {/* Sidebar Navigation - Sticky */}
            <aside className="hidden lg:block w-72 flex-shrink-0">
              <div className="sticky top-32 space-y-1">
                <div className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground uppercase mb-6 pl-4 font-bold">Privacy Framework</div>
                {sections.map((s) => (
                  <button
                    key={s.id}
                    onClick={() => scrollTo(s.id)}
                    className={`w-full flex items-center gap-3 px-4 py-3 rounded-xl text-xs font-mono tracking-wider transition-all duration-300 group ${activeSection === s.id
                        ? 'bg-white/5 text-white shadow-xl shadow-black/20'
                        : 'text-muted-foreground hover:text-white hover:bg-white/5'
                      }`}
                  >
                    <s.icon
                      className={`h-4 w-4 transition-colors duration-300 ${activeSection === s.id ? 'opacity-100' : 'opacity-40 group-hover:opacity-100'
                        }`}
                      style={activeSection === s.id ? { color: currentTheme.color } : {}}
                    />
                    {s.label}
                    {activeSection === s.id && (
                      <div
                        className="ml-auto w-1 h-4 rounded-full transition-all duration-500"
                        style={{ backgroundColor: currentTheme.color }}
                      />
                    )}
                  </button>
                ))}
              </div>
            </aside>

            {/* Document Content */}
            <div className="flex-1 space-y-32 pb-32">

              {/* Introduction */}
              <article id="introduction" className="scroll-mt-32">
                <div className="glass-pane p-10 rounded-2xl border border-white/10 bg-white/5 mb-12 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full opacity-50" style={{ backgroundColor: currentTheme.color }} />
                  <p className="text-xl text-muted-foreground/90 leading-relaxed font-light">
                    At <span className="text-white font-bold tracking-tight">BasaltHQ</span>, we operate on the premise that Privacy is the fundamental primitive of trust in the Cognitive Era. Our platform is engineered to function as a vault for your organization's intellectual assets. This policy codifies our commitment to global compliance (GDPR, CCPA, etc.) and our internal "Zero-Leak" data philosophy.
                  </p>
                </div>
              </article>

              {/* Data Taxonomy */}
              <article id="taxonomy" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Database className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  1. Information Taxonomy
                </h2>
                <div className="space-y-8">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We maintain a rigorous classification system for all data ingested or generated through our neural business architecture:
                  </p>

                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      {
                        title: "Institutional Identifiers",
                        data: "Full names, enterprise email domains, organizational hierarchies, and cryptographically hashed authentication tokens."
                      },
                      {
                        title: "Operational Telemetry",
                        data: "API invocation patterns, latency metrics, system error logs, and transactional throughput data."
                      },
                      {
                        title: "Digital Fingerprinting",
                        data: "Network metadata, IP addresses, browser runtime environments, and unique device identifiers (UUIDs)."
                      },
                      {
                        title: "Inference Artifacts",
                        data: "Structural patterns derived from AI processing (anonymized at the source) to optimize global model performance."
                      }
                    ].map((cat, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 hover:border-white/10 transition-colors group">
                        <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] mb-3 flex items-center gap-2">
                          <CheckCircle2 className="h-3 w-3 opacity-50" style={{ color: currentTheme.color }} />
                          {cat.title}
                        </h4>
                        <p className="text-sm text-muted-foreground leading-relaxed">{cat.data}</p>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Cookies & Tracking */}
              <article id="tracking" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Search className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  2. Cookies & Tracking Technology
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    We deploy a minimalist tracking stack designed to balance performance optimization with absolute user anonymity. We do not engage in behavioral cross-site retargeting.
                  </p>
                  <div className="bg-white/5 border border-white/5 p-8 rounded-2xl">
                    <table className="w-full text-left text-sm font-mono">
                      <thead>
                        <tr className="border-b border-white/10 text-white/40 uppercase tracking-widest text-[10px]">
                          <th className="pb-4">Type</th>
                          <th className="pb-4">Function</th>
                          <th className="pb-4">Persistence</th>
                        </tr>
                      </thead>
                      <tbody className="text-white/80">
                        <tr className="border-b border-white/5">
                          <td className="py-4">Essential</td>
                          <td className="py-4">Session state & security validation</td>
                          <td className="py-4">Session</td>
                        </tr>
                        <tr className="border-b border-white/5">
                          <td className="py-4">Preferences</td>
                          <td className="py-4">Theme & localization settings</td>
                          <td className="py-4">12 Months</td>
                        </tr>
                        <tr>
                          <td className="py-4">Intelligence</td>
                          <td className="py-4">Load balancing & error detection</td>
                          <td className="py-4">Persistent</td>
                        </tr>
                      </tbody>
                    </table>
                  </div>
                </div>
              </article>

              {/* Legal Bases */}
              <article id="processing" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Zap className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  3. Legal Bases for Processing
                </h2>
                <div className="space-y-12">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    Under the General Data Protection Regulation (GDPR) and similar frameworks, we process data based on the following specific legal grounds:
                  </p>

                  <div className="space-y-6">
                    {[
                      {
                        title: "Contractual Mandate",
                        desc: "Processing is essential to initialize your organization's environment and provide the requested business intelligence services."
                      },
                      {
                        title: "Legitimate Organizational Interest",
                        desc: "Securing the perimeter against unauthorized access, detecting network-level anomalies, and improving platform stability."
                      },
                      {
                        title: "Compliance Protocols",
                        desc: "Processing necessary for financial reporting, tax calculation, and responding to legally binding government mandates."
                      }
                    ].map((item, i) => (
                      <div key={i} className="flex gap-6 items-start group">
                        <div className="mt-1 w-6 h-6 rounded-full bg-white/5 border border-white/10 flex items-center justify-center shrink-0">
                          <span className="text-[10px] font-bold" style={{ color: currentTheme.color }}>{i + 1}</span>
                        </div>
                        <div>
                          <h4 className="font-bold text-white uppercase text-xs tracking-widest mb-1">{item.title}</h4>
                          <p className="text-muted-foreground text-sm leading-relaxed">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Third-Party Sharing */}
              <article id="sharing" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Users className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  4. Disclosure and Sub-processors
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    We never sell organizational or personal data. Disclosure is restricted to audited sub-processors who assist in platform delivery under strict Data Processing Agreements (DPAs).
                  </p>
                  <div className="grid md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Platform Infrastructure</span>
                      <p className="text-sm">AWS / Azure / Vercel: Computational nodes and secure storage.</p>
                    </div>
                    <div className="p-6 rounded-xl border border-white/5 bg-white/5">
                      <span className="text-[10px] uppercase tracking-widest text-white/40 block mb-2">Payment Transmission</span>
                      <p className="text-sm">Stripe: End-to-end encrypted financial transactions.</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Transfers & Residency */}
              <article id="transfers" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Server className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  5. Global Data Transfers & Residency
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    As a globally distributed cognitive architecture, BasaltHQ may process data in jurisdictions outside your primary residency. We utilize **Standard Contractual Clauses (SCCs)** and the **EU-U.S. Data Privacy Framework** to ensure peak-level protection regardless of geographic location.
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-[10px] font-mono tracking-widest text-white uppercase mb-2">Primary Storage_</h4>
                      <p className="text-sm">Defaulting to US-East (Virginia) or EU-West (Dublin) based on organizational origin.</p>
                    </div>
                    <div className="p-6 rounded-2xl bg-white/5 border border-white/5">
                      <h4 className="text-[10px] font-mono tracking-widest text-white uppercase mb-2">Transit Protocols_</h4>
                      <p className="text-sm">All cross-border transmissions are shielded by TLS 1.3+ and Perfect Forward Secrecy.</p>
                    </div>
                  </div>
                </div>
              </article>

              {/* Retention */}
              <article id="retention" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Clock className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  6. Data Retention & Destruction
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed mb-8">
                  Data is retained only for the duration required to fulfill original processing objectives or as required by statutory retention periods (typically 7 years for financial data).
                </p>
                <div className="p-6 rounded-2xl border border-white/5 bg-white/5 flex items-center gap-6">
                  <div className="p-4 rounded-full bg-primary/10 border border-primary/20 shrink-0">
                    <Zap className="h-6 w-6" style={{ color: currentTheme.color }} />
                  </div>
                  <div>
                    <h4 className="text-white font-bold text-sm mb-1 uppercase tracking-wider">Rapid Deletion Protocol</h4>
                    <p className="text-xs text-muted-foreground leading-relaxed">Upon account decommissioning, all institutional data is cryptographically wiped from active production databases within 30 days.</p>
                  </div>
                </div>
              </article>

              {/* Security Protocols */}
              <article id="security" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Lock className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  7. Armor Security Protocols
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Our "Armor" defense suite is built on a Zero-Trust architecture, ensuring that every data packet is authenticated, authorized, and encrypted.
                  </p>
                  <div className="bg-white/5 border border-white/5 p-8 rounded-2xl relative overflow-hidden group">
                    <div className="absolute top-0 right-0 w-24 h-24 bg-primary/5 rounded-full blur-3xl group-hover:bg-primary/10 transition-colors" />
                    <ul className="space-y-4 relative z-10">
                      {[
                        "AES-256-GCM encryption for all data at rest.",
                        "Hardware Security Modules (HSM) for root key management.",
                        "Continuous AI-driven anomaly detection and threat hunting.",
                        "Strict Role-Based Access Control (RBAC) with mandatory MFA."
                      ].map((feature, i) => (
                        <li key={i} className="flex items-center gap-3 text-sm">
                          <div className="w-1.5 h-1.5 rounded-full" style={{ backgroundColor: currentTheme.color }} />
                          {feature}
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </article>

              {/* Regional Rights */}
              <article id="regional" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-12 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Globe className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  8. Regional Compliance Modules
                </h2>

                <div className="space-y-16">
                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute top-0 -left-1 w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.color }} />
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">EEA & United Kingdom (GDPR)</h3>
                    <div className="grid grid-cols-2 md:grid-cols-4 gap-4 text-[10px] font-mono tracking-widest uppercase opacity-60">
                      <span>_Access_Right</span>
                      <span>_Erasure_Right</span>
                      <span>_Portability</span>
                      <span>_Rectification</span>
                    </div>
                    <p className="mt-4 text-sm text-muted-foreground leading-relaxed font-light">
                      Residents of the EEA have the right to object to processing or withdraw consent at any time. We serve as the "Data Controller" for infrastructure metadata and the "Data Processor" for your organizational content.
                    </p>
                  </div>

                  <div className="relative pl-8 border-l border-white/10">
                    <div className="absolute top-0 -left-1 w-2 h-2 rounded-full" style={{ backgroundColor: currentTheme.color }} />
                    <h3 className="text-white font-bold uppercase tracking-widest text-sm mb-4">California (CCPA/CPRA)</h3>
                    <p className="text-sm text-muted-foreground leading-relaxed font-light">
                      California residents have the right to "Knowledge," "Deletion," and "Non-Discrimination." We do not sell personal data as defined by the CCPA. To exercise your "Do Not Sell or Share My Personal Information" rights (though we do not engage in such sharing), contact our privacy office.
                    </p>
                  </div>
                </div>
              </article>

              {/* Contact */}
              <article id="governance" className="scroll-mt-32 pt-24 border-t border-white/10">
                <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                  <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <Mail className="h-6 w-6" style={{ color: currentTheme.color }} />
                      </div>
                      <h3 className="text-2xl font-bold uppercase tracking-tighter">Governance Office</h3>
                    </div>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      For formal inquiries regarding data protection, DPA execution, or jurisdictional compliance requirements, please contact our lead data privacy officer.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <div
                      className="p-10 rounded-3xl border group transition-all duration-500 hover:bg-white/5 relative overflow-hidden"
                      style={{
                        borderColor: `${currentTheme.color}20`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <div className="relative z-10 flex flex-col items-center">
                        <span className="text-[10px] font-mono tracking-[0.4em] text-muted-foreground mb-4 uppercase">Secure Channel_Alpha</span>
                        <a
                          href="mailto:privacy@basalthq.com"
                          className="text-2xl font-black tracking-tight"
                          style={{ color: currentTheme.color }}
                        >
                          privacy@basalthq.com
                        </a>
                        <div className="mt-6 flex items-center gap-2 px-3 py-1 rounded-full bg-white/5 border border-white/10 text-[9px] font-mono tracking-widest text-white/40 uppercase">
                          <div className="w-1.5 h-1.5 rounded-full animate-pulse" style={{ backgroundColor: currentTheme.color }} />
                          Monitoring Active
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              </article>

            </div>
          </div>
        </div>
      </section>
    </div>
  );
}
