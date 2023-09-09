import { OneInterviewsType } from "@/app/types/client";
import React, { FC, useState } from "react";
import Interview from "../../interviews/Interview";

const Interviews: FC<{ data: OneInterviewsType[] | null }> = ({ data }) => {
  const [interviews, setInterviews] = useState(data);
  if (!interviews || interviews.length < 1) return <p>No content found</p>;
  return (
    <>
      {interviews.map((interview, i) => (
        <Interview
          {...interview}
          key={`interview__${i}`}
        />
      ))}
    </>
  );
};

export default Interviews;
