import type { Metadata, Viewport } from 'next';
import { Geist, Geist_Mono } from 'next/font/google';
import './globals.css';
import { AppProvider } from '@/components/AppContext';

export const viewport: Viewport = {
	width: 'device-width',
	initialScale: 1,
	maximumScale: 1,
};

const geistSans = Geist({
	variable: '--font-geist-sans',
	subsets: ['latin'],
});

const geistMono = Geist_Mono({
	variable: '--font-geist-mono',
	subsets: ['latin'],
});

export const metadata: Metadata = {
	title: 'AuStudyGroup - Find & Join Study Groups Quickly',
	description: 'Connect with students, collaborate on subjects, and share resources.',
	metadataBase: new URL('https://austudygroup.edu.au'),
	alternates: {
		canonical: '/',
	},
	openGraph: {
		type: 'website',
		locale: 'en_AU',
		url: 'https://austudygroup.edu.au/',
		siteName: 'AuStudyGroup',
		title: 'AuStudyGroup - Find & Join Study Groups Quickly',
		description: 'Connect with students, collaborate on subjects, and share resources.',
	},
	robots: {
		index: true,
		follow: true,
	},
};

export default function RootLayout({
	children,
}: {
	children: React.ReactNode;
}) {
	return (
		<html
			lang="en"
			className={`${geistSans.variable} ${geistMono.variable} h-full antialiased`}
		>
			<body className="min-h-full flex flex-col bg-background text-foreground font-sans">
				<AppProvider>
					{children}
				</AppProvider>
			</body>
		</html>
	);
}
