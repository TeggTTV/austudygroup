'use client';

import React, {
	createContext,
	useContext,
	useState,
	useEffect,
	useCallback,
} from 'react';

/* ──────────────────────────── Types ──────────────────────────── */

export interface User {
	id: string;
	email: string;
	name: string;
	avatarUrl?: string;
	role: 'LEADER' | 'APPLICANT' | 'GUEST';
}

export interface Group {
	id: string;
	name: string;
	description: string;
	subject: string;
	meetingFrequency: string;
	minMembers: number;
	maxMembers: number;
	leaderId: string;
	memberIds: string[];
	isPrivate?: boolean;
	profanityFilter?: boolean;
}

export interface JoinRequest {
	id: string;
	groupId: string;
	userId: string;
	status: 'PENDING' | 'APPROVED' | 'DECLINED';
	createdAt: string;
}

export interface FeedMessage {
	id: string;
	groupId: string;
	userId: string;
	content: string;
	fileUrl?: string;
	fileName?: string;
	createdAt: string;
}

export type Theme = 'light' | 'dark';

interface AppContextType {
	currentUser: User | null;
	users: User[];
	groups: Group[];
	requests: JoinRequest[];
	feedMessages: FeedMessage[];
	theme: Theme;
	hydrated: boolean;
	toggleTheme: () => void;
	loginUser: (
		email: string,
		password: string,
	) => Promise<{ success: boolean; error?: string }>;
	registerUser: (
		email: string,
		name: string,
		password: string,
		role: 'LEADER' | 'APPLICANT',
		avatarUrl?: string,
	) => Promise<{ success: boolean; error?: string }>;
	logoutUser: () => void;
	sendJoinRequest: (groupId: string) => void;
	approveRequest: (requestId: string) => void;
	declineRequest: (requestId: string) => void;
	postMessage: (
		groupId: string,
		content: string,
		fileName?: string,
		fileUrl?: string,
	) => void;
	updateProfile: (name: string, avatarUrl: string) => void;
	fetchFeedMessages: (groupId: string) => Promise<void>;
	createGroup: (
		name: string,
		description: string,
		subject: string,
		meetingFrequency: string,
		minMembers: number,
		maxMembers: number,
	) => Promise<{ success: boolean; error?: string }>;
	deleteMessage: (messageId: string) => Promise<void>;
	updateGroupSettings: (
		groupId: string,
		settings: {
			name?: string;
			description?: string;
			meetingFrequency?: string;
			isPrivate?: boolean;
			profanityFilter?: boolean;
			kickUserId?: string;
			deleteLinkId?: string;
			deleteFileId?: string;
		},
	) => Promise<{ success: boolean; error?: string }>;
	refreshData: () => Promise<void>;
}

/* ──────────────────────────── Seed Data ──────────────────────── */

const MOCK_GROUPS: Group[] = [
	{
		id: 'group_1',
		name: 'Advanced Quantum Mechanics',
		description:
			'A study group focused on solving complex problems in quantum field theory, wave mechanics, and perturbation methods. Recommended for third-year physics majors.',
		subject: 'Physics',
		meetingFrequency: 'Weekly',
		minMembers: 3,
		maxMembers: 8,
		leaderId: 'user_leader',
		memberIds: ['user_leader'],
	},
	{
		id: 'group_2',
		name: 'Organic Chemistry Prep',
		description:
			'We meet twice a week to draw reaction mechanisms, quiz each other on reagents, and prepare for midterms. Open to all pre-med and chemistry students!',
		subject: 'Chemistry',
		meetingFrequency: 'Bi-weekly',
		minMembers: 4,
		maxMembers: 10,
		leaderId: 'user_leader',
		memberIds: ['user_leader'],
	},
	{
		id: 'group_3',
		name: 'Introduction to Algorithms',
		description:
			'Going through CLRS textbook and practicing LeetCode medium questions. Focus areas include dynamic programming, graph algorithms, and system design basics.',
		subject: 'Computer Science',
		meetingFrequency: 'Weekly',
		minMembers: 2,
		maxMembers: 6,
		leaderId: 'user_applicant',
		memberIds: ['user_applicant'],
	},
	{
		id: 'group_4',
		name: 'Linear Algebra Study Circle',
		description:
			'Working through eigenvalues, vector spaces, and matrix transformations. Perfect for first-year engineering and math students preparing for finals.',
		subject: 'Mathematics',
		meetingFrequency: 'Weekly',
		minMembers: 3,
		maxMembers: 7,
		leaderId: 'user_leader',
		memberIds: ['user_leader'],
	},
	{
		id: 'group_5',
		name: 'Environmental Science Review',
		description:
			'Discussion-based sessions focused on climate science, ecology, and sustainable development policy. Presentations rotate each week.',
		subject: 'Environmental Science',
		meetingFrequency: 'Fortnightly',
		minMembers: 4,
		maxMembers: 12,
		leaderId: 'user_applicant',
		memberIds: ['user_applicant'],
	},
];

/* ──────────────────────────── Context ─────────────────────────── */

const AppContext = createContext<AppContextType | undefined>(undefined);

export function AppProvider({ children }: { children: React.ReactNode }) {
	const [currentUser, setCurrentUser] = useState<User | null>(null);
	const [groups, setGroups] = useState<Group[]>([]);
	const [requests, setRequests] = useState<JoinRequest[]>([]);
	const [users, setUsers] = useState<User[]>([]);
	const [feedMessages, setFeedMessages] = useState<FeedMessage[]>([]);
	const [theme, setTheme] = useState<Theme>('light');
	const [hydrated, setHydrated] = useState(false);

	/* ─── Hydrate from API ─── */
	const loadData = useCallback(async () => {
		try {
			// Fetch Groups
			const gRes = await fetch('/api/groups');
			const gData = await gRes.json();
			if (gData.groups && !gData.offline) {
				setGroups(gData.groups);
			} else {
				setGroups(MOCK_GROUPS);
			}

			// Fetch Requests
			const rRes = await fetch('/api/requests');
			const rData = await rRes.json();
			if (rData.requests && !rData.offline) {
				setRequests(rData.requests);
			} else {
				setRequests([]);
			}

			// Fetch Users
			const uRes = await fetch('/api/users');
			const uData = await uRes.json();
			if (uData.users && !uData.offline) {
				setUsers(uData.users);
			} else {
				setUsers([]);
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			console.warn('API requests failed. Reverting to memory defaults.');
			setGroups(MOCK_GROUPS);
			setRequests([]);
			setUsers([]);
		}
	}, []);

	/* eslint-disable react-hooks/set-state-in-effect */
	useEffect(() => {
		setTheme('light');
		document.documentElement.classList.toggle('dark', false);
		setCurrentUser(null);

		loadData();
		setHydrated(true);
	}, [loadData]);
	/* eslint-enable react-hooks/set-state-in-effect */

	// Reload data whenever currentUser changes
	/* eslint-disable react-hooks/set-state-in-effect */
	useEffect(() => {
		if (hydrated) {
			loadData();
		}
	}, [currentUser, loadData, hydrated]);
	/* eslint-enable react-hooks/set-state-in-effect */

	/* ─── Theme Toggle ─── */
	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next = prev === 'light' ? 'dark' : 'light';
			document.documentElement.classList.toggle('dark', next === 'dark');
			return next;
		});
	}, []);

	/* ─── Authentication Handlers ─── */
	const loginUser = useCallback(async (email: string, password: string) => {
		try {
			const res = await fetch('/api/auth/login', {
				method: 'POST',
				headers: { 'Content-Type': 'application/json' },
				body: JSON.stringify({ email, password }),
			});
			const data = await res.json();
			if (data.success && data.user) {
				setCurrentUser(data.user);
				return { success: true };
			}
			return {
				success: false,
				error: data.error || 'Invalid credentials',
			};
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e: unknown) {
			return { success: false, error: 'Network error occurred' };
		}
	}, []);

	const registerUser = useCallback(
		async (
			email: string,
			name: string,
			password: string,
			role: 'LEADER' | 'APPLICANT',
			avatarUrl?: string,
		) => {
			try {
				const res = await fetch('/api/auth/register', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						email,
						name,
						password,
						role,
						avatarUrl,
					}),
				});
				const data = await res.json();
				if (data.success && data.user) {
					setCurrentUser(data.user);
					return { success: true };
				}
				return {
					success: false,
					error: data.error || 'Registration failed',
				};
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e: unknown) {
				return { success: false, error: 'Network error occurred' };
			}
		},
		[],
	);

	const logoutUser = useCallback(() => {
		setCurrentUser(null);
	}, []);

	/* ─── Join Requests ─── */
	const sendJoinRequest = useCallback(
		async (groupId: string) => {
			if (!currentUser) return;
			const exists = requests.find(
				(r) => r.groupId === groupId && r.userId === currentUser.id,
			);
			if (exists) return;

			const nr: JoinRequest = {
				id: `req_${Date.now()}`,
				groupId,
				userId: currentUser.id,
				status: 'PENDING',
				createdAt: new Date().toISOString(),
			};

			// Update frontend state immediately
			const updated = [...requests, nr];
			setRequests(updated);

			try {
				const res = await fetch('/api/requests', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						action: 'create',
						groupId,
						userId: currentUser.id,
					}),
				});
				const data = await res.json();
				if (data.request && !data.offline) {
					// Replace state item with true DB representation
					setRequests((prev) =>
						prev.map((r) =>
							r.groupId === groupId && r.userId === currentUser.id
								? data.request
								: r,
						),
					);
				}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Could not save join request to remote DB.');
			}
		},
		[currentUser, requests],
	);

	const approveRequest = useCallback(
		async (requestId: string) => {
			const req = requests.find((r) => r.id === requestId);
			if (!req) return;

			// Update state immediately
			const updReqs = requests.map((r) =>
				r.id === requestId ? { ...r, status: 'APPROVED' as const } : r,
			);
			setRequests(updReqs);
			localStorage.setItem('asg_requests', JSON.stringify(updReqs));

			const updGroups = groups.map((g) => {
				if (g.id === req.groupId && !g.memberIds.includes(req.userId)) {
					return { ...g, memberIds: [...g.memberIds, req.userId] };
				}
				return g;
			});
			setGroups(updGroups);

			try {
				await fetch('/api/requests', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						action: 'approve',
						requestId,
					}),
				});
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Could not approve request on remote DB.');
			}
		},
		[requests, groups],
	);

	const declineRequest = useCallback(
		async (requestId: string) => {
			const updReqs = requests.map((r) =>
				r.id === requestId ? { ...r, status: 'DECLINED' as const } : r,
			);
			setRequests(updReqs);

			try {
				await fetch('/api/requests', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						action: 'decline',
						requestId,
					}),
				});
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Could not decline request on remote DB.');
			}
		},
		[requests],
	);

	/* ─── Feed Messages ─── */
	const postMessage = useCallback(
		async (
			groupId: string,
			content: string,
			fileName?: string,
			fileUrl?: string,
		) => {
			if (!currentUser) return;
			const msg: FeedMessage = {
				id: `msg_${Date.now()}`,
				groupId,
				userId: currentUser.id,
				content,
				fileName,
				fileUrl,
				createdAt: new Date().toISOString(),
			};

			const updated = [...feedMessages, msg];
			setFeedMessages(updated);

			try {
				const res = await fetch('/api/feed', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						groupId,
						userId: currentUser.id,
						content,
						fileName,
						fileUrl,
					}),
				});
				const data = await res.json();
				if (data.message && !data.offline) {
					// Replace optimistic message with true DB representation
					setFeedMessages((prev) =>
						prev.map((m) =>
							m.content === content && m.userId === currentUser.id
								? data.message
								: m,
						),
					);
				}
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Could not save feed message to remote DB.');
			}
		},
		[currentUser, feedMessages],
	);

	const updateProfile = useCallback(
		async (name: string, avatarUrl: string) => {
			if (!currentUser) return;
			const updatedUser = { ...currentUser, name, avatarUrl };
			setCurrentUser(updatedUser);

			try {
				await fetch('/api/auth', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify(updatedUser),
				});
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Could not sync profile update to remote DB.');
			}
		},
		[currentUser],
	);

	const fetchFeedMessages = useCallback(async (groupId: string) => {
		try {
			const res = await fetch(`/api/feed?groupId=${groupId}`);
			const data = await res.json();
			if (data.messages && !data.offline) {
				setFeedMessages((prev) => {
					const otherGroupMsgs = prev.filter(
						(m) => m.groupId !== groupId,
					);
					return [...otherGroupMsgs, ...data.messages];
				});
			}
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			console.warn('Feed API fetch failed.');
		}
	}, []);

	const createGroup = useCallback(
		async (
			name: string,
			description: string,
			subject: string,
			meetingFrequency: string,
			minMembers: number,
			maxMembers: number,
		) => {
			if (!currentUser)
				return { success: false, error: 'User not signed in' };

			const newLocalGroup: Group = {
				id: `group_${Date.now()}`,
				name,
				description,
				subject,
				meetingFrequency,
				minMembers,
				maxMembers,
				leaderId: currentUser.id,
				memberIds: [currentUser.id],
			};

			setGroups((prev) => [...prev, newLocalGroup]);

			try {
				const res = await fetch('/api/groups', {
					method: 'POST',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({
						name,
						description,
						subject,
						meetingFrequency,
						minMembers,
						maxMembers,
						leaderId: currentUser.id,
					}),
				});
				const data = await res.json();
				if (data.success && data.group) {
					setGroups((prev) =>
						prev.map((g) =>
							g.id === newLocalGroup.id ? data.group : g,
						),
					);
					return { success: true };
				}
				return {
					success: false,
					error: data.error || 'Failed to create group',
				};
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Failed to persist group creation to database.');
				return { success: true };
			}
		},
		[currentUser],
	);

	const deleteMessage = useCallback(async (messageId: string) => {
		setFeedMessages((prev) => prev.filter((m) => m.id !== messageId));

		try {
			await fetch(`/api/feed?messageId=${messageId}`, {
				method: 'DELETE',
			});
			// eslint-disable-next-line @typescript-eslint/no-unused-vars
		} catch (e) {
			console.warn('Could not sync message deletion to remote DB.');
		}
	}, []);

	const updateGroupSettings = useCallback(
		async (
			groupId: string,
			settings: {
				name?: string;
				description?: string;
				meetingFrequency?: string;
				isPrivate?: boolean;
				profanityFilter?: boolean;
				kickUserId?: string;
				deleteLinkId?: string;
				deleteFileId?: string;
			},
		) => {
			setGroups((prev) =>
				prev.map((g) => {
					if (g.id !== groupId) return g;
					let updatedMemberIds = g.memberIds;
					if (settings.kickUserId) {
						updatedMemberIds = g.memberIds.filter(
							(id) => id !== settings.kickUserId,
						);
					}
					return {
						...g,
						name:
							settings.name !== undefined
								? settings.name
								: g.name,
						description:
							settings.description !== undefined
								? settings.description
								: g.description,
						meetingFrequency:
							settings.meetingFrequency !== undefined
								? settings.meetingFrequency
								: g.meetingFrequency,
						isPrivate:
							settings.isPrivate !== undefined
								? settings.isPrivate
								: g.isPrivate,
						profanityFilter:
							settings.profanityFilter !== undefined
								? settings.profanityFilter
								: g.profanityFilter,
						memberIds: updatedMemberIds,
					};
				}),
			);

			if (settings.deleteLinkId || settings.deleteFileId) {
				const messageId =
					settings.deleteLinkId || settings.deleteFileId;
				if (messageId) {
					setFeedMessages((prev) =>
						prev.filter((m) => m.id !== messageId),
					);
				}
			}

			try {
				const res = await fetch('/api/groups', {
					method: 'PUT',
					headers: { 'Content-Type': 'application/json' },
					body: JSON.stringify({ groupId, ...settings }),
				});
				const data = await res.json();
				if (data.success && data.group) {
					setGroups((prev) =>
						prev.map((g) => (g.id === groupId ? data.group : g)),
					);
					return { success: true };
				}
				return {
					success: false,
					error: data.error || 'Failed to update settings',
				};
				// eslint-disable-next-line @typescript-eslint/no-unused-vars
			} catch (e) {
				console.warn('Could not sync group update to remote DB.');
				return { success: true };
			}
		},
		[],
	);

	return (
		<AppContext.Provider
			value={{
				currentUser,
				users,
				groups,
				requests,
				feedMessages,
				theme,
				hydrated,
				toggleTheme,
				loginUser,
				registerUser,
				logoutUser,
				sendJoinRequest,
				approveRequest,
				declineRequest,
				postMessage,
				updateProfile,
				fetchFeedMessages,
				createGroup,
				deleteMessage,
				updateGroupSettings,
				refreshData: loadData,
			}}
		>
			{children}
		</AppContext.Provider>
	);
}

export function useAppContext() {
	const ctx = useContext(AppContext);
	if (!ctx)
		throw new Error('useAppContext must be used within an AppProvider');
	return ctx;
}
