import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Users, Gavel, ClipboardCheck, Building2, Heart, GraduationCap, Laptop } from "lucide-react";

const profiles = [
  {
    icon: <Users className="h-10 w-10" />,
    title: "C-Suite Leaders",
    roles: "CEOs, COOs, CIOs, CMIOs, CNIOs",
    challenge: "You're expected to lead AI adoption, but no one owns the risk. Speed is rewarded; caution is punished. If this goes wrong, your credibility takes the hit.",
    needs: ["Decision confidence", "Risk clarity", "Executive fluency"],
  },
  {
    icon: <Gavel className="h-10 w-10" />,
    title: "Board Members",
    roles: "Audit, Risk, Quality Committee Members",
    challenge: "You're being asked questions about AI that you don't have frameworks to answer. You need visibility without requiring technical mastery.",
    needs: ["Board-ready reporting", "Oversight frameworks", "Fiduciary clarity"],
  },
  {
    icon: <ClipboardCheck className="h-10 w-10" />,
    title: "Quality, Risk & Compliance Leaders",
    roles: "Chief Quality Officers, Chief Compliance Officers, Risk Management",
    challenge: "You see the governance gaps, but you don't have the authority or resources to close them alone. You need executive sponsorship and a structured approach.",
    needs: ["Cross-functional frameworks", "Escalation pathways", "Defensible documentation"],
  },
];

const sectors = [
  { icon: <Building2 className="h-6 w-6" />, name: "Health Systems & Hospitals" },
  { icon: <Heart className="h-6 w-6" />, name: "Health Plans & Payers" },
  { icon: <GraduationCap className="h-6 w-6" />, name: "Academic Medical Centers" },
  { icon: <Laptop className="h-6 w-6" />, name: "Digital Health Organizations" },
];

const WhoWeHelp = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-6">The Responsible AI Executive</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Our clients share a common profile: they're accountable for AI-influenced decisions, they take that accountability seriously, and they want clarity they can defend — not hype they have to sell.
          </p>
        </div>
      </section>

      {/* ICP Profiles */}
      <section className="section-padding">
        <div className="container-wide">
          <div className="grid lg:grid-cols-3 gap-8">
            {profiles.map((profile, index) => (
              <div
                key={index}
                className="bg-card rounded-xl p-8 shadow-card border border-border/50 flex flex-col"
              >
                <div className="text-primary mb-6">{profile.icon}</div>
                <h3 className="text-2xl font-semibold text-navy mb-2">{profile.title}</h3>
                <p className="text-sm text-primary font-medium mb-6">{profile.roles}</p>
                
                <blockquote className="text-muted-foreground italic mb-6 flex-grow">
                  "{profile.challenge}"
                </blockquote>
                
                <div>
                  <p className="text-sm font-medium text-navy mb-3">What they need:</p>
                  <div className="flex flex-wrap gap-2">
                    {profile.needs.map((need, needIndex) => (
                      <span
                        key={needIndex}
                        className="inline-flex items-center px-3 py-1 rounded-full text-sm bg-primary/10 text-primary"
                      >
                        {need}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Sectors We Serve */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <h2 className="text-center mb-12">Sectors We Serve</h2>
          
          <div className="grid sm:grid-cols-2 lg:grid-cols-4 gap-6">
            {sectors.map((sector, index) => (
              <div
                key={index}
                className="bg-card rounded-lg p-6 text-center shadow-soft hover:shadow-card transition-shadow"
              >
                <div className="inline-flex items-center justify-center w-12 h-12 rounded-full bg-primary/10 text-primary mb-4">
                  {sector.icon}
                </div>
                <p className="font-medium text-navy">{sector.name}</p>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">Is This You?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            If you're accountable for AI decisions and want governance clarity you can defend, let's talk.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Let's Talk</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default WhoWeHelp;
