export async function GET(request: Request) {
  return new Response("Hello, Next.js!");
}
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";

export async function POST(request: Request) {
  const { postId } = await request.json();
  if (!postId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 400 });
  try {
    await prisma.post.update({
      where: {
        id: postId,
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
