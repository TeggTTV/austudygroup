'use client';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { useAppContext } from '@/components/AppContext';

export default function PrivacyPage() {
	const { hydrated } = useAppContext();
	if (!hydrated) return null;

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />
			<main className="grow mx-auto w-full max-w-3xl px-4 sm:px-6 lg:px-8 py-12 prose dark:prose-invert">
				<div className="rounded-2xl border border-border bg-surface p-8 shadow-sm space-y-6">
					<h1 className="text-3xl font-extrabold text-text-primary">
						Privacy Policy
					</h1>
					<p className="text-xs text-text-muted">
						Last updated: August 12, 2026
					</p>

					<div className="space-y-4 text-sm text-text-secondary leading-relaxed">
						<p>
							AuStudyGroup is dedicated to protecting the privacy
							of our student users. This Privacy Policy describes
							how we collect, use, and share personal information.
						</p>

						<h2 className="text-lg font-bold text-text-primary pt-2">
							1. Information We Collect
						</h2>
						<p>
							We collect your name, email address, profile
							picture, and study group data (such as discussions,
							uploaded file names, and resource links) to provide
							the service.
						</p>

						<h2 className="text-lg font-bold text-text-primary pt-2">
							2. How We Use Information
						</h2>
						<p>
							We use information to facilitate study group
							discovery, manage join applications, and enable
							communication between members in the active group
							hub feed.
						</p>

						<h2 className="text-lg font-bold text-text-primary pt-2">
							3. Storage
						</h2>
						<p>
							Data is stored locally in your browser (via
							LocalStorage) and synchronized with our database
							system to ensure consistent access across your
							sessions.
						</p>
					</div>
				</div>
			</main>
			<Footer />
		</div>
	);
}
