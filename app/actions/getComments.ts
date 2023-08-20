import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
interface ParamsType {
  id?: string;
}
export default async function getComments(params: ParamsType) {
  try {
    const user = await getCurrentUser(["id"]);
    const { id: referenceId } = params;
    if(!referenceId) return []
    const comments = await prisma.comment.findMany({
      where: { referenceId },
      include: {
        _count: {
          select: {
            likes: {
              where: {typeOf: "Comments" },
            },
          },
        },
        likes:
          user !== null
            ? {
                where: { userId: user?.id, typeOf: "Comments" },
                select: {
                  userId: true, 
                },
              }
            : true,
        replies: true,
        user: {
          select: {
            username: true,
            id: true,
            image: true,
          },
        },
      },
    });

    console.log(comments);

    if (!comments) {
      return [];
    }
    return comments;
  } catch (error: any) {
    console.log(error);
    return [];
  }
}
