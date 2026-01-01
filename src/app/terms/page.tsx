"use client";

import { useBrandTheme } from "@/components/providers/brand-theme-provider";
import {
  Scale,
  BookOpen,
  CreditCard,
  ShieldAlert,
  Gavel,
  Hammer,
  AlertTriangle,
  FileText,
  ChevronRight,
  ShieldCheck,
  Cpu,
  Zap,
  Briefcase,
  AlertCircle,
  CheckCircle2
} from "lucide-react";
import { useEffect, useState } from "react";

export default function TermsPage() {
  const { currentTheme } = useBrandTheme();
  const updated = "2026-01-01";
  const [activeSection, setActiveSection] = useState("agreement");

  const sections = [
    { id: "agreement", label: "Master Agreement", icon: FileText },
    { id: "eligibility", label: "Authorized Access", icon: ShieldCheck },
    { id: "billing", label: "Fees & Compute", icon: CreditCard },
    { id: "ip", label: "Intellectual Property", icon: BookOpen },
    { id: "ai", label: "AI & Usage Data", icon: Cpu },
    { id: "use", label: "Prohibited Acts", icon: Scale },
    { id: "indemnity", label: "Indemnification", icon: ShieldAlert },
    { id: "liability", label: "Liability Shield", icon: AlertTriangle },
    { id: "arbitration", label: "Dispute Resolution", icon: Gavel },
    { id: "governing", label: "Jurisdictional Law", icon: Hammer },
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
                <Scale className="h-3 w-3" />
                <span>MSA_ENTERPRISE_PROTOCOL_V4.2_FINAL</span>
              </div>
              <h1 className="text-5xl md:text-7xl font-black tracking-tighter uppercase mb-6 leading-none">
                Terms <span style={{ color: currentTheme.color }}>of Service</span>
              </h1>
              <p className="text-xl text-muted-foreground font-light leading-relaxed">
                The governing framework for the deployment, utilization, and governance of the BasaltHQ Cognitive Business Suite.
              </p>
            </div>
            <div className="flex flex-col items-start md:items-end font-mono text-[10px] tracking-widest text-muted-foreground uppercase opacity-60">
              <span>FOR_INSTITUTIONAL_USE_ONLY</span>
              <span className="mt-1">REVISION_DATE: {updated}</span>
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
                <div className="text-[10px] font-mono tracking-[0.3em] text-muted-foreground uppercase mb-6 pl-4 font-bold">Legal Chapters</div>
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
              <article id="agreement" className="scroll-mt-32">
                <div className="glass-pane p-10 rounded-2xl border border-white/10 bg-white/5 mb-12 relative overflow-hidden group">
                  <div className="absolute top-0 left-0 w-1 h-full opacity-50" style={{ backgroundColor: currentTheme.color }} />
                  <p className="text-xl text-muted-foreground/90 leading-relaxed font-light">
                    These Terms of Service constitute a <span className="text-white font-bold">Master Subscription Agreement</span> between your organization ("Customer") and BasaltHQ ("Company"). By initializing your instance, you certify that you have the organizational mandate to bind your institution to these operational protocols.
                  </p>
                </div>
              </article>

              {/* Authorized Access */}
              <article id="eligibility" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <ShieldCheck className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  1. Provision of Services & Authorization
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    Company grants Customer a non-exclusive, non-transferable right to access the Services for internal business operations. This grant is contingent upon:
                  </p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      { title: "Authorized Nodes", desc: "Access is restricted to verified enterprise domains and authorized personnel." },
                      { title: "Non-Commercialization", desc: "Customer shall not resell, sublicense, or white-label the Services without prior written consent." },
                      { title: "Operational Integrity", desc: "Customer shall not engage in actions that compromise the stability of the global business architecture." },
                      { title: "Regulatory Compliance", desc: "Usage must strictly adhere to all applicable jurisdictional laws and export controls." }
                    ].map((item, i) => (
                      <div key={i} className="p-6 rounded-2xl bg-white/5 border border-white/5 flex gap-4 items-start">
                        <Zap className="h-4 w-4 mt-1 shrink-0" style={{ color: currentTheme.color }} />
                        <div>
                          <h4 className="text-[10px] font-mono tracking-widest text-white uppercase mb-1">{item.title}</h4>
                          <p className="text-xs">{item.desc}</p>
                        </div>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Billing */}
              <article id="billing" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <CreditCard className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  2. Fees, Billing & Compute Allocation
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>Customer shall pay all fees specified in the Order Form. Fees are determined by hierarchical tiers and computational resource utilization.</p>

                  <div className="p-8 rounded-2xl bg-gradient-to-br from-white/5 to-transparent border border-white/5">
                    <h4 className="text-white font-bold text-sm mb-4 uppercase tracking-widest flex items-center gap-2">
                      <Briefcase className="h-4 w-4 opacity-50" />
                      Net 30 Liquidity Protocol
                    </h4>
                    <p className="text-sm mb-6">
                      All invoices are due within thirty (30) days from transmission. Late payments trigger an automated service fee of 1.5% per month or the maximum rate permitted by law.
                    </p>
                    <div className="p-4 rounded-xl bg-red-500/5 border border-red-500/20 text-xs">
                      <strong className="text-red-400 uppercase tracking-widest block mb-1">Compute Suspension_</strong>
                      Company reserves the right to throttle or suspend compute allocation for any account with an outstanding balance exceeding 45 days.
                    </div>
                  </div>
                </div>
              </article>

              {/* IP Rights */}
              <article id="ip" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <BookOpen className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  3. Intellectual Property Rights
                </h2>
                <div className="space-y-8">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    We maintain a strict separation between Platform Architecture and Customer Content:
                  </p>
                  <div className="grid md:grid-cols-2 gap-8">
                    <div className="space-y-4">
                      <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                        <div className="w-1 h-3 rounded-full" style={{ backgroundColor: currentTheme.color }} />
                        BasaltHQ IP
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        The Neuromimetic Architecture, source code, neural models, patentable algorithms, and brand artifacts remain the exclusive property of Company. No ownership is transferred hereunder.
                      </p>
                    </div>
                    <div className="space-y-4">
                      <h4 className="text-white font-bold uppercase text-[10px] tracking-[0.2em] flex items-center gap-2">
                        <div className="w-1 h-3 rounded-full" style={{ backgroundColor: currentTheme.color }} />
                        Customer Data
                      </h4>
                      <p className="text-sm text-muted-foreground leading-relaxed">
                        Customer retains all rights to information submitted to the Services. Customer grants Company a non-exclusive license to use such data solely to provide the services and improve platform security.
                      </p>
                    </div>
                  </div>
                </div>
              </article>

              {/* AI & Usage Data */}
              <article id="ai" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Cpu className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  4. AI Training & Usage Data
                </h2>
                <div className="p-8 rounded-2xl border border-white/10 bg-white/5 space-y-6">
                  <p className="text-muted-foreground font-light leading-relaxed">
                    To maintain the edge of our cognitive suite, Company utilizes <strong>De-identified Usage Data</strong> to optimize global patterns. This data is cryptographically stripped of all PII and organizational identifiers at the point of ingestion.
                  </p>
                  <div className="flex items-center gap-3 p-4 rounded-xl bg-white/5 border border-white/5 text-[10px] font-mono text-white/40 uppercase tracking-[0.2em]">
                    <CheckCircle2 className="h-4 w-4" style={{ color: currentTheme.color }} />
                    Zero-Knowledge_Model_Updates_Active
                  </div>
                </div>
              </article>

              {/* Prohibited Acts */}
              <article id="use" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <Scale className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  5. Acceptable Use & Prohibited Acts
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>To preserve the integrity of the BasaltHQ ecosystem, Customer shall not, and shall not permit any third party to:</p>
                  <div className="grid grid-cols-1 md:grid-cols-2 gap-4">
                    {[
                      "Decompile, reverse engineer, or attempt to derive the platform's neural weights.",
                      "Use the Services to develop a competing business intelligence or AI offering.",
                      "Exceed the stipulated API rate limits or engage in automated scraping.",
                      "Upload toxic, illegal, or cryptographically malicious payloads."
                    ].map((restriction, i) => (
                      <div key={i} className="p-5 rounded-xl border border-white/5 bg-white/5 flex gap-4 items-center">
                        <AlertCircle className="h-4 w-4 shrink-0 opacity-40" />
                        <span className="text-xs">{restriction}</span>
                      </div>
                    ))}
                  </div>
                </div>
              </article>

              {/* Indemnification */}
              <article id="indemnity" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <ShieldAlert className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  6. Mutual Indemnification
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    <strong>By Company:</strong> We shall defend and indemnify Customer against any third-party claims alleging that the platform infringes upon a valid intellectual property right.
                  </p>
                  <p>
                    <strong>By Customer:</strong> Customer shall defend and indemnify Company against any third-party claims arising from Customer's unauthorized use of data or violation of Acceptable Use protocols.
                  </p>
                </div>
              </article>

              {/* Liability Shield */}
              <article id="liability" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10 shadow-inner">
                    <AlertTriangle className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  7. Limitation of Liability
                </h2>
                <div className="p-8 rounded-2xl bg-white/5 border border-white/10">
                  <p className="text-xs font-mono tracking-widest text-white/50 mb-6 uppercase">Legal_Exclusion_Protocol_v4.0</p>
                  <p className="text-sm font-bold text-white uppercase leading-relaxed selection:bg-red-500/50 italic">
                    IN NO EVENT SHALL EITHER PARTY’S AGGREGATE LIABILITY ARISING OUT OF OR RELATED TO THIS AGREEMENT EXCEED THE TOTAL AMOUNT PAID BY CUSTOMER IN THE TWELVE (12) MONTHS PRECEDING THE INCIDENT. NEITHER PARTY WILL BE LIABLE FOR ANY LOST PROFITS, SYSTEM DOWNTIME, OR INDIRECT DAMAGES.
                  </p>
                </div>
              </article>

              {/* Arbitration */}
              <article id="arbitration" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Gavel className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  8. Binding Arbitration & Class Waiver
                </h2>
                <div className="space-y-6 text-muted-foreground font-light leading-relaxed">
                  <p>
                    By entering this agreement, you elect to resolve all disputes through <strong>Binding Arbitration</strong> administered by the AAA. The venue shall be Santa Fe, New Mexico.
                  </p>
                  <div className="p-6 rounded-2xl border border-white/5 bg-white/5">
                    <p className="text-xs font-mono uppercase tracking-[0.2em] text-white/80">
                      You waive your right to participate in class-action litigation or jury trials. This is a fundamental component of the BasaltHQ master agreement.
                    </p>
                  </div>
                </div>
              </article>

              {/* Governing Law */}
              <article id="governing" className="scroll-mt-32">
                <h2 className="text-3xl font-bold tracking-tight mb-8 flex items-center gap-4">
                  <div className="w-10 h-10 rounded-xl bg-white/5 flex items-center justify-center border border-white/10">
                    <Hammer className="h-5 w-5" style={{ color: currentTheme.color }} />
                  </div>
                  9. Governing Law
                </h2>
                <p className="text-muted-foreground font-light leading-relaxed">
                  This Agreement shall be governed by the laws of the <span className="text-white font-bold">State of New Mexico</span>. Any legal action not subject to arbitration shall be filed in the state or federal courts of Santa Fe County.
                </p>
              </article>

              {/* Final Contact */}
              <article id="legal-contact" className="scroll-mt-32 pt-24 border-t border-white/10">
                <div className="flex flex-col md:flex-row gap-12 items-center justify-between">
                  <div className="max-w-md">
                    <div className="flex items-center gap-3 mb-6">
                      <div className="w-12 h-12 rounded-full bg-white/5 border border-white/10 flex items-center justify-center">
                        <AlertCircle className="h-6 w-6" style={{ color: currentTheme.color }} />
                      </div>
                      <h3 className="text-2xl font-bold uppercase tracking-tighter">Legal Architect Office</h3>
                    </div>
                    <p className="text-muted-foreground font-light leading-relaxed">
                      For service of process or formal contractual amendments, please reach out to our legal department through the secure channel.
                    </p>
                  </div>
                  <div className="w-full md:w-auto">
                    <div
                      className="p-10 rounded-3xl border group transition-all duration-500 hover:bg-white/5 relative overflow-hidden text-center"
                      style={{
                        borderColor: `${currentTheme.color}20`
                      }}
                    >
                      <div className="absolute inset-0 bg-gradient-to-br from-primary/5 to-transparent opacity-0 group-hover:opacity-100 transition-opacity" />
                      <span className="text-[10px] font-mono tracking-[0.4em] text-muted-foreground mb-4 uppercase block">Legal_Secure_Channel</span>
                      <a
                        href="mailto:legal@basalthq.com"
                        className="text-2xl font-black tracking-tight block transition-transform group-hover:scale-110"
                        style={{ color: currentTheme.color }}
                      >
                        legal@basalthq.com
                      </a>
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
