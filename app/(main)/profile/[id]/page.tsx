import Checkbox from "@/app/components/Checkbox";
import { Arrow1, ArrowDown } from "@/app/components/Icons";
import React, { FC } from "react";
import ProfileClient from "./ProfileClient";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";
import { redirect } from "next/navigation";
import UserInfo from "./UserInfo";
import getOneProfile from "@/app/actions/Profile/getOneProfile";
interface ProfilePageType {
  params: { id?: string };
}
const Page: FC<ProfilePageType> = async ({ params }) => {
  const session = await getServerSession(authOptions);
  //if the userid is equals to the current page userid params... redirect to '/profile/me'
  if (session?.user.id === params.id) redirect("/profile/me");

  const profile = await getOneProfile(params.id);
  if (!profile)
    return (
      <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
        <div className="w-full flex md1:flex-wrap gap-4">
          <p>No user found</p>
        </div>
      </main>
    );
  return (
    <main className="appScreen p-6 xl1:p-2 max-w-[1600px] m-auto">
      <div className="w-full flex md1:flex-wrap gap-4">
        <UserInfo {...profile}/>
        <ProfileClient />
      </div>
    </main>
  );
};

export default Page;
