import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Shield, Scale, Target, Eye, UserCheck, FileCheck, ArrowRight, Users, Gavel, ClipboardCheck } from "lucide-react";

const Index = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="relative bg-gradient-to-b from-secondary/50 to-background section-padding">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-6 animate-fade-in">
            AI Governance for Healthcare Leaders Who Can't Afford to Get It Wrong
          </h1>
          <p className="text-xl md:text-2xl text-foreground/80 mb-4 max-w-3xl mx-auto animate-fade-in" style={{ animationDelay: "0.1s" }}>
            We help healthcare executives build board-visible AI governance — before emerging expectations become required standards.
          </p>
          <p className="text-base text-muted-foreground mb-8 max-w-2xl mx-auto animate-fade-in" style={{ animationDelay: "0.2s" }}>
            Independent advisory for C-suites and boards navigating the Joint Commission and CHAI guidance era.
          </p>
          <div className="flex flex-col sm:flex-row gap-4 justify-center items-center animate-fade-in" style={{ animationDelay: "0.3s" }}>
            <Button variant="hero" asChild>
              <Link to="/contact">Schedule a Conversation</Link>
            </Button>
            <Button variant="textLink" asChild>
              <a href="#" className="flex items-center gap-2">
                Download: &quot;5 Questions Your Board Will Ask About AI&quot;
                <ArrowRight className="h-4 w-4" />
              </a>
            </Button>
          </div>
        </div>
      </section>

      {/* The Problem Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center mb-6">The Accountability Gap</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-12">
            Healthcare executives are increasingly accountable for AI-influenced decisions. But most organizations lack the clarity, visibility, and governance posture to defend that accountability when boards, regulators, or litigators ask hard questions.
          </p>
          <p className="text-base text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            The Joint Commission and Coalition for Health AI (CHAI) have released guidance that is reshaping expectations. This guidance isn't binding yet — but it's defining what "reasonable oversight" looks like. Organizations without a clear governance story will struggle to explain themselves.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <ProblemCard
              icon={<Eye className="h-8 w-8" />}
              title="Board Visibility"
              description="'Who owns AI decisions?' is now a board-level question. Most executives can't answer it clearly."
            />
            <ProblemCard
              icon={<UserCheck className="h-8 w-8" />}
              title="Decision Accountability"
              description="When AI influences clinical or operational decisions, someone must be accountable. Is your organization ready to name who?"
            />
            <ProblemCard
              icon={<FileCheck className="h-8 w-8" />}
              title="Defensible Posture"
              description="If a decision goes wrong, can you demonstrate that governance was reasonable? The answer matters before the question is asked."
            />
          </div>
        </div>
      </section>

      {/* Differentiation Section */}
      <section className="section-padding">
        <div className="container-narrow">
          <h2 className="text-center mb-6">Not Vendors. Not Litigators. Governance Stewards.</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Most AI advisory falls into two camps: those who sell you tools, and those who defend you in court. We do neither. We're independent advisors who help you govern AI decisions with clarity, confidence, and evidence — so your board can defend your choices and your clinicians can trust the technology.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8">
            <DifferentiatorCard
              icon={<Shield className="h-10 w-10" />}
              title="Radically Independent"
              description="We don't sell AI tools, platforms, or implementation services. Our only interest is your governance clarity."
            />
            <DifferentiatorCard
              icon={<Scale className="h-10 w-10" />}
              title="Executive-Level Focus"
              description="We speak the language of boards and C-suites — fiduciary duty, risk posture, defensibility — not MLOps and model drift."
            />
            <DifferentiatorCard
              icon={<Target className="h-10 w-10" />}
              title="Healthcare-Only Expertise"
              description="40+ years of combined experience in health IT, federal programs, and clinical systems. We know what 'reasonable oversight' means in healthcare."
            />
          </div>
        </div>
      </section>

      {/* Who We Serve Section */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <h2 className="text-center mb-6">Built for the Responsible AI Executive</h2>
          <p className="text-lg text-muted-foreground text-center max-w-3xl mx-auto mb-16">
            Our clients are healthcare leaders who take AI seriously — not as hype, but as risk and opportunity that requires deliberate governance.
          </p>
          
          <div className="grid md:grid-cols-3 gap-8 mb-12">
            <AudienceCard
              icon={<Users className="h-8 w-8" />}
              title="C-Suite Leaders"
              description="CEOs, COOs, CIOs, and CMIOs accountable for AI-influenced decisions"
            />
            <AudienceCard
              icon={<Gavel className="h-8 w-8" />}
              title="Board Members"
              description="Audit, Risk, and Quality committee members asking hard questions about AI oversight"
            />
            <AudienceCard
              icon={<ClipboardCheck className="h-8 w-8" />}
              title="Quality & Risk Triads"
              description="Compliance, Legal, and Quality leaders who need governance frameworks that work"
            />
          </div>
          
          <div className="text-center">
            <Button variant="cta" asChild>
              <Link to="/who-we-help" className="flex items-center gap-2">
                See Who We Help <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* Founders Section */}
      <section className="section-padding bg-card">
        <div className="container-narrow">
          <h2 className="text-center mb-16">40+ Years of Healthcare Infrastructure Experience</h2>
          
          <div className="grid md:grid-cols-2 gap-12">
            <FounderCard
              name="Teresa Younkin, MSHI"
              title="CEO & Co-Founder"
              tagline="AI Governance & Healthcare Strategy"
              bio="20+ years translating complex AI and interoperability concepts into executive-ready strategies. HL7 Da Vinci contributor. Leadership in health data governance, federal programs, and organizational change."
            />
            <FounderCard
              name="Jim Younkin, MBA"
              title="CTO & Co-Founder"
              tagline="Federal Health IT & AI Systems Architect"
              bio="30+ years building healthcare infrastructure — from pioneering one of the nation's largest HIEs to leading AI implementation projects for ONC/ASTP. Deep expertise in what 'reasonable oversight' looks like at scale."
            />
          </div>
          
          <div className="text-center mt-12">
            <Button variant="textLink" asChild>
              <Link to="/about" className="flex items-center gap-2">
                Meet the Team <ArrowRight className="h-4 w-4" />
              </Link>
            </Button>
          </div>
        </div>
      </section>

      {/* CTA Section */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">Ready to Build Governance That Boards Can Defend?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            Start with a conversation. No pitch, no pressure — just clarity on what your organization needs.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Schedule a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

function ProblemCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-background rounded-lg p-8 shadow-card border border-border/50">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function DifferentiatorCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="text-center p-6">
      <div className="inline-flex items-center justify-center w-16 h-16 rounded-full bg-primary/10 text-primary mb-6">
        {icon}
      </div>
      <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function AudienceCard({ icon, title, description }: { icon: React.ReactNode; title: string; description: string }) {
  return (
    <div className="bg-card rounded-lg p-8 shadow-soft border border-border/50 hover:shadow-card transition-shadow">
      <div className="text-primary mb-4">{icon}</div>
      <h3 className="text-lg font-semibold mb-3 text-navy">{title}</h3>
      <p className="text-muted-foreground">{description}</p>
    </div>
  );
}

function FounderCard({ name, title, tagline, bio }: { name: string; title: string; tagline: string; bio: string }) {
  return (
    <div className="flex flex-col items-center text-center md:flex-row md:text-left md:items-start gap-6">
      <div className="w-32 h-32 rounded-full bg-secondary flex items-center justify-center flex-shrink-0">
        <span className="text-3xl font-semibold text-primary">
          {name.split(' ').map(n => n[0]).join('')}
        </span>
      </div>
      <div>
        <h3 className="text-xl font-semibold text-navy">{name}</h3>
        <p className="text-primary font-medium mb-1">{title}</p>
        <p className="text-sm text-muted-foreground mb-3">{tagline}</p>
        <p className="text-muted-foreground">{bio}</p>
      </div>
    </div>
  );
}

export default Index;
