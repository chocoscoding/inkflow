import prisma from "@/app/libs/prismadb";

export default async function searchMeetups(searchQuery: string) {
  try {
    const rawAggregateResult = (await prisma.meetup.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "postsearch",
            text: {
              query: searchQuery,
              path: {
                wildcard: "*",
              },
            },
          },
        },
        { $limit: 100 },
      ],
    })) as unknown as any[];
    if (!rawAggregateResult) return [];

    const transformedResult = rawAggregateResult.map((item) => {
      const transformedItem: any = {};
      for (const key in item) {
        if (key === "_id" || key === "userId" || key === "groupId" || key === "createdAt") {
          transformedItem[key] = item[key].$oid;
        } else {
          transformedItem[key] = item[key];
        }
      }
      return transformedItem;
    });

    console.log(transformedResult);
  } catch (error) {
    console.log(error);
    return [];
  }
}
