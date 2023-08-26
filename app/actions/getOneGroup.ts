import prisma from "@/app/libs/prismadb";
interface ParamsType {
  id: string;
}
export default async function getOneGroup(params: ParamsType) {
  try {
    const post = await prisma.group.findUnique({
      where: { id: params.id },
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
