import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request, params: { params: { id?: string } }) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  const { callType }: { callType: keyof typeof func } = await request.json();
  if (!params.params.id) {
    return NextResponse.error();
  }
  if (params.params.id === userId) {
    return NextResponse.error();
  }
  const func = {
    create: prisma.follow.create({
      data: {
        userId: params.params.id,
        followerId: userId,
      },
    }),
    delete: prisma.follow.deleteMany({
      where: {
        userId: params.params.id,
        followerId: userId,
      },
    }),
  };
  try {
    await func[callType];
    return NextResponse.json({ message: "Success" });
  } catch (error) {
    return NextResponse.error();
  }
}
