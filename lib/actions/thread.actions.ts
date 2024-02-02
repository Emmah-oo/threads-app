"use server";

import { connectToDB } from "../mongoose";
import Thread from "../models/thread.model";
import User from "../models/user.model";
import { revalidatePath } from "next/cache";
interface Params {
  text: string;
  author?: string;
  communityId: string | null;
  path: string;
}

export async function createThread({
  text,
  author,
  communityId,
  path,
}: Params) {
  try {
    connectToDB();
    const createdThread = await Thread.create({
      text,
      author,
      community: null,
    });

    //Update user model
    await User.findByIdAndUpdate(author, {
      $push: { threads: createdThread._id },
    });
  } catch (error: any) {
    throw new Error(`Failed to post thread ${error.message}`);
  }

  revalidatePath(path);
}

export async function fetchThreads(pageNumber = 1, pageSize = 20) {
  connectToDB();

  //Calculate the number of threads to skip
  const skipAmount = (pageNumber - 1) * pageSize;

  //Fetch threads with no parents
  const ThreadQuery = Thread.findOne({ parentId: { $in: [null, undefined] } })
    .sort({ createdAt: "desc" })
    .skip(skipAmount)
    .limit(pageSize)
    .populate({ path: "author", model: User })
    .populate({
      path: "children",
      populate: {
        path: "author",
        model: User,
        select: "_id name parentId image",
      },
    });

  const totalPostsCount = await Thread.countDocuments({
    parentId: { $in: [null, undefined] },
  });

  const threads = await ThreadQuery.exec();

  const isNext = totalPostsCount > skipAmount + threads.length;

  return { threads, isNext };
}
