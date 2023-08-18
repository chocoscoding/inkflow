import getCurrentUser from "@/app/actions/getCurrentUser";
import { redirect } from "next/navigation";

export const metadata = {
  description: "Sign in to inkflow",
};

export default async function Layout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser([]);
  if (currentUser) return redirect("/");
  return <div>{children}</div>;
}
