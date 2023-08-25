import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  const { userId, referenceId, typeOf } = await request.json();
  try {
    const currentUser = await getCurrentUser([]);
    if (!currentUser) return NextResponse.error();
    const likeExists = await prisma.likes.findFirst({
      where: { referenceId: referenceId, userId: currentUser.id },
    });

    if (likeExists !== null) {
      await prisma.likes.delete({
        where: { id: likeExists?.id },
      });
      return NextResponse.json("Successfull");
    }
    const d = await prisma.likes.create({
      data: { userId, referenceId, typeOf },
    });
    
    return NextResponse.json("Successfull");
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
