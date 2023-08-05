import React from "react";
import { BsSearch } from "react-icons/bs";
import Avatar from "./Avatar";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <aside
      id="rightColumn"
      className="w-[320px] sticky h-full min-h-screen bottom-0 top-0 hidden md:flex flex-col border-l border-slate-600 overflow-y-auto px-2 py-4"
    >
      <section
        id="searchBox on RightSidebar"
        className="w-full flex flex-row-reverse items-center bg-BGCOLOR-TERTIARY rounded-full group focus-within-sky-ring"
      >
        <input
          id="searchBox"
          type="text"
          placeholder="Search Twitter"
          className="outline-none bg-transparent w-full text-lg py-3 pr-4 placeholder:text-SECONDARY peer"
        />
        <label
          htmlFor="searchBox"
          className="grid content-center pl-5 pr-3 text-SECONDARY peer-focus:text-BRAND"
        >
          <BsSearch className="w-5 h-5" />
        </label>
      </section>

      <section
        id="what's trending"
        className="flex flex-col rounded-xl bg-BGCOLOR-SECONDARY mt-4 py-4 "
      >
        <h3 className="font-bold text-xl m-4">What’s trending</h3>
        <div id="wrapper for trending">
          {Array.from({ length: 5 }).map((_, i) => (
            <p
              key={i}
              className="flex justify-between items-center hover-bg-lighter p-4 "
            >
              <span className=" font-bold text-lg truncate">
                #trending{i + 1}trending
              </span>
              <span className="text-md text-BRAND whitespace-nowrap after:content-['posts'] after:ml-1 after:text-SECONDARY">
                35.4k
              </span>
            </p>
          ))}
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </section>

      <section
        id="who to follow"
        className="flex flex-col rounded-xl bg-BGCOLOR-SECONDARY mt-4"
      >
        <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
        <div id="wrapper for users to follow">
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              id="user to follow"
              key={i}
              className="p-4 flex justify-between items-center hover-bg-lighter"
            >
              <div className="flex items-center space-x-2">
                <Avatar />
                <div className="flex flex-col">
                  <p className="font-bold text-PRIMARY">Other User</p>
                  <p className="text-SECONDARY text-xs">@otheruser1232</p>
                </div>
              </div>

              <button className="rounded-full px-6 py-2 bg-SECONDARY text-BGCOLOR-SECONDARY hover:bg-PRIMARY font-semibold">
                Follow
              </button>
            </div>
          ))}
        </div>
      </section>

      <ul className="flex flex-col items-center my-auto">
        <li>Drizzle + Supabase + PostgreSQL</li>
        <li>Next.js</li>

        <li>Learned from Soni Pranjal</li>
        <li> Powered by greybluesea</li>
      </ul>
    </aside>
  );
};

export default RightSidebar;
