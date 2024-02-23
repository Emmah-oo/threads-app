import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";

import { fetchUser } from "@/lib/actions/user.actions";

const page = async () => {
  const user = await currentUser();

  //if no logged in user redirect
  if (!user) return null;

  const userInfo = await fetchUser(user.id);
  //redirect to oboarding if the user hasn't completed the onboarding process
  if (!userInfo?.onboarded) redirect("/onboarding");
  return (
    <section>
      <h1 className="text-white mb-10">Activity</h1>
    </section>
  );
};

export default page;
