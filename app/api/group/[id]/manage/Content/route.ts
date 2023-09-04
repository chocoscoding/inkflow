export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";

export async function POST(request: Request, params: GroupPageType) {
  const groupId =  params.params.id;
  const { postId } = await request.json();
  if (!postId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
  try {
    await prisma.post.update({
      where: {
        id: postId,
        groupId,
        group: {
          admin: {
            has: userId,
          },
        },
      },
      data: { groupId: null },
    });
    return NextResponse.json({ message: "Post removed successfully" });
  } catch (error) {
    return NextResponse.error();
  }
}
