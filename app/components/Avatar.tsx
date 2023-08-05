import React from "react";
import { CgProfile } from "react-icons/cg";

type Props = {
  size?: number;
};

const Avatar = ({ size = 10 }: Props) => {
  return <CgProfile className={`w-${size}  h-${size}`} />;
};

export default Avatar;
