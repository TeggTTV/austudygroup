'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FiSearch, FiChevronDown, FiChevronUp } from 'react-icons/fi';
import Image from 'next/image';
import { Input } from '@/components/ui/Input';

export default function Home() {
	const { currentUser, switchUser, groups, hydrated } = useAppContext();
	const [searchQuery, setSearchQuery] = useState('');
	const [showAuthModal, setShowAuthModal] = useState(false);
	const [faqOpenIndex, setFaqOpenIndex] = useState<number | null>(null);
	const router = useRouter();

	const handleSearchSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		if (!currentUser) {
			setShowAuthModal(true);
			return;
		}
		router.push(`/search?q=${encodeURIComponent(searchQuery)}`);
	};

	const handleAuthSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		switchUser('APPLICANT');
		setShowAuthModal(false);
		router.push(
			searchQuery.trim()
				? `/search?q=${encodeURIComponent(searchQuery)}`
				: '/search',
		);
	};

	const faqItems = [
		{
			q: 'How do I join a study group?',
			a: 'Use the search bar to find groups in your subject. Click on a group card to view details, then click "Request to Join". The group leader will review and can approve your request.',
		},
		{
			q: 'Can I create my own study group?',
			a: 'Yes! Group leaders can create groups, manage pending applications, share resources, and host discussion boards. Switch your role to Leader in the navbar to try it out.',
		},
		{
			q: 'What features do group hubs have?',
			a: 'Each group hub has a messaging wall for discussions, a file sharing section for documents, and a resource link collection for seamless collaboration.',
		},
		{
			q: 'Is AuStudyGroup free to use?',
			a: 'Absolutely. AuStudyGroup is free for all Australian university students. We aim to remove friction from academic collaboration.',
		},
	];

	if (!hydrated) return null;

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />

			{/* ═══════════ Hero Section ═══════════ */}
			<header className="relative overflow-hidden py-20 sm:py-28">
				{/* Decorative blob */}
				<div className="pointer-events-none absolute -top-32 left-1/2 -z-10 h-[500px] w-[800px] -translate-x-1/2 opacity-30 blur-3xl">
					<div className="absolute inset-0 rounded-full bg-gradient-to-br from-primary/40 via-indigo-300/30 to-violet-400/20" />
				</div>

				<div className="mx-auto max-w-3xl px-6 text-center">
					<span className="inline-flex items-center rounded-full bg-primary-light px-3 py-1 text-xs font-semibold text-primary ring-1 ring-inset ring-primary/20 mb-5">
						🎓 Find your academic circle
					</span>
					<h1 className="text-4xl font-extrabold tracking-tight text-text-primary sm:text-5xl lg:text-6xl leading-tight">
						Study Better,{' '}
						<span className="text-primary">Together</span>
					</h1>
					<p className="mt-5 text-base leading-7 text-text-secondary max-w-xl mx-auto">
						AuStudyGroup connects students across Australia. Join
						subject-specific study groups, collaborate on
						coursework, and boost your performance.
					</p>

					{/* Search */}
					<form
						onSubmit={handleSearchSubmit}
						className="mt-8 max-w-lg mx-auto"
					>
						<div className="flex items-center gap-2 rounded-xl border border-border bg-surface p-1.5 shadow-md focus-within:ring-2 focus-within:ring-primary/30 transition-all">
							<FiSearch
								size={18}
								className="ml-3 text-text-muted flex-shrink-0"
							/>
							<input
								type="text"
								placeholder="Search by subject, topic or class..."
								value={searchQuery}
								onChange={(e) => setSearchQuery(e.target.value)}
								className="flex-grow bg-transparent px-2 py-2.5 text-sm text-text-primary placeholder-text-muted focus:outline-none"
							/>
							<button
								type="submit"
								className="rounded-lg bg-primary px-5 py-2.5 text-sm font-semibold text-white shadow-sm hover:bg-primary-hover focus:outline-none transition-colors flex-shrink-0"
							>
								Search
							</button>
						</div>
					</form>
				</div>
			</header>

			{/* ═══════════ Testimonials ═══════════ */}
			<section className="py-16 bg-surface-secondary/50">
				<div className="mx-auto max-w-7xl px-6 lg:px-8">
					<div className="text-center mb-10">
						<h2 className="text-2xl font-bold text-text-primary">
							Loved by Students
						</h2>
						<p className="mt-2 text-sm text-text-muted">
							See how AuStudyGroup helps students collaborate and
							excel.
						</p>
					</div>

					<div className="grid grid-cols-1 gap-5 sm:grid-cols-2 lg:grid-cols-3">
						{[
							{
								quote: '"Finding a study group for Advanced Algorithms was tough until I used AuStudyGroup. Met amazing peers and aced the exam!"',
								name: 'Emma Watson',
								uni: 'Univ. of Sydney',
								img: 'https://images.unsplash.com/photo-1517841905240-472988babdf9?w=100',
							},
							{
								quote: '"As a leader, the pending requests manager is so easy to use. I can approve applicants and manage my roster instantly."',
								name: 'David Miller',
								uni: 'Monash University',
								img: 'https://images.unsplash.com/photo-1500648767791-00dcc994a43e?w=100',
							},
							{
								quote: '"Having a centralised wall for sharing files and links makes group assignments incredibly easy. Highly recommend!"',
								name: 'Sophia Chen',
								uni: 'UNSW',
								img: 'https://images.unsplash.com/photo-1438761681033-6461ffad8d80?w=100',
							},
						].map((t) => (
							<div
								key={t.name}
								className="rounded-xl border border-border bg-surface p-5"
							>
								<p className="text-sm text-text-secondary italic leading-relaxed">
									{t.quote}
								</p>
								<div className="mt-5 flex items-center space-x-3">
									<Image
										className="h-8 w-8 rounded-full object-cover"
										src={t.img}
										alt={t.name}
										width={8}
										height={8}
									/>
									<div>
										<h4 className="text-xs font-semibold text-text-primary">
											{t.name}
										</h4>
										<p className="text-[10px] text-text-muted">
											{t.uni}
										</p>
									</div>
								</div>
							</div>
						))}
					</div>
				</div>
			</section>

			{/* ═══════════ FAQ ═══════════ */}
			<section className="py-16">
				<div className="mx-auto max-w-2xl px-6">
					<h2 className="text-2xl font-bold text-text-primary text-center mb-8">
						Frequently Asked Questions
					</h2>
					<div className="space-y-3">
						{faqItems.map((item, idx) => (
							<div
								key={idx}
								className="rounded-xl border border-border bg-surface overflow-hidden"
							>
								<button
									onClick={() =>
										setFaqOpenIndex(
											faqOpenIndex === idx ? null : idx,
										)
									}
									className="flex w-full items-center justify-between px-5 py-4 text-left text-sm font-medium text-text-primary hover:bg-surface-secondary transition-colors"
								>
									<span>{item.q}</span>
									{faqOpenIndex === idx ? (
										<FiChevronUp
											size={16}
											className="text-text-muted flex-shrink-0"
										/>
									) : (
										<FiChevronDown
											size={16}
											className="text-text-muted flex-shrink-0"
										/>
									)}
								</button>
								{faqOpenIndex === idx && (
									<div className="px-5 pb-4 text-sm text-text-secondary leading-relaxed border-t border-border">
										<p className="pt-3">{item.a}</p>
									</div>
								)}
							</div>
						))}
					</div>
				</div>
			</section>

			<Footer />

			{/* ═══════════ Auth Gate Modal ═══════════ */}
			{showAuthModal && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
					<div className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-xl">
						<div className="flex items-center justify-between border-b border-border pb-4 mb-4">
							<h3 className="text-lg font-bold text-text-primary">
								Sign In Required
							</h3>
							<button
								onClick={() => setShowAuthModal(false)}
								className="rounded-lg p-1 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-all"
							>
								✕
							</button>
						</div>
						<p className="text-sm text-text-secondary mb-5">
							You need to sign in to search and interact with
							study groups.
						</p>

						<form onSubmit={handleAuthSubmit} className="space-y-3">
							<Input
								type="email"
								required
								label="Email Address"
								placeholder="you@university.edu.au"
							/>
							<Input
								type="password"
								required
								label="Password"
								placeholder="••••••••"
							/>
							<button
								type="submit"
								className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary-hover shadow-sm transition-all mt-2"
							>
								Sign In
							</button>
						</form>

						<div className="relative flex items-center justify-center my-5">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-border" />
							</div>
							<span className="relative bg-surface px-3 text-xs text-text-muted font-medium uppercase">
								Or
							</span>
						</div>

						<button
							onClick={() => {
								switchUser('APPLICANT');
								setShowAuthModal(false);
								router.push(
									searchQuery.trim()
										? `/search?q=${encodeURIComponent(searchQuery)}`
										: '/search',
								);
							}}
							className="flex w-full items-center justify-center gap-2 rounded-lg border border-border bg-surface-secondary py-2.5 text-sm font-semibold text-text-primary hover:bg-surface-tertiary transition-all"
						>
							<svg className="h-4 w-4" viewBox="0 0 24 24">
								<path
									fill="#4285F4"
									d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
								/>
								<path
									fill="#34A853"
									d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
								/>
								<path
									fill="#FBBC05"
									d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
								/>
								<path
									fill="#EA4335"
									d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.53 6.16-4.53z"
								/>
							</svg>
							Continue with Google
						</button>
					</div>
				</div>
			)}
		</div>
	);
}
