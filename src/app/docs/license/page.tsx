'use client';

import * as React from 'react';
import {
  DocsHeader,
  DocsCard,
  DocsBody,
  DocsBullets,
  DocsBulletItem,
  DocsImage,
} from '@/components/ui/docs-index';
import { Alert, AlertDescription } from '@/components/ui/alert';
import { Ripple } from '@/components/ui/ripple';
import { Icon } from 'lucide-react';

const breadcrumbs = [
  { title: 'Docs', onClick: () => window.location.href = '/docs' },
  { title: 'License' }
];

export default function LicensePage() {
  return (
    <>
      <DocsHeader
        title="License"
        description="Dimatic is proprietary software. All rights reserved."
        breadcrumbs={breadcrumbs}
        lastUpdated="August 2025"
        showSeparator
        size="lg"
        className="mb-8 sm:mb-12"
      />
      <DocsBody className="w-full px-8 py-16 relative overflow-hidden rounded-3xl flex items-center justify-center border bg-background mb-12">
        <h1 className="text-xl tracking-tight text-foreground text-center">
          <span className="font-semibold text-3xl">Dimatic is proprietary software protected by copyright laws.</span>
        </h1>
        <Ripple />
      </DocsBody>
      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="overview">Overview</h2>
          <p className="text-lg mb-6">
            Dimatic is a commercial product. Unauthorized copying, modification, distribution, or reverse engineering is strictly prohibited.
            Your use of Dimatic is governed by our Terms of Service and any applicable subscription agreements.
          </p>
        </DocsBody>

        <Alert className="mb-8">
          <AlertDescription>
            This software is NOT open source.
          </AlertDescription>
        </Alert>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="permissions">Usage Rights</h2>
          <p className="text-lg mb-6">
            As a subscriber, you are granted a limited, non-exclusive, non-transferable license to access and use the Dimatic platform for your internal business purposes or personal use, subject to the Terms of Service.
          </p>
        </DocsBody>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="conditions">Conditions</h2>
          <p className="text-lg mb-6">
            When using Dimatic under the Apache License 2.0, you must:
          </p>
        </DocsBody>
        <DocsBullets variant="default" spacing="default" className="mb-8">
          <DocsBulletItem
            title="Include License"
            description="Include a copy of the Apache License 2.0 in any distribution"
          />
          <DocsBulletItem
            title="State Changes"
            description="Clearly indicate any modifications you make to the original code"
          />
          <DocsBulletItem
            title="Preserve Notices"
            description="Keep all copyright, patent, trademark, and attribution notices"
          />
          <DocsBulletItem
            title="Include NOTICE"
            description="If a NOTICE file exists, include it in distributions of your derivative works"
          />
        </DocsBullets>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="limitations">Limitations</h2>
          <p className="text-lg mb-6">
            The Apache License 2.0 has the following limitations:
          </p>
        </DocsBody>
        <DocsBullets variant="default" spacing="default" className="mb-8">
          <DocsBulletItem
            title="No Trademark Use"
            description="The license does not grant permission to use the trade names, trademarks, or service marks of Dimatic"
          />
          <DocsBulletItem
            title="No Warranty"
            description="The software is provided 'AS IS' without warranties of any kind"
          />
          <DocsBulletItem
            title="No Liability"
            description="Contributors are not liable for any damages arising from the use of the software"
          />
        </DocsBullets>

        <Alert className="mb-8">
          <AlertDescription>
            <strong>Patent Retaliation Clause:</strong> If you initiate patent litigation against any entity alleging that Dimatic constitutes patent infringement,
            your patent licenses under this license will terminate.
          </AlertDescription>
        </Alert>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="faq">Frequently Asked Questions</h2>
        </DocsBody>

        <div className="space-y-6">
          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Can I use Dimatic in my commercial product?</h3>
            <p className="text-muted-foreground">
              Yes! The Apache 2.0 license allows commercial use without any fees or restrictions.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Do I need to open source my modifications?</h3>
            <p className="text-muted-foreground">
              No, you're not required to open source your modifications. However, you must indicate what changes you've made if you distribute the modified version.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">Can I change the license for my derivative work?</h3>
            <p className="text-muted-foreground">
              You can apply different license terms to your modifications, but the original Dimatic code remains under Apache 2.0.
            </p>
          </div>

          <div className="border-l-4 border-primary pl-6">
            <h3 className="font-semibold mb-2">What about patent protection?</h3>
            <p className="text-muted-foreground">
              The Apache 2.0 license includes an express grant of patent rights from contributors to users, protecting you from patent litigation.
            </p>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <DocsBody className="mb-8">
          <h2 id="resources">Resources</h2>
          <p className="text-lg mb-6">
            Learn more about the Apache License 2.0 and how to use Dimatic:
          </p>
        </DocsBody>
        <div className="grid grid-cols-1 md:grid-cols-2 gap-6 mb-8">
          <DocsCard
            title="Full License Text"
            description="Read the complete Apache License 2.0 text on GitHub"
            clickable
            actions={[
              {
                label: 'View License',
                variant: 'default',
                onClick: () => window.open('https://github.com/kortix-ai/suna/blob/main/LICENSE', '_blank')
              }
            ]}
          />
          <DocsCard
            title="Apache License FAQ"
            description="Official Apache Foundation FAQ about the license"
            clickable
            actions={[
              {
                label: 'Learn More',
                variant: 'default',
                onClick: () => window.open('https://www.apache.org/licenses/LICENSE-2.0', '_blank')
              }
            ]}
          />
        </div>
      </section>
    </>
  );
} 