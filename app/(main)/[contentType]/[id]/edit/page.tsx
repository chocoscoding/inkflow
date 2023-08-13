import { notFound } from "next/navigation";
import EditClient from "./EditClient";

const page = ({ params }: { params: { contentType: string; id: string } }) => {
  if (params.contentType !== "post" && params.contentType !== "interviews" && params.contentType !== "meetups") {
    notFound();
  }

  return (
    <div className="appScreen flex-center">
      <EditClient />
    </div>
  );
};

export default page;
