import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { referenceId, userId, body, contentType } = await request.json();

  try {
    const currentUser = await getCurrentUser([]);
    if (!currentUser) return NextResponse.error();
    const newComment = await prisma.comment.create({
      data: {
        userId,
        body,
        referenceId,
        contentType,
      },
    });
    return NextResponse.json(newComment);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
