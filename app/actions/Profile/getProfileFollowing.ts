import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { FollowingType } from "@/app/types/client";
import { profile } from "console";
export default async function getProfileFollowing({
  profileId,
  responseType,
}: {
  responseType: "count" | "list";
  profileId: string;
}): Promise<number | null | FollowingType[]> {
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
      return count;
    }
    const follwingList = await prisma.follow.findMany({
      where: {
        followerId: id || profileId,
      },
      take: 100,
      select: {
        followingUser: {
          select: {
            username: true,
            id: true,
            image: true,
          },
        },
      },
    });
    return follwingList;
  } catch (error) {
    return null;
  }
}
