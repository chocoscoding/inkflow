import HomeNav from "../../components/home/HomeNav";
import Trending from "./Trending";
import Posts from "./Posts";
import Meetups from "./Meetups";
import getPosts from "@/app/actions/getPosts";
import getMiniMeetups from "@/app/actions/getMiniMeetups";
import getTrendingTags from "@/app/actions/getTrendingTags";
import getFollowingPost from "@/app/actions/getFollowingPosts";

export default async function Home() {
  const [posts, miniMeetups,followingPost, trendingData] = await Promise.all([getPosts(), getMiniMeetups(), getFollowingPost(), getTrendingTags()]);
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
            Name="Follow"
            mainText="Following"
            secondaryText="Explore from your favourite person"
            active={false}
          />
        </section>
        <Trending data={trendingData} />
      </div>

      <Posts posts={posts} followingPost={followingPost}/>
      <section className="sticky top-[60px] lg:min-w-[266px] md:min-w-[220px] lg2:hidden h-fit flex flex-col gap-2 w-3/12 shrink-0">
        <Meetups {...miniMeetups} />
      </section>
    </main>
  );
}
