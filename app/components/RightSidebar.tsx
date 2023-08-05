import React from "react";
import { BsSearch } from "react-icons/bs";
import Avatar from "./Avatar";

type Props = {};

const RightSidebar = (props: Props) => {
  return (
    <aside
      id="rightColumn"
      className="w-[280px] sticky h-full min-h-screen bottom-0 top-0 hidden md:flex flex-col border-l border-slate-600 overflow-y-auto px-2 py-4"
    >
      <section
        id="searchBox on RightSidebar"
        className="w-full flex flex-row-reverse items-center bg-slate-700 rounded-full group "
      >
        <input
          id="searchBox"
          type="text"
          placeholder="Search Twitter"
          className="outline-none bg-transparent w-full  text-lg py-3 pr-4 placeholder:text-slate-400 peer"
        />
        <label
          htmlFor="searchBox"
          className="grid content-center pl-5 pr-3 text-slate-400 peer-focus:text-slate-300"
        >
          <BsSearch className="w-5 h-5" />
        </label>
      </section>

      <section
        id="what's trending"
        className="flex flex-col rounded-xl bg-slate-800 mt-4 py-4 "
      >
        <h3 className="font-bold text-xl m-4">What’s trending</h3>
        <div className="">
          {Array.from({ length: 5 }).map((_, i) => (
            <p
              key={i}
              className="flex justify-between items-center hover-bg-lighter p-4 rounded-full"
            >
              <span className=" font-bold text-lg truncate">
                #trending{i + 1}trending
              </span>
              <span className="text-md whitespace-nowrap">35.4k likes</span>
            </p>
          ))}
        </div>
        <div>
          {Array.from({ length: 4 }).map((_, i) => (
            <div key={i}></div>
          ))}
        </div>
      </section>

      <div className="flex flex-col rounded-xl bg-slate-800 mt-4">
        <h3 className="font-bold text-xl my-4 px-4">Who to follow</h3>
        <div>
          {Array.from({ length: 3 }).map((_, i) => (
            <div
              key={i}
              className="hover:bg-white/10 p-4 flex justify-between items-center last:rounded-b-xl transition duration-200"
            >
              <div className="flex items-center space-x-2">
                <Avatar />
                <div className="flex flex-col">
                  <div className="font-bold text-white">Other User</div>
                  <div className="text-gray-500 text-xs">@otheruser1232</div>
                </div>
              </div>

              <button className="rounded-full px-6 py-2 bg-white text-neutral-950">
                Follow
              </button>
            </div>
          ))}
        </div>
      </div>
    </aside>
  );
};

export default RightSidebar;
