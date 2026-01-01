"use client";

import Link from "next/link";
import Image from "next/image";
import { Twitter, Linkedin, Github, Facebook, Youtube } from "lucide-react";

const productLinks = [
  { label: 'BasaltERP', href: 'https://erp.basalthq.com' },
  { label: 'BasaltCRM', href: 'https://crm.basalthq.com' },
  { label: 'BasaltCMS', href: 'https://cms.basalthq.com' },
  { label: 'BasaltEcho', href: 'https://echo.basalthq.com' },
  { label: 'BasaltSurge', href: 'https://surge.basalthq.com' },
];

const companyLinks = [
  { label: 'About Us', href: '/about' },
  { label: 'Blog', href: '/blog' },
  { label: 'Careers', href: '/careers' },
  { label: 'Press', href: '/press' },
  { label: 'Contact', href: '/contact' },
];

const supportLinks = [
  { label: 'Help Center', href: '/help' },
  { label: 'Documentation', href: '/docs' },
  { label: 'System Status', href: '/status' },
  { label: 'Changelog', href: '/changelog' },
];

const socialLinks = [
  { label: 'Twitter', href: 'https://x.com/BasaltHQ', icon: Twitter },
  { label: 'LinkedIn', href: 'https://www.linkedin.com/company/basalthq/', icon: Linkedin },
  { label: 'Facebook', href: 'https://www.facebook.com/profile.php?id=100083624105531', icon: Facebook },
  { label: 'YouTube', href: 'https://www.youtube.com/@theutilitycompany835', icon: Youtube },
];

import { useBrandTheme } from "@/components/providers/brand-theme-provider";

// ... imports ...

export function Footer() {
  const currentYear = new Date().getFullYear();
  const { currentTheme } = useBrandTheme();

  return (
    <footer className="relative py-16 px-6 border-t border-border/20 mt-24 bg-background/50 backdrop-blur-sm">
      <div className="max-w-7xl mx-auto">
        <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-12 mb-16">
          {/* Brand Column */}
          <div>
            <div className="flex items-center gap-3 mb-6">
              <div className="relative w-12 h-12">
                <Image
                  src={currentTheme.icon}
                  alt={currentTheme.name}
                  fill
                  className="object-contain"
                />
                <div
                  className="shield-gleam-container"
                  style={{
                    maskImage: `url(${currentTheme.icon})`,
                    WebkitMaskImage: `url(${currentTheme.icon})`
                  }}
                />
              </div>
              <div className="flex flex-col">
                <span className="text-foreground text-xl tracking-widest font-vox">
                  <span className="font-light">BASALT</span><span className="font-bold">HQ</span>
                </span>
                <p className="text-[10px] font-mono mt-1 whitespace-nowrap transition-colors duration-500" style={{ color: currentTheme.color }}>NEUROMIMETIC BUSINESS ARCHITECTURE</p>
              </div>
            </div>
            <p className="text-muted-foreground text-sm leading-relaxed mb-6">
              <span className="text-primary font-semibold">Your Business. Supercharged.</span> Empowering Main Street businesses with Fortune 500 technology.
            </p>
            <a
              href="mailto:info@theutilitycompany.co"
              className="text-primary text-sm hover:underline"
            >
              info@theutilitycompany.co
            </a>
          </div>

          {/* Products */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-muted-foreground mb-4">PRODUCT SUITE</h4>
            <ul className="space-y-2">
              {productLinks.map((link) => (
                <li key={link.label}>
                  <a
                    href={link.href}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors flex items-center gap-1"
                  >
                    {link.label}
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                      <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M10 6H6a2 0 00-2 2v10a2 0 002 2h10a2 0 002-2v-4M14 4h6m0 0v6m0-6L10 14" />
                    </svg>
                  </a>
                </li>
              ))}
            </ul>
          </div>

          {/* Company */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-muted-foreground mb-4">COMPANY</h4>
            <ul className="space-y-2">
              {companyLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>
          </div>

          {/* Connect & Support */}
          <div>
            <h4 className="text-xs font-mono tracking-wider text-muted-foreground mb-4">CONNECT & SUPPORT</h4>
            <ul className="space-y-2 mb-6">
              {supportLinks.map((link) => (
                <li key={link.label}>
                  <Link
                    href={link.href}
                    className="text-muted-foreground text-sm hover:text-foreground transition-colors"
                  >
                    {link.label}
                  </Link>
                </li>
              ))}
            </ul>

            <div className="flex gap-4">
              {socialLinks.map((link) => (
                <a
                  key={link.label}
                  href={link.href}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="text-muted-foreground hover:text-primary transition-colors"
                  aria-label={link.label}
                >
                  <link.icon className="h-5 w-5" />
                </a>
              ))}
            </div>

            <div className="mt-8">
              <h4 className="text-xs font-mono tracking-wider text-muted-foreground mb-2">STATUS</h4>
              <div className="flex items-center gap-2">
                <span className="relative flex h-2 w-2">
                  <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-emerald-400 opacity-75"></span>
                  <span className="relative inline-flex rounded-full h-2 w-2 bg-emerald-500"></span>
                </span>
                <span className="text-xs text-emerald-500 font-mono">ALL SYSTEMS OPERATIONAL</span>
              </div>
            </div>
          </div>
        </div>

        {/* Bottom Bar */}
        <div className="pt-8 border-t border-border/20 flex flex-col md:flex-row items-center justify-between gap-4">
          <p className="text-muted-foreground text-xs">
            © {currentYear} BasaltHQ. All rights reserved.
          </p>
          <div className="flex items-center gap-6">
            <Link href="/privacy" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              Privacy Policy
            </Link>
            <Link href="/terms" className="text-muted-foreground text-xs hover:text-foreground transition-colors">
              Terms of Service
            </Link>
          </div>
        </div>
      </div>
    </footer>
  );
}
