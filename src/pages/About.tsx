import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const About = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-6">Built by Healthcare Infrastructure Veterans</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Mosaic Life Tech was founded by Teresa and Jim Younkin — two healthcare executives with a combined 40+ years of experience building the infrastructure that makes healthcare work.
          </p>
        </div>
      </section>

      {/* Intro */}
      <section className="section-padding-sm bg-card">
        <div className="container-narrow">
          <p className="text-lg text-center text-muted-foreground max-w-3xl mx-auto">
            We've written federal standards, built statewide health information exchanges, led ONC initiatives, and advised executives across payer, provider, and public health sectors. Now we help healthcare leaders navigate AI governance with the same rigor and restraint we brought to interoperability, data governance, and federal program management.
          </p>
        </div>
      </section>

      {/* Founder Profiles */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-16">
            {/* Teresa */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="flex-shrink-0 w-full lg:w-64">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-primary/20 to-accent/20 flex items-center justify-center">
                  <span className="text-5xl font-bold text-primary">TY</span>
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-navy mb-1">Teresa Younkin, MSHI</h2>
                <p className="text-lg text-primary font-medium mb-2">CEO & Co-Founder</p>
                <p className="text-muted-foreground mb-6">AI Governance & Healthcare Strategy</p>
                
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>20+ years in healthcare digital transformation</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>HL7 Da Vinci and NCPDP standards contributor</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Former Senior Consultant, Point-of-Care Partners</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Lead Analyst, Data Governance & Risk Management, Geisinger Health Plan</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>MIT xPRO: Designing & Building AI Products and Services</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Harvard Executive Education: Leadership Coaching Strategies</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>M.S., Health Informatics — Misericordia University</span>
                  </li>
                </ul>
              </div>
            </div>

            {/* Jim */}
            <div className="flex flex-col lg:flex-row gap-8 lg:gap-12 items-start">
              <div className="flex-shrink-0 w-full lg:w-64">
                <div className="w-48 h-48 mx-auto lg:mx-0 rounded-2xl bg-gradient-to-br from-navy/20 to-primary/20 flex items-center justify-center">
                  <span className="text-5xl font-bold text-navy">JY</span>
                </div>
              </div>
              <div className="flex-grow">
                <h2 className="text-2xl font-semibold text-navy mb-1">Jim Younkin, MBA</h2>
                <p className="text-lg text-primary font-medium mb-2">CTO & Co-Founder</p>
                <p className="text-muted-foreground mb-6">Federal Health IT & AI Systems Architect</p>
                
                <ul className="space-y-2 text-foreground">
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>30+ years in health IT and federal programs</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Founder & Architect, Keystone Health Information Exchange (KeyHIE) — serving 4M+ patients</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Program Manager, ONC/ASTP AI Implementation Project</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Administered $16.1M Beacon Community federal grant</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Board Member, Pennsylvania eHealth Partnership Authority</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>Harvard Medical School Executive Education: AI in Health Care</span>
                  </li>
                  <li className="flex items-start gap-2">
                    <span className="text-primary mt-1">•</span>
                    <span>MBA — Temple University (Fox School of Business)</span>
                  </li>
                </ul>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Philosophy */}
      <section className="section-padding bg-secondary/30">
        <div className="container-narrow">
          <h2 className="text-center mb-12">Our Philosophy</h2>
          
          <blockquote className="text-xl md:text-2xl text-center text-navy font-medium max-w-3xl mx-auto leading-relaxed">
            "We're not here to sell you AI or scare you about AI. We're here to help you govern AI decisions with the same discipline you bring to clinical quality and financial risk.
            <br /><br />
            <span className="text-primary">AI governance is a leadership problem, not a technology problem.</span>
            <br />
            We help executives see it that way."
          </blockquote>
          <p className="text-xl text-primary font-semibold text-center mt-8">
            That's why we focus on one thing: AI governance you can defend.
          </p>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">Ready to Work Together?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            Let's discuss how we can help you build AI governance you can defend.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default About;
