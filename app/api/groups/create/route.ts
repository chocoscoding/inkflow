import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User is not authenticated" }, { status: 403 });

  const { coverImage, name, about } = await request.json();

  try {
    const group = await prisma.group.create({
      data: { about, coverImage, name, admin: [userId] },
    });
    if (group) {
      await prisma.userGroupRelation.create({
        data: { userId, groupId: group.id },
      });
    }
    return NextResponse.json(group);
  } catch (error: any) {
    console.log(error);
    if (error.message.includes("Unique constraint failed")) {
      return NextResponse.json({ error: "Name not unique" }, { status: 400 });
    }
    return NextResponse.error();
  }
}
