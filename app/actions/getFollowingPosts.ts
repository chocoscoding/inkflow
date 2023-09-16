import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";

//post from the users a user is following
export default async function getFollowingPost() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  try {
    const userIds = await prisma.follow.findMany({
      where: { followerId: userId },
      select: {
        userId: true,
      },
    });

    const newUserIds = !userIds ? [] : userIds.map((obj) => obj.userId);
    const post = await prisma.post.findMany({
      where: {
        userId: {
          in: newUserIds,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 24,
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

    if (post.length == 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };

    const lastPostInResults: any = post[post.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.post.findMany({
      where: {
        userId: {
          in: newUserIds,
        },
      },
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      skip: 1, // Do not include the cursor itself in the query post.
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: post,
      metaData: {
        newCursor: cursor,
        hasMore: nextPage.length > 0,
      },
    };
    return finalData;
  } catch (error: any) {
    console.log(error.message);
    return {
      data: [],
      metaData: null,
    };
  }
}
