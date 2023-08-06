import Link from "next/link";
import React from "react";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsTwitter, BsThreeDots } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";
import { CgProfile } from "react-icons/cg";

import { GoBellFill } from "react-icons/go";
import UserSection from "./UserButton";
import { navItemsArray } from "./LeftSidebar";
import UserButton from "./UserButton";
import { MdOutlinePostAdd } from "react-icons/md";

type Props = {};

const MobileNav = (props: Props) => {
  return (
    <nav
      id="MobileNav"
      className="w-full px-2 pr-2.5 mt-auto text-slate-400 flex  justify-evenly items-center py-2 border-t border-slate-600 bg-slate-900"
    >
      {/*  <Link
          key={"Twitter"}
          href={"/"}
          className="hover-bg-light p-2 rounded-full"
        >
          <BsTwitter className="w-8 h-8 text-sky-500" />
        </Link> */}

      {navItemsArray.map(
        (item) =>
          item.title !== "messages" &&
          item.title !== "bookmarks" &&
          item.title !== "profile" && (
            <Link
              key={item.title}
              id={item.title}
              href={`/${item.title.toLocaleLowerCase()}`}
              className="hover-bg-light rounded-full"
            >
              <item.icon
                className={
                  "w-8 h-8 " + (item.title === "explore" && "text-BRAND")
                }
              />
            </Link>
          )
      )}

      <button className=" rounded-full text-center text-BRAND hover-opaque">
        <MdOutlinePostAdd className="w-10 h-10 " />
      </button>

      <UserButton />
    </nav>
  );
};

export default MobileNav;
