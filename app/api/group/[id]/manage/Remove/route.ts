import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";

export async function POST(request: Request, params: GroupPageType) {
  const groupId = params.params.id;
  const { ban, memberId } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  try {
    const isCurrentUserAdmin = await prisma.group.findFirst({
      where: {
        id: groupId,
        admin: { has: userId },
      },
      select: { id: true },
    });
    if (!isCurrentUserAdmin) return NextResponse.json({ error: "User not admin" }, { status: 400 });
    if (isCurrentUserAdmin.id === userId) return NextResponse.json({ error: "Cant perform this action on admin" }, { status: 401 });
    const removeUser = prisma.userGroupRelation.deleteMany({
      where: {
        userId: memberId,
        groupId,
      },
    });
    const action: any = [removeUser];
    if (ban) {
      const banUser = prisma.bannedUser.create({
        data: {
          userId: memberId,
          groupId,
        },
      });
      action.push(banUser);
    }
    await Promise.all(action);
    return NextResponse.json({ message: `User removed${ban ? ` and banned` : ``}` });
  } catch (error) {
    return NextResponse.error();
  }
}
