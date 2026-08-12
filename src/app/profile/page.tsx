'use client';

import React, { useState, useEffect } from 'react';
import { useAppContext } from '@/components/AppContext';
import Nav from '@/components/Nav';
import Footer from '@/components/Footer';
import { Input } from '@/components/ui/Input';
import { motion } from 'framer-motion';

export default function ProfilePage() {
  const { currentUser, updateProfile, hydrated } = useAppContext();
  const [name, setName] = useState('');
  const [avatarUrl, setAvatarUrl] = useState('');
  const [success, setSuccess] = useState(false);

  useEffect(() => {
    if (currentUser) {
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
        <main className="flex-grow flex items-center justify-center">
          <p className="text-text-muted text-sm">Please sign in to edit your profile.</p>
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
            <h1 className="text-2xl font-bold text-text-primary">Edit Profile</h1>
            <p className="text-xs text-text-muted mt-1">Update your display name and profile image link.</p>
          </div>

          <form onSubmit={handleSubmit} className="space-y-4">
            <div className="flex items-center space-x-4">
              <img
                src={avatarUrl || 'https://images.unsplash.com/photo-1535713875002-d1d0cf377fde?w=150'}
                alt="Profile Preview"
                className="h-16 w-16 rounded-full object-cover border border-border"
              />
              <div className="text-xs text-text-muted">
                Profile picture preview. Enter an Unsplash or static image URL below to update it.
              </div>
            </div>

            <Input
              type="text"
              label="Display Name"
              value={name}
              onChange={(e) => setName(e.target.value)}
              required
            />

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
