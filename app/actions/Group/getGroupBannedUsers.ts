import prisma from "@/app/libs/prismadb";
export default async function getGroupBannedUsers(groupId: string) {
  if (!groupId) return null;
  try {
    const bannedUsers = await prisma.bannedUser.findMany({
      where: { groupId },
      select: {
        user: {
          select: {
            id: true,
            image: true,
            username: true,
          },
        },
      },
    });
    return bannedUsers;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
