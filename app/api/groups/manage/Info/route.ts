import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
export async function POST(request: Request) {
  const { groupId, name, coverImage } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" });
  const dataToUpdate: { coverImage?: string; name?: string } = {};

  if (coverImage) {
    dataToUpdate.coverImage = coverImage;
  }

  if (name) {
    dataToUpdate.name = name;
  }
  try {
    await prisma.group.update({
      where: {
        id: groupId,
        admin: { has: userId },
      },
      data: dataToUpdate,
    });
  } catch (error) {}
}
