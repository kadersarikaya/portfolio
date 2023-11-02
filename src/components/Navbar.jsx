import Link from "next/link";
import React from "react";

const Navbar = () => {
  return (
    <nav className="max-w-4xl mx-auto py-6 h-32 px-4 justify-between flex">
      <div className="font-semibold opacity-60 text-3xl">
        <Link href="/" >
          kader.
        </Link>
      </div>
      <ul className="hidden sm:flex gap-4 text-slate-300 text-lg font-medium" >
        <Link href="/" >
          <li>About</li>
        </Link>
        <Link href="/projects" >
          <li>Projects</li>
        </Link>
        <Link href="/blog" >
          <li>Blog</li>
        </Link>
      </ul>
    </nav>
  )
};

export default Navbar;
