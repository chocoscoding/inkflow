import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
interface ParamsType {
  id: string;
}
export default async function getComments(params: ParamsType) {
  try {
    const { id: referenceId } = params;
    const comments = await prisma.comment.findMany({
      where: { referenceId },
      include: {
        _count: {
          select: {
            likes: {
              where: { referenceId, typeOf: "Comments" },
            },
          },
        },
        replies: true,
      },
    });
    if (!comments) {
      return null;
    }
    return comments;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
