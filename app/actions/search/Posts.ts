import prisma from "@/app/libs/prismadb";

export default async function searchPosts(searchQuery: string) {
  try {
    const rawAggregateResult = (await prisma.post.aggregateRaw({
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
        { $limit: 75 },
        {
          $lookup: {
            from: "User",
            localField: "userId",
            foreignField: "_id",
            as: "owner",
          },
        },
        {
          $unwind: "$owner",
        },
        {
          $project: {
            id: 1,
            title: 1,
            tags: 1,
            coverImage: 1,
            createdAt: 1,
            views: 1,
            "owner.id": 1,
            "owner.username": 1,
            "owner.image": 1,
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
