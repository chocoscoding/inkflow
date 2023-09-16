import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";

export default async function getOneProfileMeetups({ profileId, page }: { page: number; profileId: string }) {
   const paginationAmount = 30;
  let id = profileId;
  if (profileId === "me") {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId)     return { data: [], page,error:true };
    id = userId;
  }
  try {
    const Meetups = await prisma.meetup.findMany({
      where: {
        userId: id,
      },
      take: paginationAmount,
      skip: (page - 1) * paginationAmount,
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
    return { data: Meetups, page };
  } catch (error) {
    return { data: [], page };
  }
}
