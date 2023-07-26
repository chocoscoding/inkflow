import React from "react";

const page = ({ params }: { params: { id: string } }) => {
  return <div>{`group members ${params.id}`}</div>;
};

export default page;
