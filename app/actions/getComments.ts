import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
interface ParamsType {
  id?: string;
  contentType: "Post" | "Interview";
}
export default async function getComments(params: ParamsType) {
  try {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;;
    const { id: referenceId, contentType } = params;
    if (!referenceId) return [];
    const comments = await prisma.comment.findMany({
      where: { referenceId, contentType },
      include: {
        _count: {
          select: {
            likes: {
              where: { typeOf: "Comments" },
            },
          },
        },
        likes:
          userId !== null
            ? {
                where: { userId: userId, typeOf: "Comments" },
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

    if (!comments) {
      return [];
    }
    return comments;
  } catch (error: any) {
    console.log(error);
    return [];
  }
}
