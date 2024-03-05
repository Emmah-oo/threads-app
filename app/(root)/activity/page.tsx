import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser, getActivity } from "@/lib/actions/user.actions";
import Link from "next/link";
import Image from "next/image";

const page = async () => {
  const user = await currentUser();

  //if no logged in user redirect
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  //redirect to oboarding if the user hasn't completed the onboarding process
  if (!userInfo?.onboarded) redirect("/onboarding");

  //get activity
  const activity = await getActivity(userInfo._id);
  return (
    <section>
      <h1 className="text-heading2-bold text-light-1 mb-10">Activity</h1>

      <section className="mt-10 flex flex-col gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
              <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                <article className="flex items-center gap-2 rounded-md bg-dark-2 px-7 py-4">
                  <Image
                    src={activity.author.image}
                    alt="Profile Picture"
                    height={20}
                    width={20}
                    className="rounded-full object-contain"
                  />
                  <p className="!text-small-regular text-light-1">
                    <span className="mr-1 text-primary-500">
                      {activity.author.name}
                    </span>
                    {""}
                    replied to your thread
                  </p>
                </article>
              </Link>
            ))}
          </>
        ) : (
          <p className="!text-base-regular text-light-3">No activity yet!</p>
        )}
      </section>
    </section>
  );
};

export default page;
