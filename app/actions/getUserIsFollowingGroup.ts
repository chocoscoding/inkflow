import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function getUserIsFollowingGroup() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return null;
  try {
    const groups = await prisma.userGroupRelation.findFirst({
      where: { userId: userId as string },
      select: {
        user: {
          select:{
            id: true,

          }
        }
      },
    });
    const userIdString = groups?.user?.id ?? null;
    return userIdString;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
