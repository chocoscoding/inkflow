import Avatar from "@/app/components/Avatar";
import Link from "next/link";
import MiniNavigation from "./MiniNavigation";
import MainNavigation from "./MainNavigation";

export default async function RootLayout({ children, params }: { children: React.ReactNode; params: { id: string } }) {
  return (
    <div className="appScreen">
      {/* group link */}
      <div className="bg-dark-30 w-full m-auto max-w-[1600px] border-b border-secondary-20 flex gap-4 sm:p-4 p-2 ">
        <Avatar
          size={50}
          className="rounded-md flex-shrink-0 h-fit"
        />
        <Link href={`/groups/${params.id}`}>
          <p className="text-lg font-bold text-secondary-30 md1:text-sm hover:underline">
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Provident eos vero a, at facere iste dolorum, mollitia, delectus
            quidem praesentium laboriosam deleniti beatae rem magnam adipisci culpa ea molestias eum.
          </p>
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
