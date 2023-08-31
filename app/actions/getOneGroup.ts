import prisma from "@/app/libs/prismadb";
interface ParamsType {
  id: string;
}
export default async function getOneGroup(params: ParamsType) {
  try {
    const post = await prisma.group.findUnique({
      where: { id: params.id },
      select: {
        //make id, name , about coverImage, and admin true
        id: true,
        name: true,
        about: true,
        coverImage: true,
        admin: true,
        _count: {
          select: {
            members: true,
          },
        },
      },
    });
    if (!post) {
      return null;
    }
    return post;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
