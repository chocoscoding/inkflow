import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
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

    const newUserIds = !userIds ? []: userIds.map(obj => obj.userId);
    const post = await prisma.post.findMany({
      where: {
        userId: {
          in: newUserIds,
        },
      },
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
    return post;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
