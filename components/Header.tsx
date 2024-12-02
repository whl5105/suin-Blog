import siteMetadata from "@/data/siteMetadata";
import Link from "next/link";

const Header = () => {
  return (
    <header>
      <div className="flex items-center justify-between w-full py-10 bg-white ">
        <Link href="/">
          <h1 className="text-2xl font-extrabold">
            {siteMetadata.headerTitle}
          </h1>
        </Link>
        <nav className="flex items-center space-x-4 leading-5 sm:space-x-6">
          <Link href="/posts">Post</Link>
          <Link href="/about">About</Link>
        </nav>
      </div>
    </header>
  );
};

export default Header;
