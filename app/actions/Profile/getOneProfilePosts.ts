import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";

export default async function getOneProfilePosts({ profileId, page }: { page: number; profileId: string }) {
  const paginationAmount = 30;
  let id = profileId;
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (profileId === "me") {
    if (!userId) return { data: [], page, error: true };
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
    return { data: Posts, page };
  } catch (error) {
    return { data: [], page };
  }
}
