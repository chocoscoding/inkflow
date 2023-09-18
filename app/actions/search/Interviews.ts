import prisma from "@/app/libs/prismadb";

export default async function searchInterviews(searchQuery: string) {
  try {
    const rawAggregateResult = (await prisma.post.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "interviewsearch",
            text: {
              query: searchQuery,
              path: {
                wildcard: "*",
              },
            },
          },
        },
        { $limit: 75 },
        {
          $project: {
            id: true,
            title: true,
            revenue: true,
            coverImage: true,
            createdAt: true,
            platform: true,
            businessType: true,
            owner: {
              id: true,
              username: true,
              image: true,
            },
          },
        },
      ],
    })) as unknown as any[];
    if (!rawAggregateResult) return [];

    const transformedResult = rawAggregateResult.map((item) => {
      const transformedItem: any = {};
      for (const key in item) {
        if (key === "createdAt") {
          transformedItem[key] = item[key].$date;
        } else if (key === "_id" || key === "userId" || key === "groupId") {
          transformedItem[key] = item[key]?.$oid || null;
        } else {
          transformedItem[key] = item[key];
        }
      }
      return transformedItem;
    });
    return transformedResult;
  } catch (error) {
    console.log(error);
    return [];
  }
}
