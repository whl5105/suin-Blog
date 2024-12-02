import Link from "next/link";

const AboutIntro = () => {
  return (
    <section className="mt-10 mb-20 space-y-5 ">
      <h2 className="text-2xl font-extrabold tracking-tight sm:text-3xl sm:leading-10 md:text-4xl">
        Suin
      </h2>
      <p className="text-lg">
        Frontend Developer. <br />
        I&apos;m developing using React, Next.js, and TypeScript
      </p>
      <div className="text-gray-500">
        <Link href={`/about`} aria-label={`Read more: "about"`}>
          More about me &rarr;
        </Link>
      </div>
    </section>
  );
};

export default AboutIntro;
