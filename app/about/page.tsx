import { Authors, allAuthors } from "contentlayer/generated";
import AuthorLayout from "@/components/layouts/AuthorLayout";
import { Mdx } from "@/components/mdx-components";

export default function Page() {
  const author = allAuthors.find(
    (author) => author._raw.flattenedPath === "authors/default"
  ) as Authors;

  return (
    <>
      <AuthorLayout content={author}>
        <div>dd</div>
        <Mdx code={author.body.code} />
      </AuthorLayout>
    </>
  );
}
