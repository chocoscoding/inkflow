import prisma from "@/app/libs/prismadb";
import { TrendingTags } from "@/app/types/client";

export default async function getTrendingTagsInGroup() {
  try {
    const mostRecurringTags = (await prisma.post.aggregateRaw({
      pipeline: [
        {
          $sort: {
            createdAt: -1, // Sort posts by createdAt field in descending order to get the most recent ones
          },
        },
        {
          $limit: 100, // Get the top 100 most recent posts within the specified group
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
    return mostRecurringTags;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
