'use client';

import * as React from 'react';
import {
  DocsHeader,
  DocsCard,
  DocsBody,
  DocsBullets,
  DocsBulletItem,
} from '@/components/ui/docs-index';
import { CodeBlock, CodeBlockBody, CodeBlockContent, CodeBlockHeader, CodeBlockFiles, CodeBlockFilename, CodeBlockCopyButton } from '@/components/ui/shadcn-io/code-block';

const breadcrumbs = [
  { title: 'Docs', onClick: () => window.location.href = '/docs' },
  { title: 'Community' }
];

export default function ContributingPage() {
  return (
    <>
      <DocsHeader
        title="Join the Dimatic Community"
        description="Help improve Dimatic! We welcome feedback and suggestions from our users."
        breadcrumbs={breadcrumbs}
        lastUpdated="August 2025"
        showSeparator
        size="lg"
        className="mb-8 sm:mb-12"
      />

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="ways-to-contribute">Provide Feedback</h2>
          <p className="text-lg mb-6">
            Your feedback helps us make Dimatic better. Here are the best ways to get involved:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DocsCard
            title="Bug Reports"
            description="Found an issue? content support team with detailed reproduction steps so we can fix it."
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="Feature Requests"
            description="Have an idea for a new feature? Let us know what would make your workflow even better."
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="Documentation"
            description="Find a typo or unclear instruction? Report documentation issues to help us improve our guides."
            className="bg-accent/50 border-border"
          />
          <DocsCard
            title="Community Support"
            description="Help other users in our community channels by sharing your tips and workflows."
            className="bg-accent/50 border-border"
          />
        </div>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="development-setup">Enterprise Customization</h2>
          <p className="text-lg mb-6">
            For enterprise customers looking to build custom integrations or agents:
          </p>
        </DocsBody>
        <DocsCard
          title="Developer Documentation"
          description="Access our API documentation and developer guides for building custom solutions."
          className="mb-6"
          clickable
          actions={[
            {
              label: 'View Developer Docs',
              variant: 'default',
              onClick: () => window.location.href = '/docs/introduction'
            }
          ]}
        />
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="community">Connect with Us</h2>
          <p className="text-lg mb-6">
            Join our community to connect with the team and other Dimatic users:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DocsCard
            title="Discord Community"
            description="Join our private Discord server to chat with the team and other enterprise users."
            clickable
            actions={[
              {
                label: 'Join Discord',
                variant: 'default',
                onClick: () => window.open('https://discord.gg/Py6pCBUUPw', '_blank')
              }
            ]}
          />
          <DocsCard
            title="Contact Support"
            description="Need direct assistance? Our support team is here to help."
            clickable
            actions={[
              {
                label: 'Contact Support',
                variant: 'default',
                onClick: () => window.location.href = 'mailto:support@dimatic.ai'
              }
            ]}
          />
        </div>
      </section>
    </>
  );
} 