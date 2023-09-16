import { GroupPageType } from "@/app/types/client";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request, params: GroupPageType) {
  const urlParts = new URL(request.url);
  const searchParams = urlParts.searchParams;
  const cursorId = searchParams.get("cursor");

  if (!cursorId) return NextResponse.error();
  try {
    const meetups = await prisma.meetup.findMany({
      orderBy: {
        createdAt: "desc",
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
      skip: 1,
      take: 24,
      cursor: {
        id: cursorId,
      },
    });
    if (meetups.length === 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };
    const lastPostInResults: any = meetups[meetups.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.meetup.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      skip: 1, // Do not include the cursor itself in the query posts.
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: meetups,
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
