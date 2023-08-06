import Link from "next/link";
import { BsTwitter } from "react-icons/bs";

import { MdOutlinePostAdd } from "react-icons/md";
import { navItemsArray } from "./LeftSidebar";
import UserButton from "./UserButton";

type Props = {};

const MiniLeftSidebar = (props: Props) => {
  return (
    <nav
      className={
        "w-70 h-screen mx-0 p-3 pb-6 px-2 text-slate-400  flex flex-col justify-between text-xl items-center" /*  + " border-r border-slate-600" */
      }
    >
      <div
        id="MiniLeftSidebar"
        className="w-full flex flex-col items-center space-y-1 overflow-auto pb-14"
      >
        <Link
          key={"Twitter"}
          href={"/"}
          className="hover-bg-light p-3 rounded-full"
        >
          <BsTwitter className="w-10 h-10 text-sky-500" />
        </Link>
        <ul className="flex flex-col items-center">
          {navItemsArray.map((item) => (
            <li key={item.title} id={item.title}>
              <Link
                href={`/${item.title.toLocaleLowerCase()}`}
                className="flex items-center hover-bg-light p-4 rounded-full mx-auto"
              >
                <item.icon
                  className={
                    "w-8 h-8 " + (item.title === "explore" && "text-BRAND")
                  }
                />
              </Link>
            </li>
          ))}
        </ul>
        <div className="py-3"></div>
        <button className="sky-button-styling">
          <MdOutlinePostAdd className="w-9 h-9" />
        </button>
      </div>
      <div className="pt-4">
        <UserButton />
      </div>
    </nav>
  );
};

export default MiniLeftSidebar;
