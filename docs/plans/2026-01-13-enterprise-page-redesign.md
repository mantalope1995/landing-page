# Enterprise Page Redesign - Small Business Focus

**Date:** 2026-01-13
**Status:** Approved
**Target:** `/enterprise` page redesign

## Overview

Redesign the enterprise page to target non-technical small businesses in Australia, replacing the current enterprise-focused messaging with friendly, approachable language. The visual style remains consistent with the existing theme (bordered sections, motion animations, color scheme).

## Target Audience

- Non-technical small business owners in Australia
- Not comfortable with technical jargon
- Value simplicity, local support, and straightforward explanations
- Want to save time on repetitive tasks without becoming tech experts

## Design Principles

1. **Friendly & Local (Aussie casual)** - Conversational, approachable tone
2. **Non-technical language** - No jargon, plain English explanations
3. **Practical focus** - Emphasize time savings and concrete outcomes
4. **Low pressure** - No aggressive sales language
5. **Keep existing visual style** - Maintain current design theme

## Section-by-Section Design

### 1. Hero Section

**Heading:** "Let AI handle the boring stuff so you can focus on what matters"

**Subheading:** "We set up and manage smart tools that automate your business tasks. No tech skills needed."

**Badge:** "Solutions for Aussie Businesses" (replaces "Enterprise Implementation Services")

**Key points:**
- ✓ No technical skills needed
- ✓ We handle the setup
- ✓ Local Aussie support

**CTA:** "Book a free 15-min chat"

**Secondary note:** "No hard sell, just a conversation about what might help"

### 2. Solutions Overview

**Heading:** "Three ways we can save you time"

**Subheading:** "Practical tools that handle the repetitive stuff you'd rather not do"

**Three solution cards:**

**Task Automation** (Activepieces - whitelabeled)
*"Connect your apps and automate the boring stuff"*
- Automatically add new leads from your website into your CRM
- Send follow-up emails when customers enquire
- Post to social media across all platforms at once
- Sync data between your tools automatically

**Smart Assistant** (AnythingLLM - whitelabeled)
*"Your own AI that knows your business"*
- Chat with your documents to find info instantly
- Build a customer support bot that knows your products
- Create an internal knowledge base for your team
- Ask questions and get answers from your own files

**AI Agent HQ** (Obot.ai - whitelabeled)
*"Your AI assistants, kept private and secure"*
- Your data stays in Australia, in your own protected space
- Everything is locked down and encrypted (like a secure vault)
- Control which AI tools can access what in your business
- See exactly what your AI agents are doing, anytime

### 3. How It Works

**Heading:** "How we get you sorted"

**Subheading:** "Three simple steps - we handle the heavy lifting"

**Step 1: Have a Chat**
"We jump on a quick call to understand what's eating up your time. No technical talk - just a conversation about your business and what you wish was easier."

**Step 2: We Set It Up**
"Our team configures everything for you. We connect your tools, customise the automation, and test it all works. You just sit back while we do the work."

**Step 3: You're Away**
"We show you the ropes, make sure you're comfortable, and stick around for support. If you need help or want to add more later, we're just a message away."

### 4. Why Choose Us

**Heading:** "Why businesses work with us"

**Subheading:** "We're here to make your life easier, not more complicated"

**Benefits list:**
- ✓ **We speak your language** - No tech jargon, just clear explanations in plain English
- ✓ **Local Aussie support** - Real humans you can actually talk to, in your timezone
- ✓ **We handle the tech** - You focus on your business, we'll handle the setup
- ✓ **Fair and flexible** - Pricing that scales with you, no hidden nasties
- ✓ **Show you how it works** - We don't just disappear - we train your team properly
- ✓ **Keep improving** - Regular check-ins to make sure everything's running smoothly

### 5. Final CTA

**Heading:** "Ready to free up some time?"

**Subheading:** "Let's have a no-pressure chat about what might work for your business"

**CTA:** "Book a free 15-min chat"

**Reassurance badges:**
1. **No obligation** - "Just a conversation, no hard sell"
2. **Local team** - "Based in Australia, here to help"
3. **Simple pricing** - "Clear and upfront, no surprises"

**Optional closing:** "Even if you're not sure what you need yet, that's totally fine. We're happy to just chat through what's possible."

## Sections to Remove

- **Testimonials section** - Current testimonials use enterprise-style language and company names that don't fit the small business Aussie focus
- **Self-service alternative section** - Confusing to offer a self-service alternative on this page

## Technical Notes

- Maintain existing visual style: bordered sections, motion animations with framer-motion, gradient accents
- Keep the same component structure where possible
- Update modal component (KortixEnterpriseModal → DimaticEnterpriseModal)
- Update logo component references if needed
- Ensure all branding references use "Dimatic" not "Kortix"

## Files to Update

- `src/app/(home)/enterprise/page.tsx` - Main page content
- `src/components/sidebar/kortix-enterprise-modal.tsx` - Consider renaming to dimatic-enterprise-modal.tsx
- Any logo or branding references

## Success Criteria

- Page feels approachable to non-technical small business owners
- Australian local tone comes through naturally
- No technical jargon without clear explanation
- Clear path to book a consultation
- All three products (Activepieces, AnythingLLM, Obot.ai) are represented without naming them
