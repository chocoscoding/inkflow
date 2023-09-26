import prisma from "@/app/libs/prismadb";

export default async function searchMeetups(searchQuery: string) {
  try {
    const rawAggregateResult = (await prisma.meetup.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "meetupSearch",
            text: {
              query: searchQuery,
              path: "title",
              fuzzy: {
                maxEdits: 2,
                maxExpansions: 50,
              },
            },
          },
        },
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
        { $limit: 75 },
        {
          $project: {
            _id: 0,
            id: { $toString: "$_id" },
            title: true,
            tags: true,
            coverImage: true,
            createdAt: { $toString: "$createdAt" },
            views: true,
            date: true,
            time: true,
            owner: {
              id: { $toString: "$owner._id" },
              username: "$owner.username",
              image: "$owner.image",
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
