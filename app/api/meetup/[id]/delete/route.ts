import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request, params: { params: { id?: string } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  try {
    await prisma.meetup.delete({
      where: { id: params.params.id, userId },
    });
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.error();
  }
}
