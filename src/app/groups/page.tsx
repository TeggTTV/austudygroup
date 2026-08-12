'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FiUsers, FiArrowRight, FiX, FiPlus } from 'react-icons/fi';
import { Input } from '@/components/ui/Input';
import { Slider } from '@/components/ui/Slider';
import { motion, AnimatePresence } from 'framer-motion';

export default function GroupsPage() {
	const { currentUser, groups, hydrated, createGroup } = useAppContext();
	const router = useRouter();

	const [modalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');
	const [frequency, setFrequency] = useState('Weekly');
	const [maxMembers, setMaxMembers] = useState(8);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	if (!hydrated) return null;

	if (!currentUser) {
		return (
			<div className="flex min-h-screen flex-col bg-background">
				<Nav />
				<main className="grow flex items-center justify-center">
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

	const handleCreateGroup = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const res = await createGroup(
			name,
			description,
			subject,
			frequency,
			1, // minMembers
			maxMembers,
		);
		setLoading(false);

		if (res.success) {
			setModalOpen(false);
			setName('');
			setSubject('');
			setDescription('');
			setFrequency('Weekly');
			setMaxMembers(8);
		} else {
			setError(res.error || 'Failed to create group');
		}
	};

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
					<div className="flex gap-3">
						<button
							onClick={() => setModalOpen(true)}
							className="inline-flex items-center gap-1.5 rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover shadow-sm transition-all cursor-pointer"
						>
							<FiPlus size={14} />
							Create Group
						</button>
						<Link
							href="/search"
							className="rounded-lg border border-border bg-surface px-4 py-2.5 text-xs font-semibold text-text-secondary hover:text-text-primary shadow-sm text-center transition-all"
						>
							Find More Groups
						</Link>
					</div>
				</div>

				{myGroups.length === 0 ? (
					<div className="text-center py-20 rounded-xl border border-dashed border-border">
						<span className="text-3xl">📚</span>
						<h3 className="mt-3 text-sm font-bold text-text-primary">
							No active groups
						</h3>
						<p className="mt-1 text-xs text-text-muted">
							You are not a member of any study group yet.
						</p>
						<button
							onClick={() => setModalOpen(true)}
							className="mt-5 inline-flex rounded-lg border border-border bg-surface px-4 py-2 text-xs font-semibold text-text-secondary hover:text-text-primary transition-all"
						>
							Create a Group
						</button>
					</div>
				) : (
					<div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-5">
						{myGroups.map((group) => {
							const isLeader = group.leaderId === currentUser.id;
							return (
								<div
									key={group.id}
									className="flex flex-col justify-between rounded-xl border border-border bg-surface p-5 hover:shadow-md hover:border-primary/30 transition-all"
								>
									<div>
										<div className="flex items-center justify-between">
											<span className="inline-flex items-center rounded-full bg-primary-light px-2 py-0.5 text-[10px] font-semibold text-primary">
												{group.subject}
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
											{group.description}
										</p>
									</div>
									<div className="mt-5 pt-3 border-t border-border flex items-center justify-between">
										<span className="flex items-center gap-1.5 text-xs text-text-muted">
											<FiUsers size={12} />
											{group.memberIds.length} members
										</span>
										<Link
											href={`/group/${group.id}/feed`}
											className="inline-flex items-center gap-1 rounded-lg bg-primary-light text-primary px-3 py-1.5 text-xs font-semibold hover:bg-primary hover:text-white transition-all"
										>
											Open Feed
											<FiArrowRight size={12} />
										</Link>
									</div>
								</div>
							);
						})}
					</div>
				)}
			</main>

			<Footer />

			{/* ─── Create Group Modal ─── */}
			<AnimatePresence>
				{modalOpen && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							className="w-full max-w-md rounded-2xl border border-border bg-surface p-6 shadow-xl space-y-4"
						>
							<div className="flex items-center justify-between border-b border-border pb-3">
								<h3 className="text-base font-bold text-text-primary">
									Create Study Group
								</h3>
								<button
									onClick={() => setModalOpen(false)}
									className="rounded-lg p-1 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-all"
								>
									<FiX size={16} />
								</button>
							</div>

							<form
								onSubmit={handleCreateGroup}
								className="space-y-3"
							>
								{error && (
									<div className="text-xs text-danger bg-danger-bg border border-danger/20 p-2 rounded text-center">
										{error}
									</div>
								)}

								<Input
									type="text"
									label="Group Name"
									placeholder="e.g. Physics Homework Club"
									value={name}
									onChange={(e) => setName(e.target.value)}
									required
								/>

								<Input
									type="text"
									label="Subject / Domain"
									placeholder="e.g. Mathematics"
									value={subject}
									onChange={(e) => setSubject(e.target.value)}
									required
								/>

								<div className="space-y-1.5">
									<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
										Meeting Frequency
									</label>
									<select
										value={frequency}
										onChange={(e) =>
											setFrequency(e.target.value)
										}
										className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-2 text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
									>
										<option value="Weekly">Weekly</option>
										<option value="Bi-weekly">
											Bi-weekly
										</option>
										<option value="Fortnightly">
											Fortnightly
										</option>
										<option value="Monthly">Monthly</option>
									</select>
								</div>

								<Slider
									label="Max Capacity"
									min="2"
									max="20"
									value={maxMembers}
									onChange={(e) =>
										setMaxMembers(+e.target.value)
									}
								/>

								<div className="space-y-1.5">
									<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
										Description
									</label>
									<textarea
										rows={3}
										placeholder="Describe study goals..."
										value={description}
										onChange={(e) =>
											setDescription(e.target.value)
										}
										className="w-full rounded-lg border border-border bg-surface-secondary p-3 text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
										required
									/>
								</div>

								<button
									type="submit"
									disabled={loading}
									className="w-full rounded-lg bg-primary py-2.5 text-xs font-semibold text-white hover:bg-primary-hover shadow-sm transition-all disabled:opacity-50 mt-2"
								>
									{loading ? 'Creating...' : 'Create'}
								</button>
							</form>
						</motion.div>
					</div>
				)}
			</AnimatePresence>
		</div>
	);
}
