import type { Metadata } from "next";
import { CTASection } from "@/components/sections/cta-section";

export const metadata: Metadata = {
  title: "Contact – BasaltHQ",
  description: "Get in touch with BasaltHQ. Book a demo, contact sales, or schedule an info session.",
  alternates: { canonical: "https://basalthq.com/contact" },
  openGraph: {
    title: "Contact – BasaltHQ",
    description: "Book a demo or contact our team.",
    url: "https://basalthq.com/contact",
    type: "website",
  },
  twitter: {
    card: "summary_large_image",
    title: "Contact – BasaltHQ",
    description: "Book a demo or contact our team.",
  },
};

export default function ContactPage() {
  return (
    <div className="min-h-screen pt-12">
      <CTASection />
    </div>
  );
}