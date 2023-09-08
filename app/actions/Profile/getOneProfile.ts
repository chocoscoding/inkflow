import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
export default async function getOneProfile(userId?: string | "me") {
  try {
    let tempUserId;
    if (!userId) return null;
    if (userId == "me") {
      const session = await getServerSession(authOptions);
      tempUserId = session?.user.id;
    }
    const profile = await prisma.user.findUnique({
      where: { id: tempUserId || userId },
      select: {
        id: true,
        image: true,
        username: true,
        occupation: true,
        socailLink: true,
        bio: true,
        createdAt: true,
      },
    });
    return profile;
  } catch (error: any) {
    return null;
  }
}
