'use client';

import { useState } from 'react';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { FiCheck, FiX, FiClock, FiSend, FiArchive } from 'react-icons/fi';
import Image from 'next/image';

export default function PendingPage() {
	const {
		currentUser,
		requests,
		groups,
		users,
		approveRequest,
		declineRequest,
		hydrated,
	} = useAppContext();
	const [activeTab, setActiveTab] = useState<'requests' | 'sent' | 'history'>(
		'requests',
	);

	if (!hydrated) return null;

	/* ─── Helpers ─── */
	const sentPending = requests.filter(
		(r) => r.userId === currentUser?.id && r.status === 'PENDING',
	);

	const ledGroups = groups.filter((g) => g.leaderId === currentUser?.id);
	const ledGroupIds = ledGroups.map((g) => g.id);

	const receivedPending = requests.filter(
		(r) => ledGroupIds.includes(r.groupId) && r.status === 'PENDING',
	);

	const historyRequests = requests.filter(
		(r) =>
			(r.userId === currentUser?.id || ledGroupIds.includes(r.groupId)) &&
			r.status !== 'PENDING',
	);

	const getGroupName = (id: string) =>
		groups.find((g) => g.id === id)?.name || 'Unknown Group';
	const getUserName = (id: string) =>
		users.find((u) => u.id === id)?.name || 'Unknown';
	const getUserEmail = (id: string) =>
		users.find((u) => u.id === id)?.email || '';
	const getUserAvatar = (id: string) =>
		users.find((u) => u.id === id)?.avatarUrl;

	const statusBadge = (status: string) => {
		const map: Record<string, string> = {
			PENDING: 'bg-warning-bg text-warning border-warning/20',
			APPROVED: 'bg-success-bg text-success border-success/20',
			DECLINED: 'bg-danger-bg text-danger border-danger/20',
		};
		return map[status] || '';
	};

	if (!currentUser) {
		return (
			<div className="flex min-h-screen flex-col bg-background">
				<Nav />
				<main className="grow flex items-center justify-center">
					<p className="text-text-muted text-sm">
						Please sign in to view requests.
					</p>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />

			<main className="flex-1 mx-auto w-full max-w-4xl px-4 sm:px-6 lg:px-8 py-10">
				<h1 className="text-2xl font-bold text-text-primary mb-1">
					Join Requests
				</h1>
				<p className="text-sm text-text-muted mb-8">
					Manage your sent and received group membership requests.
				</p>

				{/* Tabs */}
				<div className="flex border-b border-border mb-6">
					<button
						onClick={() => setActiveTab('requests')}
						className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
							activeTab === 'requests'
								? 'border-primary text-primary'
								: 'border-transparent text-text-muted hover:text-text-primary'
						}`}
					>
						<FiClock size={14} />
						Pending ({receivedPending.length})
					</button>
					<button
						onClick={() => setActiveTab('sent')}
						className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
							activeTab === 'sent'
								? 'border-primary text-primary'
								: 'border-transparent text-text-muted hover:text-text-primary'
						}`}
					>
						<FiSend size={14} />
						Sent ({sentPending.length})
					</button>
					<button
						onClick={() => setActiveTab('history')}
						className={`flex items-center gap-2 pb-3 px-4 text-sm font-semibold border-b-2 transition-all ${
							activeTab === 'history'
								? 'border-primary text-primary'
								: 'border-transparent text-text-muted hover:text-text-primary'
						}`}
					>
						<FiArchive size={14} />
						History ({historyRequests.length})
					</button>
				</div>

				{/* Tab Content */}
				{activeTab === 'requests' &&
					(receivedPending.length === 0 ? (
						<div className="text-center py-16 text-text-muted text-sm border border-dashed border-border rounded-xl">
							No active pending requests received.
						</div>
					) : (
						<div className="space-y-4">
							{receivedPending.map((req) => (
								<div
									key={req.id}
									className="flex flex-col lg:flex-row lg:items-center justify-between rounded-xl border border-border bg-surface p-5 gap-4 shadow-sm"
								>
									<div className="flex items-start space-x-4">
										<Image
											className="h-10 w-10 rounded-full object-cover border border-border"
											src={
												getUserAvatar(req.userId) ||
												'data:image/svg+xml;base64,PHN2ZyB4bWxucz0iaHR0cDovL3d3dy53My5vcmcvMjAwMC9zdmciIHZpZXdCb3g9IjAgMCAyNCAyNCIgZmlsbD0iY3VycmVudENvbG9yIj48cGF0aCBkPSJNMTIgMkM2LjQ4IDIgMiA2LjQ4IDIgMTJzNC40OCAxMCAxMCAxMCAxMC00LjQ4IDEwLTEwUzE3LjUyIDIgMTIgMnptMCAzYzEuNjYgMCAzIDEuMzQgMyAzcy0xLjM0IDMtMyAzLTMtMS4zNC0zLTMgMS4zNC0zIDMtM3ptMCAxNC4yYy0yLjUgMC00LjcxLTEuMjgtNi0zLjIyLjAzLTEuOTkgNC0zLjA4IDYtMy4wOCAxLjk5IDAgNS45NyAxLjA5IDYgMy4wOC0xLjI5IDEuOTQtMy41IDMuMjItNiAzLjIyeiIvPjwvc3ZnPg=='
											}
											alt={getUserName(req.userId)}
											width={40}
											height={40}
										/>
										<div>
											<h4 className="font-semibold text-text-primary">
												{getUserName(req.userId)}
											</h4>
											<p className="text-xs text-text-muted">
												{getUserEmail(req.userId)}
											</p>
											<p className="mt-1 text-xs text-text-secondary">
												Wants to join{' '}
												<span className="font-medium text-primary">
													{getGroupName(req.groupId)}
												</span>
											</p>
										</div>
									</div>
									<div className="flex items-center gap-2">
										<button
											onClick={() =>
												declineRequest(req.id)
											}
											className="inline-flex items-center gap-1.5 rounded-lg px-3.5 py-2 text-sm font-medium text-text-secondary border border-border hover:bg-surface-secondary transition-all"
										>
											<FiX size={14} />
											Decline
										</button>
										<button
											onClick={() =>
												approveRequest(req.id)
											}
											className="inline-flex items-center gap-1.5 rounded-lg bg-success px-3.5 py-2 text-sm font-semibold text-white hover:opacity-90 transition-all shadow-sm"
										>
											<FiCheck size={14} />
											Approve
										</button>
									</div>
								</div>
							))}
						</div>
					))}

				{activeTab === 'sent' &&
					(sentPending.length === 0 ? (
						<div className="text-center py-16 text-text-muted text-sm border border-dashed border-border rounded-xl">
							No pending sent requests.
						</div>
					) : (
						<div className="space-y-3">
							{sentPending.map((req) => (
								<div
									key={req.id}
									className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-border bg-surface p-4 gap-3"
								>
									<div>
										<h4 className="font-semibold text-text-primary">
											{getGroupName(req.groupId)}
										</h4>
										<p className="text-xs text-text-muted mt-0.5">
											Requested{' '}
											{new Date(
												req.createdAt,
											).toLocaleDateString()}
										</p>
									</div>
									<span
										className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border ${statusBadge(req.status)}`}
									>
										{req.status}
									</span>
								</div>
							))}
						</div>
					))}

				{activeTab === 'history' &&
					(historyRequests.length === 0 ? (
						<div className="text-center py-16 text-text-muted text-sm border border-dashed border-border rounded-xl">
							No request history found.
						</div>
					) : (
						<div className="space-y-3">
							{historyRequests.map((req) => {
								const isSentByMe =
									req.userId === currentUser.id;
								return (
									<div
										key={req.id}
										className="flex flex-col sm:flex-row sm:items-center justify-between rounded-xl border border-border bg-surface p-4 gap-3 shadow-xs"
									>
										<div>
											<div className="flex items-center gap-2">
												<h4 className="font-semibold text-text-primary">
													{getGroupName(req.groupId)}
												</h4>
												<span className="text-[10px] bg-surface-tertiary px-1.5 py-0.5 rounded text-text-muted">
													{isSentByMe
														? 'Sent'
														: 'Received'}
												</span>
											</div>
											<p className="text-xs text-text-muted mt-1">
												{isSentByMe
													? 'You requested to join'
													: `${getUserName(req.userId)} requested to join`}
											</p>
										</div>
										<span
											className={`inline-flex items-center rounded-full px-2.5 py-1 text-xs font-semibold border ${statusBadge(req.status)}`}
										>
											{req.status}
										</span>
									</div>
								);
							})}
						</div>
					))}
			</main>

			<Footer />
		</div>
	);
}
