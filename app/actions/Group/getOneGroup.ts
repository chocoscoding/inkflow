import prisma from "@/app/libs/prismadb";
interface ParamsType {
  id: string;
}
const MainSelectQuery = {
  id: true,
  name: true,
  about: true,
  coverImage: true,
  admininstrators: {
    select: {
      user: {
        select: {
          id: true,
          username: true,
          image: true,
        },
      },
    },
  },
  members: {
    take: 10,
    select: {
      user: {
        select: {
          image: true,
        },
      },
    },
  },
  _count: {
    select: {
      members: true,
    },
  },
}
export default async function getOneGroup(params: ParamsType) {
  try {
    const post = await prisma.group.findUnique({
      where: { id: params.id },
      select: MainSelectQuery,
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
