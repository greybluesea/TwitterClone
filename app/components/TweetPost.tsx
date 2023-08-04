import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import Avatar from "./Avatar";
import { AiOutlineRetweet } from "react-icons/ai";
import { IoShareOutline, IoStatsChart } from "react-icons/io5";

type Props = {};

const TweetPost = (props: Props) => {
  return (
    <div
      id="TweetPost"
      className="flex w-full border-b-[0.5px]  border-slate-600 pt-3 pb-4 pl-2 pr-3  space-x-2"
    >
      <div>
        <Avatar />
      </div>
      <div id="TweetContent" className="flex flex-col w-full">
        <section
          id="TweetHeader"
          className="flex items-center w-full justify-between"
        >
          <p className="flex items-center space-x-1 w-full text-slate-500">
            <span id="username" className="font-bold text-slate-300 truncate">
              {/* {tweet.userProfile.fullName ?? ""} */}
              username
            </span>
            <span id="userHandle" className="truncate">
              @{/* {tweet.userProfile.username} */}userHandle
            </span>
            <span id="dot">
              <BsDot />
            </span>
            <span id="datetime">
              {/*  {dayjs(tweet.tweetDetails.createdAt).fromNow()} */}
              datetime
            </span>
          </p>
          <BsThreeDots />
        </section>
        <section
          id="TweetText"
          /*  onClick={() => {
            router.push(`/tweet/${tweet.tweetDetails.id}`);
          }} */
          className="w-full cursor-pointer hover-bg-light"
        >
          {/* {tweet.tweetDetails.text} */} TweetText
        </section>
        <section
          id="image or quote"
          className="w-full bg-slate-400 h-80 rounded-xl mt-3"
        />
        <section
          id="TweetFooter"
          className="w-full flex items-center justify-evenly"
        >
          {/* <ReplyDialog tweet={tweet} repliesCount={repliesCount} /> */}
          <span className="font-sm">reply</span>
          <button className="p-3 rounded-full hover-bg-light ">
            <AiOutlineRetweet />
          </button>
          {/* <LikeButton
            tweetId={tweet.tweetDetails.id}
            likesCount={likesCount}
            isUserHasLiked={hasLiked}
          /> */}{" "}
          <span className="font-sm">like</span>
          <button className="p-3 rounded-full hover-bg-light ">
            <IoStatsChart />
          </button>
          <button className="p-3 rounded-full hover-bg-light ">
            <IoShareOutline />
          </button>
        </section>
      </div>
    </div>
  );
};

export default TweetPost;
