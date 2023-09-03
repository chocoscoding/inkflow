import prisma from "@/app/libs/prismadb";
export default async function getGroupJoinRequests(groupId: string) {
  if (!groupId) return null;
  try {
    const groupRequests = await prisma.groupRequest.findMany({
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
    return groupRequests;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
