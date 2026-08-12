import { NextResponse } from 'next/server';
import { prisma, isDbConnected } from '@/../utils/prisma';

export async function GET() {
	try {
		if (!(await isDbConnected())) {
			return NextResponse.json({ offline: true });
		}

		const dbGroups = await prisma.group.findMany({
			include: {
				members: true,
			},
		});

		const formattedGroups = dbGroups.map((g) => ({
			id: g.id,
			name: g.name,
			description: g.description,
			subject: g.subject,
			meetingFrequency: g.meetingFrequency,
			minMembers: g.minMembers,
			maxMembers: g.maxMembers,
			isPrivate: g.isPrivate,
			profanityFilter: g.profanityFilter,
			leaderId: g.leaderId,
			memberIds: g.members.map((m) => m.userId),
		}));

		return NextResponse.json({ groups: formattedGroups });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error('Groups GET Error:', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function POST(req: Request) {
	try {
		const {
			name,
			description,
			subject,
			meetingFrequency,
			minMembers,
			maxMembers,
			leaderId,
		} = await req.json();

		if (!(await isDbConnected())) {
			return NextResponse.json({ offline: true });
		}

		// Create Group
		const newGroup = await prisma.group.create({
			data: {
				name,
				description,
				subject,
				meetingFrequency,
				minMembers: Number(minMembers),
				maxMembers: Number(maxMembers),
				isPrivate: false,
				profanityFilter: false,
				leaderId,
				members: {
					create: {
						userId: leaderId,
					},
				},
			},
			include: {
				members: true,
			},
		});

		const formatted = {
			id: newGroup.id,
			name: newGroup.name,
			description: newGroup.description,
			subject: newGroup.subject,
			meetingFrequency: newGroup.meetingFrequency,
			minMembers: newGroup.minMembers,
			maxMembers: newGroup.maxMembers,
			isPrivate: newGroup.isPrivate,
			profanityFilter: newGroup.profanityFilter,
			leaderId: newGroup.leaderId,
			memberIds: newGroup.members.map((m) => m.userId),
		};

		return NextResponse.json({ success: true, group: formatted });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error('Groups POST Error:', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}

export async function PUT(req: Request) {
	try {
		const body = await req.json();
		const {
			groupId,
			name,
			description,
			meetingFrequency,
			isPrivate,
			profanityFilter,
			kickUserId,
			deleteLinkId,
			deleteFileId,
		} = body;

		if (!groupId) {
			return NextResponse.json(
				{ error: 'Missing groupId' },
				{ status: 400 },
			);
		}

		if (!(await isDbConnected())) {
			return NextResponse.json({ offline: true });
		}

		// 1. Kick user if requested
		if (kickUserId) {
			await prisma.groupMember.deleteMany({
				where: {
					groupId,
					userId: kickUserId,
				},
			});
		}

		// 2. Delete shared link / file if requested (FeedMessage)
		if (deleteLinkId || deleteFileId) {
			const messageId = deleteLinkId || deleteFileId;
			await prisma.feedMessage.deleteMany({
				where: {
					id: messageId,
					groupId,
				},
			});
		}

		// 3. Update basic settings
		const updatedGroup = await prisma.group.update({
			where: { id: groupId },
			data: {
				name: name !== undefined ? name : undefined,
				description:
					description !== undefined ? description : undefined,
				meetingFrequency:
					meetingFrequency !== undefined
						? meetingFrequency
						: undefined,
				isPrivate:
					isPrivate !== undefined ? Boolean(isPrivate) : undefined,
				profanityFilter:
					profanityFilter !== undefined
						? Boolean(profanityFilter)
						: undefined,
			},
			include: {
				members: true,
			},
		});

		const formatted = {
			id: updatedGroup.id,
			name: updatedGroup.name,
			description: updatedGroup.description,
			subject: updatedGroup.subject,
			meetingFrequency: updatedGroup.meetingFrequency,
			minMembers: updatedGroup.minMembers,
			maxMembers: updatedGroup.maxMembers,
			isPrivate: updatedGroup.isPrivate,
			profanityFilter: updatedGroup.profanityFilter,
			leaderId: updatedGroup.leaderId,
			memberIds: updatedGroup.members.map((m) => m.userId),
		};

		return NextResponse.json({ success: true, group: formatted });
		// eslint-disable-next-line @typescript-eslint/no-explicit-any
	} catch (error: any) {
		console.error('Groups PUT Error:', error);
		return NextResponse.json({ error: error.message }, { status: 500 });
	}
}
