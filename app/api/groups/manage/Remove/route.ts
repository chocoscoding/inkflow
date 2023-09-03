import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const { groupId, ban } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
  try {
    const removeUser = prisma.userGroupRelation.deleteMany({
      where: {
        userId,
        groupId,
      },
    });
    const action: any = [removeUser];
    if (ban) {
      const banUser = prisma.bannedUser.create({
        data: {
          userId,
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
