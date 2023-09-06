import prisma from "@/app/libs/prismadb";
import { ContentExtension } from "../types/client";
import { Interview } from "@prisma/client";
interface ParamsType {
  id: string;
}
export default async function getOneInterview(params: ParamsType, customParams?: {}): Promise<(Interview & ContentExtension) | null> {
  try {
    const title = decodeURIComponent(params.id);

    const oneInterview = await prisma.interview.findUnique({
      where: { title },
      ...(customParams ? { select: customParams } : {}),
      ...(!customParams
        ? {
            include: {
              _count: {
                select: {
                  likes: {
                    where: { typeOf: "Interviews" },
                  },
                  comments: {
                    where: {},
                  },
                },
              },
              group: true,
              owner: {
                select: {
                  id: true,
                  username: true,
                  image: true,
                  interviews: {
                    select: {
                      id: true,
                      title: true,
                    },
                    orderBy: { createdAt: "desc" },
                    take: 3,
                    where: {
                      title: { not: title },
                    },
                  },
                },
              },
            },
          }
        : {}),
    });
    if (!oneInterview) {
      return null;
    }
    return oneInterview as unknown as Interview & ContentExtension;
  } catch (error: any) {
    console.log(error.message);
    return null;
  }
}
