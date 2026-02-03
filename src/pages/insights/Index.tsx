import { useState } from "react";
import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const insights = [
  {
    slug: "autonomous-ai-agents-healthcare",
    title: "Autonomous AI Agents: What Healthcare Executives Need to Know",
    subtitle: "When AI systems act independently, governance models built for tools no longer apply.",
    description:
      "Autonomous AI agents are entering healthcare faster than governance frameworks can adapt. Organizations without clear oversight models face regulatory exposure, liability gaps, and operational risk that committees alone won't catch.",
    executiveExcerpt: {
      whyItMatters: "Autonomous AI agents are already operating in ways existing healthcare AI governance frameworks were never designed to oversee.",
      supporting: "These systems can act independently, exchange information, and access tools without appearing in traditional IT inventories\u2014creating regulatory, liability, and operational risk that committees alone cannot contain.",
    },
    date: "January 31, 2026",
    category: "Board-Level Briefing",
    accentColor: "from-navy to-navy/80",
  },
  {
    slug: "chatgpt-health-patient-readiness",
    title: "Your Patients Will Use ChatGPT Health. Is Your Organization Ready?",
    subtitle: "Patients are connecting medical records to AI. The conversations are already starting.",
    description:
      "Patients can now feed their medical records directly into AI tools and arrive at appointments with AI-generated interpretations. Health systems that aren't prepared for these conversations risk losing trust, clinical authority, and control of the patient narrative.",
    executiveExcerpt: {
      whyItMatters: "Patients are arriving with AI-generated interpretations of their own medical records\u2014and expecting clinicians to respond in real time.",
      supporting: "Health systems that have not prepared workflows, training, and documentation practices risk clinical friction, liability exposure, and erosion of patient trust.",
    },
    date: "January 21, 2026",
    category: "Board-Level Briefing",
    accentColor: "from-primary/90 to-primary/70",
  },
  {
    slug: "committee-fallacy-ai-governance",
    title: "The Committee Fallacy in AI Governance",
    subtitle: "Committees provide input. They don't provide accountability.",
    description:
      "Most health systems default to committee-based AI governance because it's familiar. But when an algorithm harms a patient, 'the committee approved it' isn't a defensible answer. The accountability gap between input and ownership is where governance fails.",
    executiveExcerpt: {
      whyItMatters: "Committee-based AI governance creates the illusion of oversight while diffusing accountability.",
      supporting: "When an algorithm harms a patient, \u201Cthe committee approved it\u201D is not a defensible answer\u2014to regulators, courts, or boards. AI governance requires named ownership, not shared cover.",
    },
    date: "January 20, 2026",
    category: "Governance Insight",
    accentColor: "from-navy/90 to-primary/80",
  },
];

/**
 * Standardized "briefing cover" thumbnail rendered as a styled card.
 * Provides visual consistency across all listings regardless of whether
 * an article has a hero image.
 */
function BriefingCover({ title, subtitle, category, accentColor }: {
  title: string;
  subtitle: string;
  category: string;
  accentColor: string;
}) {
  return (
    <div className={`relative w-full h-full bg-gradient-to-br ${accentColor} flex flex-col justify-between p-6 min-h-[13rem]`}>
      {/* Category label */}
      <span className="text-white/60 text-[10px] font-semibold tracking-widest uppercase">
        {category}
      </span>

      {/* Title and subtitle */}
      <div>
        <h3 className="text-white font-bold text-sm leading-snug mb-1.5 line-clamp-3">
          {title}
        </h3>
        <p className="text-white/70 text-xs leading-snug line-clamp-2">
          {subtitle}
        </p>
      </div>

      {/* Accent line */}
      <div className="absolute bottom-0 left-0 right-0 h-1 bg-white/20" />
    </div>
  );
}

/**
 * Email capture section for briefing notifications.
 * UI-only for now — mailing list integration TBD.
 */
function EmailCapture() {
  const [email, setEmail] = useState("");
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (e: React.FormEvent) => {
    e.preventDefault();
    if (email.trim()) {
      // TODO: Connect to mailing list provider once confirmed
      console.log("Subscribe email:", email);
      setSubmitted(true);
    }
  };

  return (
    <div className="mt-14 max-w-xl mx-auto text-center">
      <h3 className="text-navy text-lg font-semibold mb-2">Stay informed</h3>
      <p className="text-muted-foreground text-sm mb-5">
        Get notified when new briefings are published. No spam, no sales pitches.
      </p>
      {submitted ? (
        <p className="text-primary text-sm font-medium">
          Thank you. You'll be notified when new briefings are published.
        </p>
      ) : (
        <form onSubmit={handleSubmit} className="flex flex-col sm:flex-row gap-3 items-center justify-center">
          <input
            type="email"
            required
            value={email}
            onChange={(e) => setEmail(e.target.value)}
            placeholder="Your email address"
            className="w-full sm:w-72 px-4 py-2.5 rounded-lg border border-border bg-background text-sm text-foreground placeholder:text-muted-foreground/60 focus:outline-none focus:ring-2 focus:ring-primary/30 focus:border-primary transition-colors"
          />
          <Button type="submit" variant="cta" size="default">
            Subscribe
          </Button>
        </form>
      )}
    </div>
  );
}

const InsightsIndex = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-4 md:pt-16 md:pb-6 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-4">Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Practical perspectives on AI governance for healthcare leaders.
          </p>
        </div>
      </section>

      {/* Context Block */}
      <section className="pb-2 md:pb-4">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto text-center">
            <p className="text-muted-foreground leading-relaxed">
              These briefings are written for healthcare executives navigating AI adoption, governance risk, and accountability. Each document focuses on operational implications and is designed to support board, compliance, and leadership discussions.
            </p>
          </div>
        </div>
      </section>

      {/* Articles List */}
      <section className="pt-6 pb-16 md:pt-8 md:pb-20">
        <div className="container-narrow">
          <div className="space-y-10">
            {insights.map((article) => (
              <Link key={article.slug} to={`/insights/${article.slug}`} className="group block">
                <div className="bg-card rounded-xl border border-border/60 shadow-sm hover:shadow-md transition-all duration-300 overflow-hidden">
                  <div className="flex flex-col md:flex-row">
                    {/* Briefing Cover Thumbnail */}
                    <div className="md:w-72 md:min-w-[18rem] flex-shrink-0 overflow-hidden">
                      <BriefingCover
                        title={article.title}
                        subtitle={article.subtitle}
                        category={article.category}
                        accentColor={article.accentColor}
                      />
                    </div>

                    {/* Card Content */}
                    <div className="flex-1 p-6 md:p-8 flex flex-col justify-center">
                      {/* Meta row */}
                      <div className="flex flex-col gap-1 text-sm text-muted-foreground mb-3">
                        <div className="flex items-center gap-3">
                          <span className="bg-primary/10 text-primary px-3 py-1 rounded-full text-xs font-semibold tracking-wide">
                            {article.category}
                          </span>
                          <span className="text-xs">{article.date}</span>
                        </div>
                        <span className="text-xs text-muted-foreground">By Jim Younkin</span>
                      </div>

                      {/* Title */}
                      <h2 className="text-navy group-hover:text-primary transition-colors text-xl md:text-2xl font-bold mb-3 leading-snug">
                        {article.title}
                      </h2>

                      {/* Executive excerpt with "Why this matters" structure */}
                      {article.executiveExcerpt ? (
                        <div className="text-muted-foreground/80 text-base leading-relaxed">
                          <p className="line-clamp-2 md:line-clamp-none">
                            <strong className="text-foreground/90">Why this matters:</strong>{" "}
                            {article.executiveExcerpt.whyItMatters}
                          </p>
                          <p className="mt-1.5 line-clamp-1 md:line-clamp-none">
                            {article.executiveExcerpt.supporting}
                          </p>
                        </div>
                      ) : (
                        <p className="text-muted-foreground/80 text-base leading-relaxed line-clamp-3">
                          {article.description}
                        </p>
                      )}

                      {/* Read signal */}
                      <span className="inline-flex items-center text-primary text-sm font-medium mt-4 group-hover:gap-2 transition-all duration-200">
                        Read the briefing
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-4 w-4 ml-1 transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth={2}>
                          <path strokeLinecap="round" strokeLinejoin="round" d="M9 5l7 7-7 7" />
                        </svg>
                      </span>
                    </div>
                  </div>
                </div>
              </Link>
            ))}
          </div>

          {/* Email Capture */}
          <EmailCapture />

          {/* Series Authority Signal */}
          <div className="mt-10 text-center">
            <p className="text-sm text-muted-foreground/70 italic">
              Part of Mosaic Life Tech's ongoing executive briefing series on AI governance in healthcare.
            </p>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsIndex;
