import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request, params: { params: { id?: string } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const newData = await request.json();
  if (!userId || userId !== params.params.id) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  try {
    await prisma.user.update({
      where: { id: userId },
      data: newData,
    });
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
