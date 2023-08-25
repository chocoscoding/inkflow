import getGroupsUserFollow from "@/app/actions/getGroupsUserFollow";
import CreateClient from "./CreateClient";

export const metadata = {
  title: "Inkflow - Create",
  description: "Let's Create something awesome",
};
const page = async () => {
  const groups_User_Follows = await getGroupsUserFollow()
  return (
    <div className="appScreen flex-center">
      <CreateClient guf={groups_User_Follows}/>
    </div>
  );
};

export default page;
