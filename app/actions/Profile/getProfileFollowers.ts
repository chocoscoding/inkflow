import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { FollowerType } from "@/app/types/client";
export default async function getProfileFollowers({
  profileId,
  responseType,
}: {
  responseType: "count" | "list";
  profileId: string;
}): Promise<number | null | FollowerType[]> {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  let id;
  if (profileId === "me") {
    if (!userId) return null;
    id = userId;
  }
  try {
    if (responseType === "count") {
      const count = await prisma?.follow.count({
        where: {
          followerId: id || profileId,
        },
      });
      return count || 0;
    }
    const followersList = await prisma.follow.findMany({
      where: {
        followerId: id || profileId,
      },
      select: {
        followerUser: {
          select: {
            username: true,
            id: true,
            image: true,
          },
        },
      },
      take: 100,
    });
    return followersList;
  } catch (error) {
    return null;
  }
}
