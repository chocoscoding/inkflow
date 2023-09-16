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
    const userId = session?.user.id;
    const { id: referenceId, contentType } = params;
    if (!referenceId) return [];
    const comments = await prisma.comment.findMany({
      where: { referenceId, contentType },
      take: 30,
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

    if (comments.length == 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };

    const lastPostInResults: any = comments[comments.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.comment.findMany({
      where: { referenceId, contentType },
      take: 1,
      skip: 1, // Do not include the cursor itself in the query comments.
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: comments,
      metaData: {
        newCursor: cursor,
        hasMore: nextPage.length > 0,
      },
    };
    return finalData;
  } catch (error: any) {
    console.log(error);
    return {
      data: [],
      metaData: null,
    };
  }
}
