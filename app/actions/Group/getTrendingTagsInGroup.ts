import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import { TrendingTags } from "@/app/types/client";

export default async function getTrendingTagsInGroup(groupId?: string) {
  if (!groupId) return null;
  try {
    const mostRecurringTags = (await prisma.post.aggregateRaw({
      pipeline: [
        {
          $match: { groupId: { $oid: groupId } },
        },
        {
          $unwind: "$tags",
        },
        {
          $group: {
            _id: "$tags",
            tag_count: { $sum: 1 }, // Count occurrences of each tag
          },
        },
        {
          $project: {
            name: "$_id",
            tag_count: 1,
            _id: 0, // Exclude _id field
          },
        },
        {
          $sort: {
            tag_count: -1, // Sort in descending order by tag count
          },
        },
        {
          $limit: 10, // Get the top 10 most recurring tags
        },
      ],
    })) as unknown as TrendingTags;
    // if (mostRecurringTags) {
    //   return mostRecurringTags.map((item) => {
    //     return {
    //       tag_count: item.tag_count,
    //       name: item.name,
    //     };
    //   });
    // }
    return mostRecurringTags;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
