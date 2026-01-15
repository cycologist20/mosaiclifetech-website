import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Eye, Shield, FileText, X, ArrowRight } from "lucide-react";

const principles = [
  {
    icon: <Eye className="h-10 w-10" />,
    title: "Visibility Before Action",
    description: "Executives can't govern what they can't see. We start by surfacing where AI already influences decisions — often in places leadership doesn't realize.",
  },
  {
    icon: <Shield className="h-10 w-10" />,
    title: "Accountability Without Paralysis",
    description: "Governance shouldn't freeze progress. We help organizations define clear decision rights so they can move forward with confidence, not fear.",
  },
  {
    icon: <FileText className="h-10 w-10" />,
    title: "Evidence Over Assertion",
    description: "When boards or regulators ask hard questions, assertions aren't enough. We help you build the evidence trail that demonstrates reasonable oversight.",
  },
];

const whatWeDoNot = [
  "We don't sell AI tools or platforms.",
  "We don't implement AI systems.",
  "We don't certify compliance.",
  "We don't substitute for legal counsel.",
  "We don't own your governance — you do.",
];

const OurApproach = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <p className="text-sm uppercase tracking-widest text-primary font-medium mb-4">
            Decision Confidence for Healthcare AI
          </p>
          <h1 className="text-navy mb-6">Governance as Decision Integrity</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            We don't treat governance as a compliance exercise or a technical project. We treat it as a leadership discipline — the practice of making AI-influenced decisions visible, accountable, and defensible.
          </p>
        </div>
      </section>

      {/* Core Principles */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center mb-16">Core Principles</h2>
          
          <div className="grid md:grid-cols-3 gap-8">
            {principles.map((principle, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card border border-border/50 text-center"
              >
                <div className="inline-flex items-center justify-center w-20 h-20 rounded-full bg-primary/10 text-primary mb-6">
                  {principle.icon}
                </div>
                <h3 className="text-xl font-semibold text-navy mb-4">{principle.title}</h3>
                <p className="text-muted-foreground">{principle.description}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Why Now */}
      <section className="section-padding bg-gradient-to-br from-teal-light to-background">
        <div className="container-narrow">
          <h2 className="text-center mb-12">Why Now</h2>
          
          <div className="bg-card rounded-xl p-8 md:p-12 shadow-card border border-border/50 max-w-3xl mx-auto">
            <p className="text-lg text-foreground mb-6">
              The Joint Commission and Coalition for Health AI (CHAI) released guidance in September 2025 that is reshaping expectations for healthcare AI governance.
            </p>
            <p className="text-lg text-foreground mb-6">
              This guidance is not binding — but it's defining what boards, surveyors, and litigators will view as "reasonable practice." Organizations without a clear governance story will struggle to explain themselves.
            </p>
            <p className="text-lg font-medium text-navy">
              The window to build governance clarity before it becomes commoditized compliance work is narrow. We help you get ahead of that curve.
            </p>
          </div>
        </div>
      </section>

      {/* What We Don't Do */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center mb-12">What We Don't Do</h2>
          
          <div className="max-w-2xl mx-auto space-y-4 mb-12">
            {whatWeDoNot.map((item, index) => (
              <div
                key={index}
                className="flex items-center gap-4 bg-background rounded-lg p-4 border border-border/50"
              >
                <div className="flex-shrink-0 w-8 h-8 rounded-full bg-muted flex items-center justify-center">
                  <X className="h-4 w-4 text-muted-foreground" />
                </div>
                <span className="text-foreground">{item}</span>
              </div>
            ))}
          </div>
          
          <p className="text-lg text-center text-muted-foreground max-w-2xl mx-auto">
            We provide the clarity, frameworks, and facilitation to help you govern well. The accountability stays with leadership. That's how it should be.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">See What We Deliver</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            Explore the structured engagement that builds board-visible governance.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/what-we-do" className="flex items-center gap-2">
              View Our Engagement <ArrowRight className="h-5 w-5" />
            </Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default OurApproach;
