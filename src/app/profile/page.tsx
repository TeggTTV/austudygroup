'use client';

import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';
import Image from 'next/image';

export default function ProfilePage() {
	const { currentUser, updateProfile, hydrated } = useAppContext();
	const [name, setName] = useState('');
	const [avatarUrl, setAvatarUrl] = useState('');
	const [success, setSuccess] = useState(false);

	useEffect(() => {
		if (currentUser) {
			// eslint-disable-next-line react-hooks/set-state-in-effect
			setName(currentUser.name || '');
			setAvatarUrl(currentUser.avatarUrl || '');
		}
	}, [currentUser]);

	const handleSubmit = (e: React.FormEvent) => {
		e.preventDefault();
		updateProfile(name, avatarUrl);
		setSuccess(true);
		setTimeout(() => setSuccess(false), 3000);
	};

	if (!hydrated) return null;

	if (!currentUser) {
		return (
			<div className="flex min-h-screen flex-col bg-background">
				<Nav />
				<main className="grow flex items-center justify-center">
					<p className="text-text-muted text-sm">
						Please sign in to edit your profile.
					</p>
				</main>
				<Footer />
			</div>
		);
	}

	return (
		<div className="flex min-h-screen flex-col bg-background">
			<Nav />
			<main className="flex-1 mx-auto w-full max-w-xl px-4 sm:px-6 lg:px-8 py-12">
				<div className="rounded-2xl border border-border bg-surface p-8 shadow-sm space-y-6">
					<div>
						<h1 className="text-2xl font-bold text-text-primary">
							Edit Profile
						</h1>
						<p className="text-xs text-text-muted mt-1">
							Update your display name and profile image link.
						</p>
					</div>

					<form onSubmit={handleSubmit} className="space-y-4">
						<div className="flex items-center space-x-4">
							{avatarUrl ? (
								<Image
									src={avatarUrl}
									alt="Profile Preview"
									className="h-16 w-16 rounded-full object-cover border border-border"
									width={64}
									height={64}
								/>
							) : (
								<svg
									stroke="currentColor"
									fill="currentColor"
									stroke-width="0"
									viewBox="0 0 496 512"
									className="text-primary"
									height="30"
									width="30"
									xmlns="http://www.w3.org/2000/svg"
								>
									<path d="M248 8C111 8 0 119 0 256s111 248 248 248 248-111 248-248S385 8 248 8zm0 96c48.6 0 88 39.4 88 88s-39.4 88-88 88-88-39.4-88-88 39.4-88 88-88zm0 344c-58.7 0-111.3-26.6-146.5-68.2 18.8-35.4 55.6-59.8 98.5-59.8 2.4 0 4.8.4 7.1 1.1 13 4.2 26.6 6.9 40.9 6.9 14.3 0 28-2.7 40.9-6.9 2.3-.7 4.7-1.1 7.1-1.1 42.9 0 79.7 24.4 98.5 59.8C359.3 421.4 306.7 448 248 448z"></path>
								</svg>
							)}
							<div className="text-xs text-text-muted">
								Profile picture preview. Enter an image URL
								below to update it.
							</div>
						</div>

						<Input
							type="text"
							label="Display Name"
							value={name}
							onChange={(e) => setName(e.target.value)}
							required
						/>

						<div className="space-y-1.5">
							<label className="block text-[11px] font-semibold text-text-muted uppercase tracking-wider">
								Upload Profile Image File
							</label>
							<input
								type="file"
								accept="image/*"
								onChange={(e) => {
									const file = e.target.files?.[0];
									if (file) {
										const reader = new FileReader();
										reader.onload = () => {
											setAvatarUrl(
												reader.result as string,
											);
										};
										reader.readAsDataURL(file);
									}
								}}
								className="block w-full text-xs text-text-secondary file:mr-3 file:py-1.5 file:px-3 file:rounded-lg file:border-0 file:text-xs file:font-semibold file:bg-primary-light file:text-primary hover:file:bg-primary-light/80 cursor-pointer"
							/>
						</div>

						<div className="relative flex items-center justify-center my-3">
							<div className="absolute inset-0 flex items-center">
								<div className="w-full border-t border-border" />
							</div>
							<span className="relative bg-surface px-3 text-[10px] text-text-muted uppercase font-semibold">
								Or Use Image URL
							</span>
						</div>

						<Input
							type="url"
							label="Profile Picture URL"
							value={avatarUrl}
							onChange={(e) => setAvatarUrl(e.target.value)}
							placeholder="https://images.unsplash.com/..."
						/>

						{success && (
							<motion.div
								initial={{ opacity: 0, y: -5 }}
								animate={{ opacity: 1, y: 0 }}
								className="text-xs text-success bg-success-bg border border-success/20 p-3 rounded-lg text-center"
							>
								Profile updated successfully!
							</motion.div>
						)}

						<button
							type="submit"
							className="w-full rounded-lg bg-primary py-2.5 text-sm font-semibold text-white hover:bg-primary-hover shadow-sm transition-all"
						>
							Save Changes
						</button>
					</form>
				</div>
			</main>
			<Footer />
		</div>
	);
}
