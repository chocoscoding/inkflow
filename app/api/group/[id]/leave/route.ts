import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import { NextResponse } from "next/server";
import prisma from "@/app/libs/prismadb";
import { GroupPageType } from "@/app/types/client";

export async function POST(request: Request, params: GroupPageType) {
  const groupId = params.params.id;
  if (!groupId) return NextResponse.error();
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });
  try {
    const userGroupRelationToDelete = await prisma.userGroupRelation.findFirst({
      where: {
        userId,
        groupId,
        NOT: {
          group: {
            admin: {
              has: userId, // Replace with the actual value you want to check against
            },
          },
        },
      },
    });

    if (userGroupRelationToDelete) {
      // Delete the record using the delete method
      const deleteResult = await prisma.userGroupRelation.delete({
        where: {
          id: userGroupRelationToDelete.id,
        },
      });
      return NextResponse.json({ groupId });
    } else {
      return NextResponse.error();
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
