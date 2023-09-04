import { notFound } from "next/navigation";
import EditClient from "./EditClient";
import getGroupsUserFollow from "@/app/actions/Group/getGroupsUserFollow";

const page = async ({ params }: { params: { contentType: string; id: string } }) => {
  const groups_User_Follows = await getGroupsUserFollow();

  if (params.contentType !== "post" && params.contentType !== "interviews" && params.contentType !== "meetups") {
    notFound();
  }

  return (
    <div className="appScreen flex-center">
      <EditClient guf={groups_User_Follows} />
    </div>
  );
};

export default page;
