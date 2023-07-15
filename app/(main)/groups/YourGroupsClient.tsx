import ListGroup from "@/app/components/Groups/ListGroup";
import Ripple from "@/app/components/Ripple";
import React from "react";

const YourGroupsClient = () => {
  return (
    <div className="">
      {Array(30)
        .fill(0)
        .map((e, i) => (
          <ListGroup
            owner={i % 2 === 0}
            key={`group-${i}`}
          />
        ))}
<Ripple containerClassName="outline outline-1 hover:outline-2 md:hover:bg-dark-20 outline-neutral-200 w-7/12 m-auto block my-2">
      <button className="shrink-0 h-8 rounded-full sm1:text-xs outline outline-1 hover:outline-2 md:hover:bg-dark text-gray-400 w-full select-none">
        See more
      </button>
    
      </Ripple>
    </div>
  );
};

export default YourGroupsClient;
