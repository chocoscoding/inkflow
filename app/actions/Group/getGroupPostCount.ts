import prisma from "@/app/libs/prismadb";
export default async function getGroupPostCount(groupId: string) {

  if (!groupId) return null;
  try {
    const postsCount = await prisma.post.count({
      where: { groupId },
    });

    return postsCount;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
