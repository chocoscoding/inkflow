import prisma from "@/app/libs/prismadb";
export default async function getGroupMembers(groupId: string) {
  if (!groupId) return null;
  try {
    const postsCall = prisma.userGroupRelation.findMany({
      where: { groupId },
      orderBy: {
        createdAt: "desc",
      },
      select: {
        user: {
          select: {
            id: true,
            image: true,
            username: true,
            firstname: true,
            lastname: true,
          },
        },
      },
    });
    const groupInfoCall = prisma.group.findUnique({
      where: { id: groupId },
      select: {
        name: true,
        id: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    });
    const [posts, groupInfo] = await Promise.all([postsCall, groupInfoCall]);
    return { posts, groupInfo };
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
