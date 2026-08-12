'use client';

import React from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FiUsers, FiArrowRight } from 'react-icons/fi';

export default function GroupsPage() {
	const { currentUser, groups, hydrated } = useAppContext();
	const router = useRouter();

	if (!hydrated) return null;

	if (!currentUser) {
		return (
			<div className="flex min-h-screen flex-col bg-background">
				<Nav />
				<main className="flex-grow flex items-center justify-center">
					<div className="text-center py-20">
						<span className="text-4xl">🔒</span>
						<h3 className="mt-3 text-sm font-bold text-text-primary">
							Access Denied
						</h3>
						<p className="mt-1 text-xs text-text-muted">
							Please sign in to view your groups.
						</p>
						<button
							onClick={() => router.push('/')}
							className="mt-5 rounded-lg bg-primary px-4 py-2 text-xs font-semibold text-white hover:bg-primary-hover transition-all"
						>
							Go Home
						</button>
					</div>
				</main>
				<Footer />
			</div>
		);
	}

	const myGroups = groups.filter(
		(g) =>
			g.leaderId === currentUser.id ||
			g.memberIds.includes(currentUser.id),
	);

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />

			<main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-4 mb-8">
					<div>
						<h1 className="text-2xl font-bold text-text-primary">
							My Study Groups
						</h1>
						<p className="text-sm text-text-muted mt-1">
							Manage and access your active groups.
						</p>
					</div>
					<Link
						href="/search"
						className="rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover shadow-sm text-center transition-all"
					>
						Find More Groups
					</Link>
				</div>

				{myGroups.length === 0 ? (
					<div className="text-center py-20 rounded-xl border border-dashed border-border">
						<span className="text-3xl">📚</span>
						<h3 className="mt-3 text-sm font-bold text-text-primary">
							No active groups
						</h3>
						<p className="mt-1 text-xs text-text-muted">
							You are not a member of any study group
							yet.
						</p>
						<Link
							href="/search"
							className="mt-5 inline-flex rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary transition-all"
						>
							Browse Groups
						</Link>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{myGroups.map((group) => {
							const isLeader =
								group.leaderId ===
								currentUser.id;
							return (
								<div
									key={group.id}
									className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 hover:shadow-md hover:border-primary/30 transition-all"
								>
									<div>
										<div className="flex items-center justify-between">
											<span className="inline-flex items-center rounded-full bg-primary-light px-2 py-0.5 text-[10px] font-semibold text-primary">
												{
													group.subject
												}
											</span>
											{isLeader ? (
												<span className="text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full">
													Leader
												</span>
											) : (
												<span className="text-[10px] font-bold text-success bg-success-bg px-2 py-0.5 rounded-full">
													Member
												</span>
											)}
										</div>
										<h3 className="mt-3 text-base font-bold text-text-primary">
											{group.name}
										</h3>
										<p className="mt-1.5 text-xs text-text-secondary line-clamp-2 leading-relaxed">
											{
												group.description
											}
										</p>
									</div>
									<div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
										<span className="flex items-center gap-1.5 text-xs text-text-muted">
											<FiUsers
												size={12}
											/>
											{
												group
													.memberIds
													.length
											}{' '}
											members
										</span>
										<Link
											href={`/group/${group.id}/feed`}
											className="inline-flex items-center gap-1 rounded-lg bg-primary-light text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary hover:text-white transition-all"
										>
											Open Feed
											<FiArrowRight
												size={12}
											/>
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</main>

			<Footer />
		</div>
	);
}
