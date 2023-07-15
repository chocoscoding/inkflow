import Requested from "@/app/components/Groups/Requested";
import Ripple from "@/app/components/Ripple";
import React from "react";

const RequestedClient = () => {
  return (
    <>
      {Array(9)
        .fill(0)
        .map((e, i) => (
          <Requested key={`requested-${i}`} />
        ))}

      <Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 outline-neutral-200 w-7/12 m-auto block my-2">
      <button className="shrink-0 h-8 rounded-full sm1:text-xs outline outline-1 hover:outline-2 md:hover:bg-dark text-gray-400 w-full select-none">
        See more
      </button>
    
      </Ripple>
    </>
  );
};

export default RequestedClient;
