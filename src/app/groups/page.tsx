'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FiUsers, FiArrowRight, FiX, FiPlus, FiMoreVertical } from 'react-icons/fi';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Slider } from '@/components/ui/Slider';
import { motion, AnimatePresence } from 'framer-motion';
import Image from 'next/image';

const parseCustomFrequency = (freq: string) => {
	const daysMap: Record<string, boolean> = {
		Mon: false,
		Tue: false,
		Wed: false,
		Thu: false,
		Fri: false,
		Sat: false,
		Sun: false,
	};
	let time = '12:00';
	let isCustom = false;

	if (freq && freq.startsWith('Weekly on ')) {
		isCustom = true;
		const parts = freq.replace('Weekly on ', '').split(' at ');
		if (parts[0]) {
			parts[0].split(', ').forEach((day) => {
				if (daysMap[day] !== undefined) daysMap[day] = true;
			});
		}
		if (parts[1]) {
			time = parts[1];
		}
	}
	return { isCustom, days: daysMap, time };
};

const compileFrequency = (
	isCustom: boolean,
	preset: string,
	days: Record<string, boolean>,
	time: string,
) => {
	if (!isCustom) return preset;
	const selectedDays = Object.keys(days).filter((d) => days[d]);
	if (selectedDays.length === 0) return `Weekly at ${time}`;
	return `Weekly on ${selectedDays.join(', ')} at ${time}`;
};

export default function GroupsPage() {
	const {
		currentUser,
		groups,
		hydrated,
		createGroup,
		updateGroupSettings,
		users,
	} = useAppContext();
	const router = useRouter();

	const [modalOpen, setModalOpen] = useState(false);
	const [name, setName] = useState('');
	const [subject, setSubject] = useState('');
	const [description, setDescription] = useState('');
	const [frequency, setFrequency] = useState('Weekly');
	const [maxMembers, setMaxMembers] = useState(8);
	const [loading, setLoading] = useState(false);
	const [error, setError] = useState('');

	// Settings state
	const [selectedGroupId, setSelectedGroupId] = useState<string | null>(null);
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [settingsName, setSettingsName] = useState('');
	const [settingsDesc, setSettingsDesc] = useState('');
	const [settingsFreq, setSettingsFreq] = useState('Weekly');
	const [settingsPrivate, setSettingsPrivate] = useState(false);
	const [settingsFilter, setSettingsFilter] = useState(false);
	const [updating, setUpdating] = useState(false);
	const [settingsError, setSettingsError] = useState('');

	const [isCustomFreq, setIsCustomFreq] = useState(false);
	const [customDays, setCustomDays] = useState<Record<string, boolean>>({
		Mon: false,
		Tue: false,
		Wed: false,
		Thu: false,
		Fri: false,
		Sat: false,
		Sun: false,
	});
	const [customTime, setCustomTime] = useState('12:00');

	const openSettings = (g: (typeof groups)[number]) => {
		setSelectedGroupId(g.id);
		setSettingsName(g.name);
		setSettingsDesc(g.description);
		setSettingsFreq(g.meetingFrequency);
		setSettingsPrivate(!!g.isPrivate);
		setSettingsFilter(!!g.profanityFilter);

		const { isCustom, days, time } = parseCustomFrequency(
			g.meetingFrequency,
		);
		setIsCustomFreq(isCustom);
		setCustomDays(days);
		setCustomTime(time);

		setSettingsOpen(true);
	};

	const handleSaveSettings = async (e: React.FormEvent) => {
		e.preventDefault();
		if (!selectedGroupId) return;
		setUpdating(true);
		setSettingsError('');

		const finalFreq = compileFrequency(
			isCustomFreq,
			settingsFreq,
			customDays,
			customTime,
		);

		const res = await updateGroupSettings(selectedGroupId, {
			name: settingsName,
			description: settingsDesc,
			meetingFrequency: finalFreq,
			isPrivate: settingsPrivate,
			profanityFilter: settingsFilter,
		});
		setUpdating(false);
		if (res.success) {
			setSettingsOpen(false);
			setSelectedGroupId(null);
		} else {
			setSettingsError(res.error || 'Failed to update settings');
		}
	};

	const handleKickMember = async (memberId: string) => {
		if (!selectedGroupId) return;
		if (confirm('Are you sure you want to kick this member?')) {
			const res = await updateGroupSettings(selectedGroupId, {
				kickUserId: memberId,
			});
			if (!res.success) {
				alert(res.error || 'Failed to kick member');
			}
		}
	};

	const getUserName = (uid: string) =>
		users.find((u) => u.id === uid)?.name || 'Unknown';
	const getUserAvatar = (uid: string) =>
		users.find((u) => u.id === uid)?.avatarUrl || undefined;

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
									onClick={() => router.push(`/group/${group.id}/feed`)}
									className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 hover:shadow-md hover:border-primary/30 cursor-pointer transition-all"
								>
									<div>
										<div className="flex items-center justify-between">
											<span className="inline-flex items-center rounded-full bg-primary-light px-2 py-0.5 text-[10px] font-semibold text-primary">
												{group.subject}
											</span>
											<div className="flex items-center gap-1.5">
												{isLeader ? (
													<span className="text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full">
														Leader
													</span>
												) : (
													<span className="text-[10px] font-bold text-success bg-success-bg px-2 py-0.5 rounded-full">
														Member
													</span>
												)}
												{isLeader && (
													<button
														onClick={(e) => {
															e.stopPropagation();
															openSettings(group);
														}}
														className="p-1 rounded text-text-secondary hover:bg-surface-secondary hover:text-text-primary transition-all flex items-center justify-center cursor-pointer"
														title="Group Settings"
													>
														<FiMoreVertical size={14} />
													</button>
												)}
											</div>
										</div>
										<h3 className="mt-3 text-base font-bold text-text-primary group-hover:text-primary transition-colors">
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
										<span className="text-xs text-primary font-semibold group-hover:underline flex items-center gap-0.5">
											Open Feed
											<FiArrowRight size={12} />
										</span>
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

			{/* Group Settings Modal */}
			<AnimatePresence>
				{settingsOpen && selectedGroupId && (
					(() => {
						const groupObj = groups.find(g => g.id === selectedGroupId);
						if (!groupObj) return null;
						return (
							<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
								<motion.div
									initial={{ opacity: 0, scale: 0.95 }}
									animate={{ opacity: 1, scale: 1 }}
									exit={{ opacity: 0, scale: 0.95 }}
									className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto"
								>
									<div className="flex items-center justify-between border-b border-border pb-3">
										<h3 className="text-base font-bold text-text-primary">
											Group Settings — {groupObj.name}
										</h3>
										<button
											onClick={() => {
												setSettingsOpen(false);
												setSelectedGroupId(null);
											}}
											className="rounded-lg p-1 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-all cursor-pointer"
										>
											<FiX size={16} />
										</button>
									</div>

									<form onSubmit={handleSaveSettings} className="space-y-4">
										{settingsError && (
											<div className="text-xs text-danger bg-danger-bg border border-danger/20 p-2 rounded text-center">
												{settingsError}
											</div>
										)}

										<Input
											type="text"
											label="Group Name"
											value={settingsName}
											onChange={(e) => setSettingsName(e.target.value)}
											required
										/>

										<div className="space-y-3">
											<div className="flex items-center justify-between">
												<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
													Meeting Frequency
												</label>
												<div className="flex gap-2 bg-surface-secondary border border-border p-1 rounded-lg">
													<button
														type="button"
														onClick={() => setIsCustomFreq(false)}
														className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
															!isCustomFreq
																? 'bg-primary text-white shadow-xs'
																: 'text-text-secondary hover:text-text-primary'
														}`}
													>
														Preset
													</button>
													<button
														type="button"
														onClick={() => setIsCustomFreq(true)}
														className={`px-2.5 py-1 text-xs font-semibold rounded-md transition-all cursor-pointer ${
															isCustomFreq
																? 'bg-primary text-white shadow-xs'
																: 'text-text-secondary hover:text-text-primary'
														}`}
													>
														Custom
													</button>
												</div>
											</div>

											{!isCustomFreq ? (
												<div className="space-y-1.5">
													<select
														value={settingsFreq}
														onChange={(e) => setSettingsFreq(e.target.value)}
														className="w-full rounded-lg border border-border bg-surface-secondary px-3 py-2 text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-primary/30 cursor-pointer"
													>
														<option value="Weekly">Weekly</option>
														<option value="Bi-weekly">Bi-weekly</option>
														<option value="Fortnightly">Fortnightly</option>
														<option value="Monthly">Monthly</option>
													</select>
												</div>
											) : (
												<div className="space-y-3.5 p-3.5 bg-surface-secondary border border-border rounded-xl">
													<div className="space-y-2">
														<label className="block text-[10px] font-bold text-text-muted uppercase tracking-wider">
															Select Days
														</label>
														<div className="flex flex-wrap gap-2">
															{['Mon', 'Tue', 'Wed', 'Thu', 'Fri', 'Sat', 'Sun'].map((day) => (
																<label
																	key={day}
																	className={`px-3 py-1.5 rounded-lg border text-xs font-semibold cursor-pointer select-none transition-all ${
																		customDays[day]
																			? 'bg-primary/10 border-primary text-primary'
																			: 'border-border bg-surface hover:bg-surface-secondary text-text-secondary'
																	}`}
																>
																	<input
																		type="checkbox"
																		className="sr-only"
																		checked={!!customDays[day]}
																		onChange={(e) =>
																			setCustomDays((prev) => ({
																				...prev,
																				[day]: e.target.checked,
																			}))
																		}
																	/>
																	{day}
																</label>
															))}
														</div>
													</div>
													<div className="space-y-2">
														<label className="block text-[10px] font-bold text-text-muted uppercase tracking-wider">
															Meeting Time
														</label>
														<input
															type="time"
															value={customTime}
															onChange={(e) => setCustomTime(e.target.value)}
															className="w-full sm:w-auto rounded-lg border border-border bg-surface px-3 py-2 text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-primary/30"
														/>
													</div>
												</div>
											)}
										</div>

										<div className="space-y-1.5">
											<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
												Description
											</label>
											<textarea
												rows={3}
												value={settingsDesc}
												onChange={(e) => setSettingsDesc(e.target.value)}
												className="w-full rounded-lg border border-border bg-surface-secondary p-3 text-xs text-text-primary focus:outline-none focus:ring-1 focus:ring-primary/30 resize-none"
												required
											/>
										</div>

										{/* Toggles */}
										<div className="flex flex-col gap-3.5 py-3 border-t border-b border-border">
											<Checkbox
												label="Private Group (Hides from Search)"
												checked={settingsPrivate}
												onChange={(e) => setSettingsPrivate(e.target.checked)}
											/>
											<Checkbox
												label="Enable Profanity Filter"
												checked={settingsFilter}
												onChange={(e) => setSettingsFilter(e.target.checked)}
											/>
										</div>

										{/* Member Management */}
										<div>
											<h4 className="text-xs font-bold text-text-primary mb-2">Members</h4>
											<div className="space-y-2 max-h-40 overflow-y-auto">
												{groupObj.memberIds.filter((id) => id !== currentUser.id).length === 0 ? (
													<p className="text-xs text-text-muted">No other members in this group yet.</p>
												) : (
													groupObj.memberIds
														.filter((id) => id !== currentUser.id)
														.map((memberId) => {
															const memberName = getUserName(memberId);
															const memberAvatar = getUserAvatar(memberId);
															return (
																<div key={memberId} className="flex items-center justify-between p-2 rounded-lg bg-surface-secondary border border-border">
																	<div className="flex items-center gap-2">
																		{memberAvatar ? (
																			<Image
																				src={memberAvatar}
																				alt={memberName}
																				className="w-6 h-6 rounded-full object-cover"
																				width={24}
																				height={24}
																			/>
																		) : (
																			<div className="w-6 h-6 rounded-full bg-primary-light flex items-center justify-center text-[10px] font-bold text-primary">
																				{memberName[0]}
																			</div>
																		)}
																		<span className="text-xs font-medium text-text-primary">{memberName}</span>
																	</div>
																	<button
																		type="button"
																		onClick={() => handleKickMember(memberId)}
																		className="text-xs text-danger hover:underline font-semibold"
																	>
																		Kick
																	</button>
																</div>
															);
														})
												)}
											</div>
										</div>

										<div className="flex justify-end gap-3 pt-3">
											<button
												type="button"
												onClick={() => {
													setSettingsOpen(false);
													setSelectedGroupId(null);
												}}
												className="px-4 py-2 border border-border rounded-lg text-xs font-semibold text-text-secondary hover:bg-surface-secondary transition-colors cursor-pointer"
											>
												Cancel
											</button>
											<button
												type="submit"
												disabled={updating}
												className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50 cursor-pointer"
											>
												{updating ? 'Saving...' : 'Save Settings'}
											</button>
										</div>
									</form>
								</motion.div>
							</div>
						);
					})()
				)}
			</AnimatePresence>
		</div>
	);
}
