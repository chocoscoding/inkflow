import prisma from "@/app/libs/prismadb";
import { OnePostComponentType } from "@/app/types/client";

export default async function searchPosts(searchQuery: string): Promise<OnePostComponentType[]> {
  try {
    const rawAggregateResult = (await prisma.post.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "postsearch",
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
            _id: 0,
            id: { $toString: "$_id" },
            title: 1,
            tags: 1,
            coverImage: 1,
            createdAt: { $toString: "$createdAt" },
            views: 1,
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
