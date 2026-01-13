import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { CheckCircle2 } from "lucide-react";

const phases = [
  {
    number: 1,
    title: "Executive Framing & Scope Lock",
    description: "Align leadership on what decisions matter, what AI means in your context, and what success looks like.",
    duration: "Weeks 1-2",
  },
  {
    number: 2,
    title: "AI Decision-Impact Inventory",
    description: "Surface where AI already influences decisions — especially where executives lack visibility.",
    duration: "Weeks 2-4",
  },
  {
    number: 3,
    title: "Governance & Risk Posture Assessment",
    description: "Assess whether current governance is reasonable and defensible relative to emerging expectations.",
    duration: "Weeks 4-6",
  },
  {
    number: 4,
    title: "Board-Visible Roadmap & Evidence Strategy",
    description: "Translate insight into clear executive decisions and a defensible path forward.",
    duration: "Weeks 6-10",
  },
];

const deliverables = [
  "Engagement Charter (executive-approved)",
  "Decision Scope Map",
  "AI Decision-Impact Inventory",
  "Preliminary Exposure Flags",
  "Governance Risk Posture Assessment",
  "Board-Ready Exposure Narrative",
  "Executive Governance Roadmap (90/180 day)",
  "Evidence Strategy",
  "Board Briefing Deck or Memo",
];

const WhatWeDo = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-6">Board-Visible AI Governance Readiness</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A 6-10 week executive engagement that helps healthcare organizations understand, evidence, and operationalize alignment with emerging Joint Commission and CHAI guidance.
          </p>
        </div>
      </section>

      {/* Intro Text */}
      <section className="section-padding-sm bg-card">
        <div className="container-narrow">
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            This is not a compliance checklist. It's a structured process to build governance clarity that boards can see, executives can defend, and clinicians can trust.
          </p>
        </div>
      </section>

      {/* The Engagement Timeline */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center mb-16">The Engagement</h2>
          
          <div className="relative">
            {/* Timeline line */}
            <div className="hidden md:block absolute left-1/2 top-0 bottom-0 w-0.5 bg-border -translate-x-1/2" />
            
            <div className="space-y-12">
              {phases.map((phase, index) => (
                <div
                  key={phase.number}
                  className={`relative flex flex-col md:flex-row items-center gap-8 ${
                    index % 2 === 0 ? "md:flex-row" : "md:flex-row-reverse"
                  }`}
                >
                  {/* Content */}
                  <div className={`flex-1 ${index % 2 === 0 ? "md:text-right" : "md:text-left"}`}>
                    <div className="bg-card rounded-lg p-8 shadow-card border border-border/50">
                      <div className="text-sm font-medium text-primary mb-2">{phase.duration}</div>
                      <h3 className="text-xl font-semibold text-navy mb-3">{phase.title}</h3>
                      <p className="text-muted-foreground">{phase.description}</p>
                    </div>
                  </div>
                  
                  {/* Phase number bubble */}
                  <div className="relative z-10 flex items-center justify-center w-12 h-12 rounded-full bg-primary text-primary-foreground font-bold text-lg shadow-lg">
                    {phase.number}
                  </div>
                  
                  {/* Spacer for alternating layout */}
                  <div className="hidden md:block flex-1" />
                </div>
              ))}
            </div>
          </div>
        </div>
      </section>

      {/* What You Get */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <h2 className="text-center mb-12">What You Get</h2>
          
          <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-4 max-w-4xl mx-auto">
            {deliverables.map((deliverable, index) => (
              <div
                key={index}
                className="flex items-start gap-3 bg-card rounded-lg p-4 shadow-soft"
              >
                <CheckCircle2 className="h-5 w-5 text-primary flex-shrink-0 mt-0.5" />
                <span className="text-foreground">{deliverable}</span>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* What This Is Not */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center mb-8">What This Is Not</h2>
          
          <div className="bg-background rounded-lg p-8 md:p-12 border border-border/50 max-w-3xl mx-auto">
            <p className="text-lg text-muted-foreground mb-6">
              We don't sell compliance. We don't certify readiness. We don't substitute for legal counsel or replace your executive judgment.
            </p>
            <p className="text-lg text-muted-foreground mb-6">
              We help you see clearly, decide deliberately, and govern visibly — with frameworks aligned to emerging Joint Commission and CHAI guidance.
            </p>
            <p className="text-lg font-medium text-navy">
              Executive accountability remains with leadership. That's the point.
            </p>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">Ready to Start?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            Begin with a conversation about your organization's unique governance challenges.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Schedule a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhatWeDo;
