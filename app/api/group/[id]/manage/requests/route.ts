import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";

export async function POST(request: Request, params: GroupPageType) {
  const groupId = params.params.id;
  const { accept, requestId } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
  try {
    if (accept) {
      await prisma.userGroupRelation.create({
        data: {
          userId,
          groupId,
        },
      });
    }
    await prisma.groupRequest.delete({
      where: { id: requestId },
    });
    return NextResponse.json({ message: `User ${accept ? `Accepted` : "Rejected"} successfully` });
  } catch (error) {
    return NextResponse.error();
  }
}
