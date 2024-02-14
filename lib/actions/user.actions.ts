"use server";

// import { FilterQuery, SortOrder } from "mongoose";
import { revalidatePath } from "next/cache";
import { connectToDB } from "../mongoose";

import User from "../models/user.model";
import Thread from "../models/thread.model";
interface Params {
  userId: string;
  username: string;
  name: string;
  bio: string;
  image: string;
  path: string;
}

export async function updateUser({
  userId,
  bio,
  name,
  path,
  username,
  image,
}: Params): Promise<void> {
  try {
    connectToDB();

    await User.findOneAndUpdate(
      { id: userId },
      {
        username: username.toLowerCase(),
        name,
        bio,
        image,
        onboarded: true,
      },
      { upsert: true }
    );

    if (path === "/profile/edit") {
      revalidatePath(path);
    }
  } catch (error: any) {
    throw new Error(`Failed to create/update user: ${error.message}`);
  }
}

export async function fetchUser(userId: string) {
  try {
    connectToDB();

    //Returns the user based on the userId passed
    return await User.findOne({ userId });
    // .populate({
    //   path: "communities",
    //   model: Community,
    // });
  } catch (error: any) {}
}

export async function fetchUserThreads(userId: string) {
  try {
    connectToDB();

    //Find all threads authored by the user with the userId
    const threads = await User.findOne({ id: userId }).populate({
      path: "threads",
      model: Thread,
      populate: {
        path: "children",
        model: Thread,
        populate: {
          path: "author",
          model: User,
          select: "name image id",
        },
      },
    });
    return threads;
  } catch (error: any) {
    throw new Error(`Failed to fetch threads ${error.message}`);
  }
}
