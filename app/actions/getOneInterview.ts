import prisma from "@/app/libs/prismadb";
interface ParamsType {
  id: string;
}
export default async function getOnePost(params: ParamsType) {
  try {
    const title = decodeURIComponent(params.id);
    const oneInterview = await prisma.interview.findUnique({
      where: { title },
      include: {
        _count: {
          select: {
            likes: {
              where: { typeOf: "Interviews" },
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
            interviews: {
              select: {
                id: true,
                title: true,
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
    if (!oneInterview) {
      return null;
    }
    return oneInterview;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
