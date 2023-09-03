import Avatar from "@/app/components/Avatar";
import Link from "next/link";
import MiniNavigation from "./MiniNavigation";
import MainNavigation from "./MainNavigation";
import { GroupPageType } from "@/app/types/client";
import { Metadata, ResolvingMetadata } from "next";
import getOneGroupOptional from "@/app/actions/getOneGroupOptional";

export async function generateMetadata({ params }: GroupPageType, parent: ResolvingMetadata): Promise<Metadata> {
  const group = await getOneGroupOptional(params, { name: true });
  if (!group)
    return {
      title: "Group not found",
    };
  return {
    title: group.name + " - Inkflow",
  };
}
export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  const groupInfo = await getOneGroupOptional(params, { name: true, coverImage: true });
  return (
    <div className="appScreen">
      {/* group link */}
      <div className="bg-dark-30 w-full m-auto max-w-[1600px] border-b border-secondary-20 flex gap-4 sm:p-4 p-2 ">
        <Avatar
          src={groupInfo?.coverImage || `/images/placeholder.jpg`}
          size={70}
          className="rounded-md flex-shrink-0 aspect-square"
        />
        <Link href={`/groups/${params.id}`}>
          <p className="text-lg font-bold text-secondary-30 md1:text-sm hover:underline">{groupInfo?.name}</p>
        </Link>
      </div>
      {/* main navigation */}
      <MainNavigation />
      <main className="gap-4 sm:p-4 p-2">
        <div className="relative w-full flex flex-wrap gap-4">
          <MiniNavigation />
          <div className="bg-secondaryBg-20 dark:bg-dark-20 sticky top-[50px] sm1:mb-12 min-h-screen flex-1">{children}</div>
        </div>
      </main>
    </div>
  );
}
