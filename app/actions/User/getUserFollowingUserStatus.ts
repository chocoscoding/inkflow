import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";

export default async function getUserFollowingUserStatus({followerId}:{followerId: string}) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return false;
  if (userId === followerId) return false;
  try {
    const getUserFollowingUserStatus = await prisma.follow.findFirst({
      where: {
        userId: followerId,
        followerId: userId,
      },
    });
    if (getUserFollowingUserStatus) return true;
    return false;
  } catch (error) {
    return false;
  }
}
