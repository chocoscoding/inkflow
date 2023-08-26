import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";

export default async function getUserGroupRequests() {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return null;
  try {
    const groups = await prisma.groupRequest.findMany({
      where: { userId },
      select: {
        group: {
          select: {
            id: true,
            name: true,
            coverImage: true,
            _count: {
              select: {
                members: true,
              },
            },
          },
        },
      },
    });
    if (!groups) {
      return null;
    }
    return groups;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
