import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request, params: { params: { id?: string } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  const { tags, coverImage, title, body, groupId } = await request.json();
  const updateData = {
    //only data needed to be updated
    ...(tags !== undefined && { tags }),
    ...(coverImage !== undefined && { coverImage }),
    ...(title !== undefined && { title }),
    ...(body !== undefined && { body }),
    ...(groupId !== undefined && { groupId }),
  };

  try {
    await prisma.post.update({
      where: { id: params.params.id, userId },
      data: updateData
    });
    return NextResponse.json({ message: "Success" });
  } catch (error:any) {
    if (error.message.includes("Unique constraint failed")) {
      return NextResponse.json({ error: "Name not unique" }, { status: 400 });
    }
    return NextResponse.error();
  }
}
