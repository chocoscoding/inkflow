import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";

export async function POST(request: Request, params: GroupPageType) {
  const groupId =  params.params.id;
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  try {
    await prisma.userGroupRelation.create({
      data: {
        userId,
        groupId,
      },
    });
    return NextResponse.json({ groupId });
  } catch (error) {
    return NextResponse.error();
  }
} 
