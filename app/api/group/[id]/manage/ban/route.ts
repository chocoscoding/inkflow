import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";

export async function POST(request: Request, params: GroupPageType) {
  const groupId = params.params.id;
  const { actionType, memberId }: { actionType: "Ban" | "Unban"; memberId: string } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
  try {
    const isCurrentUserAdmin = await prisma.group.findFirst({
      where: {
        id: groupId,
        admin: { has: userId },
      },
      select: { id: true },
    });
    if (!isCurrentUserAdmin) return NextResponse.json({ error: "User not admin" }, { status: 400 });
    if(isCurrentUserAdmin.id === userId) return NextResponse.json({ error: "Cant perform this action on admin" }, { status: 401 });
    if (actionType === "Ban") {
      await prisma.bannedUser.create({
        data: {
          userId: memberId,
          groupId,
        },
      });
      return NextResponse.json({ message: "User banned successfully" });
    } else {
      await prisma.bannedUser.deleteMany({
        where: {
          userId: memberId,
          groupId,
        },
      });
      return NextResponse.json({ message: "User unbanned successfully" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
