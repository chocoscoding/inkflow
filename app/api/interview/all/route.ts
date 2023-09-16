import { GroupPageType } from "@/app/types/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request, params: GroupPageType) {
  const urlParts = new URL(request.url);
  const searchParams = urlParts.searchParams;
  const cursorId = searchParams.get("cursor");
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;

  if (!cursorId) return NextResponse.error();
  try {
    const interviews = await prisma.interview.findMany({
      orderBy: {
        createdAt: "desc",
      },
      skip: 1,
      take: 24,
      cursor: {
        id: cursorId,
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
    if (interviews.length === 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };
    const lastPostInResults: any = interviews[interviews.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.interview.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      skip: 1, // Do not include the cursor itself in the query interviews.
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: interviews,
      metaData: {
        newCursor: cursor,
        hasMore: nextPage.length > 0,
      },
    };
    return NextResponse.json(finalData);
  } catch (error: any) {
    console.log(error);
    return NextResponse.error();
  }
}
