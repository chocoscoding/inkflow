import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import Navbar from "../components/Navbar/Navbar";
import "../globals.css";
import Footer from "@/app/components/Navbar/LNavigation";

export const metadata = {
  title: "Inkflow",
  description: "Pour what you have up there👆",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser();

  if (currentUser?.id && !currentUser?.username) return redirect("/welcome");
  return (
    <div className="relative">
      <Navbar currentUser={currentUser} />
      <div className="bg-secondaryBg-20 dark:bg-dark-20 sticky top-[50px] sm1:mb-12">{children}</div>
      <Footer bottom />
    </div>
  );
}
