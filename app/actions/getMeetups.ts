import prisma from "@/app/libs/prismadb";
export default async function getMeetups() {

  try {
    const meetup = await prisma.meetup.findMany({
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
    return meetup;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
