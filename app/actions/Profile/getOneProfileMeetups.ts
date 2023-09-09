import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";

export default async function getOneProfileMeetups({ profileId, page }: { page: number; profileId: string }) {
  let id = profileId;
  if (profileId === "me") {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId) return null;
    id = userId;
  }
  try {
    const Meetups = await prisma.meetup.findMany({
      where: {
        userId: id,
      },
      take: 50,
      skip: page - 1,
      orderBy: {
        createdAt: "desc",
      },
      include: {
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });
    return Meetups;
  } catch (error) {
    return null;
  }
}
