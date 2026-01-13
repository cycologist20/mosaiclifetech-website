import { useState } from "react";
import { Layout } from "@/components/layout/Layout";
import { Button } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { Textarea } from "@/components/ui/textarea";
import { Label } from "@/components/ui/label";
import { useToast } from "@/hooks/use-toast";
import { Calendar, Mail, Linkedin } from "lucide-react";

const Contact = () => {
  const { toast } = useToast();
  const [isSubmitting, setIsSubmitting] = useState(false);
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    organization: "",
    role: "",
    message: "",
  });

  const handleSubmit = async (e: React.FormEvent) => {
    e.preventDefault();
    setIsSubmitting(true);
    
    // Simulate form submission
    await new Promise((resolve) => setTimeout(resolve, 1000));
    
    toast({
      title: "Message sent",
      description: "We'll be in touch within 1-2 business days.",
    });
    
    setFormData({
      name: "",
      email: "",
      organization: "",
      role: "",
      message: "",
    });
    setIsSubmitting(false);
  };

  const handleChange = (
    e: React.ChangeEvent<HTMLInputElement | HTMLTextAreaElement>
  ) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  return (
    <Layout>
      {/* Hero Section */}
      <section className="section-padding bg-gradient-to-b from-secondary/50 to-background">
        <div className="container-narrow text-center">
          <h1 className="text-navy mb-4">Let's Talk</h1>
          <p className="text-lg italic text-muted-foreground mb-6">
            Healthcare AI. Governed with clarity.
          </p>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Whether you're preparing for board questions, responding to emerging Joint Commission guidance, or simply want to understand your organization's AI governance posture — we're here to help.
          </p>
        </div>
      </section>

      {/* Contact Options */}
      <section className="section-padding">
        <div className="container-narrow">
          <div className="grid lg:grid-cols-2 gap-12 lg:gap-16">
            {/* Schedule Directly */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Calendar className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-navy">Schedule Directly</h2>
              </div>
              
              <p className="text-muted-foreground mb-8">
                Book a 30-minute introductory call at a time that works for you.
              </p>
              
              {/* Placeholder for Calendly embed */}
              <div className="bg-secondary/50 rounded-xl p-8 text-center border border-border/50 min-h-[300px] flex flex-col items-center justify-center">
                <Calendar className="h-12 w-12 text-primary mb-4" />
                <p className="text-muted-foreground mb-4">
                  Calendar scheduling widget will be embedded here
                </p>
                <Button variant="cta" asChild>
                  <a href="https://calendly.com" target="_blank" rel="noopener noreferrer">
                    Book a 30-Minute Call
                  </a>
                </Button>
              </div>
            </div>

            {/* Send a Message */}
            <div>
              <div className="flex items-center gap-3 mb-6">
                <div className="w-10 h-10 rounded-full bg-primary/10 flex items-center justify-center">
                  <Mail className="h-5 w-5 text-primary" />
                </div>
                <h2 className="text-2xl font-semibold text-navy">Send a Message</h2>
              </div>
              
              <form onSubmit={handleSubmit} className="space-y-6">
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="name">Name *</Label>
                    <Input
                      id="name"
                      name="name"
                      value={formData.name}
                      onChange={handleChange}
                      required
                      placeholder="Your name"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="email">Email *</Label>
                    <Input
                      id="email"
                      name="email"
                      type="email"
                      value={formData.email}
                      onChange={handleChange}
                      required
                      placeholder="you@organization.com"
                    />
                  </div>
                </div>
                
                <div className="grid sm:grid-cols-2 gap-4">
                  <div className="space-y-2">
                    <Label htmlFor="organization">Organization</Label>
                    <Input
                      id="organization"
                      name="organization"
                      value={formData.organization}
                      onChange={handleChange}
                      placeholder="Your organization"
                    />
                  </div>
                  <div className="space-y-2">
                    <Label htmlFor="role">Role / Title</Label>
                    <Input
                      id="role"
                      name="role"
                      value={formData.role}
                      onChange={handleChange}
                      placeholder="Your role"
                    />
                  </div>
                </div>
                
                <div className="space-y-2">
                  <Label htmlFor="message">Message (optional)</Label>
                  <Textarea
                    id="message"
                    name="message"
                    value={formData.message}
                    onChange={handleChange}
                    placeholder="Tell us briefly about your governance challenges..."
                    rows={4}
                  />
                </div>
                
                <Button
                  type="submit"
                  variant="cta"
                  size="lg"
                  disabled={isSubmitting}
                  className="w-full sm:w-auto"
                >
                  {isSubmitting ? "Sending..." : "Start the Conversation"}
                </Button>
              </form>
            </div>
          </div>
        </div>
      </section>

      {/* Alternative Contact */}
      <section className="section-padding-sm bg-secondary/30">
        <div className="container-narrow">
          <div className="flex flex-col sm:flex-row items-center justify-center gap-8 text-center">
            <div className="flex items-center gap-3">
              <Mail className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <span className="text-muted-foreground">Email: </span>
                <a href="mailto:teresa@mosaiclifetech.com" className="text-primary hover:underline">
                  teresa@mosaiclifetech.com
                </a>
                <span className="text-muted-foreground"> | </span>
                <a href="mailto:jim@mosaiclifetech.com" className="text-primary hover:underline">
                  jim@mosaiclifetech.com
                </a>
              </div>
            </div>
            
            <div className="flex items-center gap-3">
              <Linkedin className="h-5 w-5 text-primary" />
              <div className="text-sm">
                <span className="text-muted-foreground">LinkedIn: </span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Teresa
                </a>
                <span className="text-muted-foreground"> | </span>
                <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-primary hover:underline">
                  Jim
                </a>
              </div>
            </div>
          </div>
        </div>
      </section>
    </Layout>
  );
};

export default Contact;
