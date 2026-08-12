import { NextResponse } from 'next/server';
import { prisma, isDbConnected } from '@/../utils/prisma';

export async function POST(req: Request) {
	try {
		const { id, email, name, avatarUrl } = await req.json();
		if (!id || !email) {
			return NextResponse.json(
				{ error: 'Missing required parameters' },
				{ status: 400 },
			);
		}

		if (!(await isDbConnected())) {
			return NextResponse.json({ offline: true });
		}

		// Upsert user details
		const user = await prisma.user.upsert({
			where: { email },
			update: { name, avatarUrl },
			create: { id, email, name, avatarUrl },
		});

		return NextResponse.json({ success: true, user });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error('Auth API Error:', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
