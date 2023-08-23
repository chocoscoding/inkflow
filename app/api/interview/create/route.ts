import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";

interface ParamsType {
  date: string;
  location: string;
  time: string;
  coverImage?: string;
  title: string;
  body: string;
  groupId?: string;
}
export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  const { coverImage, title, body, groupId, businessType, platform, revenue } = await request.json();

  try {
    const meetup = await prisma.interview.create({
      data: {
        businessType,
        platform,
        revenue,
        userId: userId,
        coverImage,
        title,
        body,
        groupId,
      },
    });

    return NextResponse.json(meetup);
  } catch (error: any) {
    console.log(error.message);

    if (error.message.includes("Unique constraint failed on the constraint")) {
      return NextResponse.json({ error: "Title not unique" }, { status: 400 });
    }
    return NextResponse.error();
  }
}
