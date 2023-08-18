import WelcomeInfo from "./WelcomeInfo";
import DataFields from "./DataFields";
import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";

const page = async () => {
  const currentUser = await getCurrentUser([]);
  if (!currentUser) return redirect("/auth/signup");
  return (
    <div className="flex w-[100vw] h-[100vh] overflow-hidden bg-red-default">
      <WelcomeInfo />
      <DataFields />
    </div>
  );
};

export default page;
