import HomeNav from "../../components/home/HomeNav";
import Trending from "./Trending";
import Posts from "./Posts";
import Meetups from "./Meetups";
import getPosts from "@/app/actions/getPosts";
import { OnePost } from "@/app/types/client";
import getMiniMeetups from "@/app/actions/getMiniMeetups";

export default async function Home() {
  const [posts, miniMeetups] = await Promise.all([getPosts(), getMiniMeetups()]);
  const trendingData = [
    { tag_count: 7, name: "TEST" },
    { tag_count: 2, name: "ssa2" },
    { tag_count: 2, name: "JKNKL" },
    { tag_count: 2, name: "JLLL" },
    { tag_count: 2, name: "JLLLKOPK" },
    { tag_count: 2, name: "dsklm" },
    { tag_count: 2, name: "9i" },
    { tag_count: 2, name: "JKNKLJ" },
    { tag_count: 1, name: "JLsL" },
    { tag_count: 1, name: "ue" },
  ];
  return (
    <main className="flex w-full p-6 xl1:p-2 max-w-[1600px] m-auto gap-4">
      <div className="sticky top-[60px] w-2/12 min-w-[230px] lg1:min-w-[200px] h-fit flex flex-col gap-2 md2:hidden shrink-0">
        <section className="flex p-4 lg1:p-2 rounded-2xl flex-col justify-start items-start gap-3 dark:bg-dark-30">
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
        <Trending data={trendingData} />
      </div>

      <Posts posts={posts} />
      <section className="sticky top-[60px] lg:min-w-[266px] md:min-w-[220px] lg2:hidden h-fit flex flex-col gap-2 w-3/12 shrink-0">
        <Meetups {...miniMeetups}/>
      </section>
    </main>
  );
}
