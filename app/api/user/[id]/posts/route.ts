import { GroupPageType } from "@/app/types/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request, params: GroupPageType) {
  const paginationAmount = 30;
  const urlParts = new URL(request.url);
  const searchParams = urlParts.searchParams;
  const page = searchParams.get("page") ? ~~searchParams.get("page")! : 1;
  const profileId = params.params.id;
  let id = profileId;
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (profileId === "me") {
    if (!userId) return null;
    id = userId;
  }
  try {
    const Posts = await prisma.post.findMany({
      where: {
        userId: id,
      },
      take: paginationAmount,
      skip: (page - 1) * paginationAmount,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        tags: true,
        coverImage: true,
        createdAt: true,
        views: true,
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
        ...(userId
          ? {
              likes: {
                select: { userId: true },
                where: {
                  userId: userId,
                },
              },
            }
          : {}),
        _count: {
          select: {
            likes: { where: { typeOf: "Post" } },
            comments: { where: {} },
          },
        },
      },
    });
    return NextResponse.json({ data: Posts, page });
  } catch (error: any) {
    console.log(error);
    return NextResponse.error();
  }
}
