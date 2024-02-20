"use server";
import { fetchThreads } from "@/lib/actions/thread.actions";
import React from "react";
import { currentUser } from "@clerk/nextjs";
import ThreadCard from "@/components/cards/ThreadCard";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";

const Page = async () => {
  const user = await currentUser();
  const result = await fetchThreads(1, 30);

  //if no logged in user redirect
  if (!user) return null;

  // console.log(user.id);

  const userInfo = await fetchUser(user.id);

  //redirect to oboarding if the user hasn't completed the onboarding process
  if (!userInfo?.onboarded) redirect("/onboarding");

  // console.log(result);

  return (
    <div className="w-[100%] text-white">
      <section className="mt-9 flex flex-col gap-10">
        {result.threads.length === 0 ? (
          <p className="no-result">No threads to display.</p>
        ) : (
          <>
            {result &&
              result.threads &&
              Array.isArray(result.threads) &&
              result.threads.map((thread) => (
                <ThreadCard
                  key={thread._id}
                  id={thread._id}
                  currentUserId={user?.id || ""}
                  parentId={thread.parentId}
                  content={thread.text}
                  author={thread.author}
                  community={thread.community}
                  createdAt={thread.createdAt}
                  comments={thread.children}
                />
              ))}
          </>
        )}
      </section>
    </div>
  );
};

export default Page;
