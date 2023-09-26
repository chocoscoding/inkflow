import { OneInterviewsType, OnePostComponentType } from "@/app/types/client";
import React, { FC } from "react";
import OnePostAndInterview from "./OnePostAndInterview";

const Interviews: FC<{ interviews: OneInterviewsType[] }> = ({ interviews }) => {
  if (interviews.length === 0)
    return (
      <div className="flex flex-col items-center justify-center gap-2">
        <p className="text-lg font-semibold">No interviews found</p>
        <p className="text-sm text-gray-500">Try searching for something else</p>
      </div>
    );
  return (
    <>
      {interviews.map((interview, i) => (
        <OnePostAndInterview
          {...interview}
          key={`interviews_${i}`}
        />
      ))}
    </>
  );
};

export default Interviews;
