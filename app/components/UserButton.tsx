import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

type Props = {};

const UserButton = (props: Props) => {
  return (
    <>
      <button className="hidden lg:flex w-60 mx-2 mt-4 p-4 px-6 rounded-full hover-bg-light  cursor-pointer  flex-row justify-between items-center">
        <div className="flex truncate space-x-1">
          <CgProfile className="w-11 h-11 overflow-visible" />
          <div className="text-left text-sm max-w-20 truncate">
            <p className="flex font-semibold truncate">CurrentUser</p>
            <p className="flex truncate max-w-20">@CurrentUserCurrentUser</p>
          </div>
        </div>
        <BsThreeDots className="m-0 ml-2" />
      </button>
      <button className="flex lg:hidden mx-auto rounded-full hover-opaque  cursor-pointer flex-row justify-between items-center">
        <CgProfile className="w-10 h-10 overflow-visible" />
      </button>
    </>
  );
};

export default UserButton;
