import { notFound } from "next/navigation";
import EditClient from "./EditClient";
import getGroupsUserFollow from "@/app/actions/Group/getGroupsUserFollow";
import { capitalizeFirstLetter } from "@/app/libs/helper";
import { NewCreationTypes } from "@/app/types/client";
import getEditableContentInfo from "@/app/actions/getEditableContentInfo";
import { getServerSession } from "next-auth";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

const page = async ({ params }: { params: { contentType: string; id: string } }) => {
  const session = await getServerSession(authOptions);
  const { id } = params;
  if (!session?.user.id)
    return (
      <div className="appScreen flex-center">
        <p>User not logged in</p>
      </div>
    );
  if (params.contentType !== "post" && params.contentType !== "interview" && params.contentType !== "meetup") {
    notFound();
  }
  const contentType = capitalizeFirstLetter(params.contentType) as NewCreationTypes;
  const [groups_User_Follows, data] = await Promise.all([getGroupsUserFollow(), getEditableContentInfo({ contentId: id, contentType })]);
  if (!data) {
    return (
      <div className="appScreen flex-center">
        <p>{`${contentType} not found`}</p>
      </div>
    );
  }
  return (
    <div className="appScreen flex-center">
      <EditClient
        contentType={contentType}
        guf={groups_User_Follows}
        data={data}
      />
    </div>
  );
};

export default page;
