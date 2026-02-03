import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const CommitteeFallacy = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <p className="text-primary font-medium mb-4">ARTICLE &bull; JANUARY 20, 2026</p>
          <h1 className="text-navy text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">The Committee Fallacy in AI Governance</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            Why the traditional committee model creates an accountability vacuum in healthcare AI governance, and what to do about it.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-6 md:py-8">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <img
              src="/images/committee-fallacy-article.png"
              alt="Governance approval form being signed - illustrating the gap between committee process and individual accountability"
              className="w-full rounded-lg shadow-lg"
            />
          </div>
        </div>
      </section>

      {/* Article Content */}
      <article className="pt-4 pb-16 md:pt-6 md:pb-20">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Most health systems responded to AI governance pressure the same way they've responded to every governance challenge for the past thirty years: they formed a committee.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              It's a reasonable instinct. Committees have served healthcare well. Pharmacy and therapeutics committees. Quality committees. IRBs. Ethics boards. The model works because it brings multi-disciplinary perspective to complex decisions and distributes the cognitive load across experts.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              But AI governance has a structural problem that committees weren't designed to solve. And until organizations name it clearly, they'll keep building governance structures that look robust on paper and fail under pressure.
            </p>

            <p className="text-xl font-semibold text-navy mb-6">
              The problem is the difference between input and accountability.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Why Committees Work (Until They Don't)</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Traditional healthcare committees govern decisions that are stable, well-bounded, and domain-specific. A P&T committee evaluates whether a drug should be on formulary. The decision has clear criteria, established evidence standards, and defined scope. Once made, the decision holds until new evidence emerges.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              AI decisions don't work that way.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              An algorithm approved on Tuesday may perform differently on Friday. Models drift. Patient populations shift. The tool that passed validation in a controlled environment behaves unpredictably when it encounters edge cases in production. A clinical decision support system designed to inform gradually becomes a clinical decision system that directs, and the shift happens so slowly that nobody notices until something goes wrong.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              When something does go wrong, the committee structure creates a peculiar accountability vacuum. The clinical representative approved it from a clinical perspective. IT approved the technical implementation. Legal reviewed the contract. Compliance checked the boxes. Everyone did their job. But who owns the outcome?
            </p>

            <p className="text-xl font-semibold text-navy bg-secondary/30 border-l-4 border-primary px-6 py-4 my-8">
              The honest answer in most organizations: nobody.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">The Bystander Effect in Governance</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              There's a well-documented phenomenon in social psychology that explains why this happens. In 1968, researchers studying emergency response found that when a single person witnesses someone in distress, they intervene 85 percent of the time. Add more witnesses, and intervention rates drop to 31 percent.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The cause isn't apathy. It's diffusion of responsibility. Each person assumes someone else will act, or that someone else is better positioned to act, or that the situation must not be as serious as it appears because nobody else is responding. The more people present, the less any individual feels personally obligated.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Governance committees can create exactly the same dynamic.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              When responsibility is distributed across a group, each member's sense of personal accountability diminishes. The committee approved it. The committee reviewed it. The committee decided. But a committee can't be called to account when a patient is harmed. A committee can't explain to a regulator why an algorithm performed differently on a specific patient population. A committee can't be named in a lawsuit.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              People can. And the governance structure needs to make clear which people.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Input vs. Accountability</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The distinction that matters is between input and accountability.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Multi-disciplinary input is essential. You need clinical, technical, legal, and operational perspectives informing AI governance decisions. No single person has the expertise to evaluate an algorithm's clinical validity, technical implementation, regulatory implications, and operational integration. The committee model solves this problem well.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              But multi-disciplinary accountability is incoherent. Accountability, by definition, means someone is answerable for outcomes. When that answerability is distributed across a group, it dissolves. Everyone has oversight. No one has ownership.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              I've seen this play out repeatedly during EHR implementations, interoperability initiatives, and now AI deployments. The pattern is consistent: committees provide cover for decisions but not accountability for outcomes. When things go well, everyone claims credit. When things fail, everyone points to the process.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The fix isn't eliminating committees. It's layering accountability on top of input.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              A committee can advise, review, and recommend. But at the end of the process, someone has to decide. And that someone has to sign, literally or figuratively, in a way that creates traceable accountability for what happens next.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">What This Looks Like in Practice</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              For AI governance, this means several things.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">First, every AI tool that influences clinical or operational decisions needs an accountable owner</strong>, not a sponsoring committee. That owner should be a named individual with authority to approve deployment, require modifications, or halt use. Their name should appear in documentation, and they should be able to explain and defend decisions about that tool.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Second, the committee's role needs explicit boundaries.</strong> The committee provides input, conducts review, and makes recommendations. It does not make deployment decisions. The accountable owner makes those decisions informed by committee input, and the distinction should be documented.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Third, ongoing accountability needs structure.</strong> AI tools don't stay static. The accountable owner (or their delegate) needs defined responsibilities for monitoring performance, reviewing incidents, and deciding when a tool needs re-evaluation. Committee review of a tool at deployment doesn't create ongoing governance.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Fourth, accountability needs to survive organizational change.</strong> When the accountable owner leaves or changes roles, accountability must transfer explicitly to another named individual. Orphaned AI tools with no clear owner are a common failure pattern, and they represent exactly the governance gap that creates risk.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">The Uncomfortable Question</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              There's a simple test for whether your AI governance structure has this problem.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Pick any AI tool currently deployed in your organization. Now answer this question: if that tool contributes to patient harm next month, who has to explain what happened and why?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Not which committee reviewed it. Not which process was followed. Which person is accountable for the outcome?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              If you can answer that question clearly, your governance structure may be more mature than most. If you can't, or if the answer is "the committee" or "it depends," you've identified the gap.
            </p>

            <p className="text-xl font-semibold text-navy bg-secondary/30 border-l-4 border-primary px-6 py-4 my-8">
              The work of AI governance isn't building more committees. It's building clear lines of accountability that committees can inform but not replace.
            </p>

          </div>
        </div>
      </article>

      {/* Author Box */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
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
        </div>
      </section>

      {/* CTA */}
      <section className="section-padding bg-navy text-navy-foreground">
        <div className="container-narrow text-center">
          <h2 className="text-navy-foreground mb-6">Need Help Building AI Accountability Structures?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            We help healthcare organizations design governance frameworks with clear lines of accountability, not just committee oversight.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default CommitteeFallacy;
