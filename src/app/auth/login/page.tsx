'use client';

import React, { useState } from 'react';
import { useRouter } from 'next/navigation';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/Input';
import Link from 'next/link';

export default function LoginPage() {
	const { loginUser, hydrated } = useAppContext();
	const [email, setEmail] = useState('');
	const [password, setPassword] = useState('');
	const [error, setError] = useState('');
	const [loading, setLoading] = useState(false);
	const router = useRouter();

	const handleLogin = async (e: React.FormEvent) => {
		e.preventDefault();
		setLoading(true);
		setError('');

		const res = await loginUser(email, password);
		setLoading(false);

		if (res.success) {
			router.push('/search');
		} else {
			setError(res.error || 'Login failed');
		}
	};

	if (!hydrated) return null;

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />
			<main className="grow flex items-center justify-center px-4 py-12">
				<div className="w-full max-w-md rounded-2xl border border-border bg-surface p-8 shadow-sm space-y-6">
					<div className="text-center">
						<h1 className="text-2xl font-bold text-text-primary">
							Sign In
						</h1>
						<p className="text-xs text-text-muted mt-1">
							Access your study groups and discussions.
						</p>
					</div>

					<form onSubmit={handleLogin} className="space-y-4">
						{error && (
							<div className="text-xs text-danger bg-danger-bg border border-danger/20 p-3 rounded-lg text-center">
								{error}
							</div>
						)}

						<Input
							type="email"
							label="Email Address"
							placeholder="you@university.edu.au"
							value={email}
							onChange={(e) => setEmail(e.target.value)}
							required
						/>

						<Input
							type="password"
							label="Password"
							placeholder="••••••••"
							value={password}
							onChange={(e) => setPassword(e.target.value)}
							required
						/>

						<button
							type="submit"
							disabled={loading}
							className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary-hover shadow-sm transition-all disabled:opacity-50"
						>
							{loading ? 'Signing In...' : 'Sign In'}
						</button>
					</form>

					<p className="text-center text-xs text-text-secondary">
						Don&apos;t have an account?{' '}
						<Link
							href="/auth/register"
							className="text-primary font-semibold hover:underline"
						>
							Create an account
						</Link>
					</p>
				</div>
			</main>
			<Footer />
		</div>
	);
}
