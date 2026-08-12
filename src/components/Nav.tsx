'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation';
import { useAppContext } from './AppContext';
import ProfileMenu from './ProfileMenu';
import { FiMenu, FiX } from 'react-icons/fi';
import { motion, AnimatePresence } from 'framer-motion';

export default function Nav() {
  const { currentUser, switchUser } = useAppContext();
  const pathname = usePathname();
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);

  const navLinks = [
    { label: 'Home', href: '/' },
    { label: 'Find Groups', href: '/search' },
    ...(currentUser ? [{ label: 'My Groups', href: '/groups' }] : []),
  ];

  return (
    <nav className="sticky top-0 z-40 w-full border-b border-border bg-surface/80 backdrop-blur-md">
      <div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="flex h-14 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center space-x-2">
            <span className="text-xl font-bold tracking-tight text-primary">
              AuStudyGroup
            </span>
          </Link>

          {/* Center Nav (Desktop) */}
          <div className="hidden md:flex items-center space-x-1">
            {navLinks.map((link) => {
              const active = pathname === link.href;
              return (
                <Link
                  key={link.href}
                  href={link.href}
                  className={`px-3 py-1.5 rounded-lg text-sm font-medium transition-colors ${
                    active
                      ? 'bg-primary-light text-primary'
                      : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                  }`}
                >
                  {link.label}
                </Link>
              );
            })}
          </div>

          {/* Right Section */}
          <div className="flex items-center space-x-3">
            {/* Demo role switcher (Desktop/Tablet) */}
            <div className="hidden sm:flex items-center rounded-lg bg-surface-secondary p-0.5 border border-border text-xs">
              <span className="px-2 text-text-muted font-medium">Demo:</span>
              {(['APPLICANT', 'LEADER', 'GUEST'] as const).map((role) => {
                const isActive = role === 'GUEST' ? !currentUser : currentUser?.role === role;
                return (
                  <button
                    key={role}
                    onClick={() => switchUser(role)}
                    className={`px-2 py-1 rounded-md transition-all capitalize ${
                      isActive
                        ? 'bg-primary text-white font-semibold shadow-sm'
                        : 'text-text-muted hover:text-text-primary'
                    }`}
                  >
                    {role.toLowerCase()}
                  </button>
                );
              })}
            </div>

            {/* Profile Menu */}
            <ProfileMenu />

            {/* Mobile Menu Toggle */}
            <button
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
              className="md:hidden p-1.5 rounded-lg text-text-secondary hover:bg-surface-secondary hover:text-text-primary transition-colors focus:outline-none"
            >
              {mobileMenuOpen ? <FiX size={20} /> : <FiMenu size={20} />}
            </button>
          </div>
        </div>
      </div>

      {/* Mobile Nav Collapse Menu */}
      <AnimatePresence>
        {mobileMenuOpen && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            className="md:hidden border-t border-border bg-surface overflow-hidden"
          >
            <div className="px-4 py-3 space-y-1.5">
              {navLinks.map((link) => {
                const active = pathname === link.href;
                return (
                  <Link
                    key={link.href}
                    href={link.href}
                    onClick={() => setMobileMenuOpen(false)}
                    className={`block px-3 py-2 rounded-lg text-sm font-medium transition-colors ${
                      active
                        ? 'bg-primary-light text-primary'
                        : 'text-text-secondary hover:text-text-primary hover:bg-surface-secondary'
                    }`}
                  >
                    {link.label}
                  </Link>
                );
              })}
              
              {/* Demo role switcher inside mobile menu */}
              <div className="pt-2 border-t border-border mt-2">
                <span className="block text-xs font-semibold text-text-muted uppercase tracking-wider mb-2">
                  Demo Switching Role:
                </span>
                <div className="flex gap-2">
                  {(['APPLICANT', 'LEADER', 'GUEST'] as const).map((role) => {
                    const isActive = role === 'GUEST' ? !currentUser : currentUser?.role === role;
                    return (
                      <button
                        key={role}
                        onClick={() => {
                          switchUser(role);
                          setMobileMenuOpen(false);
                        }}
                        className={`flex-1 py-1.5 rounded-lg text-xs font-medium border text-center transition-all ${
                          isActive
                            ? 'bg-primary text-white border-primary shadow-sm'
                            : 'bg-surface-secondary border-border text-text-secondary'
                        }`}
                      >
                        {role.toLowerCase()}
                      </button>
                    );
                  })}
                </div>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
}
