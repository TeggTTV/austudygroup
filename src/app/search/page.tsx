'use client';

import { useState, useEffect, Suspense } from 'react';
import { useSearchParams, useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FiSearch, FiX, FiUsers } from 'react-icons/fi';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { Slider } from '@/components/ui/Slider';
import { ClipLoader } from 'react-spinners';
import Image from 'next/image';

const parseGroupFrequency = (freq: string) => {
	const daysMap: Record<string, boolean> = {
		Mon: false,
		Tue: false,
		Wed: false,
		Thu: false,
		Fri: false,
		Sat: false,
		Sun: false,
	};
	let time = null;
	let hasCustomDays = false;

	if (freq.startsWith('Weekly on ')) {
		hasCustomDays = true;
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
	return { hasCustomDays, days: daysMap, time };
};

function SearchContent() {
	const { currentUser, groups, requests, sendJoinRequest, users, hydrated } =
		useAppContext();
	const searchParams = useSearchParams();
	const router = useRouter();

	const [query, setQuery] = useState(searchParams.get('q') || '');
	const [selectedSubject, setSelectedSubject] = useState('');
	const [searchDays, setSearchDays] = useState<Record<string, boolean>>({
		Mon: false,
		Tue: false,
		Wed: false,
		Thu: false,
		Fri: false,
		Sat: false,
		Sun: false,
	});
	const [startTime, setStartTime] = useState('');
	const [endTime, setEndTime] = useState('');
	const [minMembers, setMinMembers] = useState(1);
	const [maxMembers, setMaxMembers] = useState(15);
	const [selectedGroup, setSelectedGroup] = useState<
		(typeof groups)[number] | null
	>(null);
	const [isLoading, setIsLoading] = useState(false);

	useEffect(() => {
		const q = searchParams.get('q');
		// eslint-disable-next-line react-hooks/set-state-in-effect
		if (q) setQuery(q);
		const gp = searchParams.get('group');
		if (gp) {
			const g = groups.find((x) => x.id === gp);
			if (g) setSelectedGroup(g);
		}
	}, [searchParams, groups]);

	useEffect(() => {
		// eslint-disable-next-line react-hooks/set-state-in-effect
		setIsLoading(true);
		const timer = setTimeout(() => setIsLoading(false), 500);
		return () => clearTimeout(timer);
	}, [
		query,
		selectedSubject,
		searchDays,
		startTime,
		endTime,
		minMembers,
		maxMembers,
	]);

	const subjects = Array.from(new Set(groups.map((g) => g.subject)));

	const filteredGroups = groups.filter((g) => {
		const isGroupPrivate = g.isPrivate === true;
		const isVisible =
			!isGroupPrivate ||
			(currentUser &&
				(g.leaderId === currentUser.id ||
					g.memberIds.includes(currentUser.id)));
		const matchQ =
			g.name.toLowerCase().includes(query.toLowerCase()) ||
			g.description.toLowerCase().includes(query.toLowerCase()) ||
			g.subject.toLowerCase().includes(query.toLowerCase());
		const matchSub = selectedSubject ? g.subject === selectedSubject : true;

		// Frequency Matching (Day of Week and Time Range)
		const {
			hasCustomDays,
			days: groupDays,
			time: groupTime,
		} = parseGroupFrequency(g.meetingFrequency);

		const activeSearchDays = Object.keys(searchDays).filter(
			(d) => searchDays[d],
		);
		const matchDays =
			activeSearchDays.length === 0 ||
			(hasCustomDays && activeSearchDays.some((day) => groupDays[day]));

		let matchTime = true;
		if (startTime || endTime) {
			if (groupTime) {
				if (startTime && groupTime < startTime) matchTime = false;
				if (endTime && groupTime > endTime) matchTime = false;
			} else {
				matchTime = false;
			}
		}

		const matchMin = g.minMembers >= minMembers;
		const matchMax = g.maxMembers <= maxMembers;
		return (
			isVisible &&
			matchQ &&
			matchSub &&
			matchDays &&
			matchTime &&
			matchMin &&
			matchMax
		);
	});

	const getLeaderName = (id: string) =>
		users.find((u) => u.id === id)?.name || 'Unknown';
	const getMemberDetails = (ids: string[]) =>
		users.filter((u) => ids.includes(u.id));
	const hasRequested = (gid: string) =>
		currentUser
			? requests.some(
					(r) => r.groupId === gid && r.userId === currentUser.id,
				)
			: false;
	const getRequestStatus = (gid: string) => {
		if (!currentUser) return null;
		return (
			requests.find(
				(r) => r.groupId === gid && r.userId === currentUser.id,
			)?.status ?? null
		);
	};
	const isMember = (g: (typeof groups)[number]) =>
		currentUser
			? g.memberIds.includes(currentUser.id) ||
				g.leaderId === currentUser.id
			: false;

	const clearFilters = () => {
		setSelectedSubject('');
		setQuery('');
		setMinMembers(1);
		setMaxMembers(15);
		setSearchDays({
			Mon: false,
			Tue: false,
			Wed: false,
			Thu: false,
			Fri: false,
			Sat: false,
			Sun: false,
		});
		setStartTime('');
		setEndTime('');
		router.push('/search');
	};

	const hasActiveFilters =
		selectedSubject ||
		query ||
		minMembers > 1 ||
		maxMembers < 15 ||
		Object.values(searchDays).some(Boolean) ||
		startTime ||
		endTime;

	if (!hydrated) return null;

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />

			<main className="flex-1 mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-8">
				<div className="flex flex-col lg:flex-row gap-8">
					{/* ─── Sidebar ─── */}
					<aside className="w-full lg:w-60 shrink-0">
						<div className="rounded-xl border border-border bg-surface p-5 sticky top-20">
							<div className="flex items-center justify-between mb-5">
								<h2 className="text-sm font-bold text-text-primary">
									Filters
								</h2>
								{hasActiveFilters && (
									<button
										onClick={clearFilters}
										className="text-xs text-primary hover:underline font-semibold"
									>
										Clear
									</button>
								)}
							</div>

							<div className="space-y-5">
								{/* Keywords */}
								<Input
									label="Keywords"
									icon={FiSearch}
									placeholder="Physics, Chem…"
									value={query}
									onChange={(e) => setQuery(e.target.value)}
								/>

								{/* Subject */}
								<div className="space-y-1.5">
									<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
										Subject
									</label>
									<div className="space-y-1.5">
										{subjects.map((sub) => (
											<Checkbox
												key={sub}
												label={sub}
												checked={
													selectedSubject === sub
												}
												onChange={() =>
													setSelectedSubject(
														selectedSubject === sub
															? ''
															: sub,
													)
												}
											/>
										))}
									</div>
								</div>

								{/* Meeting Days */}
								<div className="space-y-2">
									<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
										Meeting Days
									</label>
									<div className="flex flex-wrap gap-1">
										{[
											'Mon',
											'Tue',
											'Wed',
											'Thu',
											'Fri',
											'Sat',
											'Sun',
										].map((day) => (
											<button
												key={day}
												type="button"
												onClick={() =>
													setSearchDays((prev) => ({
														...prev,
														[day]: !prev[day],
													}))
												}
												className={`px-2 py-1 rounded-md text-[10px] font-bold border transition-all cursor-pointer ${
													searchDays[day]
														? 'bg-primary border-primary text-white'
														: 'border-border bg-surface-secondary text-text-secondary hover:bg-surface-tertiary'
												}`}
											>
												{day}
											</button>
										))}
									</div>
								</div>

								{/* Time Range */}
								<div className="space-y-2">
									<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
										Time Range
									</label>
									<div className="flex items-center gap-1.5">
										<input
											type="time"
											value={startTime}
											onChange={(e) =>
												setStartTime(e.target.value)
											}
											className="w-full rounded-lg border border-border bg-surface-secondary px-2 py-1.5 text-xs text-text-primary focus:outline-none"
										/>
										<span className="text-xs text-text-muted">
											to
										</span>
										<input
											type="time"
											value={endTime}
											onChange={(e) =>
												setEndTime(e.target.value)
											}
											className="w-full rounded-lg border border-border bg-surface-secondary px-2 py-1.5 text-xs text-text-primary focus:outline-none"
										/>
									</div>
								</div>

								{/* Sliders */}
								<Slider
									label="Min Members"
									min="1"
									max="15"
									value={minMembers}
									onChange={(e) =>
										setMinMembers(+e.target.value)
									}
								/>

								<Slider
									label="Max Members"
									min="1"
									max="15"
									value={maxMembers}
									onChange={(e) =>
										setMaxMembers(+e.target.value)
									}
								/>
							</div>
						</div>
					</aside>

					{/* ─── Results ─── */}
					<div className="grow">
						<p className="text-sm text-text-muted mb-5">
							Showing{' '}
							<span className="font-semibold text-text-primary">
								{filteredGroups.length}
							</span>{' '}
							study groups
						</p>

						{isLoading ? (
							<div className="flex justify-center items-center py-32">
								<ClipLoader color="var(--primary)" size={35} />
							</div>
						) : filteredGroups.length === 0 ? (
							<div className="text-center py-20 rounded-xl border border-dashed border-border">
								<FiSearch
									size={28}
									className="mx-auto text-text-muted mb-3"
								/>
								<h3 className="text-sm font-bold text-text-primary">
									No groups found
								</h3>
								<p className="mt-1 text-xs text-text-muted">
									Try adjusting your filters.
								</p>
							</div>
						) : (
							<div className="grid grid-cols-1 md:grid-cols-2 gap-4">
								{filteredGroups.map((group) => (
									<div
										key={group.id}
										onClick={() => setSelectedGroup(group)}
										className="group flex flex-col justify-between rounded-xl border border-border bg-surface p-5 hover:shadow-md hover:border-primary/30 cursor-pointer transition-all duration-200"
									>
										<div>
											<div className="flex items-center justify-between">
												<span className="inline-flex items-center rounded-full bg-primary-light px-2 py-0.5 text-[11px] font-semibold text-primary">
													{group.subject}
												</span>
												<span className="text-[11px] text-text-muted">
													{group.meetingFrequency}
												</span>
											</div>
											<h3 className="mt-3 text-sm font-bold text-text-primary group-hover:text-primary transition-colors">
												{group.name}
											</h3>
											<p className="mt-1.5 text-xs text-text-secondary line-clamp-2 leading-relaxed">
												{group.description}
											</p>
										</div>
										<div className="mt-4 flex items-center justify-between border-t border-border pt-3 text-xs text-text-muted">
											<span className="flex items-center gap-1">
												<FiUsers size={12} />
												{group.memberIds.length}/
												{group.maxMembers}
											</span>
											{hasRequested(group.id) ? (
												<span className="font-semibold text-warning">
													{getRequestStatus(
														group.id,
													) === 'PENDING'
														? 'Pending'
														: getRequestStatus(
																group.id,
															)}
												</span>
											) : isMember(group) ? (
												<span className="font-semibold text-success">
													Member
												</span>
											) : (
												<span className="font-semibold text-primary group-hover:underline">
													View →
												</span>
											)}
										</div>
									</div>
								))}
							</div>
						)}
					</div>
				</div>
			</main>

			<Footer />

			{/* ─── Group Detail Modal ─── */}
			{selectedGroup && (
				<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4 overflow-y-auto">
					<div className="relative w-full max-w-4xl rounded-2xl border border-border bg-surface shadow-xl overflow-hidden max-h-[85vh] flex flex-col">
						{/* Header */}
						<div className="flex items-center justify-between border-b border-border px-6 py-4">
							<div>
								<span className="inline-flex items-center rounded-full bg-primary-light px-2.5 py-0.5 text-[11px] font-semibold text-primary mb-1">
									{selectedGroup.subject}
								</span>
								<h2 className="text-lg font-bold text-text-primary">
									{selectedGroup.name}
								</h2>
							</div>
							<button
								onClick={() => {
									setSelectedGroup(null);
									router.push('/search');
								}}
								className="rounded-lg p-1.5 text-text-muted hover:bg-surface-secondary hover:text-text-primary transition-all"
							>
								<FiX size={18} />
							</button>
						</div>

						{/* Body */}
						<div className="flex-1 overflow-y-auto p-6 grid grid-cols-1 md:grid-cols-3 gap-6">
							{/* Left */}
							<div className="md:col-span-2 space-y-5">
								<div>
									<h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">
										Description
									</h4>
									<p className="text-sm text-text-secondary leading-relaxed bg-surface-secondary p-4 rounded-xl border border-border">
										{selectedGroup.description}
									</p>
								</div>
								<div className="grid grid-cols-2 gap-3 text-xs">
									<div className="bg-surface-secondary p-3 rounded-xl border border-border">
										<span className="text-text-muted block">
											Frequency
										</span>
										<span className="font-semibold text-text-primary mt-0.5 block">
											{selectedGroup.meetingFrequency}
										</span>
									</div>
									<div className="bg-surface-secondary p-3 rounded-xl border border-border">
										<span className="text-text-muted block">
											Leader
										</span>
										<span className="font-semibold text-text-primary mt-0.5 block">
											{getLeaderName(
												selectedGroup.leaderId,
											)}
										</span>
									</div>
								</div>
							</div>

							{/* Right */}
							<div className="space-y-5">
								<div>
									<h4 className="text-[11px] font-semibold text-text-muted uppercase tracking-wider mb-2">
										Members (
										{selectedGroup.memberIds.length}/
										{selectedGroup.maxMembers})
									</h4>
									<div className="space-y-1.5 max-h-48 overflow-y-auto">
										{getMemberDetails(
											selectedGroup.memberIds,
										).map((m) => (
											<div
												key={m.id}
												className="flex items-center space-x-2 p-2 rounded-lg bg-surface-secondary border border-border"
											>
												<Image
													src={
														m.avatarUrl ||
														'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyeiIvPjwvc3ZnPg=='
													}
													alt={m.name}
													className="h-6 w-6 rounded-full object-cover"
													width={24}
													height={24}
												/>
												<span className="text-xs font-medium text-text-primary">
													{m.name}
												</span>
												{m.id ===
													selectedGroup.leaderId && (
													<span className="text-[9px] bg-primary-light text-primary px-1.5 py-0.5 rounded-full font-bold ml-auto">
														Leader
													</span>
												)}
											</div>
										))}
									</div>
								</div>

								<div className="border-t border-border pt-5">
									{isMember(selectedGroup) ? (
										<div className="space-y-2">
											<div className="text-xs text-center text-text-secondary bg-success-bg p-2.5 rounded-xl border border-success/20">
												🎉 You are a member!
											</div>
											<button
												onClick={() =>
													router.push(
														`/group/${selectedGroup.id}/feed`,
													)
												}
												className="w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-all shadow-sm"
											>
												Enter Group Feed
											</button>
										</div>
									) : hasRequested(selectedGroup.id) ? (
										<button
											disabled
											className="w-full rounded-xl bg-surface-secondary border border-border py-2.5 text-sm font-semibold text-text-muted cursor-not-allowed"
										>
											Request:{' '}
											{getRequestStatus(selectedGroup.id)}
										</button>
									) : (
										<button
											onClick={() =>
												sendJoinRequest(
													selectedGroup.id,
												)
											}
											className="w-full rounded-xl bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary-hover transition-all shadow-sm"
										>
											Request to Join
										</button>
									)}
								</div>
							</div>
						</div>
					</div>
				</div>
			)}
		</div>
	);
}

export default function SearchPage() {
	return (
		<Suspense
			fallback={
				<div className="min-h-screen bg-background flex items-center justify-center text-text-muted text-sm">
					Loading…
				</div>
			}
		>
			<SearchContent />
		</Suspense>
	);
}
