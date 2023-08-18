import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
interface ParamsType {
  id: string;
}
export default async function getOnePost(params: ParamsType) {
  try {
    const { id } = params;
    const post = await prisma.post.findUnique({
      where: { id },
      include: {
        _count: {
          select: {
            likes: {
              where: { referenceId: id, typeOf: "Post" },
            },
          },
        },
        comments: true,
        group: true,
      },
    });
    if (!post) {
      return null;
    }
    return post;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
