import prisma from "@/app/libs/prismadb";
export default async function getInterviews() {
  try {
    const interviews = await prisma.interview.findMany({
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
    if (interviews.length == 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };

    const lastPostInResults: any = interviews[interviews.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.interview.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      skip: 1, // Do not include the cursor itself in the query interviews.
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: interviews,
      metaData: {
        newCursor: cursor,
        hasMore: nextPage.length > 0,
      },
      error: false,
    };
    return finalData;
  } catch (error: any) {
    console.log(error.message);
    return {
      data: [],
      metaData: null,
      error: true,
    };
  }
}
