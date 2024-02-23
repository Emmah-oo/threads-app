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
      <h1 className="text-white mb-10">Activity</h1>

      <section className="mt-10 flex flex-col gap-5">
        {activity.length > 0 ? (
          <>
            {activity.map((activity) => (
              <Link key={activity._id} href={`/thread/${activity.parentId}`}>
                <article className="activity-card">
                  <Image
                    src={activity.author.image}
                    alt="Profile Picture"
                    height={20}
                    width={20}
                    className="rounded-full object-contain"
                  />
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
