import React from "react";
import Avatar from "./Avatar";

type Props = {};

const UserToFollow = (props: Props) => {
  return (
    <div
      id="user to follow"
      className="p-4 flex justify-between items-center space-x-1 hover-bg-lighter"
    >
      <div>
        <Avatar />
      </div>

      <div className=" flex flex-col justify-center truncate">
        <p className="font-bold leading-5  truncate ">OtherUser OtherUser</p>
        <p className="leading-5  before:content-['@'] truncate">
          otheruser1232 Other User Other User
        </p>
      </div>

      <button className="secondary-button">Follow</button>
    </div>
  );
};

export default UserToFollow;
