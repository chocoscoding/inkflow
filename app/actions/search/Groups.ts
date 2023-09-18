import prisma from "@/app/libs/prismadb";

export default async function searchGroups(searchQuery: string) {
  try {
    const rawAggregateResult = (await prisma.group.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "groupsearch",
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
          $lookup: {
            from: "userGroupRelation",
            localField: "id",
            foreignField: "groupId",
            as: "members",
          },
        },
        {
          $project: {
            id: 1,
            name: 1,
            coverImage: 1,
            _count: {
              members: {
                $size: "$members", // Count the number of members
              },
            },
          },
        },
      ],
    })) as unknown as any[];
    if (!rawAggregateResult) return [];

    const transformedResult = rawAggregateResult.map((item) => {
      const transformedItem: any = {};
      for (const key in item) {
        if (key === "_id") {
          transformedItem[key] = item[key].$oid;
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
