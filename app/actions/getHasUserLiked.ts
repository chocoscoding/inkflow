import prisma from "@/app/libs/prismadb";
import getCurrentUser from "./getCurrentUser";
interface ParamsType {
  id?: string;
}
export default async function getHasUserLiked(params: ParamsType) {
  if (!params.id) return null;
  try {
    const user = await getCurrentUser(["id"]);
    if (!user) return null;
    const { id: referenceId } = params;
    const likeStatus = await prisma.likes.findFirst({
      where: { referenceId, userId: user.id },
      select: {
        id: true,
      },
    });
    if (!likeStatus) {
      return null;
    }
    return likeStatus;
  } catch (error: any) {
    console.log(error);
    return null;
  }
}
