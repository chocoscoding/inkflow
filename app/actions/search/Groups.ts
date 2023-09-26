import prisma from "@/app/libs/prismadb";

export default async function searchGroups(searchQuery: string) {
  try {
    const rawAggregateResult = (await prisma.group.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "groupsearch",
            autocomplete: {
              query: searchQuery,
              path: "name",
            },
          },
        },
        { $limit: 75 },
        {
          $lookup: {
            from: "UserGroupRelation",
            localField: "id",
            foreignField: "groupId",
            as: "members",
          },
        },
        {
          $project: {
            _id: 0,
            id: { $toString: "$_id" },
            name: 1,
            admin: 1,
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

    return rawAggregateResult;
  } catch (error) {
    console.log(error);
    return [];
  }
}
