import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

const AutonomousAIAgents = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <p className="text-primary font-medium mb-4">EXECUTIVE BRIEFING • JANUARY 31, 2026</p>
          <h1 className="text-navy text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Autonomous AI Agents: What Healthcare Executives Need to Know</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            A practical guide to understanding autonomous AI agents, why they matter for healthcare governance, and what to do about them.
          </p>
        </div>
      </section>

      {/* Context Box */}
      <section className="py-6 md:py-8">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <div className="bg-secondary/50 border border-border rounded-lg p-6 md:p-8">
              <div className="space-y-3">
                <p><span className="font-semibold">PURPOSE:</span> Help healthcare executives understand autonomous AI agents, why they matter for governance, and what to do about them.</p>
                <p><span className="font-semibold">AUDIENCE:</span> CIOs, CMIOs, CTOs, Quality/Risk leaders, and board members responsible for AI oversight.</p>
                <p><span className="font-semibold">KEY TAKEAWAY:</span> Autonomous AI agents are a new category that existing healthcare AI governance frameworks don't fully address. Extending your governance now is prudent, not premature.</p>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">

            <h2 className="text-navy text-2xl md:text-3xl font-bold mb-6">What Happened This Week</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              On January 28, 2026, a developer launched Moltbook, a social network where only AI agents can post. Humans can observe but not participate. Within 72 hours, over 157,000 autonomous AI agents had joined. They created more than 2,300 communities, posted thousands of messages, and began organizing themselves without human direction.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              This isn't science fiction. It happened on infrastructure that's commercially available today. The agents used the same underlying technology that powers tools many healthcare organizations are already evaluating or deploying.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The agents demonstrated behaviors that caught even experienced technologists off guard. They formed their own communities around shared interests. They shared code fixes that other agents automatically integrated. They discussed creating private communication channels. One agent was appointed as a moderator and began autonomously welcoming new participants and removing spam, without any human setting up those workflows.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Separately, security researchers found that 22% of employees at surveyed organizations had installed autonomous AI agents on their work devices without IT approval. And over 1,800 agent installations were discovered leaking credentials and API keys to the public internet.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Why This Matters for Healthcare</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The Joint Commission and CHAI guidance on responsible AI use assumes organizations know what AI tools are operating in their environment. It assumes humans remain in control of AI-influenced decisions. It assumes AI tools behave consistently within the parameters they were validated against.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Moltbook demonstrates that these assumptions may not hold when AI agents can act autonomously. The question isn't whether your organization is running Moltbook. It's whether your current governance framework can detect and manage AI agents that operate with increasing independence.
            </p>

            <h3 className="text-navy text-xl md:text-2xl font-semibold mt-10 mb-4">The Governance Gap</h3>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Current healthcare AI governance focuses on tools that clinicians and staff actively use: clinical decision support, ambient documentation, diagnostic assistance. These are important, and the Joint Commission/CHAI guidance addresses them well.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Autonomous agents are different. They can be installed by individual employees. They can run persistently in the background. They can access files, send emails, make API calls, and interact with external systems. They can participate in networks where they exchange information with other agents. And they can do all of this without appearing in traditional software inventories or triggering standard IT controls.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The OpenClaw framework (the most popular tool for building these agents) documents capabilities including: checking into flights, joining video calls, negotiating deals, accessing email, reading and writing files, and executing system commands. On a workstation with access to clinical systems or patient data, those capabilities create governance implications that most healthcare organizations haven't yet addressed.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">What Guidance Exists</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Two significant frameworks emerged in December 2025 and January 2026 specifically addressing autonomous AI agents. Neither is healthcare-specific, but both inform what reasonable governance looks like.
            </p>

            <h3 className="text-navy text-xl md:text-2xl font-semibold mt-10 mb-4">Singapore Model AI Governance Framework for Agentic AI</h3>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Released January 22, 2026, this is the first national governance framework specifically designed for autonomous AI agents. It organizes governance around four dimensions:
            </p>

            <div className="my-8 overflow-hidden rounded-lg border border-border shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-semibold text-navy border-r border-border">Dimension</TableHead>
                    <TableHead className="font-semibold text-navy">Key Elements</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Assess and bound risks</TableCell>
                    <TableCell>Select appropriate use cases; limit agent autonomy, tool access, and data access; define permission boundaries</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Make humans accountable</TableCell>
                    <TableCell>Define checkpoints requiring human approval; allocate clear responsibilities; establish override mechanisms</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Technical controls</TableCell>
                    <TableCell>Baseline testing; whitelist permitted services; continuous monitoring; identity management for agents</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">End-user responsibility</TableCell>
                    <TableCell>Transparency about agent capabilities; training on appropriate use; clear documentation of what agents can and cannot do</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The Singapore framework emphasizes that agents should have unique identities, permissions should not exceed those of the human user, and human approval checkpoints should be required before sensitive or irreversible actions.
            </p>

            <h3 className="text-navy text-xl md:text-2xl font-semibold mt-10 mb-4">OWASP Top 10 for Agentic Applications</h3>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Released December 2025, this security-focused framework identifies the ten highest-risk vulnerabilities in autonomous AI systems. Developed by over 100 security researchers and practitioners, it provides specific threat descriptions and mitigation guidance.
            </p>

            <div className="my-8 overflow-hidden rounded-lg border border-border shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-semibold text-navy border-r border-border w-20">ID</TableHead>
                    <TableHead className="font-semibold text-navy border-r border-border w-48">Risk</TableHead>
                    <TableHead className="font-semibold text-navy">Description</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-border">
                    <TableCell className="border-r border-border font-mono text-sm">ASI01</TableCell>
                    <TableCell className="font-medium text-navy border-r border-border">Agent Goal Hijack</TableCell>
                    <TableCell>Attackers manipulate agent objectives through malicious inputs</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="border-r border-border font-mono text-sm">ASI02</TableCell>
                    <TableCell className="font-medium text-navy border-r border-border">Tool Misuse</TableCell>
                    <TableCell>Agents misuse legitimate tools due to manipulation or misalignment</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="border-r border-border font-mono text-sm">ASI03</TableCell>
                    <TableCell className="font-medium text-navy border-r border-border">Identity & Privilege Abuse</TableCell>
                    <TableCell>Exploitation of inherited credentials or delegated permissions</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="border-r border-border font-mono text-sm">ASI04</TableCell>
                    <TableCell className="font-medium text-navy border-r border-border">Supply Chain Vulnerabilities</TableCell>
                    <TableCell>Compromised tools, models, or components affecting agent behavior</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="border-r border-border font-mono text-sm">ASI05</TableCell>
                    <TableCell className="font-medium text-navy border-r border-border">Unexpected Code Execution</TableCell>
                    <TableCell>Agents generate or execute attacker-controlled code</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Three of the top four risks (ASI02, ASI03, ASI04) relate to identity, permissions, and trust boundaries. This confirms that managing what agents can access and what actions they can take is the core governance challenge.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Healthcare-Specific Considerations</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Neither framework specifically addresses healthcare. The Joint Commission/CHAI guidance on responsible AI use doesn't specifically address autonomous agents. This creates a gap that healthcare organizations will need to fill with internal policy until more specific guidance emerges.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The playbooks promised by Joint Commission and CHAI for later in 2026 may address this. For now, healthcare organizations should consider how the general principles translate to their specific environment.
            </p>

            <h3 className="text-navy text-xl md:text-2xl font-semibold mt-10 mb-4">Key Questions for Healthcare Governance</h3>

            <div className="my-8 overflow-hidden rounded-lg border border-border shadow-sm">
              <Table>
                <TableHeader>
                  <TableRow className="bg-secondary/50">
                    <TableHead className="font-semibold text-navy border-r border-border w-44">Category</TableHead>
                    <TableHead className="font-semibold text-navy">Question</TableHead>
                  </TableRow>
                </TableHeader>
                <TableBody>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Inventory</TableCell>
                    <TableCell>Do we have autonomous AI agents operating in our environment? Would we know if we did?</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Shadow deployment</TableCell>
                    <TableCell>Could employees install agents on workstations with access to clinical systems or patient data without IT approval?</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">External communication</TableCell>
                    <TableCell>Could agents on our infrastructure communicate with external networks or other agents? How would we detect this?</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Validation scope</TableCell>
                    <TableCell>Does our AI validation process address tools that can learn from external sources or change behavior over time?</TableCell>
                  </TableRow>
                  <TableRow className="border-b border-border">
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Policy gaps</TableCell>
                    <TableCell>Does our acceptable use policy address autonomous AI agents, or only AI tools that users actively operate?</TableCell>
                  </TableRow>
                  <TableRow>
                    <TableCell className="font-medium text-navy border-r border-border bg-secondary/20">Accountability</TableCell>
                    <TableCell>If an agent takes an action that affects patient care, who is accountable? Is that clear in our governance structure?</TableCell>
                  </TableRow>
                </TableBody>
              </Table>
            </div>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Practical Steps</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-8">
              This isn't a call to panic. It's a call to extend your existing AI governance framework to address a category of AI that's emerging faster than guidance can keep pace. Most healthcare organizations won't face immediate harm from autonomous agents. But the 22% shadow deployment statistic suggests the risk isn't theoretical.
            </p>

            {/* Near-term card */}
            <div className="bg-primary/5 border border-primary/20 rounded-xl p-6 md:p-8 mb-6">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-primary text-white text-sm font-semibold px-3 py-1 rounded-full">Near-term</span>
                <span className="text-muted-foreground font-medium">Next 30-60 days</span>
              </div>

              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-navy">Inventory:</strong> Does your IT asset management process capture AI agent software? Most don't. Consider whether your software inventory, network monitoring, or endpoint management tools can detect common agent frameworks (OpenClaw, AutoGPT, similar tools).
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-navy">Policy:</strong> Does your acceptable use policy address autonomous AI agents? Consider whether employees are permitted to install agents, what approval is required, and what data or systems agents can access.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-navy">Awareness:</strong> Brief your leadership team on what autonomous agents are, how they differ from the AI tools you're already governing, and why this matters for healthcare specifically.
                </p>
              </div>
            </div>

            {/* Medium-term card */}
            <div className="bg-secondary/50 border border-border rounded-xl p-6 md:p-8 mb-8">
              <div className="flex items-center gap-3 mb-4">
                <span className="bg-navy text-white text-sm font-semibold px-3 py-1 rounded-full">Medium-term</span>
                <span className="text-muted-foreground font-medium">Next 90-180 days</span>
              </div>

              <div className="space-y-4">
                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-navy">Extend your governance framework:</strong> Review your AI governance structure against the Singapore framework dimensions. Identify gaps in how you handle autonomous systems compared to tools that require active human use.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-navy">Technical controls:</strong> Work with IT security to assess network egress controls, API monitoring, and identity management as they relate to AI agents. The OWASP framework provides specific guidance on what to look for.
                </p>

                <p className="text-foreground/90 leading-relaxed">
                  <strong className="text-navy">Board visibility:</strong> If your board receives AI governance updates, include autonomous agents as an emerging category. They don't need deep technical briefings. They need to know this category exists and that management is tracking it.
                </p>
              </div>
            </div>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Keeping Perspective</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Much of the coverage of Moltbook has been breathless. Headlines invoke the "singularity" and "AI consciousness." That framing isn't helpful for healthcare executives who need to make practical governance decisions.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The reality is more mundane and more actionable. Autonomous AI agents are a new category of software with specific capabilities and specific risks. Like previous technology transitions in healthcare, they require governance frameworks that match what the technology can actually do. We've navigated EHR implementations, interoperability mandates, and cloud adoption. We can navigate this too.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The organizations that will handle this well are the ones that start with clear-eyed assessment of what's actually happening, extend their existing governance to cover the new category, and avoid both complacency and overreaction.
            </p>

            <p className="text-xl font-semibold text-navy bg-secondary/30 border-l-4 border-primary px-6 py-4 my-8">
              Moltbook is a signal, not a crisis. The right response is governance, not alarm.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">References and Resources</h2>

            <ul className="space-y-4 text-foreground/90">
              <li className="pl-4 border-l-2 border-primary/30">
                <strong className="text-navy">Singapore Model AI Governance Framework for Agentic AI</strong> (January 2026)<br />
                <span className="text-muted-foreground">Available from Singapore IMDA at imda.gov.sg</span>
              </li>
              <li className="pl-4 border-l-2 border-primary/30">
                <strong className="text-navy">OWASP Top 10 for Agentic Applications</strong> (December 2025)<br />
                <span className="text-muted-foreground">Available at genai.owasp.org</span>
              </li>
              <li className="pl-4 border-l-2 border-primary/30">
                <strong className="text-navy">Joint Commission/CHAI Guidance on Responsible Use of AI in Healthcare</strong> (September 2025)<br />
                <span className="text-muted-foreground">Available at jointcommission.org</span>
              </li>
              <li className="pl-4 border-l-2 border-primary/30">
                <strong className="text-navy">JMIR Clinician Competency Framework for AI</strong> (January 2026)<br />
                <span className="text-muted-foreground">"From Agents to Governance," Journal of Medical Internet Research</span>
              </li>
            </ul>

          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-narrow">
          <div className="flex flex-col md:flex-row gap-6 items-center md:items-start">
            <img
              src="/images/jim-younkin.jpg"
              alt="Jim Younkin"
              className="w-24 h-24 rounded-full object-cover"
            />
            <div>
              <p className="font-semibold text-navy">Jim Younkin, MBA</p>
              <p className="text-muted-foreground mb-3">CTO & Co-Founder, Mosaic Life Tech</p>
              <p className="text-sm text-muted-foreground">
                Jim brings 30+ years of health IT experience including leadership roles at ONC/ASTP, founding Pennsylvania's first regional health information exchange serving 4M+ patients, and advising healthcare organizations on AI governance.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">Need Help Extending Your AI Governance?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            We help healthcare organizations build governance frameworks that address both current AI tools and emerging categories like autonomous agents.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default AutonomousAIAgents;