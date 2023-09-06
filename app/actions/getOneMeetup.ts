import prisma from "@/app/libs/prismadb";
interface ParamsType {
  id: string;
}
export default async function getOneMeetup(params: ParamsType) {
  try {
    const oneMeetup = await prisma.meetup.findUnique({
      where: { id:params.id },
      include: {
        group: true,
        owner: {
          select: {
            id: true,
            username: true,
          },
        },
      },
    });
    if (!oneMeetup) {
      return null;
    }
    return oneMeetup;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
