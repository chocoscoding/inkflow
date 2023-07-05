import Image from "next/image";
import { New, New1 } from "../../components/Icons";
import HomeNav from "../../components/home/HomeNav";
import Meetup from "@/app/components/home/Meetup";
import Post from "@/app/components/home/Post";
import Trending from "./Trending";
import Posts from "./Posts";
import Meetups from "./Meetups";

export default function Home() {
  return (
    <main className="flex w-full p-6 xl1:p-2 max-w-[1600px] m-auto gap-4">
      <div className="sticky top-[60px] w-2/12 min-w-[230px] h-fit flex flex-col gap-2 md2:hidden">
        <section className="flex p-4 rounded-2xl flex-col justify-start items-start gap-3 dark:bg-dark-30">
          <HomeNav
            Name="New"
            mainText="Newest and Recent"
            secondaryText="Find the latest updates"
            active={true}
          />
          <HomeNav
            Name="Popular"
            mainText="Popular of the day"
            secondaryText="The best of today"
            active={false}
          />
          <HomeNav
            Name="Follow"
            mainText="Following"
            secondaryText="Explore from your favourite person"
            active={false}
          />
        </section>
        <Trending />
      </div>

      <Posts />
      <section className="sticky top-[60px] md:min-w-[266px] md1:hidden h-fit flex flex-col gap-2 w-3/12">
        <Meetups />
      </section>
    </main>
  );
}
