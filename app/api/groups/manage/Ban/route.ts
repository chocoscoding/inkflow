import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const { groupId, actionType }: { actionType: "Ban" | "Unban"; groupId: string } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
  try {
    if (actionType === "Ban") {
      await prisma.bannedUser.create({
        data: {
          userId,
          groupId,
        },
      });
      return NextResponse.json({ message: "User banned successfully" });
    } else {
      await prisma.bannedUser.deleteMany({
        where: {
          userId,
          groupId,
        },
      });
      return NextResponse.json({ message: "User unbanned successfully" });
    }
  } catch (error) {
    return NextResponse.error();
  }
}
