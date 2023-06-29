import bcrypt from "bcrypt";
import prisma from "@/app/libs/prismadb";
import { NextResponse } from "next/server";
export async function POST(request: Request) {
  try {
    const { email, firstname, lastname, dob, country, password } = await request.json();

    if (email && firstname && lastname && dob && country && password) {
      const hashedPassword = await bcrypt.hash(password, 12);
      const user = await prisma.user.create({
        data: {
          email,
          firstname,
          lastname,
          dob,
          country,
          hashedPassword,
        },
      });

      return NextResponse.json({ ...user, status: 200, error: "" });
    }
    return NextResponse.json({
      status: 404,
      error: "Properly fill all inputs",
    });
  } catch (error: any) {
    console.log(error);

    if (error.meta.target === "User_email_key") return NextResponse.json({ status: 404, error: "User_email_key" });
    return NextResponse.json({
      status: 404,
      error: "Something went wrong, try again",
    });
  }
}
