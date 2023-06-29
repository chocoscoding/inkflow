import getCurrentUser from "@/app/actions/getCurrentUser";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";

export async function POST(request: Request) {
  try {
    const currentUser = await getCurrentUser();

    if (!currentUser) return NextResponse.error();
    const { q1, q2, q3, username: ReqUsername } = await request.json();
    const username = ReqUsername.trim()

    if(!username || username.length < 5 || username.length > 14) return NextResponse.json({status:404, error: "username error"});
    const find = await prisma.user.findFirst({
      where: {
        username: username,
      },
      select: {
        id: true,
      },
    });
    if(find !== null) {
    return NextResponse.json({status:404, error: "username taken"});
    }
     await prisma.user.update({
      where: {
        id: currentUser.id,
      },
      data: {
        username,
        questions: { q1, q2, q3 },
      },
    });
    return NextResponse.json({status:200, msg: ""});
  } catch (error) {
    console.log(error);
  }
}
