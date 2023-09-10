import React from "react";
import ProfileClient from "./ProfileClient";
import getOneProfile from "@/app/actions/Profile/getOneProfile";

const page = async () => {
  const profile = await getOneProfile('me');
  if (!profile || typeof profile === 'string')
    return (
      <div className="border-l border-secondary-30 md3:border-none w-full">
        <p>No Profile found</p>
      </div>
    );
  return (
    <div className="border-l border-secondary-30 md3:border-none w-full">
      <ProfileClient profileData={profile}/>
    </div>
  );
};

export default page;
