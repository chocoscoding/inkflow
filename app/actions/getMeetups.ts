import prisma from "@/app/libs/prismadb";
export default async function getMeetups() {

  try {
    const meetup = await prisma.meetup.findMany({
      orderBy: {
        createdAt: "desc",
      },
      select: {
        id: true,
        title: true,
        time: true,
        coverImage: true,
        createdAt: true,
        date: true,
        owner: {
          select: {
            id: true,
            username: true,
            image: true,
          },
        },
      },
    });
    return meetup;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
