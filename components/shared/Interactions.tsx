"use client"
import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";
import { likeThread } from "@/lib/actions/thread.actions";

interface Props {
  userId: {
    _id: string;
    name: string;
    image: string;
  };
  isComment?: boolean;
  comments: {
    author: {
      image: string;
    };
  }[];
  likes: string[];
  id: string;
}

const Interactions = async ({
  isComment,
  likes,
  id,
  comments,
  userId,
}: Props) => {
  const [userIds, setUserIds] = useState<string[]>([]);

  setUserIds((prevIds) => [...prevIds, id, userId._id]);
//   console.log("interactions", JSON.stringify(id));
//   console.log("interactions", userId._id);

  return (
    <div className={`${isComment && "mb-10"} mt-5 flex flex-col gap-3`}>
      <div className="flex gap-3.5">
        <div
          className="flex items-center gap-1"
          //   onClick={() => likeThread(userId._id, id)}
        >
          <Image
            src="/assets/heart-gray.svg"
            alt="heart"
            width={24}
            height={24}
            className="cursor-pointer object-contain"
          />
          <p>{likes?.length}</p>
        </div>
        <Link href={`/thread/${id}`}>
          <div className="flex items-center gap-1">
            <Image
              src="/assets/reply.svg"
              alt="heart"
              width={24}
              height={24}
              className="cursor-pointer object-contain"
            />
            <p>{comments.length}</p>
          </div>
        </Link>
        <Image
          src="/assets/repost.svg"
          alt="heart"
          width={24}
          height={24}
          className="cursor-pointer object-contain"
        />
        <Image
          src="/assets/share.svg"
          alt="heart"
          width={24}
          height={24}
          className="cursor-pointer object-contain"
        />
      </div>

      {isComment && comments.length > 0 && (
        <Link href={`/thread/${id}`}>
          <p className="mt-1 text-subtle-medium text-gray-1">
            {`${comments.length} ${comments.length === 1 ? "reply" : "replies"}`}
          </p>
        </Link>
      )}
    </div>
  );
};

export default Interactions;
