import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { getServerSession } from "next-auth";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
import getCurrentUser from "@/app/actions/getCurrentUser";
import bcrypt from "bcrypt";

export async function POST(request: Request) {
  const session = await getServerSession(authOptions);
  const userId = session?.user.id;
  const { newPass, oldPass } = await request.json();
  if (!userId) return NextResponse.json({ error: "User not authenticated" }, { status: 403 });

  try {
    const userInfo = await getCurrentUser(["hashedPassword", "id"]);
    if (!userInfo) return NextResponse.json({ error: "User not found" }, { status: 404 });

    //user has a password, so update
    if (userInfo.hashedPassword) {
      const isCorrectPassword = await bcrypt.compare(oldPass, userInfo.hashedPassword);
      if (isCorrectPassword) {
        const hashedPassword = await bcrypt.hash(newPass, 12);
        await prisma.user.update({
          where: { id: userInfo.id },
          data: {
            hashedPassword,
          },
        });
        return NextResponse.json({ message: "Success" });
      }
      return NextResponse.json({ error: "Incorrect Password" }, { status: 200 });
    } else {
      //user has no password, create new one
      const hashedPassword = await bcrypt.hash(newPass, 12);
      await prisma.user.update({
        where: { id: userInfo.id },
        data: {
          hashedPassword,
        },
      });
      return NextResponse.json({ message: "Success" });
    }
  } catch (error) {
    console.log(error);
    return NextResponse.error();
  }
}
