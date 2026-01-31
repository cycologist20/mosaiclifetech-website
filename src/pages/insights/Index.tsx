import { Link } from "react-router-dom";
import { Layout } from "@/components/layout/Layout";
import { Card, CardDescription, CardHeader, CardTitle } from "@/components/ui/card";

const insights = [
  {
    slug: "autonomous-ai-agents-healthcare",
    title: "Autonomous AI Agents: What Healthcare Executives Need to Know",
    description:
      "A practical guide to understanding autonomous AI agents, why they matter for healthcare governance, and what to do about them.",
    date: "January 31, 2026",
    category: "Executive Briefing",
  },
  {
    slug: "chatgpt-health-patient-readiness",
    title: "Your Patients Will Use ChatGPT Health. Is Your Organization Ready?",
    description:
      "Patients can now connect their medical records to AI tools. Health systems need to prepare for the conversations that follow.",
    date: "January 21, 2026",
    category: "Executive Briefing",
  },
];

const InsightsIndex = () => {
  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-6">Insights</h1>
          <p className="text-xl text-muted-foreground max-w-3xl mx-auto">Practical perspectives on AI governance for healthcare leaders.</p>
        </div>
      </section>

      {/* Articles List */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="space-y-6">
            {insights.map((article) => (
              <Link key={article.slug} to={`/insights/${article.slug}`}>
                <Card className="hover:shadow-lg transition-shadow cursor-pointer">
                  <CardHeader>
                    <div className="flex items-center gap-3 text-sm text-muted-foreground mb-2">
                      <span className="bg-primary/10 text-primary px-2 py-1 rounded text-xs font-medium">{article.category}</span>
                      <span>{article.date}</span>
                    </div>
                    <CardTitle className="text-navy hover:text-primary transition-colors">{article.title}</CardTitle>
                    <CardDescription className="text-base">{article.description}</CardDescription>
                  </CardHeader>
                </Card>
              </Link>
            ))}
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default InsightsIndex;
