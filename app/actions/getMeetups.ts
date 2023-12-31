import prisma from "@/app/libs/prismadb";
export default async function getMeetups() {
  try {
    const meetups = await prisma.meetup.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 24,
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });

    if (meetups.length == 0)
      return {
        data: [],
        metaData: {
          newCursor: null,
          hasMore: false,
        },
      };

    const lastPostInResults: any = meetups[meetups.length - 1];
    const cursor: any = lastPostInResults.id;

    const nextPage = await prisma.meetup.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 1,
      skip: 1, // Do not include the cursor itself in the query meetups.
      cursor: {
        id: cursor,
      },
    });

    const finalData = {
      data: meetups,
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
