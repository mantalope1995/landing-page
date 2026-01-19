'use client';

import { SectionHeader } from '@/components/home/section-header';
import { FooterSection } from '@/components/home/sections/footer-section';
import { motion } from 'motion/react';
import {
  ArrowRight,
  Check,
  Shield,
  MessageCircle,
  Wrench,
  Calendar,
  Users,
  Zap,
  Lock
} from 'lucide-react';
import { Button } from '@/components/ui/button';
import { DimaticEnterpriseModal } from '@/components/sidebar/dimatic-enterprise-modal';
import { DimaticLogo } from '@/components/sidebar/dimatic-logo';

// Hero Section Component
const HeroSection = () => {
  return (
    <section className="w-full relative overflow-hidden">
      <div className="relative flex flex-col items-center w-full px-6">
        <div className="relative z-10 pt-32 mx-auto h-full w-full max-w-6xl flex flex-col items-center justify-center">
          <div className="flex flex-col items-center justify-center gap-6 pt-12 max-w-4xl mx-auto">
            {/* Logo */}
            <div className="mb-8">
              <DimaticLogo size={48} />
            </div>

            <div className="inline-flex items-center gap-2 px-4 py-2 rounded-full bg-gradient-to-r from-primary/10 to-secondary/10 border border-primary/20">
              <Zap className="w-4 h-4 text-primary" />
              <span className="text-sm font-medium text-primary">Custom Solutions for Aussie Businesses</span>
            </div>

            <h1 className="text-4xl md:text-5xl lg:text-6xl xl:text-7xl font-medium tracking-tighter text-balance text-center">
              Let AI handle the boring stuff
              <br />
              <span className="text-primary">so you can focus on what matters</span>
            </h1>

            <p className="text-lg md:text-xl text-center text-muted-foreground font-medium text-balance leading-relaxed tracking-tight max-w-3xl">
              We set up and manage smart tools that automate your business tasks. No tech skills needed.
            </p>

            <div className="flex flex-col items-center gap-6 pt-6">
              <DimaticEnterpriseModal>
                <Button size="lg">
                  <Calendar className="w-4 h-4 mr-2" />
                  Book a free 15-min chat
                  <ArrowRight className="w-4 h-4 ml-2" />
                </Button>
              </DimaticEnterpriseModal>
              <div className="flex flex-col sm:flex-row items-center gap-4 text-sm text-muted-foreground">
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>No technical skills needed</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>We handle the setup</span>
                </div>
                <div className="flex items-center gap-2">
                  <div className="w-2 h-2 rounded-full bg-primary"></div>
                  <span>Local Aussie support</span>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="mb-16 sm:mt-32 mx-auto"></div>
      </div>
    </section>
  );
};

// Solutions Overview Section
const SolutionsSection = () => {
  const solutions = [
    {
      icon: <Wrench className="w-6 h-6" />,
      title: "Task Automation",
      description: "Connect your apps and automate the boring stuff",
      color: "primary",
      features: [
        "Automatically add new leads from your website into your CRM",
        "Send follow-up emails when customers enquire",
        "Post to social media across all platforms at once",
        "Sync data between your tools automatically"
      ]
    },
    {
      icon: <MessageCircle className="w-6 h-6" />,
      title: "Smart Assistant",
      description: "Your own AI that knows your business",
      color: "secondary",
      features: [
        "Chat with your documents to find info instantly",
        "Build a customer support bot that knows your products",
        "Create an internal knowledge base for your team",
        "Ask questions and get answers from your own files"
      ]
    },
    {
      icon: <Shield className="w-6 h-6" />,
      title: "AI Agent HQ",
      description: "Your AI assistants, kept private and secure",
      color: "primary",
      features: [
        "Your data stays in Australia, in your own protected space",
        "Everything is locked down and encrypted (like a secure vault)",
        "Control which AI tools can access what in your business",
        "See exactly what your AI agents are doing, anytime"
      ]
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Three ways we can save you time
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Practical tools that handle the repetitive stuff you'd rather not do
            </p>
          </SectionHeader>

          <div className="border-t border-border">
            {solutions.map((solution, index) => (
              <motion.div
                key={index}
                className={`p-8 ${index !== solutions.length - 1 ? 'border-b border-border' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex flex-col md:flex-row gap-6">
                  <div className="flex-shrink-0">
                    <div className={`w-14 h-14 rounded-2xl bg-${solution.color}/10 flex items-center justify-center text-${solution.color} border border-${solution.color}/20`}>
                      {solution.icon}
                    </div>
                  </div>
                  <div className="flex-1 space-y-4">
                    <div>
                      <h3 className="text-2xl font-semibold mb-2">{solution.title}</h3>
                      <p className="text-muted-foreground text-lg">{solution.description}</p>
                    </div>
                    <ul className="space-y-2">
                      {solution.features.map((feature, idx) => (
                        <li key={idx} className="flex items-start gap-2">
                          <Check className="w-4 h-4 text-primary mt-0.5 flex-shrink-0" />
                          <span className="text-muted-foreground">{feature}</span>
                        </li>
                      ))}
                    </ul>
                  </div>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// How It Works Section
const ProcessSection = () => {
  const steps = [
    {
      icon: <MessageCircle className="w-8 h-8" />,
      title: "Have a Chat",
      description: "We jump on a quick call to understand what's eating up your time. No technical talk - just a conversation about your business and what you wish was easier.",
      phase: "Chat"
    },
    {
      icon: <Wrench className="w-8 h-8" />,
      title: "We Set It Up",
      description: "Our team configures everything for you. We connect your tools, customise the automation, and test it all works. You just sit back while we do the work.",
      phase: "Setup"
    },
    {
      icon: <Zap className="w-8 h-8" />,
      title: "You're Away",
      description: "We show you the ropes, make sure you're comfortable, and stick around for support. If you need help or want to add more later, we're just a message away.",
      phase: "Go"
    }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              How we get you sorted
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Three simple steps - we handle the heavy lifting
            </p>
          </SectionHeader>

          <div className="border-t border-border">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                className={`flex flex-col md:flex-row gap-8 p-8 ${index !== steps.length - 1 ? 'border-b border-border' : ''}`}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                transition={{ duration: 0.6, delay: index * 0.1 }}
                viewport={{ once: true }}
              >
                <div className="flex-shrink-0">
                  <div className="w-16 h-16 rounded-2xl bg-gradient-to-br from-primary/20 to-secondary/20 flex items-center justify-center text-primary border border-primary/20">
                    {step.icon}
                  </div>
                </div>

                <div className="flex-1 space-y-3">
                  <div className="flex items-center gap-3">
                    <h3 className="text-xl font-semibold">{step.title}</h3>
                    <span className="px-3 py-1 text-xs font-medium bg-secondary/10 text-secondary rounded-full">
                      {step.phase}
                    </span>
                  </div>
                  <p className="text-muted-foreground leading-relaxed">
                    {step.description}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

// Benefits Section
const BenefitsSection = () => {
  const benefits = [
    { title: "We speak your language", description: "No tech jargon, just clear explanations in plain English" },
    { title: "Local Aussie support", description: "Real humans you can actually talk to, in your timezone" },
    { title: "We handle the tech", description: "You focus on your business, we'll handle the setup" },
    { title: "Fair and flexible", description: "Pricing that scales with you, no hidden nasties" },
    { title: "Show you how it works", description: "We don't just disappear - we train your team properly" },
    { title: "Keep improving", description: "Regular check-ins to make sure everything's running smoothly" }
  ];

  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Why businesses work with us
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              We're here to make your life easier, not more complicated
            </p>
          </SectionHeader>

          <div className="border-t border-border p-8">
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
              {benefits.map((benefit, index) => (
                <motion.div
                  key={index}
                  className="flex items-start gap-3 p-4 rounded-lg hover:bg-accent/20 transition-colors"
                  initial={{ opacity: 0, x: -20 }}
                  whileInView={{ opacity: 1, x: 0 }}
                  transition={{ duration: 0.5, delay: index * 0.1 }}
                  viewport={{ once: true }}
                >
                  <div className="flex-shrink-0 w-5 h-5 rounded-full bg-primary/20 flex items-center justify-center mt-0.5">
                    <Check className="w-3 h-3 text-primary" />
                  </div>
                  <div>
                    <p className="text-sm font-semibold leading-relaxed mb-1">{benefit.title}</p>
                    <p className="text-xs text-muted-foreground leading-relaxed">{benefit.description}</p>
                  </div>
                </motion.div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Final CTA Section
const FinalCTASection = () => {
  return (
    <section className="flex flex-col items-center justify-center w-full relative">
      <div className="relative w-full px-6">
        <div className="max-w-6xl mx-auto border-l border-r border-border">
          <SectionHeader>
            <h2 className="text-3xl md:text-4xl font-medium tracking-tighter text-center text-balance pb-1">
              Ready to free up some time?
            </h2>
            <p className="text-muted-foreground text-center text-balance font-medium">
              Let's have a no-pressure chat about what might work for your business
            </p>
          </SectionHeader>

          <div className="border-t border-border p-8">
            <div className="text-center space-y-6">
              <div className="space-y-4">
                <div className="space-y-6">
                  <DimaticEnterpriseModal>
                    <Button size="lg">
                      <Calendar className="w-4 h-4 mr-2" />
                      Book a free 15-min chat
                      <ArrowRight className="w-4 h-4 ml-2" />
                    </Button>
                  </DimaticEnterpriseModal>
                  <div className="grid grid-cols-1 sm:grid-cols-3 gap-4 text-center max-w-2xl mx-auto">
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <MessageCircle className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">No obligation</span>
                      <span className="text-xs text-muted-foreground">Just a conversation, no hard sell</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <Users className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Local team</span>
                      <span className="text-xs text-muted-foreground">Based in Australia, here to help</span>
                    </div>
                    <div className="flex flex-col items-center gap-2 p-4 rounded-lg bg-accent/20">
                      <Lock className="w-6 h-6 text-primary" />
                      <span className="text-sm font-medium">Simple pricing</span>
                      <span className="text-xs text-muted-foreground">Clear and upfront, no surprises</span>
                    </div>
                  </div>
                  <p className="text-sm text-muted-foreground pt-4">
                    Even if you're not sure what you need yet, that's totally fine. We're happy to just chat through what's possible.
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

// Main Page Component
export default function EnterprisePage() {
  return (
    <main className="flex flex-col items-center justify-center min-h-screen w-full">
      <div className="w-full divide-y divide-border">
        <HeroSection />
        <SolutionsSection />
        <ProcessSection />
        <BenefitsSection />
        <FinalCTASection />
        <FooterSection />
      </div>
    </main>
  );
}
