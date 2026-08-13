'use client';

import React from 'react';
import Link from 'next/link';

export default function Footer() {
	return (
		<footer className="border-t border-border bg-surface-secondary py-8 mt-auto">
			<div className="mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
				<div className="flex flex-col md:flex-row items-center justify-between gap-6">
					<div className="flex flex-col items-center md:items-start text-center md:text-left">
						<span className="text-lg font-bold tracking-tight text-primary">
							AuStudyGroup
						</span>
						<p className="text-xs text-text-muted mt-1">
							Empowering students to find and join study groups
							quickly.
						</p>
					</div>
					<div className="flex flex-col items-center md:items-end gap-3 text-xs text-text-muted">
						<div className="flex flex-wrap justify-center md:justify-end gap-x-5 gap-y-2 font-medium">
							<Link
								href="/"
								className="hover:text-text-primary transition-colors"
							>
								Home
							</Link>
							<Link
								href="/search"
								className="hover:text-text-primary transition-colors"
							>
								Find Groups
							</Link>
							<Link
								href="/groups"
								className="hover:text-text-primary transition-colors"
							>
								My Groups
							</Link>
						</div>
						<div className="text-center md:text-right text-[11px] text-text-muted/80">
							© {new Date().getFullYear()} AuStudyGroup. All rights reserved.
						</div>
					</div>
				</div>
			</div>
		</footer>
	);
}
