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
	switchUser: (role: 'LEADER' | 'APPLICANT' | 'GUEST') => void;
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
}

/* ──────────────────────────── Seed Data ──────────────────────── */

const MOCK_USERS: User[] = [
	{
		id: 'user_leader',
		email: 'leader@austudygroup.edu.au',
		name: 'Sarah Connor',
		avatarUrl:
			'https://images.unsplash.com/photo-1494790108377-be9c29b29330?w=150',
		role: 'LEADER',
	},
	{
		id: 'user_applicant',
		email: 'applicant@austudygroup.edu.au',
		name: 'Alex Mercer',
		avatarUrl:
			'https://images.unsplash.com/photo-1507003211169-0a1dd7228f2d?w=150',
		role: 'APPLICANT',
	},
];

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
	const [feedMessages, setFeedMessages] = useState<FeedMessage[]>([]);
	const [theme, setTheme] = useState<Theme>('light');
	const [hydrated, setHydrated] = useState(false);

	/* ─── Hydrate from localStorage ─── */
	useEffect(() => {
		const savedTheme = localStorage.getItem('asg_theme') as Theme | null;
		const resolvedTheme = savedTheme || 'light';
		setTheme(resolvedTheme);
		document.documentElement.classList.toggle(
			'dark',
			resolvedTheme === 'dark',
		);

		const savedUser = localStorage.getItem('asg_current_user');
		const savedGroups = localStorage.getItem('asg_groups');
		const savedRequests = localStorage.getItem('asg_requests');
		const savedFeed = localStorage.getItem('asg_feed');

		if (savedUser && savedUser !== 'null') {
			setCurrentUser(JSON.parse(savedUser));
		} else {
			setCurrentUser(MOCK_USERS[1]); // Default Applicant
			localStorage.setItem(
				'asg_current_user',
				JSON.stringify(MOCK_USERS[1]),
			);
		}

		if (savedGroups) {
			setGroups(JSON.parse(savedGroups));
		} else {
			setGroups(MOCK_GROUPS);
			localStorage.setItem('asg_groups', JSON.stringify(MOCK_GROUPS));
		}

		if (savedRequests) {
			setRequests(JSON.parse(savedRequests));
		} else {
			const initial: JoinRequest = {
				id: 'req_init',
				groupId: 'group_1',
				userId: 'user_applicant',
				status: 'PENDING',
				createdAt: new Date().toISOString(),
			};
			setRequests([initial]);
			localStorage.setItem('asg_requests', JSON.stringify([initial]));
		}

		if (savedFeed) {
			setFeedMessages(JSON.parse(savedFeed));
		} else {
			const seed: FeedMessage[] = [
				{
					id: 'feed_1',
					groupId: 'group_1',
					userId: 'user_leader',
					content:
						'Welcome to the Quantum Mechanics group! Next week we will review Section 4.2 of the textbook.',
					createdAt: new Date(Date.now() - 86400000).toISOString(),
				},
			];
			setFeedMessages(seed);
			localStorage.setItem('asg_feed', JSON.stringify(seed));
		}

		setHydrated(true);
	}, []);

	/* ─── Theme Toggle ─── */
	const toggleTheme = useCallback(() => {
		setTheme((prev) => {
			const next = prev === 'light' ? 'dark' : 'light';
			localStorage.setItem('asg_theme', next);
			document.documentElement.classList.toggle('dark', next === 'dark');
			return next;
		});
	}, []);

	/* ─── Role Switcher ─── */
	const switchUser = useCallback(
		(role: 'LEADER' | 'APPLICANT' | 'GUEST') => {
			let newUser: User | null = null;
			if (role === 'LEADER') newUser = MOCK_USERS[0];
			if (role === 'APPLICANT') newUser = MOCK_USERS[1];
			setCurrentUser(newUser);
			localStorage.setItem('asg_current_user', JSON.stringify(newUser));
		},
		[],
	);

	/* ─── Join Requests ─── */
	const sendJoinRequest = useCallback(
		(groupId: string) => {
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
			const updated = [...requests, nr];
			setRequests(updated);
			localStorage.setItem('asg_requests', JSON.stringify(updated));
		},
		[currentUser, requests],
	);

	const approveRequest = useCallback(
		(requestId: string) => {
			const req = requests.find((r) => r.id === requestId);
			if (!req) return;

			const updReqs = requests.map((r) =>
				r.id === requestId
					? { ...r, status: 'APPROVED' as const }
					: r,
			);
			setRequests(updReqs);
			localStorage.setItem('asg_requests', JSON.stringify(updReqs));

			const updGroups = groups.map((g) => {
				if (
					g.id === req.groupId &&
					!g.memberIds.includes(req.userId)
				) {
					return {
						...g,
						memberIds: [...g.memberIds, req.userId],
					};
				}
				return g;
			});
			setGroups(updGroups);
			localStorage.setItem('asg_groups', JSON.stringify(updGroups));
		},
		[requests, groups],
	);

	const declineRequest = useCallback(
		(requestId: string) => {
			const updReqs = requests.map((r) =>
				r.id === requestId
					? { ...r, status: 'DECLINED' as const }
					: r,
			);
			setRequests(updReqs);
			localStorage.setItem('asg_requests', JSON.stringify(updReqs));
		},
		[requests],
	);

	/* ─── Feed Messages ─── */
	const postMessage = useCallback(
		(
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
			localStorage.setItem('asg_feed', JSON.stringify(updated));
		},
		[currentUser, feedMessages],
	);

	const updateProfile = useCallback(
		(name: string, avatarUrl: string) => {
			if (!currentUser) return;
			const updatedUser = { ...currentUser, name, avatarUrl };
			setCurrentUser(updatedUser);
			localStorage.setItem('asg_current_user', JSON.stringify(updatedUser));
		},
		[currentUser],
	);

	return (
		<AppContext.Provider
			value={{
				currentUser,
				users: MOCK_USERS,
				groups,
				requests,
				feedMessages,
				theme,
				hydrated,
				toggleTheme,
				switchUser,
				sendJoinRequest,
				approveRequest,
				declineRequest,
				postMessage,
				updateProfile,
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
