import { GroupPageType } from "@/app/types/client";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function GET(request: Request, params: GroupPageType) {
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
    const Posts = await prisma.interview.findMany({
      where: {
        userId: id,
      },
      take: 30,
      skip: page - 1,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        revenue: true,
        coverImage: true,
        createdAt: true,
        platform: true,
        businessType: true,
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
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
