import prisma from "@/app/libs/prismadb";
export default async function getInterviews() {
  try {
    const interview = await prisma.interview.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        revenue: true,
        coverImage: true,
        createdAt: true,
        platform: true,
        businessType: true,
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });
    return interview;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
