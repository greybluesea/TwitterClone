import React from "react";
import { BsDot, BsThreeDots } from "react-icons/bs";
import Avatar from "./Avatar";

type Props = {};

const TweetPost = (props: Props) => {
  return (
    <>
      <div className="w-full border-b-[0.5px]  border-slate-600 py-2 px-3 flex space-x-2">
        <Avatar />
        <div id="tweetContent" className="flex flex-col w-full">
          <div className="flex items-center w-full justify-between">
            <div className="flex items-center space-x-1 w-full">
              <div className="font-bold">
                {/* {tweet.userProfile.fullName ?? ""} */}
                username
              </div>
              <div className="text-slate-500">
                @{/* {tweet.userProfile.username} */}userHandle
              </div>
              <div className="text-slate-500">
                <BsDot />
              </div>
              <div className="text-slate-500">
                {/*  {dayjs(tweet.tweetDetails.createdAt).fromNow()} */}
                date and time
              </div>
            </div>
            <div>
              <BsThreeDots />
            </div>
          </div>
          <div
            /*  onClick={() => {
            router.push(`/tweet/${tweet.tweetDetails.id}`);
          }} */
            className="w-full cursor-pointer hover:bg-white/5 transition-all"
          >
            {/* {tweet.tweetDetails.text} */} tweetContent
          </div>
          {/* <div className="bg-slate-400 aspect-square w-full h-80 rounded-xl mt-2"></div> */}
          {/*  <div className="flex items-center justify-start space-x-20 mt-2 w-full">
          <ReplyDialog tweet={tweet} repliesCount={repliesCount} />
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
            <AiOutlineRetweet />
          </div>
          <LikeButton
            tweetId={tweet.tweetDetails.id}
            likesCount={likesCount}
            isUserHasLiked={hasLiked}
          />
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
            <IoStatsChart />
          </div>
          <div className="rounded-full hover:bg-white/10 transition duration-200 p-3 cursor-pointer">
            <IoShareOutline />
          </div>
        </div> */}
        </div>
      </div>
    </>
  );
};

export default TweetPost;
