import Link from "next/link";
import { AiFillHome } from "react-icons/ai";
import { BsBookmarkStarFill, BsTwitter } from "react-icons/bs";
import { FaEnvelope, FaMagnifyingGlass, FaUserLarge } from "react-icons/fa6";

import { GoBellFill } from "react-icons/go";
import UserButton from "./UserButton";

export const navItemsArray = [
  {
    title: "Home",
    icon: AiFillHome,
  },
  {
    title: "Explore",
    icon: FaMagnifyingGlass,
  },
  {
    title: "Notifications",
    icon: GoBellFill,
  },
  {
    title: "Messages",
    icon: FaEnvelope,
  },
  {
    title: "Bookmarks",
    icon: BsBookmarkStarFill,
  },
  {
    title: "Profile",
    icon: FaUserLarge,
  },
];

const LeftSidebar = () => {
  return (
    <nav
      className={
        "w-70 h-screen py-4 text-slate-400 flex flex-col justify-between text-xl " /* + " border-r border-slate-600" */
      }
    >
      <div
        id="LeftSidebar"
        className="w-full flex flex-col items-start space-y-1 overflow-hidden"
      >
        <Link
          key={"Twitter"}
          href={"/"}
          className="hover-bg-light p-5 rounded-full ml-2"
        >
          <BsTwitter className="w-12 h-12 text-sky-500" />
        </Link>
        <ul className="flex flex-col">
          {navItemsArray.map((item) => (
            <li key={item.title} id={item.title}>
              <Link
                href={`/${item.title.toLocaleLowerCase()}`}
                className="flex items-center hover-bg-light py-3 px-8 rounded-full "
              >
                <item.icon className="w-9 h-9" />
                <p className="pl-4">{item.title}</p>
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-3"></div>
        <button className="w-60 mx-2 bg-sky-700 p-4 rounded-full text-center hover-opaque text-slate-300 font-semibold">
          Tweet
        </button>
      </div>
      <UserButton />
    </nav>
  );
};

export default LeftSidebar;
