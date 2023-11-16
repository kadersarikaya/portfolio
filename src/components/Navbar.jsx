"use client";
import Link from "next/link";
import React, { useState } from "react";

const Navbar = () => {
  const [menuOpen, setMenuOpen] = useState(false);

  const toggleMenu = () => {
    setMenuOpen(!menuOpen);
  };

  const closeMenu = () => {
    setMenuOpen(false);
  };

  return (
    <nav className="px-4 mx-auto py-6">
      <div className="flex items-center justify-between">
        <div className="font-semibold opacity-60 text-3xl">
          <Link href="/">
            kader.
          </Link>
        </div>
        <div className="hidden lg:flex space-x-4">
          <Link href="/">
            <div className="text-slate-300 text-lg font-medium cursor-pointer">
              About
            </div>
          </Link>
          <Link href="/projects">
            <div className="text-slate-300 text-lg font-medium cursor-pointer">
              Projects
            </div>
          </Link>
          <Link href="/blog">
            <div className="text-slate-300 text-lg font-medium cursor-pointer">
              Blog
            </div>
          </Link>
        </div>
        <div className="lg:hidden">
          <button
            onClick={toggleMenu}
            className="text-3xl opacity-60 cursor-pointer text-white focus:outline-none"
          >
            &#9776;
          </button>
        </div>
      </div>
      {menuOpen && (
        <div className="lg:hidden fixed inset-0 bg-black bg-opacity-50 z-50 flex items-end justify-center">
          <div className="bg-white p-8 w-full rounded-t-lg">
            <div onClick={closeMenu} className="text-3xl cursor-pointer absolute top-4 right-4">
              &#10006;
            </div>
            <div>
              <Link href="/">
                <div className="text-slate-300 text-lg font-medium cursor-pointer" onClick={closeMenu}>
                  About
                </div>
              </Link>
            </div>
            <div>
              <Link href="/projects">
                <div className="text-slate-300 text-lg font-medium cursor-pointer" onClick={closeMenu}>
                  Projects
                </div>
              </Link>
            </div>
            <div>
              <Link href="/blog">
                <div className="text-slate-300 text-lg font-medium cursor-pointer" onClick={closeMenu}>
                  Blog
                </div>
              </Link>
            </div>
          </div>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
