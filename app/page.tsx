import { allPosts } from "@/.contentlayer/generated";
import AboutIntro from "@/components/AboutIntro";
import LatestPost from "@/components/LatestPost";

export default function Page() {
  return (
    <>
      <AboutIntro />
      <LatestPost max_display={3} posts={allPosts} />
    </>
  );
}
