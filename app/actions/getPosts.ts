import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
export default async function getPosts() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  try {
    const posts = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take:10,
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
    
    if (posts.length == 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };

    const lastPostInResults: any = posts[posts.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.post.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      skip: 1,
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: posts,
      metaData: {
        newCursor: cursor,
        hasMore: nextPage.length > 0,
      },
      error: false
    };
    return finalData;
  } catch (error: any) {
    console.log(error);
    return {
      data: [],
      metaData: null,
      error: true
    };
  }
}
