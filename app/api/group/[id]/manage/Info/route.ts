import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";
export async function POST(request: Request, params: GroupPageType) {
  const groupId = params.params.id;
  const { name, coverImage } = await request.json();
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ message: "User not authenticated" }, { status: 400 });
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
    return NextResponse.json({ message: "Info updated successfully" });
  } catch (error) {
    console.log(error);

    return NextResponse.error();
  }
}
