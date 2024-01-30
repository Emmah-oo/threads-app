import { currentUser } from "@clerk/nextjs";
import { redirect } from "next/navigation";
import { fetchUser } from "@/lib/actions/user.actions";
import PostThread from "@/components/forms/PostThread";
async function Page() {
  const user = await currentUser();

  //if no logged in user redirect
  if (!user) return null;

  console.log(user.id);

  const userInfo = await fetchUser(user.id);

  //redirect to oboarding if the user hasn't completed the onboarding process
  if (!userInfo?.onboarded) redirect("/onboarding");

  return (
    <>
      <h1 className="text-white text-heading4-medium">Create Thread</h1>
      <PostThread userId={userInfo._id} />
    </>
  );
}

export default Page;
