import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
export default async function getGroupPosts(groupId: string) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!groupId) return [];
  try {
    const posts = await prisma.post.findMany({
      where: { groupId },
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
    return posts;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
