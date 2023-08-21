import prisma from "@/app/libs/prismadb";
interface ParamsType {
  id: string;
}
export default async function getOnePost(params: ParamsType) {
  try {
    const title = decodeURIComponent(params.id);
    const post = await prisma.post.findUnique({
      where: { title },
      include: {
        _count: {
          select: {
            likes: {
              where: { typeOf: "Post" },
            },
            comments: {
              where: {},
            },
          },
        },
        group: true,
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
            posts: {
              select: {
                id: true,
                title: true,
                tags: true,
              },
              orderBy: { createdAt: "desc" },
              take: 3,
              where: {
                title: { not: title },
              },
            },
          },
        },
      },
    });
    if (!post) {
      return null;
    }
    return post;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
