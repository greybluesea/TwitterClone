import React from "react";
import { BsThreeDots } from "react-icons/bs";
import { CgProfile } from "react-icons/cg";

type Props = {};

const UserButton = (props: Props) => {
  return (
    <>
      <button className="hidden lg:flex w-60 mx-2 mt-4 py-2 px-6 rounded-full hover-bg-light  cursor-pointer  flex-row justify-between items-center">
        <div className="flex items-center truncate space-x-1">
          <CgProfile className="w-14 h-14" />
          <div className="text-left text-sm max-w-20 truncate">
            <p className="flex font-semibold truncate">CurrentUser</p>
            <p className="flex truncate max-w-20">@CurrentUserCurrentUser</p>
          </div>
        </div>
        <BsThreeDots className="m-0 ml-2" />
      </button>
      <button className="flex lg:hidden rounded-full hover-opaque  cursor-pointer flex-row justify-between items-center">
        <CgProfile className="w-10 h-10" />
      </button>
    </>
  );
};

export default UserButton;
