'use client';

import React from 'react';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useAppContext } from '@/components/AppContext';

export default function TermsPage() {
  const { hydrated } = useAppContext();
  if (!hydrated) return null;

  return (
    <div className="flex min-h-screen flex-col bg-background">
      <Nav />
      <main className="flex-grow mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert">
        <div className="rounded-2xl border border-border bg-surface p-8 shadow-sm space-y-6">
          <h1 className="text-3xl font-extrabold text-text-primary">Terms of Service</h1>
          <p className="text-xs text-text-muted">Last updated: August 12, 2026</p>

          <div className="space-y-4 text-sm text-text-secondary leading-relaxed">
            <p>
              Welcome to AuStudyGroup. By accessing or using our platform, you agree to comply with and be bound by these Terms of Service.
            </p>

            <h2 className="text-lg font-bold text-text-primary pt-2">1. User Accounts</h2>
            <p>
              You must register using a valid educational email. You are responsible for maintaining the confidentiality of your account credentials.
            </p>

            <h2 className="text-lg font-bold text-text-primary pt-2">2. Acceptable Conduct</h2>
            <p>
              Users must engage respectfully. Spam, offensive content, or unauthorized file sharing of copyrighted materials will result in immediate termination of access.
            </p>

            <h2 className="text-lg font-bold text-text-primary pt-2">3. Limitation of Liability</h2>
            <p>
              AuStudyGroup provides services "as is". We are not responsible for schedule conflicts, academic results, or accuracy of shared study notes.
            </p>
          </div>
        </div>
      </main>
      <Footer />
    </div>
  );
}
