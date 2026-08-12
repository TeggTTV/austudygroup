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
} from 'react-icons/fi';
import { Input } from '@/components/ui/Input';
import { ClipLoader } from 'react-spinners';

export default function GroupFeedPage() {
	const { id } = useParams() as { id: string };
	const { currentUser, groups, feedMessages, postMessage, users, hydrated } =
		useAppContext();
	const router = useRouter();
	const messagesEndRef = useRef<HTMLDivElement>(null);

	const [messageText, setMessageText] = useState('');
	const [fileInput, setFileInput] = useState<File | null>(null);
	const [resourceLink, setResourceLink] = useState('');
	const [resourceTitle, setResourceTitle] = useState('');
	const [isLoading, setIsLoading] = useState(true);

	const group = groups.find((g) => g.id === id);

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
		setIsLoading(true);
		const timer = setTimeout(() => setIsLoading(false), 600);
		return () => clearTimeout(timer);
	}, [id]);

	if (!hydrated) return null;

	if (!currentUser || !group) {
		return (
			<div className="flex min-h-screen flex-col bg-background">
				<Nav />
				<main className="flex-grow flex items-center justify-center">
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
			const url = `https://austudygroup.edu.au/uploads/${fileInput.name}`;
			postMessage(
				id,
				messageText || `Shared a file: ${fileInput.name}`,
				fileInput.name,
				url,
			);
			setFileInput(null);
		} else {
			postMessage(id, messageText);
		}
		setMessageText('');
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
		users.find((u) => u.id === uid)?.avatarUrl ||
		'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=100';

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />

			<main className="flex-grow mx-auto w-full max-w-7xl px-4 sm:px-6 lg:px-8 py-6 flex flex-col lg:flex-row gap-6">
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
						<span className="text-xs text-text-muted">
							{group.meetingFrequency}
						</span>
					</div>

					{/* Messages */}
					<div className="flex-grow overflow-y-auto p-4 space-y-3">
						{isLoading ? (
							<div className="flex justify-center items-center py-20">
								<ClipLoader color="var(--primary)" size={35} />
							</div>
						) : normalMessages.length === 0 ? (
							<div className="text-center py-16 text-text-muted text-xs">
								No messages yet. Start the
								conversation!
							</div>
						) : (
							normalMessages.map((msg) => {
								const isMe =
									msg.userId ===
									currentUser.id;
								return (
									<div
										key={msg.id}
										className={`flex items-start space-x-2.5 ${isMe ? 'flex-row-reverse space-x-reverse' : ''}`}
									>
										<img
											className="h-7 w-7 rounded-full object-cover border border-border flex-shrink-0"
											src={getUserAvatar(
												msg.userId,
											)}
											alt={getUserName(
												msg.userId,
											)}
										/>
										<div
											className={`max-w-[70%] rounded-xl px-3.5 py-2.5 ${
												isMe
													? 'bg-primary text-white'
													: 'bg-surface-secondary border border-border'
											}`}
										>
											{!isMe && (
												<p className="text-[10px] font-semibold text-primary mb-0.5">
													{getUserName(
														msg.userId,
													)}
												</p>
											)}
											<p
												className={`text-xs leading-relaxed whitespace-pre-wrap ${isMe ? 'text-white/95' : 'text-text-secondary'}`}
											>
												{
													msg.content
												}
											</p>
											{msg.fileName &&
												msg.fileUrl && (
													<div
														className={`mt-2 flex items-center space-x-1.5 p-1.5 rounded-lg text-xs ${isMe ? 'bg-white/15' : 'bg-surface-tertiary border border-border'}`}
													>
														<FiFile
															size={
																12
															}
														/>
														<span className="truncate font-medium text-[11px]">
															{
																msg.fileName
															}
														</span>
													</div>
												)}
											<p
												className={`text-[9px] mt-1 ${isMe ? 'text-white/50' : 'text-text-muted'}`}
											>
												{new Date(
													msg.createdAt,
												).toLocaleTimeString(
													[],
													{
														hour: '2-digit',
														minute: '2-digit',
													},
												)}
											</p>
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
									onClick={() =>
										setFileInput(null)
									}
								>
									<FiX
										size={14}
										className="text-primary"
									/>
								</button>
							</div>
						)}
						<div className="flex items-end gap-2 bg-surface-secondary border border-border rounded-xl p-1.5 focus-within:ring-1 focus-within:ring-primary/30">
							<textarea
								rows={1}
								value={messageText}
								onChange={(e) =>
									setMessageText(
										e.target.value,
									)
								}
								placeholder="Type a message…"
								className="flex-grow bg-transparent border-0 resize-none text-xs text-text-primary placeholder-text-muted focus:outline-none focus:ring-0 p-2"
								onKeyDown={(e) => {
									if (
										e.key === 'Enter' &&
										!e.shiftKey
									) {
										e.preventDefault();
										handlePostMessage(
											e,
										);
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
												e.target
													.files?.[0] ||
													null,
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
				<aside className="w-full lg:w-72 flex-shrink-0 flex flex-col gap-5">
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
								onChange={(e) => setResourceTitle(e.target.value)}
							/>
							<div className="flex gap-2 items-end">
								<div className="flex-grow">
									<Input
										type="url"
										required
										placeholder="https://..."
										value={resourceLink}
										onChange={(e) => setResourceLink(e.target.value)}
									/>
								</div>
								<button
									type="submit"
									className="rounded-lg bg-primary px-4 py-2.5 text-xs font-semibold text-white hover:bg-primary-hover shadow-sm transition-all h-[38px] flex items-center justify-center flex-shrink-0"
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
										const title = m
											? m[1]
											: 'Link';
										const href = m
											? m[2]
											: '#';
										return (
											<a
												key={
													link.id
												}
												href={
													href
												}
												target="_blank"
												rel="noreferrer"
												className="flex items-center space-x-1.5 text-xs text-primary hover:underline bg-surface-secondary p-2 rounded-lg border border-border"
											>
												<FiLink
													size={
														11
													}
												/>
												<span className="truncate font-medium">
													{
														title
													}
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
								No files shared yet. Use the
								paperclip to send.
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
												size={
													12
												}
												className="text-primary"
											/>
											<span className="text-text-primary truncate font-medium text-[11px]">
												{
													file.fileName
												}
											</span>
										</div>
										<button
											onClick={() =>
												alert(
													`Simulated download: ${file.fileName}`,
												)
											}
											className="text-primary hover:underline text-[10px] font-semibold flex-shrink-0"
										>
											<FiDownload
												size={
													12
												}
											/>
										</button>
									</div>
								))}
							</div>
						)}
					</section>
				</aside>
			</main>

			<Footer />
		</div>
	);
}
