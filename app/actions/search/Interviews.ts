import prisma from "@/app/libs/prismadb";
import { OneInterviewsType } from "@/app/types/client";

export default async function searchInterviews(searchQuery: string): Promise<OneInterviewsType[]> {
  try {
    const rawAggregateResult = (await prisma.interview.aggregateRaw({
      pipeline: [
        {
          $search: {
            index: "interviewsearch",
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
            title: true,
            revenue: true,
            coverImage: true,
            createdAt: { $toString: "$createdAt" },
            platform: true,
            businessType: true,
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
