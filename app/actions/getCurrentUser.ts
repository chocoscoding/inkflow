import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import prisma from "@/app/libs/prismadb";
import { User } from "@prisma/client";
import { SafeUser2 } from "../types";

export async function getSession() {
  return await getServerSession(authOptions);
}

export default async function getCurrentUser(keysToReturn: string[]) {
  try {
    //check if some specific keys are wanted
    const selectObject: Record<string, boolean> = {};
    if (keysToReturn && keysToReturn.length > 0) {
      keysToReturn.forEach((key) => {
        selectObject[key] = true;
      });
    }
    const session = await getSession();
    if (!session?.user?.email) return null;
    //if user is authenticated
    const currentUser = await prisma.user.findUnique({
      where: {
        email: session.user.email as string,
      },
      ...(keysToReturn.length > 0 ? { select: selectObject } : {}),
    });
    //user is not found
    if (!currentUser) return null;

    //user is found, mutate or dont
    let temporaryUser: SafeUser2 = currentUser;

    if (
      keysToReturn.length === 0 ||
      (keysToReturn.length > 0 && keysToReturn.includes("createdAt") && keysToReturn.includes("updatedAt"))
    ) {
      temporaryUser.createdAt = currentUser.createdAt.toISOString();
      temporaryUser.updatedAt = currentUser.updatedAt.toISOString();
    }
    return temporaryUser;
  } catch (error) {
    return null;
  }
}
