import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

interface ParamsType {
  tags: string[];
  coverImage?: string;
  title: string;
  body: string;
  groupId?: string;
}
export async function POST(request: Request) {
  const { tags, coverImage, title, body, groupId } = await request.json();

  try {
    const currentUser = await getCurrentUser([]);
    if (!currentUser) return NextResponse.error();
    const post = await prisma.post.create({
      data: {
        userId: currentUser.id,
        tags,
        coverImage,
        title,
        body,
        groupId,
      },
    });
    console.log(post);

    return NextResponse.json(post);
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
