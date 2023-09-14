import prisma from "@/app/libs/prismadb";
export default async function getMiniMeetups() {
  try {
    const meetup = await prisma.meetup.findMany({
      orderBy: {
        createdAt: "desc",
      },
      take: 4,
      select: {
        id: true,
        title: true,
        date: true,
        tags: true,
      }
    });
    return meetup;
  } catch (error: any) {
    console.log(error.message);
    return [];
  }
}
