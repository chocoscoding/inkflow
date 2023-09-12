import { getServerSession } from "next-auth";
import Navigation from "./Navigation";
import { authOptions } from "@/pages/api/auth/[...nextauth]";

export default async function SettingsLayout({ children }: { children: React.ReactNode }) {
  const session = await getServerSession(authOptions);
  if (!session?.user.id)
    return <main className="appScreen p-4 md1:p-3 xl1:p-2 max-w-[1600px] m-auto flex">You need to login to access this page</main>;
  return (
    <main className="appScreen p-4 md1:p-3 xl1:p-2 max-w-[1600px] m-auto flex">
      <Navigation />
      {children}
    </main>
  );
}
