import prisma from "@/app/libs/prismadb";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth/next";
import { EditClientType, NewCreationTypes } from "../types/client";

//get info for editing content
export default async function getEditableContentInfo({
  contentId,
  contentType,
}: {
  contentId: string;
  contentType: NewCreationTypes;
}): Promise<EditClientType["data"] | null> {
  const apiCalls = {
    //for post
    Post: prisma.post.findUnique({
      where: { id: contentId },
      select: {
        id:true,
        title: true,
        body: true,
        tags: true,
        group: true,
        coverImage: true,
        userId: true,
      },
    }),
    //for interview
    Interview: prisma.interview.findUnique({
      where: { id: contentId },
      select: {
        id:true,
        title: true,
        body: true,
        tags: true,
        group: true,
        coverImage: true,
        userId: true,
        revenue: true,
        businessType: true,
        platform: true,
      },
    }),
    //for meetup
    Meetup: prisma.meetup.findUnique({
      where: { id: contentId },
      select: {
        id:true,
        title: true,
        body: true,
        tags: true,
        group: true,
        coverImage: true,
        userId: true,
        date: true,
        time: true,
      },
    }),
  };
  try {
    const data = await apiCalls[contentType];
    return data;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
