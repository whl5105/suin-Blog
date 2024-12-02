import type { allPosts, Post } from "@/.contentlayer/generated";
import Link from "next/link";
import { format, parseISO } from "date-fns";

interface Props {
  max_display: number;
  posts: Post[];
}

export default function LatestPost({ max_display, posts }: Props) {
  return (
    <>
      <div className="divide-y divide-gray-200 ">
        <div className="pt-6 pb-3 space-y-2 md:space-y-5 md:pb-5 sm:pb-4">
          <h1 className="text-2xl font-black leading-9 tracking-tight sm:text-3xl md:text-4xl">
            Latest Post
          </h1>
        </div>
        <ul className="divide-y">
          {!posts.length && "No posts found."}
          {posts.slice(0, max_display).map((post) => {
            const { slug, date, title, summary, tags, category } = post;
            return (
              <li key={slug} className="py-12">
                <article>
                  <div>
                    <dl className="pb-3 space-x-2">
                      <dd className="flex text-gray-500 ">
                        <p className="inline-block px-2 py-1.5 mr-2 rounded-lg bg-light-blue text-blue text-sm leading-6">
                          {category}
                        </p>
                        <p className="px-2 py-1.5  text-gray-500 ">
                          <time dateTime={date}>
                            {format(parseISO(post.date), "LLLL d, yyyy")}
                          </time>
                        </p>
                      </dd>
                    </dl>
                    <div className="space-y-5 xl:col-span-3">
                      <div className="space-y-3">
                        {/* title */}
                        <h2 className="text-2xl font-bold leading-8 tracking-tight ">
                          <Link
                            href={slug}
                            className="text-gray-900 dark:text-gray-100"
                          >
                            {title}
                          </Link>
                        </h2>
                        {/* tags */}
                        <div className="flex flex-wrap ">
                          {tags.map((tag: string) => (
                            <div key={tag} className="pr-2 text-blue">
                              <Link href={`/tags/${tag}`}>
                                #{tag.split(" ").join("-")}
                              </Link>
                            </div>
                          ))}
                        </div>
                        {/* summary */}
                        <div className="prose text-gray-500 max-w-none dark:text-gray-400">
                          {summary}
                        </div>
                        {/* Read more */}
                        <div className="pt-2">
                          <Link
                            href={slug}
                            className="text-blue"
                            aria-label={`Read more: "${title}"`}
                          >
                            Read more &rarr;
                          </Link>
                        </div>
                      </div>
                    </div>
                  </div>
                </article>
              </li>
            );
          })}
        </ul>
      </div>
    </>
  );
}
