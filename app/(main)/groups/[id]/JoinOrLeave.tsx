import LeaveGroup from "@/app/components/modals/LeaveGroup";
import axios from "axios";
import { useParams, useRouter } from "next/navigation";
import React, { FC, useState } from "react";
import toast from "react-hot-toast";

const JoinOrLeave: FC<{ isUserFollowingGroup: string | null }> = ({ isUserFollowingGroup }) => {
  const params = useParams();
  const { refresh } = useRouter();
  const [leaveModal, setLeaveModal] = useState(false);
  const [isLoading, setIsLoading] = useState(false);

  const joinOrLeaveGroup = async (typeOfAction: "Joining" | "Leaving") => {
    setIsLoading(true);
    const loading = toast.loading(typeOfAction + " " + "group");
    let apiCall: string;
    if (typeOfAction === "Joining") {
      apiCall = `/api/group/${params!.id}/join`;
    } else if (typeOfAction === "Leaving") {
      apiCall = `/api/group/${params!.id}/leave`;
    } else {
      throw new Error("Invalid typeOfAction");
    }

    try {
      const action = await axios.post(apiCall);
      toast.remove(loading);
      if (action.status === 200) {
        setLeaveModal(false);
        toast.success(`Group ${typeOfAction === "Joining" ? "Joined" : "Left"}`);
        refresh();
      } else {
        throw new Error("Something went wrong");
      }
    } catch (error: any) {
      toast.dismiss();
      if (error.message.includes("403")) {
        toast.error("User is not authenticated 🔒");
      } else {
        toast.error("Something went wrong");
      }
    } finally {
      setIsLoading(false);
    }
  };
  return (
    <>
      {isUserFollowingGroup ? (
        <button
          className="rounded-md bg-dark-40 outline outline-1 outline-secondary-40 h-fit py-2 px-4 flex-shrink-0 md:ml-2 cursor-pointer md3:self-end md1:mt-4 md1:w-6/12 md1:ml-[65px]"
          disabled={isLoading}
          onClick={() => setLeaveModal(true)}>
          Leave
        </button>
      ) : (
        <button
          className="rounded-md bg-dark-40 outline outline-1 outline-secondary-40 h-fit py-2 px-4 flex-shrink-0 md:ml-2 cursor-pointer md3:self-end md1:mt-4 md1:w-6/12 md1:ml-[65px]"
          disabled={isLoading}
          onClick={() => {
            joinOrLeaveGroup("Joining");
          }}>
          Join
        </button>
      )}
      <LeaveGroup
        action={joinOrLeaveGroup}
        open={leaveModal}
        setOpen={setLeaveModal}
      />
    </>
  );
};

export default JoinOrLeave;
