import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

export async function GET(request: Request, params: { params: { username?: string } }) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });

    const find = await prisma.user.findFirst({
      where: {
        username: params.params.username,
      },
      select: {
        id: true,
      },
    });
    if (find) {
      return NextResponse.json({ message: "Username exist" });
    }
    return NextResponse.json({ message: "Username doesnt exist" });
  } catch (error) {
    return NextResponse.error();
  }
}
