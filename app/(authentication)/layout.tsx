import { redirect } from "next/navigation";
import getCurrentUser from "../actions/getCurrentUser";
import "../globals.css";
import { Inter } from "next/font/google";

const inter = Inter({ subsets: ["latin"] });

export const metadata = {
  title: "Inkflow",
  description: "Let's start our journey here",
};

export default async function RootLayout({ children }: { children: React.ReactNode }) {
  const currentUser = await getCurrentUser([]);
  if (currentUser?.username) return redirect("/");
  return <div>{children}</div>;
}
