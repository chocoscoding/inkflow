import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";

export default async function getOneProfileInterviews({ profileId, page }: { page: number; profileId: string }) {
  const paginationAmount = 30;
  let id = profileId;
  if (profileId === "me") {
    const session = await getServerSession(authOptions);
    const userId = session?.user.id;
    if (!userId) return { data: [], page, error: true };
    id = userId;
  }
  try {
    const Interviews = await prisma.interview.findMany({
      where: {
        userId: id,
      },
      take: paginationAmount,
      skip: (page - 1) * paginationAmount,
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        revenue: true,
        coverImage: true,
        createdAt: true,
        platform: true,
        businessType: true,
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });
    return { data: Interviews, page };
  } catch (error) {
    return { data: [], page };
  }
}
