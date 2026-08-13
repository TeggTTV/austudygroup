'use client';

import React, { useState, useEffect, useRef } from 'react';
import { useParams, useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import {
	FiSend,
	FiPaperclip,
	FiLink,
	FiFile,
	FiX,
	FiDownload,
	FiTrash2,
	FiMoreVertical,
} from 'react-icons/fi';
import { Input } from '@/components/ui/Input';
import { Checkbox } from '@/components/ui/Checkbox';
import { ClipLoader } from 'react-spinners';
import Image from 'next/image';
import { motion, AnimatePresence } from 'framer-motion';

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

	if (freq.startsWith('Weekly on ')) {
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

export default function GroupFeedPage() {
	const { id } = useParams() as { id: string };
	const {
		currentUser,
		groups,
		feedMessages,
		postMessage,
		users,
		hydrated,
		fetchFeedMessages,
		deleteMessage,
		updateGroupSettings,
	} = useAppContext();
	const router = useRouter();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const [messageText, setMessageText] = useState('');
	const [fileInput, setFileInput] = useState<File | null>(null);
	const [resourceLink, setResourceLink] = useState('');
	const [resourceTitle, setResourceTitle] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	// Settings state
	const [settingsOpen, setSettingsOpen] = useState(false);
	const [settingsName, setSettingsName] = useState('');
	const [settingsDesc, setSettingsDesc] = useState('');
	const [settingsFreq, setSettingsFreq] = useState('Weekly');
	const [settingsPrivate, setSettingsPrivate] = useState(false);
	const [settingsFilter, setSettingsFilter] = useState(false);
	const [updating, setUpdating] = useState(false);
	const [settingsError, setSettingsError] = useState('');

	// Custom frequency state variables
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

	const group = groups.find((g) => g.id === id);

	/* eslint-disable react-hooks/set-state-in-effect */
	useEffect(() => {
		if (group) {
			setSettingsName(group.name);
			setSettingsDesc(group.description);
			setSettingsFreq(group.meetingFrequency);
			setSettingsPrivate(!!group.isPrivate);
			setSettingsFilter(!!group.profanityFilter);

			const { isCustom, days, time } = parseCustomFrequency(
				group.meetingFrequency,
			);
			setIsCustomFreq(isCustom);
			setCustomDays(days);
			setCustomTime(time);
		}
	}, [group]);
	/* eslint-enable react-hooks/set-state-in-effect */

	const handleSaveSettings = async (e: React.FormEvent) => {
		e.preventDefault();
		setUpdating(true);
		setSettingsError('');

		const finalFreq = compileFrequency(
			isCustomFreq,
			settingsFreq,
			customDays,
			customTime,
		);

		const res = await updateGroupSettings(id, {
			name: settingsName,
			description: settingsDesc,
			meetingFrequency: finalFreq,
			isPrivate: settingsPrivate,
			profanityFilter: settingsFilter,
		});
		setUpdating(false);
		if (res.success) {
			setSettingsOpen(false);
		} else {
			setSettingsError(res.error || 'Failed to update settings');
		}
	};

	const handleKickMember = async (memberId: string) => {
		if (confirm('Are you sure you want to kick this member?')) {
			const res = await updateGroupSettings(id, {
				kickUserId: memberId,
			});
			if (!res.success) {
				alert(res.error || 'Failed to kick member');
			}
		}
	};

	useEffect(() => {
		if (group && currentUser) {
			const isMem =
				group.memberIds.includes(currentUser.id) ||
				group.leaderId === currentUser.id;
			if (!isMem) router.push('/groups');
		}
	}, [group, currentUser, router]);

	// Auto-scroll to bottom when new messages arrive
	useEffect(() => {
		if (!isLoading) {
			messagesEndRef.current?.scrollIntoView({ behavior: 'smooth' });
		}
	}, [feedMessages, isLoading]);

	useEffect(() => {
		async function loadFeed() {
			setIsLoading(true);
			await fetchFeedMessages(id);
			setIsLoading(false);
		}
		if (id) {
			loadFeed();
		}
	}, [id, fetchFeedMessages]);

	if (!hydrated) return null;

	if (!currentUser || !group) {
		return (
			<div className="flex min-h-screen flex-col bg-background">
				<Nav />
				<main className="grow flex items-center justify-center">
					<p className="text-sm text-text-muted">
						Group not found or you lack permission.
					</p>
				</main>
				<Footer />
			</div>
		);
	}

	const groupMessages = feedMessages.filter((m) => m.groupId === id);
	const links = groupMessages.filter((m) =>
		m.content.startsWith('🔗 Resource shared:'),
	);
	const files = groupMessages.filter((m) => m.fileName);
	const normalMessages = groupMessages.filter(
		(m) => !m.content.startsWith('🔗 Resource shared:'),
	);

	const handlePostMessage = (e: React.FormEvent) => {
		e.preventDefault();
		if (!messageText.trim() && !fileInput) return;
		if (fileInput) {
			const reader = new FileReader();
			reader.onload = () => {
				const base64Url = reader.result as string;
				postMessage(
					id,
					messageText || `Shared a file: ${fileInput.name}`,
					fileInput.name,
					base64Url,
				);
				setFileInput(null);
			};
			reader.readAsDataURL(fileInput);
		} else {
			postMessage(id, messageText);
		}
		setMessageText('');
	};

	const handleDownloadFile = (fileName: string, fileUrl: string) => {
		const link = document.createElement('a');
		link.href = fileUrl;
		link.download = fileName;
		document.body.appendChild(link);
		link.click();
		document.body.removeChild(link);
	};

	const handlePostResource = (e: React.FormEvent) => {
		e.preventDefault();
		if (!resourceLink.trim() || !resourceTitle.trim()) return;
		postMessage(
			id,
			`🔗 Resource shared: [${resourceTitle}](${resourceLink})`,
		);
		setResourceTitle('');
		setResourceLink('');
	};

	const getUserName = (uid: string) =>
		users.find((u) => u.id === uid)?.name || 'Unknown';
	const getUserAvatar = (uid: string) =>
		users.find((u) => u.id === uid)?.avatarUrl || undefined;

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />

			<main className="grow mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
				{/* ─── Messages Feed ─── */}
				<section className="flex-1 bg-surface border border-border rounded-xl flex flex-col h-[75vh]">
					{/* Group Header */}
					<div className="border-b border-border px-5 py-3 flex items-center justify-between">
						<div>
							<span className="text-[10px] font-bold text-primary bg-primary-light px-2 py-0.5 rounded-full uppercase tracking-wider">
								{group.subject}
							</span>
							<h1 className="text-base font-bold text-text-primary mt-1">
								{group.name}
							</h1>
						</div>
						<div className="flex items-center gap-3">
							<span className="text-xs text-text-muted">
								{group.meetingFrequency}
							</span>
							{group.leaderId === currentUser.id && (
								<button
									onClick={() => setSettingsOpen(true)}
									className="p-1.5 rounded-lg text-text-secondary hover:bg-surface-secondary hover:text-text-primary transition-colors cursor-pointer flex items-center justify-center"
									title="Group Settings"
								>
									<FiMoreVertical size={16} />
								</button>
							)}
						</div>
					</div>

					{/* Messages */}
					<div className="grow overflow-y-auto p-4 space-y-3">
						{isLoading ? (
							<div className="flex justify-center items-center py-20">
								<ClipLoader color="var(--primary)" size={35} />
							</div>
						) : normalMessages.length === 0 ? (
							<div className="text-center py-16 text-text-muted text-xs">
								No messages yet. Start the conversation!
							</div>
						) : (
							normalMessages.map((msg) => {
								const isMe = msg.userId === currentUser.id;
								return (
									<div
										key={msg.id}
										className={`flex items-start space-x-2.5 ${isMe ? 'flex-row-reverse space-x-reverse' : ''}`}
									>
										{' '}
										{/* Use an IIFE to safely narrow the type of avatar */}
										{(() => {
											const avatar = getUserAvatar(
												msg.userId,
											);
											return avatar ? (
												<Image
													className="h-7 w-7 rounded-full object-cover border border-border shrink-0"
													src={avatar}
													alt={getUserName(
														msg.userId,
													)}
													width={28} // h-7 w-7 is 28px
													height={28} // h-7 w-7 is 28px
												/>
											) : (
												<svg
													stroke="currentColor"
													fill="currentColor"
													strokeWidth="0"
													viewBox="0 0 496 512"
													className="h-7 w-7 text-primary shrink-0" // Adjusted class to match Image size
													xmlns="http://www.w3.org/2000/svg"
												>
													<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
												</svg>
											);
										})()}
										<div
											className={`max-w-[70%] rounded-xl px-3.5 py-2.5 ${
												isMe
													? 'bg-primary text-white'
													: 'bg-surface-secondary border border-border'
											}`}
										>
											{!isMe && (
												<p className="text-[10px] font-semibold text-primary mb-0.5">
													{getUserName(msg.userId)}
												</p>
											)}
											<p
												className={`text-xs leading-relaxed whitespace-pre-wrap ${isMe ? 'text-white/95' : 'text-text-secondary'}`}
											>
												{msg.content}
											</p>
											{msg.fileName && msg.fileUrl && (
												<div
													className={`mt-2 flex items-center space-x-1.5 p-1.5 rounded-lg text-xs ${isMe ? 'bg-white/15' : 'bg-surface-tertiary border border-border'}`}
												>
													<FiFile size={12} />
													<span className="truncate font-medium text-[11px]">
														{msg.fileName}
													</span>
												</div>
											)}
											<div className="flex items-center justify-between mt-1 gap-2">
												<span
													className={`text-[9px] ${isMe ? 'text-white/50' : 'text-text-muted'}`}
												>
													{new Date(
														msg.createdAt,
													).toLocaleTimeString([], {
														hour: '2-digit',
														minute: '2-digit',
													})}
												</span>
												{isMe &&
													new Date().getTime() -
														new Date(
															msg.createdAt,
														).getTime() <
														5 * 60 * 1000 && (
														<button
															onClick={() =>
																deleteMessage(
																	msg.id,
																)
															}
															className={`text-[10px] hover:underline flex items-center gap-0.5 cursor-pointer ml-auto ${isMe ? 'text-white/70 hover:text-white' : 'text-danger hover:text-danger-hover'}`}
															title="Delete message"
														>
															<FiTrash2
																size={10}
															/>
															Delete
														</button>
													)}
											</div>
										</div>
									</div>
								);
							})
						)}
						<div ref={messagesEndRef} />
					</div>

					{/* Compose */}
					<form
						onSubmit={handlePostMessage}
						className="border-t border-border p-3"
					>
						{fileInput && (
							<div className="flex items-center justify-between bg-primary-light px-3 py-1.5 rounded-lg mb-2 text-xs">
								<span className="text-primary font-medium truncate">
									📎 {fileInput.name}
								</span>
								<button
									type="button"
									onClick={() => setFileInput(null)}
								>
									<FiX size={14} className="text-primary" />
								</button>
							</div>
						)}
						<div className="flex items-end gap-2 bg-surface-secondary border border-border rounded-xl p-1.5 focus-within:ring-1 focus-within:ring-primary/30">
							<textarea
								rows={1}
								value={messageText}
								onChange={(e) => setMessageText(e.target.value)}
								placeholder="Type a message…"
								className="grow bg-transparent border-0 resize-none text-xs text-text-primary placeholder-text-muted focus:outline-none focus:ring-0 p-2"
								onKeyDown={(e) => {
									if (e.key === 'Enter' && !e.shiftKey) {
										e.preventDefault();
										handlePostMessage(e);
									}
								}}
							/>
							<div className="flex items-center space-x-1 px-1 pb-1">
								<label className="cursor-pointer p-1.5 rounded-lg text-text-muted hover:bg-surface-tertiary hover:text-text-primary transition-colors">
									<FiPaperclip size={15} />
									<input
										type="file"
										className="hidden"
										onChange={(e) =>
											setFileInput(
												e.target.files?.[0] || null,
											)
										}
									/>
								</label>
								<button
									type="submit"
									className="rounded-lg bg-primary p-1.5 text-white hover:bg-primary-hover shadow-sm transition-all"
								>
									<FiSend size={14} />
								</button>
							</div>
						</div>
					</form>
				</section>

				{/* ─── Sidebar ─── */}
				<aside className="w-full lg:w-72 shrink-0 flex flex-col gap-5">
					{/* Resource Links */}
					<section className="bg-surface border border-border rounded-xl p-4">
						<h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-1.5">
							<FiLink size={14} /> Share a Link
						</h3>
						<form
							onSubmit={handlePostResource}
							className="space-y-3"
						>
							<Input
								type="text"
								required
								placeholder="Title (e.g. Syllabus)"
								value={resourceTitle}
								onChange={(e) =>
									setResourceTitle(e.target.value)
								}
							/>
							<div className="flex gap-2 items-end">
								<div className="grow">
									<Input
										type="url"
										required
										placeholder="https://..."
										value={resourceLink}
										onChange={(e) =>
											setResourceLink(e.target.value)
										}
									/>
								</div>
								<button
									type="submit"
									className="rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover shadow-sm transition-all h-9.5 flex items-center justify-center shrink-0"
								>
									Add
								</button>
							</div>
						</form>

						<div className="border-t border-border mt-3 pt-3">
							<h4 className="text-[10px] font-bold text-text-muted uppercase tracking-wider mb-2">
								Links
							</h4>
							{links.length === 0 ? (
								<p className="text-[11px] text-text-muted">
									No resources linked yet.
								</p>
							) : (
								<div className="space-y-1.5 max-h-36 overflow-y-auto">
									{links.map((link) => {
										const m =
											link.content.match(
												/\[(.*?)\]\((.*?)\)/,
											);
										const title = m ? m[1] : 'Link';
										let href = m ? m[2] : '#';
										if (
											href !== '#' &&
											!href.startsWith('http://') &&
											!href.startsWith('https://')
										) {
											href = `https://${href}`;
										}
										return (
											<a
												key={link.id}
												href={href}
												target="_blank"
												rel="noreferrer"
												className="flex items-center space-x-1.5 text-xs text-primary hover:underline bg-surface-secondary p-2 rounded-lg border border-border"
											>
												<FiLink size={11} />
												<span className="truncate font-medium">
													{title}
												</span>
											</a>
										);
									})}
								</div>
							)}
						</div>
					</section>

					{/* Shared Files */}
					<section className="bg-surface border border-border rounded-xl p-4">
						<h3 className="text-sm font-bold text-text-primary mb-3 flex items-center gap-1.5">
							<FiFile size={14} /> Documents
						</h3>
						{files.length === 0 ? (
							<p className="text-[11px] text-text-muted">
								No files shared yet. Use the paperclip to send.
							</p>
						) : (
							<div className="space-y-1.5 max-h-48 overflow-y-auto">
								{files.map((file) => (
									<div
										key={file.id}
										className="flex items-center justify-between p-2 rounded-lg bg-surface-secondary border border-border text-xs"
									>
										<div className="flex items-center space-x-1.5 truncate">
											<FiFile
												size={12}
												className="text-primary"
											/>
											<span className="text-text-primary truncate font-medium text-[11px]">
												{file.fileName}
											</span>
										</div>
										<button
											onClick={() => {
												if (
													file.fileName &&
													file.fileUrl
												) {
													handleDownloadFile(
														file.fileName,
														file.fileUrl,
													);
												}
											}}
											className="text-primary hover:underline text-[10px] font-semibold shrink-0"
										>
											<FiDownload size={12} />
										</button>
									</div>
								))}
							</div>
						)}
					</section>
				</aside>
			</main>

			{/* Group Settings Modal */}
			<AnimatePresence>
				{settingsOpen && (
					<div className="fixed inset-0 z-50 flex items-center justify-center bg-black/40 backdrop-blur-sm p-4">
						<motion.div
							initial={{ opacity: 0, scale: 0.95 }}
							animate={{ opacity: 1, scale: 1 }}
							exit={{ opacity: 0, scale: 0.95 }}
							className="w-full max-w-lg rounded-2xl border border-border bg-surface p-6 shadow-xl space-y-4 max-h-[90vh] overflow-y-auto"
						>
							<div className="flex items-center justify-between border-b border-border pb-3">
								<h3 className="text-base font-bold text-text-primary">
									Group Settings
								</h3>
								<button
									onClick={() => setSettingsOpen(false)}
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
										{group.memberIds.filter((id) => id !== currentUser.id).length === 0 ? (
											<p className="text-xs text-text-muted">No other members in this group yet.</p>
										) : (
											group.memberIds
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
										onClick={() => setSettingsOpen(false)}
										className="px-4 py-2 border border-border rounded-lg text-xs font-semibold text-text-secondary hover:bg-surface-secondary transition-colors"
									>
										Cancel
									</button>
									<button
										type="submit"
										disabled={updating}
										className="px-4 py-2 rounded-lg bg-primary text-white text-xs font-semibold hover:bg-primary-hover transition-colors disabled:opacity-50"
									>
										{updating ? 'Saving...' : 'Save Settings'}
									</button>
								</div>
							</form>
						</motion.div>
					</div>
				)}
			</AnimatePresence>

			<Footer />
		</div>
	);
}
