import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";

const ChatGPTHealth = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="pt-12 pb-8 md:pt-16 md:pb-10 bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <p className="text-primary font-medium mb-4">EXECUTIVE BRIEFING • JANUARY 21, 2026</p>
          <h1 className="text-navy text-3xl md:text-4xl lg:text-5xl font-bold leading-tight mb-4">Your Patients Will Use ChatGPT Health. Is Your Organization Ready?</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">
            What health systems need to know about the new generation of AI-powered patient health tools.
          </p>
        </div>
      </section>

      {/* Hero Image */}
      <section className="py-6 md:py-8">
        <div className="container-narrow">
          <div className="max-w-3xl mx-auto">
            <img
              src="/images/chatgpt-health-article.png"
              alt="This is not Doctor Google - AI health tools represent a fundamentally different challenge"
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
              Earlier this month, OpenAI launched ChatGPT Health. Days later, Anthropic announced Claude Healthcare with secure patient record integration. Patients can now connect their medical records to AI tools that synthesize, interpret, and explain their health data on demand.
            </p>

            <p className="text-xl font-semibold text-navy mb-6">
              This is not Dr. Google.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              For two decades, clinicians have managed patients who arrived with printouts from WebMD or results from late-night search spirals. That information was generic. A search for "headache" returned the same results for everyone, regardless of their medical history, medications, or risk factors.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              What's coming is different. Patients will arrive with AI-generated interpretations of their own labs, imaging results, medication lists, and clinical notes. The information will be personalized, contextualized, and confident. Sometimes it will be accurate and useful. Sometimes it will be dangerously wrong. Often it will be somewhere in between.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The question isn't whether patients will use these tools. They already are. OpenAI reports 40 million daily users seeking health guidance through ChatGPT. The question is whether health systems are ready for the conversations that follow.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">A Different Kind of Patient Conversation</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The clinical dynamic changes when a patient arrives having already "analyzed" their own chart.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Consider the difference. A patient who Googled "elevated liver enzymes" found generic information about possible causes, ranging from benign to serious. They may be anxious, but the clinician can provide context specific to that patient's situation.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              A patient who connected their records to ChatGPT Health received a personalized interpretation. The AI cross-referenced their liver enzymes with their medication list, identified a potential drug interaction, noted a pattern across their last three lab draws, and suggested questions to ask their doctor. The patient arrives not with generic anxiety, but with a specific hypothesis and an expectation of engagement.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              This isn't necessarily bad. Informed patients who participate actively in their care often have better outcomes. But it changes what the encounter requires.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The AI might be right. The AI might be wrong. The AI might be technically accurate but missing clinical context that changes the interpretation entirely. The clinician now has to do something they weren't trained for: validate or refute an AI's analysis in real time, with a patient watching, in a fifteen-minute slot that was already too short.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">The Questions Health Systems Should Be Asking</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Most health systems haven't thought through the operational implications. Here's where the gaps will show up.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Workflow.</strong> What happens when a patient presents an AI-generated health summary? Is there a process, or does each clinician improvise? How much time does this add to an encounter? Is that time accounted for in scheduling templates?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Training.</strong> Are clinicians prepared to respond to AI-generated interpretations? The skill isn't just clinical knowledge. It's knowing how to validate what's accurate, correct what's wrong, and do both without dismissing the patient or undermining their engagement.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Documentation.</strong> How do you chart these interactions? If a patient's AI tool flagged a finding that the clinician assessed and deemed clinically insignificant, is that documented? What's the liability exposure if it's not?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Patient communication.</strong> What does the organization tell patients about using these tools? Is there guidance on the website, in the patient portal, in pre-visit instructions? Or is there silence, leaving patients to figure it out and clinicians to manage the consequences?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Escalation.</strong> When an AI interpretation creates patient anxiety about a finding the clinician considers insignificant, what's the protocol? Order additional tests to reassure the patient? Spend twenty minutes explaining why the AI's concern doesn't apply? Document the conversation and move on?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              These aren't hypothetical questions. They're operational realities that will play out thousands of times across health systems in the coming months.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">Governance as Organizational Readiness</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The reaction from healthcare IT is to frame this as a technology governance problem. It isn't.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Health systems can't govern ChatGPT Health or Claude Healthcare. They can't control whether patients use these tools, can't audit the AI's outputs, can't validate its training data. The tools exist outside the organization's perimeter, connected to patients' own records through consumer-controlled data sharing.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Governance here means something different. It means preparing the organization for a predictable shift in patient behavior.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              This is the same discipline health systems applied when patient portals launched and patients started reading their own lab results before the clinician called. It's the same discipline applied when OpenNotes gave patients access to visit documentation and clinicians had to adjust how they wrote their notes. It's the same discipline applied when price transparency requirements changed how patients approached financial conversations.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Each of these transitions required health systems to think through workflows, training, communication, and documentation. The organizations that prepared handled them smoothly. The ones that didn't spent years reacting to problems they could have anticipated.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Consumer health AI is the next version of this pattern. The tools are more sophisticated, the interpretations more personalized, and the patient expectations higher. But the governance challenge is familiar: how do we prepare our people and processes for a change in how patients engage with their own health information?
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">What Readiness Looks Like</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              Organizations that want to get ahead of this should start with a few practical steps.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">First, acknowledge that it's happening.</strong> The default in many health systems will be to ignore consumer AI tools until they cause a visible problem. That's reactive. The proactive approach is to name the trend, discuss it with clinical leadership, and decide how the organization wants to respond.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Second, develop guidance for clinicians.</strong> Not a rigid script, but a framework. How should a clinician respond when a patient references an AI interpretation? What's the balance between validating patient engagement and correcting AI errors? How do you document these conversations efficiently?
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Third, consider patient communication.</strong> Some organizations will want to provide guidance on using consumer health AI responsibly. Others will decide that's outside their scope. Either way, the choice should be intentional, not accidental.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              <strong className="text-navy">Fourth, watch for patterns.</strong> As these encounters accumulate, certain AI tools or certain types of interpretations will likely cause recurring issues. Tracking these patterns creates an opportunity to adjust workflows or develop targeted clinician education.
            </p>

            <h2 className="text-navy text-2xl md:text-3xl font-bold mt-16 mb-6">The Bigger Picture</h2>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The conversation around ChatGPT Health and Claude Healthcare has focused on accuracy, privacy, and whether patients should trust these tools. Those are valid concerns, but they're largely outside health system control.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              What health systems can control is their own readiness. They can decide whether clinicians are prepared, whether workflows account for this new type of encounter, whether documentation practices address the liability questions, and whether the organization has a coherent position on patient use of AI tools.
            </p>

            <p className="text-lg leading-relaxed text-foreground/90 mb-6">
              The tools are here. Patients will use them. The organizations that govern their own response will be ready for what's coming.
            </p>

            <p className="text-xl font-semibold text-navy bg-secondary/30 border-l-4 border-primary px-6 py-4 my-8">
              The ones that don't will learn the hard way, one patient encounter at a time.
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
          <h2 className="text-navy-foreground mb-6">Need Help Preparing for Consumer Health AI?</h2>
          <p className="text-xl text-navy-foreground/80 mb-8 max-w-2xl mx-auto">
            We help healthcare organizations build governance frameworks that prepare clinicians and workflows for the changes ahead.
          </p>
          <Button variant="cta" size="xl" asChild>
            <Link to="/contact">Start a Conversation</Link>
          </Button>
        </div>
      </section>
    </Layout>
  );
};

export default ChatGPTHealth;
